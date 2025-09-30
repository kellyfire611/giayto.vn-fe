"use client";

import { useState } from "react";
import ReactFlowDesigner from "./ReactFlowDesigner";
import Toolbar from "./Toolbar";
import PropertiesPanel from "./PropertiesPanel";
import { ReactFlowProvider } from "reactflow";

const ReportDesigner = () => {
  const [selectedTool, setSelectedTool] = useState("select");
  const [selectedElement, setSelectedElement] = useState(null);
  const [nodes, setNodes] = useState([]);

  const handleToolSelect = (toolId) => {
    setSelectedTool(toolId);
  };

  const handleElementSelect = (element) => {
    setSelectedElement(element);
  };

  return (
    <div className="report-designer">
      <header className="designer-header">
        <h1>Report Designer</h1>
        <div className="header-actions">
          <button className="btn-primary">New Report</button>
          <button className="btn-secondary">Save</button>
          <button className="btn-secondary">Export PDF</button>
        </div>
      </header>

      <div className="designer-layout">
        <aside className="left-sidebar">
          <Toolbar
            onToolSelect={handleToolSelect}
            selectedTool={selectedTool}
          />
        </aside>

        <main className="designer-main">
          <ReactFlowProvider>
            <ReactFlowDesigner 
              onElementSelect={handleElementSelect}
              selectedTool={selectedTool}
            />
          </ReactFlowProvider>
        </main>

        <aside className="right-sidebar">
          <PropertiesPanel 
            selectedElement={selectedElement}
            onPropertiesChange={(properties) => {
              // Handle properties update
              if (selectedElement) {
                // Update the selected element with new properties
              }
            }}
          />
        </aside>
      </div>
    </div>
  );
};

export default ReportDesigner;