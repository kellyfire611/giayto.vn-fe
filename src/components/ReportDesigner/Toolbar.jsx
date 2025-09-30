"use client";

const Toolbar = ({
  onToolSelect,
  selectedTool,
  onPageSizeChange,
  pageSize,
  snapToGrid,
  onSnapToGridChange,
}) => {
  const tools = [
    { id: "select", name: "Select", icon: "🔍" },
    { id: "rectangle", name: "Rectangle", icon: "⬜" },
    { id: "text", name: "Text", icon: "📝" },
    { id: "table", name: "Table", icon: "📊" },
    { id: "image", name: "Image", icon: "🖼️" },
  ];

  const pageSizes = [
    { id: "a4", name: "A4 Portrait" },
    { id: "a4Landscape", name: "A4 Landscape" },
    { id: "a5", name: "A5 Portrait" },
    { id: "a5Landscape", name: "A5 Landscape" },
    { id: "letter", name: "Letter" },
    { id: "letterLandscape", name: "Letter Landscape" },
  ];

  return (
    <div className="toolbar">
      <div className="toolbar-section">
        <h3>Design Tools</h3>
        <div className="tool-buttons">
          {tools.map((tool) => (
            <button
              key={tool.id}
              className={`tool-btn ${selectedTool === tool.id ? "active" : ""}`}
              onClick={() => onToolSelect(tool.id)}
              title={tool.name}
            >
              <span className="tool-icon">{tool.icon}</span>
              <span className="tool-name">{tool.name}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="toolbar-section">
        <h3>Page Settings</h3>
        <div className="action-buttons">
          <select
            value={pageSize}
            onChange={(e) => onPageSizeChange?.(e.target.value)}
            className="action-btn"
            style={{ width: "100%" }}
          >
            {pageSizes.map((size) => (
              <option key={size.id} value={size.id}>
                {size.name}
              </option>
            ))}
          </select>

          <button
            className={`action-btn ${snapToGrid ? "active" : ""}`}
            onClick={() => onSnapToGridChange?.(!snapToGrid)}
          >
            {snapToGrid ? "✅ Snap to Grid" : "🔲 Snap to Grid"}
          </button>
        </div>
      </div>

      <div className="toolbar-section">
        <h3>Actions</h3>
        <div className="action-buttons">
          <button className="action-btn">↩️ Undo</button>
          <button className="action-btn">↪️ Redo</button>
          <button className="action-btn">💾 Save</button>
          <button className="action-btn">📤 Export</button>
        </div>
      </div>

      <div className="toolbar-section">
        <h3>Instructions</h3>
        <div className="instructions">
          <p>• Click to select</p>
          <p>• Double-click to add elements</p>
          <p>• Drag to move</p>
          <p>• Delete to remove</p>
          <p>• Elements snap to grid</p>
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
