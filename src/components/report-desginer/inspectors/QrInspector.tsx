import React from "react";
import { Block } from "@/types/report-desginer";
import { InspectorField } from "@/components/report-desginer/InspectorField";

export const QrInspector = ({
  block,
  updateStyle,
}: {
  block: Block;
  updateStyle: (s: any) => void;
}) => (
  <>
    <InspectorField label="QR Content">
      <input
        type="text"
        value={block.styles?.text || ""}
        onChange={(e) => updateStyle({ text: e.target.value })}
        className="w-full border rounded p-1 text-sm"
      />
    </InspectorField>

    <InspectorField label="QR Size">
      <input
        type="number"
        value={block.styles?.size || 120}
        onChange={(e) => updateStyle({ size: parseInt(e.target.value, 10) })}
        className="w-full border rounded p-1 text-sm"
      />
    </InspectorField>
  </>
);
