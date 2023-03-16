export interface FigmaCommonProps {
  id: string;
  name: string;
}

export type FigmaComponent = FigmaCommonProps;

export interface FigmaComponentSet extends FigmaCommonProps {
  children: FigmaComponent[];
}

interface FigmaFrameNode {
  document: { children: FigmaComponentSet[] };
}

interface FigmaFrameNodes {
  [figmaFrameId: string]: FigmaFrameNode;
}
export interface FigmaFileNodes {
  id: string;
  name: string;
  nodes: FigmaFrameNodes;
}

export interface FigmaImages {
  images: Record<string, string>;
}

export interface IconVariant {
  id: string;
  name: string;
  dirName: string;
}

export interface Icon {
  id: string;
  name: string;
  variants: IconVariant[];
}

export interface IconDownloadData {
  url: string;
  distFilePath: string;
}
