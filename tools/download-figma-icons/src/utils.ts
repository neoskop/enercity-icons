import fs from 'fs';
import got from 'got';
import path from 'path';
import stream from 'stream';
import util from 'util';

const pipeline = util.promisify(stream.pipeline);

export function mkdirSync(filePath: string) {
  const dir = path.dirname(filePath);

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, {
      recursive: true,
    });
  }
}

export async function downloadFromUrl(url: string, outFile: string) {
  mkdirSync(outFile);

  return await pipeline(
    got.stream(url, {
      timeout: 120 * 1000,
    }),
    fs.createWriteStream(outFile)
  );
}

export function createFile(jsonFilePath: string, data: any) {
  mkdirSync(jsonFilePath);

  fs.writeFileSync(jsonFilePath, JSON.stringify(data), {
    encoding: 'utf8',
  });
}

export function filterDirPaths(paths: string[]) {
  return paths.filter((file: string) => fs.lstatSync(file).isDirectory());
}

export function filterSVGs(paths: string[]) {
  return paths.filter(
    (file: string) =>
      fs.lstatSync(file).isFile() && path.extname(file) === '.svg'
  );
}

export function filePathsFrom(dir: string) {
  return fs.readdirSync(dir).map((file: string) => path.join(dir, file));
}

export function removeDirsFrom(name: string): string {
  return name.replace(/.*\//, '');
}
