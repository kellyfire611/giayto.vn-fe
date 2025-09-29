import React from "react";
import { InspectorField } from "@/components/report-desginer/InspectorField";
import { Block } from "@/types/report-desginer";
import { defaultBaseStyles } from "@/types/defaults";

export const BaseInspector = ({
  block,
  updateStyle,
}: {
  block: Block;
  updateStyle: (s: any) => void;
}) => (
  <>
    <InspectorField label="Font Size">
      <input
        type="number"
        value={block.styles?.fontSize ?? ""}
        onChange={(e) => {
          const value = e.target.value;
          updateStyle({ fontSize: value ? parseInt(value) : undefined });
        }}
        className="w-full border rounded p-1 text-sm"
        placeholder={String(defaultBaseStyles.fontSize)}
      />
    </InspectorField>
    <InspectorField label="Text Color">
      <input
        type="color"
        value={block.styles?.color ?? defaultBaseStyles.color}
        onChange={(e) => updateStyle({ color: e.target.value })}
        className="w-full"
      />
    </InspectorField>
    <InspectorField label="Background Color">
      <input
        type="color"
        value={
          block.styles?.backgroundColor ?? defaultBaseStyles.backgroundColor
        }
        onChange={(e) => updateStyle({ backgroundColor: e.target.value })}
        className="w-full"
      />
    </InspectorField>
    <InspectorField label="Border Width">
      <input
        type="number"
        value={block.styles?.borderWidth ?? ""}
        onChange={(e) => {
          const value = e.target.value;
          updateStyle({ borderWidth: value ? parseInt(value) : undefined });
        }}
        className="w-full border rounded p-1 text-sm"
        placeholder={String(defaultBaseStyles.borderWidth)}
      />
    </InspectorField>
    <InspectorField label="Border Color">
      <input
        type="color"
        value={block.styles?.borderColor ?? defaultBaseStyles.borderColor}
        onChange={(e) => updateStyle({ borderColor: e.target.value })}
        className="w-full"
      />
    </InspectorField>
    <InspectorField label="Border Style">
      <select
        value={block.styles?.borderStyle ?? defaultBaseStyles.borderStyle}
        onChange={(e) => updateStyle({ borderStyle: e.target.value })}
        className="w-full border rounded p-1 text-sm"
      >
        <option value="solid">Solid</option>
        <option value="dashed">Dashed</option>
        <option value="dotted">Dotted</option>
        <option value="none">None</option>
      </select>
    </InspectorField>
    <InspectorField label="Padding">
      <input
        type="text"
        value={block.styles?.padding ?? ""}
        onChange={(e) => updateStyle({ padding: e.target.value || undefined })}
        className="w-full border rounded p-1 text-sm"
        placeholder={defaultBaseStyles.padding}
      />
    </InspectorField>
    <InspectorField label="Opacity">
      <input
        type="number"
        step="0.1"
        min="0"
        max="1"
        value={block.styles?.opacity ?? defaultBaseStyles.opacity}
        onChange={(e) => updateStyle({ opacity: parseFloat(e.target.value) })}
        className="w-full border rounded p-1 text-sm"
      />
    </InspectorField>
    <InspectorField label="Box Shadow">
      <input
        type="text"
        value={block.styles?.boxShadow ?? ""}
        onChange={(e) =>
          updateStyle({ boxShadow: e.target.value || undefined })
        }
        className="w-full border rounded p-1 text-sm"
        placeholder={
          defaultBaseStyles.boxShadow || "e.g., 0 4px 8px rgba(0,0,0,0.1)"
        }
      />
    </InspectorField>
    <InspectorField label="Margin">
      <input
        type="text"
        value={block.styles?.margin ?? ""}
        onChange={(e) => updateStyle({ margin: e.target.value || undefined })}
        className="w-full border rounded p-1 text-sm"
        placeholder={defaultBaseStyles.margin}
      />
    </InspectorField>
  </>
);
