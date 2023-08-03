import pMap from 'p-map';
import { createIconDownloader } from './createIconDownloader';
import { createIcons } from './createIcons';
import { fetchComponentSets } from './fetchComponentSets';

interface DownloadIconsOptions {
  name: string;
  figmaFrameId: string;
  figmaIconNameToDirMap: Record<string, string>;
  iconsDir: string;
  concurrency?: number;
}

export async function downloadIcons({
  name,
  figmaFrameId,
  figmaIconNameToDirMap,
  iconsDir,
  concurrency = 5,
}: DownloadIconsOptions) {
  console.log(`\n⏳ downloading '${name}' icons...`);

  /**
   * Smart "hack" to get the "newest" component sets first.
   */
  const componentSets = (await fetchComponentSets(figmaFrameId)).reverse();
  const icons = await createIcons(componentSets, figmaIconNameToDirMap);

  try {
    await pMap(icons, createIconDownloader(iconsDir), {
      concurrency,
      stopOnError: true,
    });
  } catch (error) {
    if (error instanceof AggregateError) {
      for (const individualError of error.errors) {
        console.log(individualError);
      }
    }
  }
}
