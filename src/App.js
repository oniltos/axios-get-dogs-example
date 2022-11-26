import './App.css';
import { Routes, Route } from 'react-router-dom'
import AllBreedsPage from './pages/AllBreedsPage'
import BreedPhotosPage from './pages/BreedPhotosPage'

//1 página listando todas as raças disponíveis na API
//1 Botão para ver fotos de uma raça
//1 página contendo fotos de uma raça específica

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <AllBreedsPage />} />
        <Route path='/breeds/:breedName' element={<BreedPhotosPage /> } />
      </Routes>
    </div>
  );
}

export default App;
