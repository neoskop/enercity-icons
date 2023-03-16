import path from 'path';
import fs from 'fs';

const cacheDir = path.join(__dirname, '..', 'cache');

const cacheFilePath = (id: string) => path.join(cacheDir, `${id}.json`);

const cache = async (id: string, url: string) => {
  fs.writeFile(
    cacheFilePath(id),
    JSON.stringify({ url, date: new Date() }),
    err => {
      if (err) {
        console.error(err);
      }
    }
  );
};

export const getCache = async (id: string) => {
  const filePath = cacheFilePath(id);

  try {
    const file = fs.readFileSync(filePath, 'utf8');

    const data = JSON.parse(file) as { url: string; date: string };

    if (!data.url) return undefined;
    if (!data.date) return undefined;
    const date = new Date(data.date);
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const diffDays = Math.ceil(diff / (1000 * 3600 * 24));
    if (diffDays > 29) {
      fs.unlink(filePath, err => {
        if (err) {
          console.error(err);
        }
      });
      return undefined;
    }

    return data;
  } catch (error) {
    return undefined;
  }
};

export default cache;
