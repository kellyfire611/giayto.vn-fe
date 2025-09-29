"use client";
import React, { useEffect, useState } from "react";

type Props = {
  onDelete: (id: string) => void;
  onDuplicate: (id: string) => void;
  onBringFront: (id: string) => void;
  onSendBack: (id: string) => void;
};

export const BlockContextMenu = ({
  onDelete,
  onDuplicate,
  onBringFront,
  onSendBack,
}: Props) => {
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);
  const [blockId, setBlockId] = useState<string | null>(null);

  useEffect(() => {
    const handler = (e: any) => {
      setPos({ x: e.detail.x, y: e.detail.y });
      setBlockId(e.detail.id);
    };
    window.addEventListener("open-block-menu", handler as any);
    return () => window.removeEventListener("open-block-menu", handler as any);
  }, []);

  const close = () => setPos(null);

  if (!pos || !blockId) return null;

  return (
    <div
      className="absolute z-50 bg-white border rounded shadow-lg text-sm"
      style={{ top: pos.y, left: pos.x }}
      onMouseLeave={close}
    >
      <button
        onClick={() => {
          onDuplicate(blockId);
          close();
        }}
        className="block w-full px-3 py-2 text-left hover:bg-gray-100"
      >
        Duplicate
      </button>
      <button
        onClick={() => {
          onDelete(blockId);
          close();
        }}
        className="block w-full px-3 py-2 text-left hover:bg-gray-100 text-red-600"
      >
        Delete
      </button>
      <button
        onClick={() => {
          onBringFront(blockId);
          close();
        }}
        className="block w-full px-3 py-2 text-left hover:bg-gray-100"
      >
        Bring to Front
      </button>
      <button
        onClick={() => {
          onSendBack(blockId);
          close();
        }}
        className="block w-full px-3 py-2 text-left hover:bg-gray-100"
      >
        Send to Back
      </button>
    </div>
  );
};
