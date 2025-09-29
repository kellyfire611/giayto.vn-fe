import React from "react";
import { Block, TextBlockData, ImageBlockData } from "@/types/report-desginer";
import { applyDefaultStyles } from "@/types/defaults";

type Props = {
  blocks: Block[];
  data?: Record<string, string>; // Dữ liệu động để thay thế (ví dụ: text cho TextBlock)
};

export const HTMLPreview = ({ blocks, data = {} }: Props) => {
  return (
    <div
      style={{
        width: "210mm",
        height: "297mm",
        backgroundColor: "#ffffff",
        position: "relative",
        margin: "auto",
        fontFamily: "'Roboto', sans-serif", // Font hỗ trợ tiếng Việt
        border: "1px solid #000"
      }}
    >
      {blocks.map((block) => {
        const blockStyles = applyDefaultStyles(block); // Áp dụng giá trị mặc định
        const blockStyle: React.CSSProperties = {
          position: "absolute",
          left: `${block.x}px`,
          top: `${block.y}px`,
          width: `${block.width}px`,
          height: `${block.height}px`,
          fontSize: blockStyles.fontSize,
          color: blockStyles.color,
          backgroundColor: blockStyles.backgroundColor,
          borderColor: blockStyles.borderColor,
          borderWidth: blockStyles.borderWidth,
          borderStyle: blockStyles.borderStyle,
          padding: blockStyles.padding,
          opacity: blockStyles.opacity,
          boxShadow: blockStyles.boxShadow || undefined,
          margin: blockStyles.margin,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        };

        if (block.type === "text") {
          const textBlock = block as TextBlockData;
          const textContent = data[block.id] ?? (blockStyles.text || "TEXT");
          return (
            <div key={block.id} style={blockStyle}>
              <span
                style={{
                  textAlign: blockStyles.align as any,
                  fontWeight: blockStyles.fontWeight as any,
                  lineHeight: blockStyles.lineHeight,
                  whiteSpace: blockStyles.whiteSpace as any,
                  overflowWrap: blockStyles.overflowWrap as any,
                }}
              >
                {textContent}
              </span>
            </div>
          );
        }

        if (block.type === "image") {
          const imageBlock = block as ImageBlockData;
          const imageSrc = blockStyles.src || "https://nentang.vn/assets/img/logos/logo-nentang-v2-icon-only-transparent.svg"; // Fallback
          return (
            <div key={block.id} style={blockStyle}>
              <img
                src={imageSrc}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: blockStyles.objectFit as any,
                }}
                alt="Preview Image"
              />
            </div>
          );
        }

        return null; // Bỏ qua block không hỗ trợ
      })}
    </div>
  );
};
