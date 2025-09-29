"use client";
import { TableBlockData } from "@/types/report-desginer";
import BaseBlock from "./BaseBlock";

type Props = {
  block: TableBlockData;
  updateBlock: (id: string, data: Partial<TableBlockData>) => void;
  onClick: () => void;
};

export default function TableBlock({ block, updateBlock, onClick }: Props) {
  const rows = block.styles?.rows || 3;
  const cols = block.styles?.cols || 3;
  const cellPadding = block.styles?.cellPadding || 4;

  return (
    <BaseBlock block={block} updateBlock={updateBlock} onClick={onClick}>
      <table className="border border-collapse w-full h-full text-xs">
        <tbody>
          {Array.from({ length: rows }).map((_, r) => (
            <tr key={r}>
              {Array.from({ length: cols }).map((_, c) => (
                <td
                  key={c}
                  className="border text-center"
                  style={{ padding: cellPadding }}
                >
                  {r + 1},{c + 1}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </BaseBlock>
  );
}
