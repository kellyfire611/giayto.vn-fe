"use client";
import { Block } from "@/types/report-desginer";
import { TextInspector } from "@/components/report-desginer/inspectors/TextInspector";
import { ImageInspector } from "@/components/report-desginer/inspectors/ImageInspector";
import { TableInspector } from "@/components/report-desginer/inspectors/TableInspector";
import { QrInspector } from "@/components/report-desginer/inspectors/QrInspector";

type Props = {
  block: Block | null;
  onUpdate: (id: string, data: Partial<Block>) => void;
};

export default function Inspector({ block, onUpdate }: Props) {
  if (!block) {
    return (
      <div className="w-64 p-4 border-l bg-gray-50">
        <p className="text-gray-500">No block selected</p>
      </div>
    );
  }

  // merge style mới vào styles cũ
  const updateStyle = (style: any) => {
    onUpdate(block.id, {
      styles: {
        ...block.styles,
        ...style,
      },
    });
  };

  return (
    <div className="w-64 p-4 border-l bg-gray-50 overflow-y-auto">
      <h3 className="font-bold mb-2">Inspector ({block.type})</h3>

      {block.type === "text" && (
        <TextInspector block={block} updateStyle={updateStyle} />
      )}
      {block.type === "image" && (
        <ImageInspector block={block} updateStyle={updateStyle} />
      )}
      {block.type === "table" && (
        <TableInspector block={block} updateStyle={updateStyle} />
      )}
      {block.type === "qr" && (
        <QrInspector block={block} updateStyle={updateStyle} />
      )}
    </div>
  );
}
