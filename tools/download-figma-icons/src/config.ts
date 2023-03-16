import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

const {
  ICONS_DIST_DIR = 'icons',
  ICONS_ROOT_DIR = '/',
  FIGMA_API_BASE_URL = 'https://api.figma.com/v1',
  FIGMA_PROJECT_KEY = '',
  FIGMA_TOKEN = '',
} = process.env;

const figmaEndpoints = {
  images: path.join('/images', FIGMA_PROJECT_KEY),
  fileNodes: path.join('/files', FIGMA_PROJECT_KEY, 'nodes'),
} as const;

export {
  ICONS_DIST_DIR,
  ICONS_ROOT_DIR,
  FIGMA_API_BASE_URL,
  FIGMA_PROJECT_KEY,
  FIGMA_TOKEN,
  figmaEndpoints,
};
