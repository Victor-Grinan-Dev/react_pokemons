import React from 'react';
import { types } from '../assests/images';
//import { Link } from 'react-router-dom';

function PokeCard(props) {
  const capitalize = (str) => {
    return str.charAt(0).toUpperCase()+props.name.slice(1);
  }
  console.log(props.speciesData)
  return (
    <div className="poke-card">
      <div className="poke-card-content">
        <div className='top-info'>
          <p className='rarety'>
            BASIC
          </p>
          <h3 className='poke-name'>{capitalize(props.name)}</h3>
          <div>

          </div>
          
          <div className='hp-area'>
            <p className='hpKey'>HP</p>
            <p className='hpValue'>{props.hp}</p>
          </div>

          <div className='types'>
            {props.types.map((t,i) => (
              //console.log(t.type.name),
              <img className='type-image' key={i} src={types[t.type.name]} alt="energy"/>
            ))}
          </div>
          
        </div>

        <div className='image-frame'>
          <img className='poke-image' src={props.img} alt={props.name}></img>
        </div>
        <div className='image-frame-bottom'>
          <p>No {props.id} pokemon HT {props.height}"  WT {props.weight}lbs</p>
        </div>

        <div className='powers-area'>
          <div className='abilities'>
            {props.abilities.map((a,i) => (
              <div key={i} className='ability'>
                <img className='type-image' src={types[props.types[0].type.name]} alt="energy"/>
                <p >{a.ability.name}</p>
                <p>10</p>
              </div>  
            ))}
            
          </div>
          <p className='power-description'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non elementum ligula. Curabitur porttitor porta porttitor. Curabitur vehicula diam mi.
          </p>
        </div>

        <div className='poke-use'>
          <div className='use-bar'>
            <p>weaknes</p>
            <p>resistance</p>
            <p>retreat</p>
          </div>
        </div>

        <div className='extra-info'>
          <div className='author'>

          </div>
          <div className='author'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non elementum ligula. Curabitur porttitor porta porttitor. Curabitur vehicula diam mi.</p>
          </div>
        </div>
        
        {/*
        <Link to={`${props.name}`} className='single-poke' state={props}> See more </Link>
        */}
      </div>
    </div>
  )
}

export default PokeCard