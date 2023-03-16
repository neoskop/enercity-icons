import path from 'path';
import cache, { getCache } from './cache';
import { fetchIconVariantUrl } from './fetchIconVariantUrl';
import {
  IconDownloadData as IconDownloadData,
  IconVariant as IconVariant,
} from './types';
import { removeDirsFrom } from './utils';

export async function createIconDownloadData(
  variant: IconVariant,
  iconName: string,
  iconsDir: string
): Promise<IconDownloadData> {
  const cached = await getCache(variant.id);

  if (cached) {
    const distFilePath = path.join(
      iconsDir,
      variant.dirName,
      `${removeDirsFrom(iconName)}.svg`
    );

    return {
      url: cached.url,
      distFilePath,
    };
  }

  const url = await fetchIconVariantUrl(variant);

  await cache(variant.id, url);

  const distFilePath = path.join(
    iconsDir,
    variant.dirName,
    `${removeDirsFrom(iconName)}.svg`
  );

  return {
    url,
    distFilePath,
  };
}
