import React from 'react';
import { Routes, Route } from 'react-router-dom';

import About from './About';
import Home from './Home';
import PokeList from './PokeList';
import FavList from './FavList';

import Pokesingle from './Pokesingle';

function Main() {
  return (
    <main>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="about" element={<About/>}></Route>     
               
            <Route path="pokeList" element={<PokeList/>}>
                <Route path="pokesingle" element={<Pokesingle/>}></Route>
            </Route>

            <Route path="favList" element={<FavList/>}></Route>        
        </Routes>   
    </main>
  )
}

export default Main