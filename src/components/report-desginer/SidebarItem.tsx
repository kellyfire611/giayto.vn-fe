"use client";
import React, { useEffect, useRef } from "react";
import { draggable } from "@atlaskit/pragmatic-drag-and-drop/element/adapter";
import { BlockType } from "@/types/report-desginer";

export const SidebarItem = ({ type }: { type: BlockType }) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    const cleanup = draggable({
      element: ref.current,
      getInitialData: () => ({ type }),
    });
    return () => {
      if (typeof cleanup === "function") cleanup();
    };
  }, [type]);

  return (
    <div
      ref={ref}
      className="p-2 bg-blue-100 border rounded cursor-grab select-none"
    >
      {type.toUpperCase()}
    </div>
  );
};
