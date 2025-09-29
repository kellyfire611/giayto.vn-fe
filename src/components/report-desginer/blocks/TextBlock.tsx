"use client";
import { TextBlockData } from "@/types/report-desginer";
import BaseBlock from "./BaseBlock";
import { defaultTextBlockStyles } from "@/types/defaults";

type Props = {
  block: TextBlockData;
  updateBlock: (id: string, data: Partial<TextBlockData>) => void;
  onClick: () => void;
};

export default function TextBlock({ block, updateBlock, onClick }: Props) {
  console.log("TextBlock render, text:", JSON.stringify(block.styles?.text));
  return (
    <BaseBlock block={block} updateBlock={updateBlock} onClick={onClick}>
      <span
        style={{
          fontSize: block.styles?.fontSize ?? defaultTextBlockStyles.fontSize,
          color: block.styles?.color ?? defaultTextBlockStyles.color,
          textAlign: block.styles?.align ?? defaultTextBlockStyles.align,
          fontWeight:
            block.styles?.fontWeight ?? defaultTextBlockStyles.fontWeight,
          lineHeight:
            block.styles?.lineHeight ?? defaultTextBlockStyles.lineHeight,
          whiteSpace:
            block.styles?.whiteSpace ?? defaultTextBlockStyles.whiteSpace,
          overflowWrap:
            block.styles?.overflowWrap ?? defaultTextBlockStyles.overflowWrap,
        }}
      >
        {block.styles?.text ?? defaultTextBlockStyles.text}
      </span>
    </BaseBlock>
  );
}
