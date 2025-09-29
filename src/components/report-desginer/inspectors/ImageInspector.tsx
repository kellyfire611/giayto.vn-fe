import React from "react";
import { Block } from "@/types/report-desginer";
import { InspectorField } from "@/components/report-desginer/InspectorField";
import { BaseInspector } from "@/components/report-desginer/inspectors/BaseInspector";

export const ImageInspector = ({
  block,
  updateStyle,
}: {
  block: Block;
  updateStyle: (s: any) => void;
}) => (
  <>
    <BaseInspector block={block} updateStyle={updateStyle} />
    <InspectorField label="Image URL">
      <input
        type="text"
        value={block.styles?.src || ""}
        onChange={(e) => {
          updateStyle({ src: e.target.value });
        }}
        className="w-full border rounded p-1 text-sm"
        placeholder="https://..."
      />
    </InspectorField>
    <InspectorField label="Text Align">
      <select
        value={block.styles?.align || "center"}
        onChange={(e) => updateStyle({ align: e.target.value })}
        className="w-full border rounded p-1 text-sm"
      >
        <option value="left">Left</option>
        <option value="center">Center</option>
        <option value="right">Right</option>
      </select>
    </InspectorField>
    <InspectorField label="Border Radius">
      <input
        type="number"
        value={block.styles?.borderRadius || 0}
        onChange={(e) =>
          updateStyle({ borderRadius: parseInt(e.target.value, 10) })
        }
        className="w-full border rounded p-1 text-sm"
      />
    </InspectorField>
    <InspectorField label="Object Fit">
      <select
        value={block.styles?.objectFit || "contain"}
        onChange={(e) => updateStyle({ objectFit: e.target.value })}
        className="w-full border rounded p-1 text-sm"
      >
        <option value="contain">Contain</option>
        <option value="cover">Cover</option>
        <option value="fill">Fill</option>
      </select>
    </InspectorField>
  </>
);