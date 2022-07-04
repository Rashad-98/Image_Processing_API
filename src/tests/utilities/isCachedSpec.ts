import { promises as fsPromises } from "fs";
import path from "path";
import { resizeAndSave, isCached } from "../../utilities/utilities";

describe("image processing test", () => {
  it("should save the processed image to the thumb folder", async () => {
    await resizeAndSave("fjord", "500", "400");
    const cachedImages = await fsPromises.readdir(
      `${path.resolve()}/assets/thumb`
    );
    expect(isCached("fjord_500x400.jpg", cachedImages)).toBe(true);
  });
});
