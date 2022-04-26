import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Layout from './pages/Layout';

function App() {
  return (
    <BrowserRouter className="App">
      <Layout/>
    </BrowserRouter>
  );
}

export default App;
