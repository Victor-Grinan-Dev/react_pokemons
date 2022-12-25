//react
import { Routes, Route, useParams, HashRouter } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Layout from './pages/Layout';

//components
import About from './components/About';
import Home from './components/Home';
import PokeList from './components/PokeList';
import FavList from './components/FavList';
import Pokesingle from './components/Pokesingle';

//styles
import './App.css';

const RouterWrapper = (props) => {
  const params = useParams();
  return <Pokesingle params={params}{...props}/>
}
//ideas:
//game view: https://codepen.io/willtomtid/pen/gOPpQjZ
//cards view: https://heatherketten.wordpress.com/2018/03/27/css-fake-pokemon-cards/
//find pair game: https://codepen.io/mbransons/pen/MWjvGVo
//catch a pokemon: https://codepen.io/stlfountain/pen/gOLajxp

function App() {

  const [data, setData] = useState()
  let amount= 100;
  const url = `https://pokeapi.co/api/v2/pokemon?limit=${amount}&offset=0`;

  class Pokemon{
    base_experience = undefined;
  }

  useEffect(() => {
    getData()
  }, []);

  const getData = async () => {
    await fetch(url)
    .then((res) => res.json())
    .then((data) => {
        const fetches = data.results.map( (p) => {
        return fetch(p.url).then((res) => res.json())
    });
    Promise.all(fetches).then((res)=>{
        setData(res);
        });
    });
  }

  return (
    <HashRouter className="App"> 
        <Routes>
              <Route path="/" element={<Layout/>}>
                <Route index element={<Home/>}></Route>
                <Route path="about" element={<About/>}></Route> 
                <Route path="pokeList" element={<PokeList data={data}/>}></Route>               
                <Route path="pokeList/:pokesingle" element={<RouterWrapper/>}/>
                <Route path="favList" element={<FavList/>}></Route>
              </Route>       
          </Routes>   
    </HashRouter>
  );
}

export default App;
