import got, { OptionsOfTextResponseBody } from 'got';
import { FIGMA_API_BASE_URL, FIGMA_TOKEN, figmaEndpoints } from './config';
import { FigmaFileNodes, FigmaImages } from './types';

export async function fetchFromFigma(
  endpointVariant: 'fileNodes',
  options?: OptionsOfTextResponseBody
): Promise<FigmaFileNodes>;

export async function fetchFromFigma(
  endpointVariant: 'images',
  options?: OptionsOfTextResponseBody
): Promise<FigmaImages>;

export async function fetchFromFigma<T>(
  endpointVariant: keyof typeof figmaEndpoints,
  options?: OptionsOfTextResponseBody
): Promise<T> {
  return await got(FIGMA_API_BASE_URL + figmaEndpoints[endpointVariant], {
    timeout: 60 * 60 * 1000,
    ...options,
    headers: {
      'X-Figma-Token': FIGMA_TOKEN,
      ...options?.headers,
    },
  }).json<T>();
}
