import express from "express";
import { promises as fsPromises } from "fs";
import path from "path";
import { resizeAndSave, isCached } from "../../utilities/utilities";
import { Request, Response } from "express";
const images = express.Router();

images.get("/", async (req: Request, res: Response): Promise<void> => {
  const fileName = req.query.filename as string;
  const width = req.query.width as string;
  const height = req.query.height as string;

  if (isNaN(parseInt(width)) || isNaN(parseInt(height))) {
    res.send("Invalid width and/or height");
    return;
  }
  const image = `${fileName}_${width}x${height}.jpg`;
  const cachedImages = await fsPromises.readdir(
    `${path.resolve()}/assets/thumb`
  );

  try {
    if (isCached(image, cachedImages)) {
      res.sendFile(`${path.resolve()}/assets/thumb/${image}`);
    } else if (!isCached(image, cachedImages)) {
      await resizeAndSave(fileName, width, height);
      res.sendFile(`${path.resolve()}/assets/thumb/${image}`);
    }
  } catch {
    res.send(`Could not find file (${fileName})`);
  }
});

export default images;
