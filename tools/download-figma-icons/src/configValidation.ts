import { FIGMA_PROJECT_KEY, FIGMA_TOKEN } from './config';

export function configValidation() {
  if (![FIGMA_PROJECT_KEY, FIGMA_TOKEN].every(Boolean)) {
    throw new Error(
      `❌ ERROR: No required environment variables:
          FIGMA_PROJECT_KEY, FIGMA_TOKEN
     `
    );
  }
}
