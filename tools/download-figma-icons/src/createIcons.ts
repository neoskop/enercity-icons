import { createIconVariants } from './createIconVariants';
import { FigmaComponentSet, Icon } from './types';

export async function createIcons(
  componentSets: FigmaComponentSet[],
  figmaIconNameToDirMap: Record<string, string>
): Promise<Icon[]> {
  return componentSets.map(
    ({ id, name, children }: FigmaComponentSet): Icon => {
      const variants = createIconVariants(children, figmaIconNameToDirMap);

      return {
        id,
        name,
        variants,
      };
    }
  );
}
