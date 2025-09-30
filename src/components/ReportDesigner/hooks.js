import { useState, useCallback, useRef, useEffect } from "react";
import { useReactFlow } from "reactflow";

// Thêm PAGE_SIZES vào hooks.js
const PAGE_SIZES = {
  a4: { width: 794, height: 1123, name: "A4 Portrait" },
  a4Landscape: { width: 1123, height: 794, name: "A4 Landscape" },
  a5: { width: 559, height: 794, name: "A5 Portrait" },
  a5Landscape: { width: 794, height: 559, name: "A5 Landscape" },
  letter: { width: 816, height: 1056, name: "Letter Portrait" },
  letterLandscape: { width: 1056, height: 816, name: "Letter Landscape" },
};

export const usePageConstraints = (pageSize) => {
  const { setViewport } = useReactFlow();
  const pageSizeRef = useRef(PAGE_SIZES[pageSize]);

  // Check if node is within page boundaries
  const isNodeWithinPage = useCallback((node, page) => {
    const nodeRight = node.position.x + (node.style?.width || 0);
    const nodeBottom = node.position.y + (node.style?.height || 0);

    return (
      node.position.x >= 0 &&
      node.position.y >= 0 &&
      nodeRight <= page.width &&
      nodeBottom <= page.height
    );
  }, []);

  // Check if position is within page boundaries
  const isPositionWithinPage = useCallback(
    (position, nodeWidth = 0, nodeHeight = 0) => {
      const page = pageSizeRef.current;
      const right = position.x + nodeWidth;
      const bottom = position.y + nodeHeight;

      return (
        position.x >= 0 &&
        position.y >= 0 &&
        right <= page.width &&
        bottom <= page.height
      );
    },
    []
  );

  // Constrain position to page boundaries
  const constrainToPage = useCallback(
    (position, nodeWidth = 0, nodeHeight = 0) => {
      const page = pageSizeRef.current;
      let newX = position.x;
      let newY = position.y;

      if (newX < 0) newX = 0;
      if (newX + nodeWidth > page.width) newX = page.width - nodeWidth;
      if (newY < 0) newY = 0;
      if (newY + nodeHeight > page.height) newY = page.height - nodeHeight;

      return { x: newX, y: newY };
    },
    []
  );

  // Constrain viewport to page boundaries - FIXED VERSION
  const constrainViewport = useCallback(
    (viewport, containerWidth, containerHeight) => {
      const page = pageSizeRef.current;
      const zoom = viewport.zoom || 1;

      const visibleWidth = containerWidth / zoom;
      const visibleHeight = containerHeight / zoom;

      let x = viewport.x;
      let y = viewport.y;

      // Allow panning when zoomed in - chỉ constrain khi cần thiết
      const maxX = Math.max(0, page.width - visibleWidth);
      const maxY = Math.max(0, page.height - visibleHeight);

      if (visibleWidth >= page.width) {
        // Nếu viewport rộng hơn page, center nó
        x = (page.width - visibleWidth) / 2;
      } else {
        // Nếu viewport nhỏ hơn page, constrain panning
        x = Math.max(-maxX, Math.min(0, x));
      }

      if (visibleHeight >= page.height) {
        // Nếu viewport cao hơn page, center nó
        y = (page.height - visibleHeight) / 2;
      } else {
        // Nếu viewport thấp hơn page, constrain panning
        y = Math.max(-maxY, Math.min(0, y));
      }

      return { x, y, zoom };
    },
    []
  );

  useEffect(() => {
    pageSizeRef.current = PAGE_SIZES[pageSize];

    // Reset viewport khi page size thay đổi
    setTimeout(() => {
      setViewport({ x: 0, y: 0, zoom: 1 }, { duration: 300 });
    }, 100);
  }, [pageSize, setViewport]);

  return {
    isNodeWithinPage,
    isPositionWithinPage,
    constrainToPage,
    constrainViewport,
    pageSizeRef,
  };
};

export const useContainerSize = (pageSize, containerRef) => {
  const [containerSize, setContainerSize] = useState({
    width: PAGE_SIZES[pageSize].width,
    height: PAGE_SIZES[pageSize].height,
  });

  useEffect(() => {
    const updateContainerSize = () => {
      if (containerRef.current) {
        const mainElement = containerRef.current.closest(".designer-main");
        if (mainElement) {
          const mainRect = mainElement.getBoundingClientRect();
          const availableWidth = mainRect.width - 40;
          const availableHeight = mainRect.height - 40;

          const page = PAGE_SIZES[pageSize];
          const scale = Math.min(
            availableWidth / page.width,
            availableHeight / page.height,
            1
          );

          setContainerSize({
            width: page.width * scale,
            height: page.height * scale,
          });
        }
      }
    };

    updateContainerSize();
    window.addEventListener("resize", updateContainerSize);

    return () => window.removeEventListener("resize", updateContainerSize);
  }, [pageSize, containerRef]);

  return containerSize;
};

// Helper functions for node creation
const getNodeType = (tool) => {
  const toolToType = {
    text: "textNode",
    rectangle: "rectangleNode",
    table: "tableNode",
    image: "imageNode",
  };
  return toolToType[tool] || "rectangleNode";
};

const getDefaultData = (tool) => {
  const defaults = {
    text: { label: "New Text", fontSize: 14, fontColor: "#000000" },
    rectangle: {
      label: "New Rectangle",
      backgroundColor: "#ffffff",
      borderColor: "#000000",
      fontColor: "#000000",
      borderWidth: 1,
    },
    table: {
      label: "New Table",
      headerBackground: "#f5f5f5",
      headerColor: "#000000",
    },
    image: { label: "New Image" },
  };
  return defaults[tool] || defaults.rectangle;
};

const getDefaultStyle = (tool) => {
  const styles = {
    text: { width: 150, height: 40 },
    rectangle: { width: 120, height: 60 },
    table: { width: 250, height: 100 },
    image: { width: 120, height: 80 },
  };
  return styles[tool] || styles.rectangle;
};

export const useNodeCreation = (
  selectedTool,
  project,
  snapToGrid,
  snapGrid,
  setNodes
) => {
  const { constrainToPage, isPositionWithinPage } = usePageConstraints();

  const snapPosition = useCallback(
    (position) => {
      if (!snapToGrid) return position;

      return {
        x: Math.round(position.x / snapGrid[0]) * snapGrid[0],
        y: Math.round(position.y / snapGrid[1]) * snapGrid[1],
      };
    },
    [snapToGrid, snapGrid]
  );

  const onDoubleClick = useCallback(
    (event) => {
      if (selectedTool === "select") return;

      const position = project({ x: event.clientX, y: event.clientY });
      let snappedPosition = snapPosition(position);

      const defaultStyle = getDefaultStyle(selectedTool);
      const nodeWidth = defaultStyle.width || 100;
      const nodeHeight = defaultStyle.height || 50;

      snappedPosition = constrainToPage(snappedPosition, nodeWidth, nodeHeight);

      if (isPositionWithinPage(snappedPosition, nodeWidth, nodeHeight)) {
        const newNode = {
          id: `${selectedTool}-${Date.now()}`,
          type: getNodeType(selectedTool),
          position: snappedPosition,
          data: getDefaultData(selectedTool),
          style: defaultStyle,
        };

        setNodes((nds) => nds.concat(newNode));
      }
    },
    [
      selectedTool,
      project,
      snapPosition,
      constrainToPage,
      isPositionWithinPage,
      setNodes,
    ]
  );

  return { onDoubleClick };
};
