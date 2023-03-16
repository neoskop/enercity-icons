export function createDistDirRemover(iconsDistDir?: string) {
  return function clearRootDir(path: string) {
    if (!iconsDistDir) {
      return path;
    }

    return path.replace(`${iconsDistDir}/`, '');
  };
}
