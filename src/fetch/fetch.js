import { FETCH_STATUS } from './fetchStatus';

export const fetchPokemonsFirstTime = async (setPokemons, setFullListPokemons, setStatus) => {
    try{
        setStatus(FETCH_STATUS.LOADING);
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=151');

        if(response.ok){
          const data = await response.json();
          setPokemons(data.results);
          setFullListPokemons(data.results);
          setStatus(FETCH_STATUS.SUCCESS); 
        }
      }catch(err){
        console.log(err);
        setStatus(FETCH_STATUS.ERROR);
      }
    
  }

export const selectTypePokemon = async(e, setStatus, setPokemons, fullListPokemons) => {
  if(e !== "All"){
    try{
      setStatus(FETCH_STATUS.LOADING);
      const response = await fetch('https://pokeapi.co/api/v2/type/' + e);
    
      if(response.ok){
        const data2 = await response.json(); 
        setStatus(FETCH_STATUS.SUCCESS);   
        const filter2 = data2.pokemon.filter((item) =>{
          const pokemonID = item.pokemon.url.split("/")[6];
          return pokemonID < 152
        })
        const map2 = filter2.map(objet => objet.pokemon);
        setPokemons(map2);
      }
    }catch(err){
      console.log(err);
      setStatus(FETCH_STATUS.ERROR);
    }
    }else setPokemons(fullListPokemons);
}

export const ClickModal = async (setStatusModal, item, setPokemonModal, setOpenModal, setFlavorText) => {
  try{
    setStatusModal(FETCH_STATUS.LOADING);
    const response = await fetch(item.url);

    if(response.ok){
      const data = await response.json(); 
      const response2 = await fetch(data.species.url)
        if(response2.ok){
          const data2 = await response2.json()
          setFlavorText(data2)
          setStatusModal(FETCH_STATUS.SUCCESS);
        }
      setPokemonModal(data);
      setOpenModal(true); 
    }
  }catch(err){
    console.log(err);
    setStatusModal(FETCH_STATUS.ERROR);
  }
}

export const fetchEvolution = async (url, setEvolution, evolution, setStatusEvolution) => {

  if(evolution === null){
    try{
      setStatusEvolution(FETCH_STATUS.LOADING);
      const response = await fetch(url);
  
      if(response.ok){
        const data = await response.json(); 
        const response2 = await fetch(data.evolution_chain.url);
        if(response2.ok){
          const data2 = await response2.json();
          setEvolution(data2);
          setStatusEvolution(FETCH_STATUS.SUCCESS);
        }
      }
    }catch(err){
      console.log(err);
      setStatusEvolution(FETCH_STATUS.ERROR);
    }}}