import React from 'react';
import { Link } from 'react-router-dom';

//components 
import PokeCard from './PokeCard'

// let amount= 10;

// const url = `https://pokeapi.co/api/v2/pokemon?limit=${amount}&offset=0`;
// const speciesUrl = "https://pokeapi.co/api/v2/pokemon-species/";
//game view: https://codepen.io/willtomtid/pen/gOPpQjZ
//cards view: https://heatherketten.wordpress.com/2018/03/27/css-fake-pokemon-cards/
//find pair game: https://codepen.io/mbransons/pen/MWjvGVo
//catch a pokemon: https://codepen.io/stlfountain/pen/gOLajxp


const PokeList = ({data}) => {
    
    if (!data){
        return <p>Loading...</p>;
    }

  return (
    <div className='all-pokes'>
        {data && data.map((p)=> (
            //console.log(p),
            <Link to={`${p.name}`} 
                key={p.id} 
                state = {
                    {data:p,
                    name:p.name,
                    id:p.id,
                    img:p.sprites.other.dream_world.front_default || p.sprites.front_default, 
                    img_art:p.sprites.other["official-artwork"].front_default || null ,
                    abilities:p.abilities,
                    height:p.height,
                    weight:p.weight,
                    hp:p.stats[0].base_stat,
                    attack:p.stats[1].base_stat,
                    defense:p.stats[2].base_stat,
                    types:p.types,
                    moves:p.moves
                }
                }
            >
                <PokeCard 
                    name={p.name} 
                    id={p.id}
                    img={p.sprites.other.dream_world.front_default ||   p.sprites.front_default }
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
)
}

export default PokeList
/*
>>>>>>> ecf22360d134c6e76bec5d57bbb969d3f4b09e36
class PokeList extends Component {
    state = {
        data:[],
        speciesData:{},
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

    getSpeciesData(id){
        let speciesData;
        fetch(speciesUrl + id +'/')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            //this.setState({...this.state , [speciesData]: data});
        })
        return speciesData;
    }
    render(){
        if (this.state.isLoading){
            return (
                <div class="lds-grid">
                    <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                </div>
            
            );
        }
    
        return (
            <div className='all-pokes'>
                {this.state.data.map((p)=> (
                    <div key={p.id}>
                        {this.getSpeciesData(p.id)}
                    <PokeCard 
                     
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
                    </div>
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

*/