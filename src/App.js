import imageRickMorty from './img/rick-morty.png'
import './App.css';
import { useState } from 'react';
import Characters from './components/Characters';

function App() {

  const [characters, setCharacters] = useState(null) //no va a haber characters inicialmente


  const reqApi = async () => {
    const api = await fetch('https://rickandmortyapi.com/api/character')
    const characterApi = await api.json()
    


    setCharacters(characterApi.results) //obtiene los datos de los personajes
  }


  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Rick & Morty</h1>
        {characters ? (

          <Characters characters={characters} setCharacters={setCharacters} />
        ) : (
          <>
           <img src={imageRickMorty} alt="Rick & Morty" className="img-home" />
          <button onClick={reqApi} className="btn-search">Buscar personajes</button>
          {/* ejecutar petición en la API */}
          </>
            
            
        )
        }
        
        {/* //le pasamos props */}

       
      </header>
    </div>
  );
}

export default App;   
