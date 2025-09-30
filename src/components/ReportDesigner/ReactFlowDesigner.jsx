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

// Page sizes (in pixels at 96 DPI)
const PAGE_SIZES = {
  a4: { width: 794, height: 1123, name: "A4 Portrait" },
  a4Landscape: { width: 1123, height: 794, name: "A4 Landscape" },
  a5: { width: 559, height: 794, name: "A5 Portrait" },
  a5Landscape: { width: 794, height: 559, name: "A5 Landscape" },
  letter: { width: 816, height: 1056, name: "Letter Portrait" },
  letterLandscape: { width: 1056, height: 816, name: "Letter Landscape" },
};

// Custom Node Components (giữ nguyên)
const TextNode = ({ data, selected }) => {
  return (
    <div className={`text-node ${selected ? "selected" : ""}`}>
      <input
        type="text"
        value={data.label || ""}
        className="node-input"
        placeholder="Enter text..."
        onChange={(e) => data.onChange?.(e.target.value)}
        style={{
          fontSize: data.fontSize || 14,
          color: data.fontColor || "#000000",
          backgroundColor: data.backgroundColor || "transparent",
        }}
      />
    </div>
  );
};

const RectangleNode = ({ data, selected }) => {
  return (
    <div
      className={`rectangle-node ${selected ? "selected" : ""}`}
      style={{
        backgroundColor: data.backgroundColor || "#ffffff",
        border: `${data.borderWidth || 1}px solid ${data.borderColor || "#000000"}`,
        color: data.fontColor || "#000000",
        fontSize: data.fontSize || 14,
        padding: "8px",
        borderRadius: "4px",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      }}
    >
      {data.label || "Rectangle"}
    </div>
  );
};

const TableNode = ({ data, selected }) => {
  return (
    <div className={`table-node ${selected ? "selected" : ""}`}>
      <div
        className="table-header"
        style={{
          backgroundColor: data.headerBackground || "#f5f5f5",
          color: data.headerColor || "#000000",
        }}
      >
        {data.label || "Table"}
      </div>
      <div className="table-body">
        <div className="table-row">
          <div className="table-cell">Column 1</div>
          <div className="table-cell">Column 2</div>
        </div>
        <div className="table-row">
          <div className="table-cell">Data 1</div>
          <div className="table-cell">Data 2</div>
        </div>
      </div>
    </div>
  );
};

const ImageNode = ({ data, selected }) => {
  return (
    <div className={`image-node ${selected ? "selected" : ""}`}>
      <div className="image-placeholder">🖼️ {data.label || "Image"}</div>
    </div>
  );
};

// Define node types
const nodeTypes = {
  textNode: TextNode,
  rectangleNode: RectangleNode,
  tableNode: TableNode,
  imageNode: ImageNode,
};

const initialNodes = [
  {
    id: "1",
    type: "rectangleNode",
    position: { x: 50, y: 50 },
    data: {
      label: "SALES REPORT 2024",
      backgroundColor: "#e3f2fd",
      borderColor: "#1976d2",
      fontColor: "#1976d2",
      fontSize: 16,
      borderWidth: 2,
    },
    style: { width: 200, height: 60 },
  },
  {
    id: "2",
    type: "textNode",
    position: { x: 50, y: 150 },
    data: {
      label: "Customer Name",
      fontSize: 14,
      fontColor: "#333333",
    },
    style: { width: 150, height: 40 },
  },
];

const initialEdges = [];

