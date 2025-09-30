"use client";

import { useState, useEffect } from "react";

const PropertiesPanel = ({ selectedElement, onPropertiesChange }) => {
  const [properties, setProperties] = useState({
    label: "",
    width: 100,
    height: 50,
    x: 0,
    y: 0,
    fontSize: 12,
    fontColor: "#000000",
    backgroundColor: "#ffffff",
    borderColor: "#000000",
    borderWidth: 1,
  });

  useEffect(() => {
    if (selectedElement) {
      setProperties({
        label: selectedElement.data?.label || "",
        width: selectedElement.style?.width || 100,
        height: selectedElement.style?.height || 50,
        x: selectedElement.position?.x || 0,
        y: selectedElement.position?.y || 0,
        fontSize: selectedElement.data?.fontSize || 12,
        fontColor: selectedElement.data?.fontColor || "#000000",
        backgroundColor: selectedElement.data?.backgroundColor || "#ffffff",
        borderColor: selectedElement.data?.borderColor || "#000000",
        borderWidth: selectedElement.data?.borderWidth || 1,
      });
    }
  }, [selectedElement]);

  const handlePropertyChange = (property, value) => {
    const newProperties = {
      ...properties,
      [property]: value,
    };
    setProperties(newProperties);
    
    if (selectedElement && onPropertiesChange) {
      onPropertiesChange(newProperties);
    }
  };

  if (!selectedElement) {
    return (
      <div className="properties-panel">
        <h3>Properties</h3>
        <div className="no-selection">
          <p>Select an element to edit properties</p>
          <div className="hint">
            💡 Click on any element in the canvas to see its properties here.
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="properties-panel">
      <h3>Properties</h3>
      <div className="element-info">
        <strong>Type:</strong> {selectedElement.type?.replace("Node", "") || "Element"}
      </div>

      <div className="property-group">
        <h4>Content</h4>
        <div className="property-row">
          <label>Label:</label>
          <input
            type="text"
            value={properties.label}
            onChange={(e) => handlePropertyChange("label", e.target.value)}
            placeholder="Enter label..."
          />
        </div>
      </div>

      <div className="property-group">
        <h4>Position & Size</h4>
        <div className="property-row">
          <label>X:</label>
          <input
            type="number"
            value={Math.round(properties.x)}
            onChange={(e) => handlePropertyChange("x", parseInt(e.target.value) || 0)}
          />
        </div>
        <div className="property-row">
          <label>Y:</label>
          <input
            type="number"
            value={Math.round(properties.y)}
            onChange={(e) => handlePropertyChange("y", parseInt(e.target.value) || 0)}
          />
        </div>
        <div className="property-row">
          <label>Width:</label>
          <input
            type="number"
            value={properties.width}
            onChange={(e) => handlePropertyChange("width", parseInt(e.target.value) || 50)}
          />
        </div>
        <div className="property-row">
          <label>Height:</label>
          <input
            type="number"
            value={properties.height}
            onChange={(e) => handlePropertyChange("height", parseInt(e.target.value) || 30)}
          />
        </div>
      </div>

      <div className="property-group">
        <h4>Text</h4>
        <div className="property-row">
          <label>Font Size:</label>
          <input
            type="number"
            value={properties.fontSize}
            onChange={(e) => handlePropertyChange("fontSize", parseInt(e.target.value) || 12)}
            min="8"
            max="72"
          />
        </div>
        <div className="property-row">
          <label>Font Color:</label>
          <input
            type="color"
            value={properties.fontColor}
            onChange={(e) => handlePropertyChange("fontColor", e.target.value)}
          />
        </div>
      </div>

      <div className="property-group">
        <h4>Appearance</h4>
        <div className="property-row">
          <label>Background:</label>
          <input
            type="color"
            value={properties.backgroundColor}
            onChange={(e) => handlePropertyChange("backgroundColor", e.target.value)}
          />
        </div>
        <div className="property-row">
          <label>Border Color:</label>
          <input
            type="color"
            value={properties.borderColor}
            onChange={(e) => handlePropertyChange("borderColor", e.target.value)}
          />
        </div>
        <div className="property-row">
          <label>Border Width:</label>
          <input
            type="number"
            value={properties.borderWidth}
            onChange={(e) => handlePropertyChange("borderWidth", parseInt(e.target.value) || 1)}
            min="0"
            max="10"
          />
        </div>
      </div>
    </div>
  );
};

export default PropertiesPanel;