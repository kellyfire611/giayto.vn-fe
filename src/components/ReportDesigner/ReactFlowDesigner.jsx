"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import ReactFlow, {
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  useReactFlow,
} from "reactflow";
import "reactflow/dist/style.css";

import { nodeTypes, initialNodes, initialEdges, PAGE_SIZES } from "./constants";
import { usePageConstraints, useContainerSize, useNodeCreation } from "./hooks";
import PageControls from "./PageControls";

const ReactFlowDesigner = ({ onElementSelect, selectedTool }) => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [pageSize, setPageSize] = useState("a4");
  const [snapToGrid, setSnapToGrid] = useState(true);
  const [snapGrid, setSnapGrid] = useState([10, 10]);
  const [currentZoom, setCurrentZoom] = useState(1);

  const containerRef = useRef(null);
  const { project, setViewport, zoomIn, zoomOut, fitView } = useReactFlow();

  const containerSize = useContainerSize(pageSize, containerRef);
  const {
    constrainToPage,
    constrainViewport,
    constrainDimensions,
    isNodeWithinPage,
  } = usePageConstraints(pageSize);
  const { onDoubleClick } = useNodeCreation(
    selectedTool,
    project,
    snapToGrid,
    snapGrid,
    setNodes
  );

  // Set initial viewport
  useEffect(() => {
    const timer = setTimeout(() => {
      setViewport({ x: 0, y: 0, zoom: 1 }, { duration: 0 });
      setCurrentZoom(1);
    }, 150);

    return () => clearTimeout(timer);
  }, [setViewport]);

  // Remove nodes outside page boundaries khi page size thay đổi
  useEffect(() => {
    setNodes((nodes) =>
      nodes.filter((node) => isNodeWithinPage(node, PAGE_SIZES[pageSize]))
    );
  }, [pageSize, setNodes, isNodeWithinPage]);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const onNodeClick = useCallback(
    (event, node) => {
      onElementSelect({
        id: node.id,
        type: node.type,
        position: node.position,
        data: node.data,
        style: node.style,
      });
    },
    [onElementSelect]
  );

  const onPaneClick = useCallback(() => {
    onElementSelect(null);
  }, [onElementSelect]);

  // Custom zoom functions
  const handleZoomIn = useCallback(() => {
    zoomIn({ duration: 300 });
  }, [zoomIn]);

  const handleZoomOut = useCallback(() => {
    zoomOut({ duration: 300 });
  }, [zoomOut]);

  const handleZoomToFit = useCallback(() => {
    fitView({
      duration: 300,
      padding: 0.1,
      includeHidden: false,
      minZoom: 0.1,
      maxZoom: 1,
    });
  }, [fitView]);

  const handleResetZoom = useCallback(() => {
    setViewport({ x: 0, y: 0, zoom: 1 }, { duration: 300 });
    setCurrentZoom(1);
  }, [setViewport]);

  // Grid snapping function
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

  // Custom node change with boundary constraints - CẢI THIỆN
  // Custom node change with boundary constraints - FIX CHO BIÊN PHẢI
  const onNodesChangeWithConstraints = useCallback(
    (changes) => {
      const updatedChanges = changes.map((change) => {
        if (change.type === "position" && change.position) {
          const node = nodes.find((n) => n.id === change.id);
          if (node) {
            // Lấy kích thước THỰC TẾ của node, không phải mặc định
            const nodeWidth = node.style?.width || 100;
            const nodeHeight = node.style?.height || 50;

            let newPosition = change.position;

            // Apply grid snapping
            if (snapToGrid) {
              newPosition = snapPosition(newPosition);
            }

            // Apply boundary constraints - FIX: truyền kích thước thực
            newPosition = constrainToPage(newPosition, nodeWidth, nodeHeight);

            return {
              ...change,
              position: newPosition,
            };
          }
        }

        if (change.type === "dimensions" && change.dimensions) {
          const node = nodes.find((n) => n.id === change.id);
          if (node) {
            // Constrain dimensions để không resize vượt biên
            const constrainedDimensions = constrainDimensions(
              node,
              change.dimensions
            );

            return {
              ...change,
              dimensions: constrainedDimensions,
              resizing: true,
            };
          }
        }

        if (change.type === "select") {
          // Khi select node, cập nhật properties panel
          const node = nodes.find((n) => n.id === change.id);
          if (node && change.selected) {
            onElementSelect({
              id: node.id,
              type: node.type,
              position: node.position,
              data: node.data,
              style: node.style,
            });
          }
        }

        return change;
      });

      onNodesChange(updatedChanges);
    },
    [
      nodes,
      snapToGrid,
      snapPosition,
      constrainToPage,
      constrainDimensions,
      onElementSelect,
      onNodesChange,
    ]
  );

  // Handle viewport changes - CHẶN PANNING NGOÀI BIÊN
  const onMove = useCallback(
    (event, viewport) => {
      setCurrentZoom(viewport.zoom);

      if (containerRef.current) {
        const constrainedViewport = constrainViewport(
          viewport,
          containerSize.width,
          containerSize.height
        );

        // Luôn áp dụng constraints để đảm bảo không pan ra ngoài
        if (
          constrainedViewport.x !== viewport.x ||
          constrainedViewport.y !== viewport.y
        ) {
          setViewport(constrainedViewport, { duration: 0 });
        }
      }
    },
    [containerSize, constrainViewport, setViewport]
  );

  const panOnDrag = [1, 2];

  return (
    <div className="react-flow-designer" ref={containerRef}>
      <PageControls
        pageSize={pageSize}
        setPageSize={setPageSize}
        snapToGrid={snapToGrid}
        setSnapToGrid={setSnapToGrid}
        snapGrid={snapGrid}
        setSnapGrid={setSnapGrid}
        currentZoom={currentZoom}
        onZoomIn={handleZoomIn}
        onZoomOut={handleZoomOut}
        onResetZoom={handleResetZoom}
        onZoomToFit={handleZoomToFit}
      />
      {/* Debug boundary info */}
      <div className="boundary-indicator">
        Page: {PAGE_SIZES[pageSize].width} x {PAGE_SIZES[pageSize].height}px
      </div>
      {/* Page Container với kích thước CHÍNH XÁC */}
      <div
        className="page-container-exact"
        style={{
          width: containerSize.width,
          height: containerSize.height,
          margin: "0 auto",
          backgroundColor: "white",
          border: "2px solid #2c5282",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChangeWithConstraints}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onNodeClick={onNodeClick}
          onPaneClick={onPaneClick}
          onDoubleClick={onDoubleClick}
          onMove={onMove}
          nodeTypes={nodeTypes}
          snapToGrid={snapToGrid}
          snapGrid={snapGrid}
          minZoom={0.1}
          maxZoom={3}
          panOnScroll={true}
          selectionOnDrag={true}
          panOnDrag={false}
          deleteKeyCode={["Delete", "Backspace"]}
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "white",
          }}
          proOptions={{ hideAttribution: true }}
          // QUAN TRỌNG: Sử dụng nodeExtent để constraint nodes
          nodeExtent={[
            [0, 0],
            [PAGE_SIZES[pageSize].width, PAGE_SIZES[pageSize].height],
          ]}
          // Thêm các props để đảm bảo boundary chính xác
          defaultViewport={{ x: 0, y: 0, zoom: 1 }}
          fitViewOptions={{
            padding: 0.1,
            includeHidden: true,
            minZoom: 0.1,
            maxZoom: 1,
          }}
        >
          <Controls showInteractive={false} style={{ display: "none" }} />
          <Background
            variant="dots"
            gap={snapGrid[0]}
            size={1}
            color={snapToGrid ? "#e8e8e8" : "#f0f0f0"}
          />
        </ReactFlow>
      </div>

      <div
        className="boundary-debug"
        style={{
          position: "absolute",
          top: "50px",
          left: "10px",
          background: "rgba(0,0,0,0.8)",
          color: "white",
          padding: "8px",
          borderRadius: "4px",
          fontSize: "12px",
          zIndex: 1000,
          pointerEvents: "none",
        }}
      >
        <div>
          Page: {PAGE_SIZES[pageSize].width} x {PAGE_SIZES[pageSize].height}
        </div>
        <div>
          Container: {Math.round(containerSize.width)} x{" "}
          {Math.round(containerSize.height)}
        </div>
        <div>Zoom: {Math.round(currentZoom * 100)}%</div>
      </div>
    </div>
  );
};

export default ReactFlowDesigner;
