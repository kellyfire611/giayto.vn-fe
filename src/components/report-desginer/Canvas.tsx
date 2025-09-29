"use client";
import React, { useEffect, useRef } from "react";
import { dropTargetForElements } from "@atlaskit/pragmatic-drag-and-drop/element/adapter";
import { Block, BlockType } from "@/types/report-desginer";
import { BlockItem } from "./BlockItem";

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
  guideLines: GuideLine[];
};

export const Canvas = ({
  blocks,
  setBlocks,
  selectedIds,
  setSelectedIds,
  scale,
  guideLines,
}: Props) => {
  const canvasRef = useRef<HTMLDivElement | null>(null);

  const updateBlock = (id: string, data: Partial<Block>) => {
    setBlocks((prev) => prev.map((b) => (b.id === id ? { ...b, ...data } : b)));
  };

  const handleCanvasClick = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).id === "canvas-background") {
      setSelectedIds([]);
    }
  };

  useEffect(() => {
    if (!canvasRef.current) return;
    const cleanup = dropTargetForElements({
      element: canvasRef.current,
      getData: () => ({ dropZone: "canvas" }),
      onDrop: (args) => {
        const type = args.source?.data?.type as BlockType | undefined;
        if (!type) return;

        const rect = canvasRef.current!.getBoundingClientRect();
        const clientX = args.location.current.input.clientX;
        const clientY = args.location.current.input.clientY;
        let x = Math.max(0, Math.round((clientX - rect.left) / scale));
        let y = Math.max(0, Math.round((clientY - rect.top) / scale));

        // Snap to nearest guide line
        const snapThreshold = 10; // pixels
        guideLines.forEach((guide) => {
          if (
            guide.type === "vertical" &&
            Math.abs(guide.position - x) < snapThreshold
          ) {
            x = guide.position;
          }
          if (
            guide.type === "horizontal" &&
            Math.abs(guide.position - y) < snapThreshold
          ) {
            y = guide.position;
          }
        });

        const newBlock: Block = {
          id: String(Date.now()),
          type,
          x,
          y,
          width: 120,
          height: 60,
          styles: {
            fontSize: 14,
            color: "#000000",
            backgroundColor: "#ffffff",
            borderColor: "#999999",
            borderWidth: 1,
            text: type === "text" ? "Sample Text" : "",
            src: type === "image" ? "" : undefined,
            size: type === "qr" ? 120 : undefined,
            rows: type === "table" ? 3 : undefined,
            cols: type === "table" ? 3 : undefined,
          },
        };
        setBlocks((prev) => [...prev, newBlock]);
      },
    });

    return () => {
      if (typeof cleanup === "function") cleanup();
    };
  }, [setBlocks, scale, guideLines]);

  return (
    <div
      ref={canvasRef}
      id="canvas-background"
      className="relative bg-white shadow-xl border"
      onClick={handleCanvasClick}
      style={{
        width: "210mm",
        height: "297mm",
        backgroundImage:
          "linear-gradient(to right, #eee 1px, transparent 1px), linear-gradient(to bottom, #eee 1px, transparent 1px)",
        backgroundSize: `10px 10px`,
      }}
    >
      {blocks.map((block) => (
        <BlockItem
          key={block.id}
          block={block}
          isSelected={selectedIds.includes(block.id)}
          onSelect={(id, shiftKey) => {
            if (shiftKey) {
              setSelectedIds((prev) =>
                prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
              );
            } else {
              setSelectedIds([id]);
            }
          }}
          onUpdate={updateBlock}
          scale={scale}
          guideLines={guideLines}
        />
      ))}
    </div>
  );
};
