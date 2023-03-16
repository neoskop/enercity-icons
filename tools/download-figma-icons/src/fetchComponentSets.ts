import { fetchFromFigma } from './fetchFromFigma';
import { FigmaComponentSet } from './types';

export async function fetchComponentSets(
  figmaFrameId: string
): Promise<FigmaComponentSet[]> {
  const options = {
    searchParams: {
      ids: figmaFrameId,
    },
  };

  const figmaNodes = await fetchFromFigma('fileNodes', options);

  return figmaNodes.nodes[figmaFrameId].document.children;
}
