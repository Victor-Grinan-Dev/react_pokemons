import React, { useState } from 'react';
import { Link } from 'react-router-dom';

//components 
import PokeCard from './PokeCard'

const amount= 100;
const url = `https://pokeapi.co/api/v2/pokemon?limit=${amount}&offset=0`;

const PokeList = ({data}) => {
    const [isLoading, setIsLoading] = useState(false);
    console.log(data);
  return (
    <div className='all-pokes'>
        {data && data.map((p)=> (
            console.log(p),
            <Link to={`${p.name}`} 
                key={p.id} 
                data={p}
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
            >
                <PokeCard 
                    name={p.name} 
                    id={p.id}
                    img={p.sprites.other.dream_world.front_default ||   p.sprites.front_default }
                    imgArt={p.sprites.other["official-artwork"].   front_default} 
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
)
}

export default PokeList
/*

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
        return 
      }
    };
    
    export default PokeList;

    //p.sprites.other.dream_world.front_default
    //p.sprites.other.official-artwork.front_default
    //p.sprites.version["generation-v"]["black-white"].animated.front_default//gif
    //p.sprites.versions["generation-v"]["black-white"].animated.back_default

*/