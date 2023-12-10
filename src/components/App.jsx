import { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [allPokemonData, setAllPokemonData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 20;
  const [filteredPokemon, setFilteredPokemon] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=1000');
        setAllPokemonData(response.data.results);
      } catch (error) {
        console.error('Error al obtener Pokémon:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Filtrar los Pokémon cuyos nombres coincidan parcialmente con el término de búsqueda
    const filteredPokemon = allPokemonData.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPokemon(filteredPokemon);
    setCurrentPage(1);
  }, [searchTerm, allPokemonData]);

  const handleNextPage = () => {
    if (currentPage < Math.ceil(filteredPokemon.length / pageSize)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const indexOfLastPokemon = currentPage * pageSize;
  const indexOfFirstPokemon = indexOfLastPokemon - pageSize;
  const currentPokemonData = filteredPokemon.slice(indexOfFirstPokemon, indexOfLastPokemon);

  return (
    <>

<div>
      <nav className="navbar bg-bg-body-secondary">
        <div className="container-fluid">
          <div className='container-fluid text-center'>
          <h1>Pokedex</h1>
          </div>
          <div className="ms-auto"> {/* Contenedor con la clase ms-auto */}
            <form
              className="d-flex"
              role="search"
              onSubmit={(e) => {
                e.preventDefault();
                // No es necesario realizar la búsqueda aquí, ya se hace en el useEffect
              }}
            >
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search Pokémon"
                aria-label="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="btn btn-outline-dark" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
      <div className="container mt-3">
        <div className="row">
          {currentPokemonData.map((pokemon, index) => (
            <div key={index} className="col-6 col-md-4 col-lg-3 mb-3">
              <div className="card">
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split('/').slice(-2, -1)}.png`}
                  className="card-img-top"
                  alt={pokemon.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{pokemon.name}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="d-flex justify-content-center my-3">
          <button className="btn btn-dark me-2" onClick={handlePrevPage} disabled={currentPage === 1}>
            Anterior
          </button>
          <button
            className="btn btn-dark"
            onClick={handleNextPage}
            disabled={currentPage === Math.ceil(filteredPokemon.length / pageSize)}
          >
            Siguiente
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
