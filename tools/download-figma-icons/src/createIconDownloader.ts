import { createIconDownloadData } from './createIconDownloadData';
import { Icon } from './types';
import { downloadFromUrl } from './utils';

export function createIconDownloader(iconsDir: string) {
  return async function downloadIcon(icon: Icon) {
    const logMessage = `⬇️ downloadIcon: ${icon.name}`;

    console.time(logMessage);

    for (const variant of icon.variants) {
      const data = await createIconDownloadData(variant, icon.name, iconsDir);
      await downloadFromUrl(data.url, data.distFilePath);
    }

    console.timeEnd(logMessage);
  };
}
