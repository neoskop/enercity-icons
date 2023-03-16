import { fetchFromFigma } from './fetchFromFigma';
import { IconVariant } from './types';

export async function fetchIconVariantUrl(variant: IconVariant) {
  const options = {
    searchParams: {
      ids: variant.id,
      format: 'svg',
    },
  };

  const result = await fetchFromFigma('images', options);

  if (!('images' in result && variant.id in result.images)) {
    throw new Error(
      `no image url for icon: ${variant.name} (varaint: ${variant.dirName})`
    );
  }

  return result.images[variant.id];
}
