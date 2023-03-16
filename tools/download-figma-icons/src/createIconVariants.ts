import { FigmaCommonProps, IconVariant } from './types';

export function createIconVariants(
  children: FigmaCommonProps[],
  figmaIconNameToDirMap: Record<string, string>
): IconVariant[] {
  return children
    .filter(({ name }) => name in figmaIconNameToDirMap)
    .map(({ id, name }) => {
      return {
        id,
        dirName: figmaIconNameToDirMap[name],
        name,
      };
    });
}
