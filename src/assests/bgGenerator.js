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

export const terrains = {
    beach:beach,
    blue_storm:blue_storm,
    city:city,
    dark_forest:dark_forest,
    forest:forest,
    rocks:rocks,
    sand_flowers:sand_flowers,
    sea:sea,
    tomb:tomb,
    waterfall:waterfall,
    wind_forest:wind_forest,
    yellow_storm:yellow_storm,
};

export const backgroundGen = (arrayOfTerrain = terrains) => {
    return terrains[Math.floor(Math.random() * arrayOfTerrain.length) - 1];
};