import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

//components
import PokeCard from "./PokeCard";
import fire from "../assests/type_fire.png";
import water from "../assests/type_water.png";
import bug from "../assests/type_bug.png";
import dark from "../assests/type_dark.png";
import dragon from "../assests/type_dragon_dino.png";
import electric from "../assests/type_electric.png";
import fairy from "../assests/type_fairy.png";
import fighting from "../assests/type_figthing.png";
import flying from "../assests/type_flying.png";
import ghost from "../assests/type_ghost.png";
import grass from "../assests/type_grass.png";
import ground from "../assests/type_ground.png";
import ice from "../assests/type_ice.png";
import metal from "../assests/type_metal.png";
import normal from "../assests/type_normal.png";
import poison from "../assests/type_poison.png";
import psychic from "../assests/type_psychic.png";
import rock from "../assests/type_rock.png";
import sand from "../assests/type_sand.png";
import steel from "../assests/type_steel.png";

const types = [
  "fire",
  "water",
  "bug",
  "dark",
  "dragon",
  "electric",
  "fairy",
  "fighting",
  "flying",
  "ghost",
  "grass",
  "ground",
  "ice",
  "metal",
  "normal",
  "poison",
  "psychic",
  "rock",
  "sand",
];
const typesObj = {
  fire: fire,
  water: water,
  bug: bug,
  dark: dark,
  dragon: dragon,
  electric: electric,
  fairy: fairy,
  fighting: fighting,
  flying: flying,
  ghost: ghost,
  grass: grass,
  ground: ground,
  ice: ice,
  metal: metal,
  normal: normal,
  poison: poison,
  psychic: psychic,
  rock: rock,
  sand: sand,
  steel: steel,
};

// const speciesUrl = "https://pokeapi.co/api/v2/pokemon-species/";
//game view: https://codepen.io/willtomtid/pen/gOPpQjZ
//cards view: https://heatherketten.wordpress.com/2018/03/27/css-fake-pokemon-cards/
//find pair game: https://codepen.io/mbransons/pen/MWjvGVo
//catch a pokemon: https://codepen.io/stlfountain/pen/gOLajxp
//data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];

const PokeList = ({ data }) => {
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    setFilteredData(data);
    // eslint-disable-next-line
  }, []);
  if (!data) {
    return <p>Loading...</p>;
  }

  const filterData = (e) => {
    setFilteredData(
      data.filter((item) => {
        return item.name.includes(e.target.value);
      })
    );
  };

  const typeFilter = (type) => {
    const result = [];
    for (let item of data) {
      for (let slot of item.types) {
        if (slot.type.name === type) {
          result.push(item);
        }
      }
    }
    return result;
  };

  return (
    <div className="all-pokes">
      <div className="search">
        <input
          type="text"
          onChange={filterData}
          placeholder="Search"
          className="searchInput"
        />
        <div className="typesBtns">
          {types.map((t, i) => (
            <img
              key={i}
              src={typesObj[t]}
              alt="search btn"
              className="searchBtn"
              onClick={() => {
                setFilteredData(typeFilter(t));
              }}
            />
          ))}
        </div>
      </div>

      <div className="cardMap">
        {filteredData &&
          filteredData.map((p) => (
            //console.log(p),
            <Link
              to={`${p.name}`}
              key={p.id}
              state={{
                data: p,
                name: p.name,
                id: p.id,
                img:
                  p.sprites.other.dream_world.front_default ||
                  p.sprites.front_default,
                img_art:
                  p.sprites.other["official-artwork"].front_default || null,
                abilities: p.abilities,
                height: p.height,
                weight: p.weight,
                hp: p.stats[0].base_stat,
                attack: p.stats[1].base_stat,
                defense: p.stats[2].base_stat,
                types: p.types,
                moves: p.moves,
              }}
            >
              <PokeCard
                name={p.name}
                id={p.id}
                img={
                  p.sprites.other.dream_world.front_default ||
                  p.sprites.front_default
                }
                imgArt={p.sprites.other["official-artwork"].front_default}
                abilities={p.abilities}
                height={p.height}
                weight={p.weight}
                hp={p.stats[0].base_stat}
                attack={p.stats[1].base_stat}
                defense={p.stats[2].base_stat}
                types={p.types}
              />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default PokeList;
/*

    //p.sprites.other.dream_world.front_default
    //p.sprites.other.official-artwork.front_default
    //p.sprites.version["generation-v"]["black-white"].animated.front_default//gif
    //p.sprites.versions["generation-v"]["black-white"].animated.back_default

*/
