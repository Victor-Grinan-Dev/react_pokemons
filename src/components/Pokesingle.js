import React from 'react'
import { useLocation } from 'react-router';

const Pokesingle = () => {
    const location = useLocation();
    console.log(location.state)
    const name = location.state.name;
    const id = location.state.id;
    const img = location.state.img;
    const img_art = location.state.img_art;
    const abilities = location.state.abilities;
    const height = location.state.height;
    const weight = location.state.weight;
    const hp = location.state.hp;
    const attack = location.state.attack;
    const defense = location.state.defense;
    const types = [];
    location.state.types.map(item => {
         types.push(item.type.name);
    });
    

console.log(name)

/*
//inside pokemon:
const pokeSpecieUrl = `https://pokeapi.co/api/v2/pokemon-species/${pokeId}`;
const captureRate = pokeSpecieUrl.capture_rate;
const flavorText = pokeSpecieUrl.flavor_text_entries[0].flavor_text;
const habitat = pokeSpecieUrl.habitat.name;
const evolvesFrom = pokeSpecieUrl.evolves_from_species
const evolutionUrL = pokeSpecieUrl.evolution_chain.url;
//once data from evolution has been reached:
let evolData;
fetch(evolutionUrL).then(res => res.json()).then(data=> evolData=data);
const minLVLtoEvol = evolData.chain.evolves_to[0].evolution_details.min_level;
const evolvesTo = evolData.chain.evolves_to[0].species.name;
const evolvesToUrl = evolData.chain.evolves_to[0].species.url;
*/

  return (
    <div>
        <p>{name}</p>
{/*
data,
        name,
        id,
        img,
        img_art,
        abilities,
        height,
        weight,
        hp,
        attack,
        defense,
        types,
        flavorText,
        captureRate,
        habitat,
        evolvesFromName,
        evolvesFromUrl,
        evolvesToName,
        evolvesToUrl,
        <p>{id}</p>
        <p>{img}</p>
        <p>{img_art}</p>
        <p>{abilities}</p>
        <p>{height}</p>
        <p>{weight}</p>
        <p>{hp}</p>
        <p>{attack}</p>
        <p>{defense}</p>
*/}
    </div>
  )
}

export default Pokesingle