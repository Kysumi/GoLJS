import Biome from "./biome";

var fs = require("fs");

const BIOME_FILE_LOCATION = "/biome/location";

export default class BiomeLoader {
  public loadBiome(name: string): Biome {
    const biomeContents = fs.readFileSync(BIOME_FILE_LOCATION + name, "utf8");

    try {
      const data = JSON.parse(biomeContents);
      console.log(data);
    } catch (err) {
      console.error(err);
    }

    return new Biome();
  }
}
