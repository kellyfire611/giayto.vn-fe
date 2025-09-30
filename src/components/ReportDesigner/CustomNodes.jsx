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
        border: `${data.borderWidth || 1}px solid ${
          data.borderColor || "#000000"
        }`,
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

export { TextNode, RectangleNode, TableNode, ImageNode };
