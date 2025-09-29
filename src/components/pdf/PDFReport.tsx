// PDFReport.tsx
import React, { useEffect } from "react";
import {
  Document,
  Page,
  View,
  Text,
  Image,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";
import { Block, TextBlockData, ImageBlockData } from "@/types/report-desginer";
import { applyDefaultStyles } from "@/types/defaults";

// Register font hỗ trợ tiếng Việt (Roboto) - Tải từ CDN hoặc local
const registerVietnameseFont = () => {
  Font.register({
    family: "Roboto",
    src: "https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu4mxK.woff2", // Roboto Regular WOFF2
    fontWeight: "normal",
  });
  Font.register({
    family: "Roboto",
    src: "https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmEU9fBBc4.woff2", // Roboto Bold WOFF2
    fontWeight: "bold",
  });
};

// Định nghĩa styles cho PDF
const styles = StyleSheet.create({
  page: {
    width: "210mm",
    height: "297mm",
    backgroundColor: "#ffffff",
    position: "relative",
    fontFamily: "Roboto", // Sử dụng font hỗ trợ tiếng Việt
  },
  block: {
    position: "absolute",
  },
});

type Props = {
  blocks: Block[];
  data?: Record<string, string>; // Dữ liệu động để thay thế (ví dụ: text cho TextBlock)
};

export const PDFReport = ({ blocks, data = {} }: Props) => {
  useEffect(() => {
    registerVietnameseFont(); // Register font khi component mount
  }, []);

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {blocks.map((block) => {
          const blockStyles = applyDefaultStyles(block); // Áp dụng giá trị mặc định
          const blockStyle = {
            position: "absolute" as const,
            left: `${block.x}pt`,
            top: `${block.y}pt`,
            width: `${block.width}pt`,
            height: `${block.height}pt`,
            fontSize: blockStyles.fontSize,
            color: blockStyles.color,
            backgroundColor: blockStyles.backgroundColor,
            borderColor: blockStyles.borderColor,
            borderWidth: blockStyles.borderWidth,
            borderStyle: blockStyles.borderStyle,
            padding: blockStyles.padding,
            opacity: blockStyles.opacity,
            margin: blockStyles.margin,
            // fontFamily: "Roboto", // Áp dụng font tiếng Việt cho toàn bộ
          };

          if (block.type === "text") {
            const textBlock = block as TextBlockData;
            const textContent = data[block.id] ?? (blockStyles.text || "TEXT"); // Dữ liệu động hoặc mặc định
            return (
              <View key={block.id} style={[styles.block, blockStyle]}>
                <Text
                  style={{
                    textAlign: blockStyles.align as any,
                    fontWeight: blockStyles.fontWeight as any,
                    lineHeight: parseFloat(blockStyles.lineHeight) || undefined,
                    // whiteSpace và overflowWrap không hỗ trợ đầy đủ, bỏ qua hoặc dùng lineHeight để điều chỉnh
                  }}
                >
                  {textContent} {/* Hỗ trợ tiếng Việt với font Roboto */}
                </Text>
              </View>
            );
          }

          // if (block.type === "image") {
          //   const imageBlock = block as ImageBlockData;
          //   const imageSrc =
          //     blockStyles.src || "https://nentang.vn/assets/img/logos/logo-nentang-v2-icon-only-transparent.svg"; // Fallback nếu src rỗng
          //   return (
          //     <View key={block.id} style={[styles.block, blockStyle]}>
          //       <Image
          //         src={imageSrc}
          //         style={{
          //           objectFit: blockStyles.objectFit as any,
          //           width: "100%",
          //           height: "100%",
          //         }}
          //         cache={false} // Tắt cache để tránh lỗi tải hình
          //       />
          //     </View>
          //   );
          // }

          return null; // Bỏ qua các block không hỗ trợ
        })}
      </Page>
    </Document>
  );
};
