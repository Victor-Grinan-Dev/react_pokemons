import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';

import About from './components/About';
import Home from './components/Home';
import PokeList from './components/PokeList';
import FavList from './components/FavList';
import Pokesingle from './components/Pokesingle';

let amount = 10;
const url = `https://pokeapi.co/api/v2/pokemon?limit=${amount}&offset=0`;

function App() {
  return (
    <BrowserRouter className="App">

      <Routes>
            <Route path="/" element={<Layout/>}>
              <Route index element={<Home/>}></Route>
              <Route path="about" element={<About/>}></Route> 

              <Route path="pokeList" element={<PokeList/>}>
                {//<!--<Route path="pokesingle" element={<Pokesingle/>}></Route>-->
                }
              </Route>
              
              <Route path="pokesingle/:pokesingle" element={<Pokesingle/>}></Route>

              <Route path="favList" element={<FavList/>}></Route>
            </Route>       
        </Routes>   

    </BrowserRouter>
  );
}

export default App;

/*
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${amount}&offset=0`

    fetch(url).then((res) => res.json()).then((data) => {
        const fetches = data.results.map((pokemon) =>{
            return fetch(pokemon.url).then((res) => res.json())
        });
        Promise.all(fetches).then((res) => {
            
            for(let i = 0; i < res.length; i++){
                
                let pokeName = res[i].name;
                let img = res[i].sprites.other.dream_world.front_default;
    
                container.insertAdjacentHTML("beforeend", `<div class="card" ><div class="pic"><img src="${img}" alt="#" id="one"></div><div class="description">
                <h3>${pokeName}</h3></div>
                <p>${res[i].types.map((element) => element.types)}</p></div>
                `)  
                console.log(res[i].types[0].type.name)
            }
            
        });
    }).catch(error => console.log("error", error));
*/