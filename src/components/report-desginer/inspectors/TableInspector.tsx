import React from "react";
import { Block } from "@/types/report-desginer";
import { InspectorField } from "@/components/report-desginer/InspectorField";

export const TableInspector = ({
  block,
  updateStyle,
}: {
  block: Block;
  updateStyle: (s: any) => void;
}) => (
  <>
    <InspectorField label="Rows">
      <input
        type="number"
        value={block.styles?.rows || 3}
        onChange={(e) => updateStyle({ rows: parseInt(e.target.value, 10) })}
        className="w-full border rounded p-1 text-sm"
      />
    </InspectorField>

    <InspectorField label="Columns">
      <input
        type="number"
        value={block.styles?.cols || 3}
        onChange={(e) => updateStyle({ cols: parseInt(e.target.value, 10) })}
        className="w-full border rounded p-1 text-sm"
      />
    </InspectorField>
  </>
);
