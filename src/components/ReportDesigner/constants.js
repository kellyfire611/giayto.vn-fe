import { TextNode, RectangleNode, TableNode, ImageNode } from './CustomNodes';

export const PAGE_SIZES = {
  a4: { width: 794, height: 1123, name: "A4 Portrait" },
  a4Landscape: { width: 1123, height: 794, name: "A4 Landscape" },
  a5: { width: 559, height: 794, name: "A5 Portrait" },
  a5Landscape: { width: 794, height: 559, name: "A5 Landscape" },
  letter: { width: 816, height: 1056, name: "Letter Portrait" },
  letterLandscape: { width: 1056, height: 816, name: "Letter Landscape" },
};

export const nodeTypes = {
  textNode: TextNode,
  rectangleNode: RectangleNode,
  tableNode: TableNode,
  imageNode: ImageNode,
};

export const initialNodes = [
  {
    id: "1",
    type: "rectangleNode",
    position: { x: 50, y: 50 },
    data: {
      label: "SALES REPORT 2024",
      backgroundColor: "#e3f2fd",
      borderColor: "#1976d2",
      fontColor: "#1976d2",
      fontSize: 16,
      borderWidth: 2,
    },
    style: { width: 200, height: 60 },
  },
  {
    id: "2",
    type: "textNode",
    position: { x: 50, y: 150 },
    data: {
      label: "Customer Name",
      fontSize: 14,
      fontColor: "#333333",
    },
    style: { width: 150, height: 40 },
  },
];

export const initialEdges = [];