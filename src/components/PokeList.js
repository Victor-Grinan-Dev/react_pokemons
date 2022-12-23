
import React, { Component } from 'react'
import PokeCard from './PokeCard'

let amount= 100;
let pokeId = 1;

const url = `https://pokeapi.co/api/v2/pokemon?limit=${amount}&offset=0`;

//inside pokemon:
const pokeSpecieUrl = `https://pokeapi.co/api/v2/pokemon-species/${pokeId}`;
const captureRate = pokeSpecieUrl.capture_rate;
const flavorText = pokeSpecieUrl.flavor_text_entries[0].flavor_text;
const habitat = pokeSpecieUrl.habitat.name;
const evolvesFrom = pokeSpecieUrl.evolves_from_species;
const evolutionUrL = pokeSpecieUrl.evolution_chain.url;
//once data from evolution has been reached:
let evolData;
fetch(evolutionUrL).then(res => res.json()).then(data=> evolData=data);
const minLVLtoEvol = evolData.chain.evolves_to[0].evolution_details.min_level;
const evolvesTo = evolData.chain.evolves_to[0].species.name;
const evolvesToUrl = evolData.chain.evolves_to[0].species.url;


//game view: https://codepen.io/willtomtid/pen/gOPpQjZ
//cards view: https://heatherketten.wordpress.com/2018/03/27/css-fake-pokemon-cards/
//find pair game: https://codepen.io/mbransons/pen/MWjvGVo
//catch a pokemon: https://codepen.io/stlfountain/pen/gOLajxp
class PokeList extends Component {
    state = {
        data:[],
        isLoading: false,
    }

    componentDidMount(){
        this.setState({isLoading: true})
        fetch(url)
        .then((res) => res.json())
        .then((data) => {
            const fetches = data.results.map( (p) => {
            return fetch(p.url).then((res) => res.json())
        });
        Promise.all(fetches).then((res)=>{
            this.setState({data: res, isLoading: false});
            });
        });
    }

    render(){
        if (this.state.isLoading){
            return <p>Loading...</p>;
        }
    
        return (
            <div className='all-pokes'>
                {this.state.data.map((p)=> (
                    console.log(p),
                    <PokeCard 
                    key={p.id} 
                    name={p.name} 
                    id={p.id}
                    img={p.sprites.other.dream_world.front_default || p.sprites.front_default }
                    imgArt={p.sprites.other["official-artwork"].front_default} 
                    abilities={p.abilities}
                    height={p.height}
                    weight={p.weight}
                    hp={p.stats[0].base_stat}
                    attack={p.stats[1].base_stat}
                    defense={p.stats[2].base_stat}
                    types={p.types}
                    /> 
                ))}          
            </div>
        )
      }
    };
    
    export default PokeList;

    //p.sprites.other.dream_world.front_default
    //p.sprites.other.official-artwork.front_default
    //p.sprites.version["generation-v"]["black-white"].animated.front_default//gif
    //p.sprites.versions["generation-v"]["black-white"].animated.back_default
