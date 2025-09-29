import { BaseStyles, TextBlockStyles, ImageBlockStyles } from "@/types/report-desginer";

// Giá trị mặc định cho BaseStyles
export const defaultBaseStyles: Required<BaseStyles> = {
  fontSize: 14,
  color: "#000000",
  backgroundColor: "#ffffff",
  borderColor: "#000000",
  borderWidth: 1,
  borderRadius: 0,
  borderStyle: "solid",
  padding: "4px",
  opacity: 1,
  boxShadow: "",
  margin: "0px",
};

// Giá trị mặc định cho TextBlockStyles
export const defaultTextBlockStyles: Required<TextBlockStyles> = {
  ...defaultBaseStyles,
  text: "TEXT",
  align: "left",
  fontWeight: "normal",
  lineHeight: "normal",
  whiteSpace: "pre-wrap",
  overflowWrap: "break-word",
};

// Giá trị mặc định cho ImageBlockStyles
export const defaultImageBlockStyles: Required<ImageBlockStyles> = {
  ...defaultBaseStyles,
  src: "",
  objectFit: "contain",
  align: "center",
};

// Hàm áp dụng giá trị mặc định cho một block
export const applyDefaultStyles = <T extends BaseStyles>(block: { styles?: T }): Required<T> => {
  if (block.styles?.type === "text") {
    return { ...defaultTextBlockStyles, ...block.styles } as Required<T>;
  }
  if (block.styles?.type === "image") {
    return { ...defaultImageBlockStyles, ...block.styles } as Required<T>;
  }
  return { ...defaultBaseStyles, ...block.styles } as Required<T>;
};