import sharp from "sharp";

const resizeAndSave = async (
  fileName: string,
  width: string,
  height: string
): Promise<void> => {
  await sharp(`./assets/full/${fileName}.jpg`)
    .resize(Number(width), Number(height))
    .toFile(`./assets/thumb/${fileName}_${width}x${height}.jpg`);
};

const isCached = (input: string, cachedImages: string[]): boolean => {
  for (const image of cachedImages) {
    if (image === input) {
      return true;
    }
  }
  return false;
};

export { resizeAndSave, isCached };
