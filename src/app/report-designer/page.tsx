"use client";
import React, { useEffect, useRef, useState } from "react";
import { Sidebar } from "@/components/report-desginer/Sidebar";
import { CanvasWrapper } from "@/components/report-desginer/CanvasWrapper";
import Inspector from "@/components/report-desginer/Inspector";
import { Block } from "@/types/report-desginer";
import {
  saveLayoutToLocal,
  loadLayoutFromLocal,
  exportLayout,
  importLayout,
} from "@/lib/storage";
import { BlockContextMenu } from "@/components/report-desginer/BlockContextMenu";
import {
  IconTrash,
  IconCopy,
  IconArrowUp,
  IconArrowDown,
  IconDeviceFloppy,
  IconFolderOpen,
  IconFileExport,
  IconFileImport,
  IconZoomIn,
  IconZoomOut,
  IconZoomReset,
  IconZoomPan,
} from "@tabler/icons-react";
import { exportToPDF } from "@/lib/exportPDF";
import { exportToHTML } from "@/lib/exportToHTML";

type GuideLine = {
  id: string;
  type: "horizontal" | "vertical";
  position: number;
};

export default function ReportDesignerPage() {
  const [blocks, setBlocks] = useState<Block[]>([]);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [scale, setScale] = useState(1);
  const [guideLines, setGuideLines] = useState<GuideLine[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [testData, setTestData] = useState<Record<string, string>>({});

  const updateBlock = (id: string, data: Partial<Block>) =>
    setBlocks((prev) => prev.map((b) => (b.id === id ? { ...b, ...data } : b)));

  const selectedBlock =
    selectedIds.length === 1
      ? blocks.find((b) => b.id === selectedIds[0]) || null
      : null;

  const deleteBlock = (id: string) => {
    setBlocks((prev) => prev.filter((b) => b.id !== id));
    setSelectedIds((prev) => prev.filter((x) => x !== id));
  };

  const duplicateBlock = (id: string) => {
    setBlocks((prev) => {
      const original = prev.find((b) => b.id === id);
      if (!original) return prev;
      const copy = {
        ...original,
        id: String(Date.now()),
        x: original.x + 20,
        y: original.y + 20,
      };
      return [...prev, copy];
    });
  };

  const bringToFront = (id: string) =>
    setBlocks((prev) => {
      const blk = prev.find((b) => b.id === id);
      if (!blk) return prev;
      return [...prev.filter((b) => b.id !== id), blk];
    });

  const sendToBack = (id: string) =>
    setBlocks((prev) => {
      const blk = prev.find((b) => b.id === id);
      if (!blk) return prev;
      return [blk, ...prev.filter((b) => b.id !== id)];
    });

  const handleZoomIn = () => zoomAtCenter(0.1);
  const handleZoomOut = () => zoomAtCenter(-0.1);

  const handleZoomReset = () => {
    if (!containerRef.current) return;
    const parent = containerRef.current;
    const newScale = 1;
    setScale(newScale);
    const canvasEl = document.getElementById("canvas-background");
    if (!canvasEl) return;
    const scrollX = (canvasEl.offsetWidth * newScale - parent.clientWidth) / 2;
    const scrollY =
      (canvasEl.offsetHeight * newScale - parent.clientHeight) / 2;
    parent.scrollTo({ left: scrollX, top: scrollY, behavior: "smooth" });
  };

  const handleAutoFit = () => {
    const canvasEl = document.getElementById("canvas-background");
    if (!canvasEl || !containerRef.current) return;
    const parent = containerRef.current;
    const scaleX = parent.clientWidth / canvasEl.offsetWidth;
    const scaleY = parent.clientHeight / canvasEl.offsetHeight;
    const newScale = Math.min(scaleX, scaleY, 1) * 0.9;
    setScale(newScale);
    const scrollX = (canvasEl.offsetWidth * newScale - parent.clientWidth) / 2;
    const scrollY =
      (canvasEl.offsetHeight * newScale - parent.clientHeight) / 2;
    parent.scrollTo({ left: scrollX, top: scrollY, behavior: "smooth" });
  };

  const zoomAtCenter = (delta: number) => {
    if (!containerRef.current) return;
    const parent = containerRef.current;
    const oldScale = scale;
    const newScale = Math.min(Math.max(oldScale + delta, 0.2), 3);
    if (newScale === oldScale) return;
    setScale(newScale);
    const pointerX = parent.clientWidth / 2;
    const pointerY = parent.clientHeight / 2;
    const relX = pointerX + parent.scrollLeft;
    const relY = pointerY + parent.scrollTop;
    const ratio = newScale / oldScale;
    const newScrollLeft = relX * ratio - pointerX;
    const newScrollTop = relY * ratio - pointerY;
    parent.scrollTo({
      left: newScrollLeft,
      top: newScrollTop,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (e.ctrlKey && containerRef.current) {
        e.preventDefault();
        const parent = containerRef.current;
        const oldScale = scale;
        const delta = e.deltaY > 0 ? -0.05 : 0.05;
        const newScale = Math.min(Math.max(oldScale + delta, 0.2), 3);
        if (newScale === oldScale) return;
        setScale(newScale);
        const rect = parent.getBoundingClientRect();
        const pointerX = e.clientX - rect.left;
        const pointerY = e.clientY - rect.top;
        const relX = pointerX + parent.scrollLeft;
        const relY = pointerY + parent.scrollTop;
        const ratio = newScale / oldScale;
        const newScrollLeft = relX * ratio - pointerX;
        const newScrollTop = relY * ratio - pointerY;
        parent.scrollTo(newScrollLeft, newScrollTop);
      }
    };
    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [scale]);

  const handleSaveLocal = () => saveLayoutToLocal(blocks);
  const handleLoadLocal = () => setBlocks(loadLayoutFromLocal());
  const handleExport = () => exportLayout(blocks);
  const handleImport = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const data = await importLayout(file);
    setBlocks(data);
  };
  const handleExportPDF = () => {
    const sampleData: Record<string, string> = {
      "1759042770743": "Dynamic Text Content",
    };
    exportToPDF(blocks, sampleData);
  };
  const handleExportHTML = () => {
    exportToHTML(blocks, testData);
  };

  const handleClearGuides = () => {
    setGuideLines([]);
  };

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (
        document.activeElement?.tagName === "INPUT" ||
        document.activeElement?.tagName === "TEXTAREA"
      ) {
        return;
      }
      if (selectedIds.length === 0) return;
      if (e.key === "Delete") {
        e.preventDefault();
        selectedIds.forEach((id) => deleteBlock(id));
        setSelectedIds([]);
      }
      if (e.ctrlKey && e.key.toLowerCase() === "d") {
        e.preventDefault();
        selectedIds.forEach((id) => duplicateBlock(id));
      }
      if (e.ctrlKey && e.key === "ArrowUp") {
        e.preventDefault();
        selectedIds.forEach((id) => bringToFront(id));
      }
      if (e.ctrlKey && e.key === "ArrowDown") {
        e.preventDefault();
        selectedIds.forEach((id) => sendToBack(id));
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedIds]);

  return (
    <div className="flex flex-col h-screen">
      <header className="flex items-center justify-between bg-gray-800 text-white px-4 py-2">
        <h1 className="text-lg font-bold">Report Designer</h1>
        <div className="flex space-x-2">
          <button
            onClick={handleSaveLocal}
            className="p-2 bg-blue-500 rounded hover:bg-blue-600 cursor-pointer"
            title="Save to Local"
          >
            <IconDeviceFloppy size={20} />
          </button>
          <button
            onClick={handleLoadLocal}
            className="p-2 rounded hover:bg-gray-600 cursor-pointer"
            title="Load from Local"
          >
            <IconFolderOpen size={20} />
          </button>
          <button
            onClick={handleExport}
            className="p-2 rounded hover:bg-gray-600 cursor-pointer"
            title="Export JSON"
          >
            <IconFileExport size={20} />
          </button>
          <label
            className="p-2 rounded hover:bg-gray-600 cursor-pointer"
            title="Import JSON"
          >
            <IconFileImport size={20} />
            <input
              type="file"
              accept="application/json"
              className="hidden"
              onChange={handleImport}
            />
          </label>
          <button
            onClick={handleZoomIn}
            className="p-2 rounded hover:bg-gray-600 cursor-pointer"
            title="Zoom In"
          >
            <IconZoomIn size={20} />
          </button>
          <button
            onClick={handleZoomOut}
            className="p-2 rounded hover:bg-gray-600 cursor-pointer"
            title="Zoom Out"
          >
            <IconZoomOut size={20} />
          </button>
          <button
            onClick={handleZoomReset}
            className="p-2 rounded hover:bg-gray-600 cursor-pointer"
            title="Reset Zoom"
          >
            <IconZoomReset size={20} />
          </button>
          <button
            onClick={handleAutoFit}
            className="p-2 rounded hover:bg-gray-600 cursor-pointer"
            title="Auto Fit"
          >
            <IconZoomPan size={20} />
          </button>
          <button
            onClick={handleExportPDF}
            className="p-2 rounded hover:bg-gray-600 cursor-pointer"
            title="Export PDF"
          >
            Export PDF
          </button>
          <button
            onClick={handleExportHTML}
            className="p-2 rounded hover:bg-gray-600 cursor-pointer"
            title="Export HTML"
          >
            Export HTML
          </button>
          <button
            onClick={handleClearGuides}
            className="p-2 rounded hover:bg-gray-600 cursor-pointer"
            title="Clear Guide Lines"
          >
            Clear Guides
          </button>
        </div>
      </header>
      <div className="flex flex-1 overflow-hidden">
        <div className="w-64 border-r overflow-auto">
          <Sidebar />
        </div>
        <div
          ref={containerRef}
          className="flex-1 flex flex-col justify-center items-center overflow-auto bg-gray-100"
        >
          <div className="flex justify-center items-center bg-gray-200 py-2 space-x-4">
            <button
              onClick={() => {
                selectedIds.forEach(deleteBlock);
                setSelectedIds([]);
              }}
              disabled={selectedIds.length === 0}
              className="p-2 rounded hover:bg-gray-300 disabled:opacity-50 cursor-pointer"
              title="Delete"
            >
              <IconTrash size={20} />
            </button>
            <button
              onClick={() => selectedIds.forEach(duplicateBlock)}
              disabled={selectedIds.length === 0}
              className="p-2 rounded hover:bg-gray-300 disabled:opacity-50 cursor-pointer"
              title="Duplicate"
            >
              <IconCopy size={20} />
            </button>
            <button
              onClick={() => selectedIds.forEach(bringToFront)}
              disabled={selectedIds.length === 0}
              className="p-2 rounded hover:bg-gray-300 disabled:opacity-50 cursor-pointer"
              title="Bring to Front"
            >
              <IconArrowUp size={20} />
            </button>
            <button
              onClick={() => selectedIds.forEach(sendToBack)}
              disabled={selectedIds.length === 0}
              className="p-2 rounded hover:bg-gray-300 disabled:opacity-50 cursor-pointer"
              title="Send to Back"
            >
              <IconArrowDown size={20} />
            </button>
          </div>
          <CanvasWrapper
            blocks={blocks}
            setBlocks={setBlocks}
            selectedIds={selectedIds}
            setSelectedIds={setSelectedIds}
            scale={scale}
          />
        </div>
        <div className="w-80 border-l overflow-auto">
          <Inspector block={selectedBlock} onUpdate={updateBlock} />
        </div>
      </div>
      <footer className="h-8 bg-gray-200 px-4 flex items-center text-sm">
        {selectedIds.length > 0
          ? `${selectedIds.length} block${
              selectedIds.length > 1 ? "s" : ""
            } selected`
          : "No block selected"}
        {guideLines.length > 0 &&
          ` | ${guideLines.length} guide line${
            guideLines.length > 1 ? "s" : ""
          }`}
      </footer>
      <BlockContextMenu
        onDelete={deleteBlock}
        onDuplicate={duplicateBlock}
        onBringFront={bringToFront}
        onSendBack={sendToBack}
      />
    </div>
  );
}
