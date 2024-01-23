import styles from '../style/main.module.scss';
import {fetchPokemonsFirstTime} from '../fetch/fetch';
import { FETCH_STATUS } from '../fetch/fetchStatus';
import PokemonsList from './PokemonsList';
import Loading from './Loading';
import SearchForm from './SearchForm';

import { useEffect, useState } from 'react';

function Main() {

  const [pokemons, setPokemons] = useState(null);
  const [fullListPokemons, setFullListPokemons] = useState(null);
  const [status, setStatus] = useState(FETCH_STATUS.IDLE)
  const [search, setSearch] = useState("");

  useEffect(() => { 
    if(pokemons !== null){
      searchPokemon();
    }else{
    fetchPokemonsFirstTime(setPokemons, setFullListPokemons, setStatus);
    }
  },[search]);

  const searchPokemon = () => {
    const filter = fullListPokemons.filter((item) => { 
      return search.toLowerCase() === ""
      ? item
      : item.name.toLowerCase().includes(search);
    })
    setPokemons(filter);
  }

  const success = status === FETCH_STATUS.SUCCESS;

  return (
    <main>
      <div className={styles.container}>
        <SearchForm search={search} setSearch={setSearch} setStatus={setStatus} setPokemons={setPokemons} fullListPokemons={fullListPokemons}/>
          {success ?
            <>
              <div className={styles.cardsFlex}>
                <PokemonsList pokemons={pokemons}/>
              </div> 
            </>
          : <Loading />
          }
      </div>
    </main>
  );
}
export default Main;
  