import React from 'react'

import { Link } from 'react-router-dom';

function Navegator() {
  return (
    <div>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/favList">FavList</Link>
            </li>
            <li>
                <Link to="/pokeList">PokeList</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
        </ul>
    </div>
  )
}

export default Navegator;

/**
 <About/>
<Home/>
<PokeList/>
 <FavList/>
 */