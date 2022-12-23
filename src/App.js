import './App.css';
import { Routes, Route, useParams, HashRouter } from 'react-router-dom';
import Layout from './pages/Layout';

import About from './components/About';
import Home from './components/Home';
import PokeList from './components/PokeList';
import FavList from './components/FavList';
import Pokesingle from './components/Pokesingle';

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
  return (
    <HashRouter className="App"> 
        <Routes>
              <Route path="/" element={<Layout/>}>
                <Route index element={<Home/>}></Route>
                <Route path="about" element={<About/>}></Route> 
                <Route path="pokeList" element={<PokeList/>}></Route>               
                <Route path="pokeList/:pokesingle" element={<RouterWrapper/>}/>
                <Route path="favList" element={<FavList/>}></Route>
              </Route>       
          </Routes>   
    </HashRouter>
  );
}

export default App;
