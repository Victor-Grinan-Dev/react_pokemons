/**
 * this are the bg images for the pokemons characters
 */

import beach from "./bg_beach.png";
import blue_storm from "./bg_blue_storm.png";
import city from "./bg_city.png";
import dark_forest from "./bg_dark_forest.png";
import forest from "./bg_forest.png";
import rocks from "./bg_rocks.png";
import sand_flowers from "./bg_sand_flowers.png";
import sea from "./bg_sea.png";
import tomb from "./bg_tomb.png";
import waterfall from "./bg_waterfall.png";
import wind_forest from "./bg_wind_forest.png";
import yellow_storm from "./bg_yellow_storm.png";

// const types = [
//     "bug",
//     "dark",
//     "dragon",
//     "electric",
//     "fairy",
//     "fighting",
//     "fire",
//     "flying",
//     "ghost",
//     "grass",
//     "ice",
//     "metal",
//     "normal",
//     "poison",
//     "psychic",
//     "rock",
//     "sand",
//     "water",
//     "steel",
//     "ground",
// ]

const terrains = {
  beach: {
    image: beach,
    types: ["water", "sand"],
  },
  blue_storm: {
    image: blue_storm,
    types: [],
  },
  city: {
    image: city,
    types: ["fighting", "normal"],
  },
  dark_forest: {
    image: dark_forest,
    types: ["bug", "dark", "dragon", "ghost", "grass", "normal", "ground"],
  },
  forest: {
    image: forest,
    types: ["bug", "dark", "dragon", "ghost", "grass", "normal", "ground"],
  },
  rocks: {
    image: rocks,
    types: ["dark", "dragon", "ghost", "metal", "rock", "ground"],
  },
  sand_flowers: {
    image: sand_flowers,
    types: [
      "bug",
      "dragon",
      "fairy",
      "fighting",
      "fire",
      "flying",
      "normal",
      "psychic",
      "sand",
      "ground",
    ],
  },
  sea: {
    image: sea,
    types: ["water", "ice"],
  },
  tomb: {
    image: tomb,
    types: ["dark", "dragon", "ghost", "poison", "psychic"],
  },
  waterfall: {
    image: waterfall,
    types: ["bug", "water", "ice"],
  },
  wind_forest: {
    image: wind_forest,
    types: ["bug", "dragon", "fairy", "flying", "grass", "ground"],
  },
  yellow_storm: {
    image: yellow_storm,
    types: ["electric"],
  },
};

/* Create array of values from the object trerrain */
const terrainValues = Object.keys(terrains);

export const backgroundGen = (arrayOfTerrain = terrainValues) => {
  const optionsList = [];

  for (let item of arrayOfTerrain) {
    if (terrains[item]) {
      optionsList.push(terrains[item].image);
    }
  }

  return optionsList[Math.floor(Math.random() * optionsList.length)];
};
