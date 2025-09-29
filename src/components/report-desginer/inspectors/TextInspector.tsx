import React from "react";
import { Block } from "@/types/report-desginer";
import { InspectorField } from "@/components/report-desginer/InspectorField";
import { BaseInspector } from "@/components/report-desginer/inspectors/BaseInspector";
import { defaultTextBlockStyles } from "@/types/defaults";

export const TextInspector = ({
  block,
  updateStyle,
}: {
  block: Block;
  updateStyle: (s: any) => void;
}) => (
  <>
    <BaseInspector block={block} updateStyle={updateStyle} />
    <InspectorField label="Text">
      <textarea
        value={block.styles?.text ?? ""}
        onChange={(e) => {
          console.log("Input value:", JSON.stringify(e.target.value));
          updateStyle({ text: e.target.value || undefined });
        }}
        onKeyDown={(e) => {
          console.log("Key pressed:", JSON.stringify(e.key));
        }}
        className="w-full border rounded p-1 text-sm"
        style={{ whiteSpace: "pre-wrap", resize: "vertical" }}
        rows={3}
        placeholder={defaultTextBlockStyles.text}
      />
    </InspectorField>
    <InspectorField label="Text Align">
      <select
        value={block.styles?.align ?? defaultTextBlockStyles.align}
        onChange={(e) => updateStyle({ align: e.target.value })}
        className="w-full border rounded p-1 text-sm"
      >
        <option value="left">Left</option>
        <option value="center">Center</option>
        <option value="right">Right</option>
      </select>
    </InspectorField>
    <InspectorField label="Font Weight">
      <select
        value={block.styles?.fontWeight ?? defaultTextBlockStyles.fontWeight}
        onChange={(e) => updateStyle({ fontWeight: e.target.value })}
        className="w-full border rounded p-1 text-sm"
      >
        <option value="normal">Normal</option>
        <option value="bold">Bold</option>
        <option value="lighter">Lighter</option>
        <option value="bolder">Bolder</option>
      </select>
    </InspectorField>
    <InspectorField label="Line Height">
      <input
        type="text"
        value={block.styles?.lineHeight ?? ""}
        onChange={(e) => updateStyle({ lineHeight: e.target.value || undefined })}
        className="w-full border rounded p-1 text-sm"
        placeholder={defaultTextBlockStyles.lineHeight}
      />
    </InspectorField>
    <InspectorField label="Word Wrap">
      <select
        value={block.styles?.overflowWrap ?? defaultTextBlockStyles.overflowWrap}
        onChange={(e) => updateStyle({ overflowWrap: e.target.value })}
        className="w-full border rounded p-1 text-sm"
      >
        <option value="normal">Normal</option>
        <option value="break-word">Break Word</option>
        <option value="anywhere">Anywhere</option>
      </select>
    </InspectorField>
    <InspectorField label="White Space">
      <select
        value={block.styles?.whiteSpace ?? defaultTextBlockStyles.whiteSpace}
        onChange={(e) => updateStyle({ whiteSpace: e.target.value })}
        className="w-full border rounded p-1 text-sm"
      >
        <option value="normal">Normal</option>
        <option value="pre">Pre</option>
        <option value="nowrap">No Wrap</option>
      </select>
    </InspectorField>
  </>
);