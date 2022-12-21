import React from 'react';
//import { Link } from 'react-router-dom';

function PokeCard(props) {
  return (
    <div className="poke-card">
      <div className="poke-card-content">
        <div className='top-info'>
          <div className='rarety'>
            <p>basic</p>
          </div>
          <h3 className='poke-name'>{props.name.charAt(0).toUpperCase()+props.name.slice(1)}</h3>
          <div>

          </div>
          <div>
            <p className='hpKey'>hp</p>
            <p className='hpValue'>70</p>
            <div className='types'>{props.types[0].type.name}</div>
          </div>
        </div>

        <div className='image-frame'>
          <img className='poke-image' src={props.img} alt={props.name}></img>
        </div>
        <div className='image-frame-bottom'>
          <p>No 01 pokemon type HT/ 08"  WT 4.9lbs</p>
        </div>

        <div className='powers-area'>
          <div>
            <p>powerImage</p>
            <p>powerName</p>
            <p>powerDamage</p>
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