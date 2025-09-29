"use client";
import React from "react";
import { SidebarItem } from "./SidebarItem";
import { BlockType } from "@/types/report-desginer";

export const Sidebar = () => {
  const blockTypes: BlockType[] = ["text", "image", "table", "qr"];
  return (
    <div className="w-48 p-4 border-r bg-gray-50 space-y-2">
      {blockTypes.map((t) => (
        <SidebarItem key={t} type={t} />
      ))}
    </div>
  );
};
