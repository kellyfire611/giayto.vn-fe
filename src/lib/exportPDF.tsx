import { Block } from "@/types/report-desginer";
import { pdf } from "@react-pdf/renderer";
import { saveAs } from "file-saver";
import { PDFReport } from "@/components/pdf/PDFReport";

/** Xuất layout ra file PDF */
export const exportToPDF = async (
  blocks: Block[],
  data: Record<string, string> = {},
  filename = "report.pdf"
) => {
  const blob = await pdf(<PDFReport blocks={blocks} data={data} />).toBlob();
  saveAs(blob, filename);
};
