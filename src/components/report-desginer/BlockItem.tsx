"use client";
import React from "react";
import { Rnd } from "react-rnd";
import { Block } from "@/types/report-desginer";
import TextBlock from "@/components/report-desginer/blocks/TextBlock";
import ImageBlock from "@/components/report-desginer/blocks/ImageBlock";
import QrBlock from "@/components/report-desginer/blocks/QrBlock";
import TableBlock from "@/components/report-desginer/blocks/TableBlock";

type GuideLine = {
  id: string;
  type: "horizontal" | "vertical";
  position: number;
};

type Props = {
  block: Block;
  isSelected: boolean;
  onSelect: (id: string, shiftKey?: boolean) => void;
  onUpdate: (id: string, data: Partial<Block>) => void;
  scale: number;
  guideLines: GuideLine[];
};

export const BlockItem = ({
  block,
  isSelected,
  onSelect,
  onUpdate,
  scale,
  guideLines,
}: Props) => {
  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    onSelect(block.id);
    const event = new CustomEvent("open-block-menu", {
      detail: { x: e.clientX, y: e.clientY, id: block.id },
    });
    window.dispatchEvent(event);
  };

  const snapToGuides = (
    x: number,
    y: number,
    width: number,
    height: number
  ) => {
    const snapThreshold = 10; // pixels
    let snappedX = x;
    let snappedY = y;
    let snappedWidth = width;
    let snappedHeight = height;

    guideLines.forEach((guide) => {
      if (guide.type === "vertical") {
        // Snap left edge
        if (Math.abs(guide.position - x) < snapThreshold) {
          snappedX = guide.position;
        }
        // Snap right edge
        if (Math.abs(guide.position - (x + width)) < snapThreshold) {
          snappedWidth = guide.position - x;
        }
      }
      if (guide.type === "horizontal") {
        // Snap top edge
        if (Math.abs(guide.position - y) < snapThreshold) {
          snappedY = guide.position;
        }
        // Snap bottom edge
        if (Math.abs(guide.position - (y + height)) < snapThreshold) {
          snappedHeight = guide.position - y;
        }
      }
    });

    return {
      x: snappedX,
      y: snappedY,
      width: snappedWidth,
      height: snappedHeight,
    };
  };

  const renderBlock = () => {
    switch (block.type) {
      case "text":
        return (
          <TextBlock
            block={block}
            updateBlock={onUpdate}
            onClick={() => onSelect(block.id)}
          />
        );
      case "image":
        return (
          <ImageBlock
            block={block}
            updateBlock={onUpdate}
            onClick={() => onSelect(block.id)}
          />
        );
      case "qr":
        return (
          <QrBlock
            block={block}
            updateBlock={onUpdate}
            onClick={() => onSelect(block.id)}
          />
        );
      case "table":
        return (
          <TableBlock
            block={block}
            updateBlock={onUpdate}
            onClick={() => onSelect(block.id)}
          />
        );
      default:
        return <span>Unknown Block</span>;
    }
  };

  return (
    <Rnd
      size={{ width: block.width, height: block.height }}
      position={{ x: block.x, y: block.y }}
      bounds="parent"
      onDragStop={(e, d) => {
        const { x, y } = snapToGuides(d.x, d.y, block.width, block.height);
        onUpdate(block.id, { x: Math.round(x), y: Math.round(y) });
      }}
      onResizeStop={(e, dir, ref, delta, pos) => {
        const { x, y, width, height } = snapToGuides(
          pos.x,
          pos.y,
          parseInt(ref.style.width, 10),
          parseInt(ref.style.height, 10)
        );
        onUpdate(block.id, {
          width: Math.round(width),
          height: Math.round(height),
          x: Math.round(x),
          y: Math.round(y),
        });
      }}
      dragGrid={[10, 10]}
      resizeGrid={[10, 10]}
      onClick={(e: { shiftKey: boolean | undefined; }) => onSelect(block.id, e.shiftKey)}
      onContextMenu={handleContextMenu}
      scale={scale}
      className={`absolute ${isSelected
          ? "border-2 border-blue-500 shadow-lg ring-2 ring-blue-300"
          : "border border-dashed border-gray-400"
        }`}
      style={{
        fontSize: block.styles?.fontSize,
        color: block.styles?.color,
        backgroundColor: block.styles?.backgroundColor,
        borderColor: block.styles?.borderColor,
        borderWidth: block.styles?.borderWidth,
      }}
    >
      {renderBlock()}
    </Rnd>
  );
};
