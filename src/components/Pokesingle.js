
import React, { Component } from 'react'

export default class Pokesingle extends Component {

    state = {
        data: [],
        isLoading: false,
    };

    componentDidMount(){
        this.setState({
            isLoading: true,
        })
        fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.params.pokesingle}`)
        .then((res) => res.json())
        .then((data) => {
            this.setState({data: data, isLoading: false});       
        });
    }

  render() {
    return (
        
        <div className="poke-card">   
            <h3 className='poke-name'>{this.state.data.name}</h3>
        </div>
           
    )
  }
}

//<img className='poke-image' src={props.img} alt={this.state.data.name}></img>