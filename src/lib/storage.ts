import { applyDefaultStyles } from "@/types/defaults";
import { Block } from "@/types/report-desginer";
import { saveAs } from "file-saver";

const STORAGE_KEY = "report-designer-layout";

/** Lưu layout vào localStorage */
export const saveLayoutToLocal = (blocks: Block[]) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(blocks));
};

/** Load layout từ localStorage */
export const loadLayoutFromLocal = (): Block[] => {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return [];
  try {
    return JSON.parse(raw) as Block[];
  } catch {
    return [];
  }
};

/** Xuất layout ra file JSON */
export const exportLayout = (blocks: Block[], filename = "report.json") => {
  // Áp dụng giá trị mặc định cho tất cả blocks
  const blocksWithDefaults = blocks.map((block) => ({
    ...block,
    styles: applyDefaultStyles(block),
  }));

  const blob = new Blob([JSON.stringify(blocksWithDefaults, null, 2)], {
    type: "application/json",
  });
  saveAs(blob, filename);
};

/** Đọc layout từ file JSON đã chọn */
export const importLayout = async (file: File): Promise<Block[]> => {
  const text = await file.text();
  return JSON.parse(text) as Block[];
};
