"use client";
import { QrBlockData } from "@/types/report-desginer";
import BaseBlock from "./BaseBlock";
import { QRCodeSVG } from "qrcode.react";

type Props = {
  block: QrBlockData;
  updateBlock: (id: string, data: Partial<QrBlockData>) => void;
  onClick: () => void;
};

export default function QrBlock({ block, updateBlock, onClick }: Props) {
  const value = block.styles?.text || "QR";

  // Nếu user chỉnh size ở inspector thì ưu tiên, nhưng không vượt quá block
  const qrSize = block.styles?.size
    ? Math.min(block.styles.size, block.width || 120, block.height || 120)
    : Math.min(block.width || 120, block.height || 120);

  return (
    <BaseBlock block={block} updateBlock={updateBlock} onClick={onClick}>
      <div
        style={{
          width: block.width,
          height: block.height,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden", // ✅ tránh tràn
        }}
      >
        <QRCodeSVG
          value={value}
          size={qrSize} // dùng size từ inspector nhưng giới hạn trong block
          draggable={false} // ✅ chặn drag ảnh mặc định
        />
      </div>
    </BaseBlock>
  );
}
