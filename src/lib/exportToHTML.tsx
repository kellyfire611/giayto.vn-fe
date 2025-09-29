import React from "react";
import { renderToString } from "react-dom/server";
import { Block } from "@/types/report-desginer";
import { HTMLPreview } from "@/components/report-desginer/preview/HtmlPreview";

export const exportToHTML = (
  blocks: Block[],
  data: Record<string, string> = {},
  title = "Report Preview"
) => {
  // Render component thành HTML string
  const htmlContent = renderToString(
    <HTMLPreview blocks={blocks} data={data} />
  );

  // Tạo HTML đầy đủ với font Roboto
  const fullHtml = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>${title}</title>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
        <style>
          body { margin: 0; padding: 20px; display: flex; justify-content: center; align-items: center; height: 100vh; }
          @media print {
            body { padding: 0; }
            .print-button { display: none; }
          }
        </style>
      </head>
      <body>
        ${htmlContent}
        <button class="print-button" onclick="window.print()" style="position: fixed; top: 10px; right: 10px; padding: 8px 16px; background: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer;">
          Print
        </button>
      </body>
    </html>
  `;

  // Mở cửa sổ mới và ghi HTML
  const newWindow = window.open("", "_blank");
  if (newWindow) {
    newWindow.document.write(fullHtml);
    newWindow.document.close();
  } else {
    console.error("Không thể mở cửa sổ mới. Vui lòng kiểm tra trình duyệt.");
  }
};
