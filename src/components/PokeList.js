
import React, { Component } from 'react'
import PokeCard from './PokeCard'

let amount= 100;
const url = `https://pokeapi.co/api/v2/pokemon?limit=${amount}&offset=0`;

class PokeList extends Component {
    state = {
        data:[],
        isLoading: false,
    }

    componentDidMount(){
        this.setState({isLoading: true});
        fetch(url)
        .then((res) => res.json())
        .then((data) => {
            const fetches = data.results.map( (p) => {
            return fetch(p.url).then((res) => res.json())
        });
        Promise.all(fetches).then((res)=>{
            console.log(res);
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
                    <PokeCard name={p.name} key={p.name} img={p.sprites.other.dream_world.front_default}/> 
                ))}          
            </div>
        )
      }
    };
    
    export default PokeList;

    //p.sprites.front_default