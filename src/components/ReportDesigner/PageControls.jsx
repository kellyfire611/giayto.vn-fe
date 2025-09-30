import { PAGE_SIZES } from "./constants";

const PageControls = ({
  pageSize,
  setPageSize,
  snapToGrid,
  setSnapToGrid,
  snapGrid,
  setSnapGrid,
  currentZoom,
  onZoomIn,
  onZoomOut,
  onResetZoom,
  onZoomToFit,
}) => {
  return (
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
          onChange={(e) =>
            setSnapGrid([Number(e.target.value), Number(e.target.value)])
          }
          className="grid-select"
        >
          <option value={5}>5px Grid</option>
          <option value={10}>10px Grid</option>
          <option value={15}>15px Grid</option>
          <option value={20}>20px Grid</option>
        </select>
      )}

      <div className="zoom-controls">
        <button onClick={onZoomOut} className="zoom-btn">
          -
        </button>
        <span className="zoom-display">{Math.round(currentZoom * 100)}%</span>
        <button onClick={onZoomIn} className="zoom-btn">
          +
        </button>
        <button onClick={onResetZoom} className="zoom-btn">
          Reset
        </button>
        <button onClick={onZoomToFit} className="zoom-btn">
          Fit
        </button>
      </div>
    </div>
  );
};

export default PageControls;
