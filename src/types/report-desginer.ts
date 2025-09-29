export type BlockType = "text" | "image" | "table" | "qr";

/** Những style chung cho mọi block */
export type BaseStyles = {
  fontSize?: number;
  color?: string;
  backgroundColor?: string;
  borderColor?: string;
  borderWidth?: number;
  borderRadius?: number;
  borderStyle?: "solid" | "dashed" | "dotted" | "none";
  padding?: string;
  opacity?: number;
  boxShadow?: string;
  margin?: string;
};

/** Styles riêng cho từng loại block */
export type TextBlockStyles = BaseStyles & {
  text?: string;
  align?: "left" | "center" | "right";
  fontWeight?: "normal" | "bold" | "lighter" | "bolder" | string;
  lineHeight?: string;
  whiteSpace?: "normal" | "pre" | "pre-wrap" | "nowrap";
  overflowWrap?: "normal" | "break-word" | "anywhere";
};

export type ImageBlockStyles = BaseStyles & {
  src?: string; // image url
  objectFit?: "contain" | "cover" | "fill";
  align?: "left" | "center" | "right";
};

export type TableBlockStyles = BaseStyles & {
  rows?: number;
  cols?: number;
  cellPadding?: number;
};

export type QrBlockStyles = BaseStyles & {
  text?: string; // qr content
  size?: number; // px
};

/** Base block fields */
export type BaseBlock = {
  id: string;
  type: BlockType;
  x: number;
  y: number;
  width: number;
  height: number;
};

/** Discriminated union: Block cụ thể theo type */
export type TextBlockData = BaseBlock & {
  type: "text";
  styles?: TextBlockStyles;
};
export type ImageBlockData = BaseBlock & {
  type: "image";
  styles?: ImageBlockStyles;
};
export type TableBlockData = BaseBlock & {
  type: "table";
  styles?: TableBlockStyles;
};
export type QrBlockData = BaseBlock & { type: "qr"; styles?: QrBlockStyles };

export type Block =
  | TextBlockData
  | ImageBlockData
  | TableBlockData
  | QrBlockData;
