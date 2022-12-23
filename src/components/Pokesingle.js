import React from 'react'

const Pokesingle = (
    {
        data,
        pokeId,
        captureRate,
        flavorText,
        habitat,
        evolvesFromName,
        evolvesFromUrl,
        evolvesToName,
        evolvesToUrl,
    }) => {


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
    <div>Pokesingle</div>
  )
}

export default Pokesingle