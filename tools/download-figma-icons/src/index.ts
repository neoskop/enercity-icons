import { ICONS_DIST_DIR, ICONS_ROOT_DIR } from './config';
import { downloadIcons } from './downloadIcons';
import { configValidation } from './configValidation';

async function __initialize() {
  try {
    configValidation();

    const iconsDir = ICONS_DIST_DIR + ICONS_ROOT_DIR;

    await downloadIcons({
      name: 'user',
      iconsDir,
      figmaFrameId: '962:9487',
      figmaIconNameToDirMap: {
        'Size=x64, isOutlined=true': 'outlined-large',
        'Size=x24, isOutlined=true': 'outlined-medium',
        'Size=x24, isOutlined=false': 'solid',
      },
    });

    await downloadIcons({
      name: 'action',
      iconsDir,
      figmaFrameId: '962:9489',
      figmaIconNameToDirMap: {
        'Size=x24': 'action',
      },
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

__initialize();
