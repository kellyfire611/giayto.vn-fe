"use client";
import { Block } from "@/types/report-desginer";
import { defaultBaseStyles } from "@/types/defaults";

type Props = {
  block: Block;
  children: React.ReactNode;
};

export default function BaseBlock({ block, children }: Props) {
  console.log("BaseBlock styles:", block.styles); // Debug giá trị styles
  return (
    <div
      className="w-full h-full flex items-center justify-center text-sm"
      style={{
        fontSize: block.styles?.fontSize ?? defaultBaseStyles.fontSize,
        color: block.styles?.color ?? defaultBaseStyles.color,
        backgroundColor:
          block.styles?.backgroundColor ?? defaultBaseStyles.backgroundColor,
        borderColor: block.styles?.borderColor ?? defaultBaseStyles.borderColor,
        borderWidth: block.styles?.borderWidth ?? defaultBaseStyles.borderWidth,
        borderStyle: block.styles?.borderStyle ?? defaultBaseStyles.borderStyle,
        padding: block.styles?.padding ?? defaultBaseStyles.padding,
        opacity: block.styles?.opacity ?? defaultBaseStyles.opacity,
        boxShadow: block.styles?.boxShadow ?? defaultBaseStyles.boxShadow,
        margin: block.styles?.margin ?? defaultBaseStyles.margin,
      }}
    >
      {children}
    </div>
  );
}
