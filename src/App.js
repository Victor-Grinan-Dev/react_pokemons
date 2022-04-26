import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';

import About from './components/About';
import Home from './components/Home';
import PokeList from './components/PokeList';
import FavList from './components/FavList';
import Pokesingle from './components/Pokesingle';

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
              
              <Route path="pokesingle" element={<Pokesingle/>}></Route>

              <Route path="favList" element={<FavList/>}></Route>
            </Route>       
        </Routes>   

    </BrowserRouter>
  );
}

export default App;
