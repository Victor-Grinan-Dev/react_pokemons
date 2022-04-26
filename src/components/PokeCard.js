import React from 'react';
import { Link } from 'react-router-dom';

function PokeCard(props) {
  return (
    <div className="poke-card">
        <img className='poke-image' src={props.img} alt={props.name}></img>
        <h3 className='poke-name'>{props.name}</h3>
        <Link to={props.name} className='single-poke'> See more </Link>
    </div>
  )
}

export default PokeCard