"use client";
import React, { useState, useEffect, useRef } from "react";

type GuideLine = {
  id: string;
  type: "horizontal" | "vertical";
  position: number;
};

type Props = {
  scale: number;
  onAddGuideLine: (guide: GuideLine) => void;
  canvasRect: DOMRect | null;
  rulerSize: number;
};

export const Ruler = ({
  scale,
  onAddGuideLine,
  canvasRect,
  rulerSize,
}: Props) => {
  const rulerTopRef = useRef<HTMLDivElement>(null);
  const rulerLeftRef = useRef<HTMLDivElement>(null);
  const [draggingGuide, setDraggingGuide] = useState<{
    type: "horizontal" | "vertical";
    position: number;
  } | null>(null);

  const handleMouseDown = (
    e: React.MouseEvent,
    type: "horizontal" | "vertical"
  ) => {
    if (!canvasRect) return;

    // Calculate position relative to the canvas's unscaled top-left corner
    const canvasOffsetX = canvasRect.left + rulerSize;
    const canvasOffsetY = canvasRect.top + rulerSize;
    const position =
      type === "horizontal"
        ? Math.round((e.clientY - canvasOffsetY) / scale)
        : Math.round((e.clientX - canvasOffsetX) / scale);

    setDraggingGuide({ type, position });
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!draggingGuide || !canvasRect) return;

    // Calculate position relative to the canvas's unscaled top-left corner
    const canvasOffsetX = canvasRect.left + rulerSize;
    const canvasOffsetY = canvasRect.top + rulerSize;
    const position =
      draggingGuide.type === "horizontal"
        ? Math.round((e.clientY - canvasOffsetY) / scale)
        : Math.round((e.clientX - canvasOffsetX) / scale);

    setDraggingGuide((prev) => (prev ? { ...prev, position } : null));
  };

  const handleMouseUp = () => {
    if (draggingGuide && canvasRect) {
      onAddGuideLine({
        id: String(Date.now()),
        type: draggingGuide.type,
        position: Math.max(0, draggingGuide.position), // Ensure non-negative position
      });
    }
    setDraggingGuide(null);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [draggingGuide, canvasRect]);

  const renderTicks = (orientation: "horizontal" | "vertical") => {
    const ticks = [];
    const canvasWidth = 210 * 3.78; // 210mm in pixels (1mm ≈ 3.78px)
    const canvasHeight = 297 * 3.78; // 297mm in pixels
    const length = orientation === "horizontal" ? canvasWidth : canvasHeight;
    const majorTickInterval = 50; // Major tick every 50px
    const minorTickInterval = 10; // Minor tick every 10px

    for (let i = 0; i <= length; i += minorTickInterval) {
      const isMajor = i % majorTickInterval === 0;
      ticks.push(
        <div
          key={i}
          className={`absolute bg-gray-600 ${
            orientation === "horizontal"
              ? `h-[${isMajor ? 15 : 8}px] w-[1px] top-0`
              : `w-[${isMajor ? 15 : 8}px] h-[1px] left-0`
          }`}
          style={
            orientation === "horizontal"
              ? { left: `${i}px` }
              : { top: `${i}px` }
          }
        >
          {isMajor && (
            <span
              className={`text-xs text-gray-600 ${
                orientation === "horizontal" ? "top-[16px]" : "left-[16px]"
              } absolute`}
              style={
                orientation === "horizontal"
                  ? { left: "-10px" }
                  : { top: "-6px" }
              }
            >
              {Math.round(i / 3.78)}
            </span>
          )}
        </div>
      );
    }
    return ticks;
  };

  return (
    <>
      {/* Top Ruler (Horizontal) */}
      <div
        ref={rulerTopRef}
        className="absolute bg-gray-200 z-10 border-b border-gray-300"
        style={{
          top: "0",
          left: `${rulerSize}px`,
          width: "210mm",
          height: `${rulerSize}px`,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
        }}
        onMouseDown={(e) => handleMouseDown(e, "horizontal")}
      >
        {renderTicks("horizontal")}
      </div>

      {/* Left Ruler (Vertical) */}
      <div
        ref={rulerLeftRef}
        className="absolute bg-gray-200 z-10 border-r border-gray-300"
        style={{
          left: "0",
          top: `${rulerSize}px`,
          width: `${rulerSize}px`,
          height: "297mm",
          transform: `scale(${scale})`,
          transformOrigin: "top left",
        }}
        onMouseDown={(e) => handleMouseDown(e, "vertical")}
      >
        {renderTicks("vertical")}
      </div>

      {/* Dragging Guide Line Preview */}
      {draggingGuide && canvasRect && (
        <div
          className={`absolute bg-blue-500 opacity-50 z-20 ${
            draggingGuide.type === "horizontal"
              ? "h-[1px] w-[210mm]"
              : "w-[1px] h-[297mm]"
          }`}
          style={
            draggingGuide.type === "horizontal"
              ? {
                  top: `${
                    canvasRect.top + rulerSize + draggingGuide.position * scale
                  }px`,
                  left: `${canvasRect.left + rulerSize}px`,
                }
              : {
                  left: `${
                    canvasRect.left + rulerSize + draggingGuide.position * scale
                  }px`,
                  top: `${canvasRect.top + rulerSize}px`,
                }
          }
        />
      )}
    </>
  );
};
