"use client";
import { ImageBlockData } from "@/types/report-desginer";
import BaseBlock from "./BaseBlock";

type Props = {
  block: ImageBlockData;
  updateBlock: (id: string, data: Partial<ImageBlockData>) => void;
  onClick: () => void;
};

export default function ImageBlock({ block, updateBlock, onClick }: Props) {
  const src = block.styles?.src?.trim() || "https://nentang.vn/assets/img/logos/logo-nentang-v2-icon-only-transparent.svg";
  const borderRadius = block.styles?.borderRadius || 0;
  const objectFit = block.styles?.objectFit || "contain";

  return (
    <BaseBlock block={block} updateBlock={updateBlock} onClick={onClick}>
      {src ? (
        <img
          src={src}
          alt="Image block"
          className="w-full h-full"
          style={{
            borderRadius: `${borderRadius}px`, // ✅ ép thành px
            objectFit, // ✅ valid: "contain" | "cover" | "fill"
            textAlign: block.styles?.align || "center",
          }}
          draggable={false} // ✅ chặn drag ảnh mặc định
        />
      ) : (
        <span className="text-gray-400">🖼 IMAGE</span>
      )}
    </BaseBlock>
  );
}
