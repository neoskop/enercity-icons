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
  concurrency = 1,
}: DownloadIconsOptions) {
  console.log(`\n⏳ downloading '${name}' icons...`);

  const componentSets = await fetchComponentSets(figmaFrameId);
  const icons = await createIcons(componentSets, figmaIconNameToDirMap);

  await pMap(icons, createIconDownloader(iconsDir), { concurrency });
}