const ReactFlowDesigner = ({ onElementSelect, selectedTool }) => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [pageSize, setPageSize] = useState("a4");
  const [snapToGrid, setSnapToGrid] = useState(true);
  const [snapGrid, setSnapGrid] = useState([10, 10]);
  const [containerSize, setContainerSize] = useState({ width: 794, height: 1123 });
  const { project, setViewport, getViewport, getZoom, screenToFlowPosition } = useReactFlow();
  
  const containerRef = useRef(null);
  const snapGridRef = useRef(snapGrid);
  const pageSizeRef = useRef(PAGE_SIZES[pageSize]);
  
  useEffect(() => {
    snapGridRef.current = snapGrid;
  }, [snapGrid]);

  // Calculate container size to fit paper exactly
  useEffect(() => {
    const updateContainerSize = () => {
      if (containerRef.current) {
        const mainElement = containerRef.current.closest('.designer-main');
        if (mainElement) {
          const mainRect = mainElement.getBoundingClientRect();
          const availableWidth = mainRect.width - 40; // Account for some padding
          const availableHeight = mainRect.height - 40;
          
          const page = PAGE_SIZES[pageSize];
          const scale = Math.min(
            availableWidth / page.width,
            availableHeight / page.height,
            1 // Don't scale up, only down
          );
          
          setContainerSize({
            width: page.width * scale,
            height: page.height * scale
          });
        }
      }
    };

    updateContainerSize();
    window.addEventListener('resize', updateContainerSize);
    
    return () => window.removeEventListener('resize', updateContainerSize);
  }, [pageSize]);

  useEffect(() => {
    pageSizeRef.current = PAGE_SIZES[pageSize];
    
    // Remove nodes that are outside the new page boundaries
    setNodes(nodes => nodes.filter(node => isNodeWithinPage(node, PAGE_SIZES[pageSize])));
    
    // Reset viewport
    setTimeout(() => {
      setViewport({ x: 0, y: 0, zoom: 1 }, { duration: 300 });
    }, 100);
  }, [pageSize, setNodes, setViewport]);

  // Set initial viewport
  useEffect(() => {
    const timer = setTimeout(() => {
      setViewport({ x: 0, y: 0, zoom: 1 }, { duration: 0 });
    }, 150);
    
    return () => clearTimeout(timer);
  }, [setViewport]);

  // Check if node is within page boundaries
  const isNodeWithinPage = useCallback((node, page) => {
    const nodeRight = node.position.x + (node.style?.width || 0);
    const nodeBottom = node.position.y + (node.style?.height || 0);
    
    return node.position.x >= 0 && 
           node.position.y >= 0 && 
           nodeRight <= page.width && 
           nodeBottom <= page.height;
  }, []);

  // Check if position is within page boundaries
  const isPositionWithinPage = useCallback((position, nodeWidth = 0, nodeHeight = 0) => {
    const page = pageSizeRef.current;
    const right = position.x + nodeWidth;
    const bottom = position.y + nodeHeight;
    
    return position.x >= 0 && 
           position.y >= 0 && 
           right <= page.width && 
           bottom <= page.height;
  }, []);

  // Constrain position to page boundaries
  const constrainToPage = useCallback((position, nodeWidth = 0, nodeHeight = 0) => {
    const page = pageSizeRef.current;
    let newX = position.x;
    let newY = position.y;

    // Constrain X
    if (newX < 0) newX = 0;
    if (newX + nodeWidth > page.width) newX = page.width - nodeWidth;
    
    // Constrain Y
    if (newY < 0) newY = 0;
    if (newY + nodeHeight > page.height) newY = page.height - nodeHeight;

    return { x: newX, y: newY };
  }, []);

  // Constrain viewport to page boundaries
  const constrainViewport = useCallback((viewport, containerWidth, containerHeight) => {
    const page = pageSizeRef.current;
    const zoom = viewport.zoom || 1;
    
    // Calculate the visible area in flow coordinates
    const visibleWidth = containerWidth / zoom;
    const visibleHeight = containerHeight / zoom;
    
    let x = viewport.x;
    let y = viewport.y;
    
    // Constrain X
    const maxX = Math.max(0, page.width - visibleWidth);
    if (x < -maxX) x = -maxX;
    if (x > 0) x = 0;
    
    // Constrain Y
    const maxY = Math.max(0, page.height - visibleHeight);
    if (y < -maxY) y = -maxY;
    if (y > 0) y = 0;
    
    return { x, y, zoom: viewport.zoom };
  }, []);

  // Grid snapping function
  const snapPosition = useCallback((position) => {
    if (!snapToGrid) return position;
    
    const [gridX, gridY] = snapGridRef.current;
    return {
      x: Math.round(position.x / gridX) * gridX,
      y: Math.round(position.y / gridY) * gridY,
    };
  }, [snapToGrid]);

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

  // Custom node change with boundary constraints
  const onNodesChangeWithConstraints = useCallback(
    (changes) => {
      const updatedChanges = changes.map(change => {
        if (change.type === 'position' && change.position) {
          const node = nodes.find(n => n.id === change.id);
          if (node) {
            const nodeWidth = node.style?.width || 0;
            const nodeHeight = node.style?.height || 0;
            
            let newPosition = change.position;
            
            // Apply grid snapping
            if (snapToGrid) {
              newPosition = snapPosition(newPosition);
            }
            
            // Apply boundary constraints
            newPosition = constrainToPage(newPosition, nodeWidth, nodeHeight);
            
            return {
              ...change,
              position: newPosition,
            };
          }
        }
        
        if (change.type === 'dimensions' && change.dimensions) {
          const node = nodes.find(n => n.id === change.id);
          if (node) {
            const nodeWidth = change.dimensions.width || node.style?.width || 0;
            const nodeHeight = change.dimensions.height || node.style?.height || 0;
            
            // Check if new dimensions would go outside page
            const right = node.position.x + nodeWidth;
            const bottom = node.position.y + nodeHeight;
            const page = pageSizeRef.current;
            
            let constrainedWidth = nodeWidth;
            let constrainedHeight = nodeHeight;
            
            if (right > page.width) {
              constrainedWidth = page.width - node.position.x;
            }
            if (bottom > page.height) {
              constrainedHeight = page.height - node.position.y;
            }
            
            return {
              ...change,
              dimensions: {
                width: constrainedWidth,
                height: constrainedHeight,
              },
            };
          }
        }
        
        return change;
      });
      
      onNodesChange(updatedChanges);
    },
    [nodes, snapToGrid, snapPosition, constrainToPage, onNodesChange]
  );

  // Add new elements with boundary constraints
  const onPaneDoubleClick = useCallback(
    (event) => {
      if (selectedTool === "select") return;

      const position = project({ x: event.clientX, y: event.clientY });
      let snappedPosition = snapPosition(position);
      
      const defaultStyle = getDefaultStyle(selectedTool);
      const nodeWidth = defaultStyle.width || 100;
      const nodeHeight = defaultStyle.height || 50;
      
      // Constrain initial position to page
      snappedPosition = constrainToPage(snappedPosition, nodeWidth, nodeHeight);
      
      // Only create node if it fits within page
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
    [selectedTool, project, snapPosition, constrainToPage, isPositionWithinPage, setNodes]
  );

  // Handle viewport changes to prevent panning outside page
  const onMove = useCallback(
    (event, viewport) => {
      if (containerRef.current) {
        const constrainedViewport = constrainViewport(
          viewport, 
          containerSize.width, 
          containerSize.height
        );
        
        // Only update if viewport actually changed
        if (constrainedViewport.x !== viewport.x || constrainedViewport.y !== viewport.y) {
          setViewport(constrainedViewport, { duration: 0 });
        }
      }
    },
    [containerSize, constrainViewport, setViewport]
  );

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

  const currentPage = PAGE_SIZES[pageSize];

  return (
    <div className="react-flow-designer" ref={containerRef}>
      {/* Page Size Controls */}
      <div className="page-controls">
        <select 
          value={pageSize} 
          onChange={(e) => setPageSize(e.target.value)}
          className="page-select"
        >
          {Object.entries(PAGE_SIZES).map(([key, size]) => (
            <option key={key} value={key}>
              {size.name}
            </option>
          ))}
        </select>
        
        <label className="snap-toggle">
          <input
            type="checkbox"
            checked={snapToGrid}
            onChange={(e) => setSnapToGrid(e.target.checked)}
          />
          Snap to Grid
        </label>

        {snapToGrid && (
          <select 
            value={snapGrid[0]} 
            onChange={(e) => setSnapGrid([Number(e.target.value), Number(e.target.value)])}
            className="grid-select"
          >
            <option value={5}>5px Grid</option>
            <option value={10}>10px Grid</option>
            <option value={15}>15px Grid</option>
            <option value={20}>20px Grid</option>
          </select>
        )}
      </div>

      {/* Exact Page Container */}
      <div 
        className="page-container-exact"
        style={{
          width: containerSize.width,
          height: containerSize.height,
          margin: '0 auto',
          backgroundColor: 'white',
          border: '2px solid #2c5282',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
          position: 'relative',
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
          onPaneDoubleClick={onPaneDoubleClick}
          onMove={onMove}
          nodeTypes={nodeTypes}
          snapToGrid={snapToGrid}
          snapGrid={snapGrid}
          minZoom={0.1}
          maxZoom={2}
          deleteKeyCode={["Delete", "Backspace"]}
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'white',
          }}
          proOptions={{ hideAttribution: true }}
        >
          <Controls 
            position="bottom-left"
            showInteractive={false}
          />
          <Background 
            variant="dots" 
            gap={snapGrid[0]} 
            size={1} 
            color={snapToGrid ? "#e8e8e8" : "#f0f0f0"}
          />
        </ReactFlow>
      </div>
    </div>
  );
};

export default ReactFlowDesigner;