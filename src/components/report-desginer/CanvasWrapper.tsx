"use client";
import React, { useRef, useState, useEffect } from "react";
import { Canvas } from "./Canvas";
import { Ruler } from "./Ruler";
import { Block } from "@/types/report-desginer";

type GuideLine = {
  id: string;
  type: "horizontal" | "vertical";
  position: number;
};

type Props = {
  blocks: Block[];
  setBlocks: React.Dispatch<React.SetStateAction<Block[]>>;
  selectedIds: string[];
  setSelectedIds: (ids: string[]) => void;
  scale: number;
};

export const CanvasWrapper = ({
  blocks,
  setBlocks,
  selectedIds,
  setSelectedIds,
  scale,
}: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isHandActive, setIsHandActive] = useState(false);
  const [origin, setOrigin] = useState<{ x: number; y: number } | null>(null);
  const [scrollStart, setScrollStart] = useState<{
    left: number;
    top: number;
  } | null>(null);
  const [guideLines, setGuideLines] = useState<GuideLine[]>([]);
  const [canvasRect, setCanvasRect] = useState<DOMRect | null>(null);
  const rulerSize = 24; // Size of the ruler in pixels

  const handleAddGuideLine = (guide: GuideLine) => {
    setGuideLines((prev) => [...prev, guide]);
  };

  const handleRemoveGuideLine = (id: string) => {
    setGuideLines((prev) => prev.filter((g) => g.id !== id));
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (
      document.activeElement?.tagName === "INPUT" ||
      document.activeElement?.tagName === "TEXTAREA"
    ) {
      return;
    }
    if (e.code === "Space") {
      setIsHandActive(true);
      if (containerRef.current) {
        containerRef.current.style.cursor = "grab";
        containerRef.current.style.userSelect = "none";
      }
      e.preventDefault();
    }
  };

  const handleKeyUp = (e: KeyboardEvent) => {
    if (e.code === "Space") {
      setIsHandActive(false);
      if (containerRef.current) {
        containerRef.current.style.cursor = "default";
        containerRef.current.style.userSelect = "auto";
      }
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!isHandActive) return;
    setOrigin({ x: e.clientX, y: e.clientY });
    if (containerRef.current) {
      setScrollStart({
        left: containerRef.current.scrollLeft,
        top: containerRef.current.scrollTop,
      });
      containerRef.current.style.cursor = "grabbing";
      containerRef.current.style.userSelect = "none";
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isHandActive || !origin || !scrollStart || !containerRef.current)
      return;
    const dx = e.clientX - origin.x;
    const dy = e.clientY - origin.y;
    containerRef.current.scrollLeft = scrollStart.left - dx;
    containerRef.current.scrollTop = start.top - dy;
  };

  const handleMouseUp = () => {
    if (!isHandActive) return;
    if (containerRef.current) containerRef.current.style.cursor = "grab";
    setOrigin(null);
    setScrollStart(null);
  };

  useEffect(() => {
    const updateCanvasRect = () => {
      const canvasEl = document.getElementById("canvas-background");
      if (canvasEl) {
        setCanvasRect(canvasEl.getBoundingClientRect());
      }
    };

    updateCanvasRect();
    window.addEventListener("resize", updateCanvasRect);
    if (containerRef.current) {
      containerRef.current.addEventListener("scroll", updateCanvasRect);
    }

    return () => {
      window.removeEventListener("resize", updateCanvasRect);
      if (containerRef.current) {
        containerRef.current.removeEventListener("scroll", updateCanvasRect);
      }
    };
  }, [scale]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex-1 overflow-auto bg-gray-100 relative"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <div
        style={{
          width: `calc(210mm + ${rulerSize}px)`,
          height: `calc(297mm + ${rulerSize}px)`,
          position: "relative",
          margin: "0 auto",
        }}
      >
        <Ruler
          scale={scale}
          onAddGuideLine={handleAddGuideLine}
          canvasRect={canvasRect}
          rulerSize={rulerSize}
        />
        <div
          ref={contentRef}
          style={{
            transform: `scale(${scale})`,
            transformOrigin: "top left",
            width: "210mm",
            height: "297mm",
            position: "absolute",
            left: `${rulerSize}px`,
            top: `${rulerSize}px`,
          }}
        >
          <Canvas
            blocks={blocks}
            setBlocks={setBlocks}
            selectedIds={selectedIds}
            setSelectedIds={setSelectedIds}
            scale={scale}
            guideLines={guideLines}
          />
        </div>
        {guideLines.map((guide) => (
          <div
            key={guide.id}
            className={`absolute bg-blue-500 cursor-pointer z-20 ${
              guide.type === "horizontal"
                ? "h-[1px] w-[210mm]"
                : "w-[1px] h-[297mm]"
            }`}
            style={
              guide.type === "horizontal"
                ? {
                    top: `${rulerSize + guide.position * scale}px`,
                    left: `${rulerSize}px`,
                  }
                : {
                    left: `${rulerSize + guide.position * scale}px`,
                    top: `${rulerSize}px`,
                  }
            }
            onClick={() => handleRemoveGuideLine(guide.id)}
          />
        ))}
      </div>
    </div>
  );
};
