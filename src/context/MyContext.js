import { createContext, useState } from 'react';

const MyContext = createContext();

const MyContextProvider = ({ children }) => {
    const [pokemonModal, setPokemonModal] = useState(null);
    const [flavorText, setFlavorText] = useState(null);
    const [evolution, setEvolution] = useState(null)

    const getPokemonID = (url) => {
      const pokemonID = url.split("/")[6];
      return(pokemonID);  
    }

    const addHashTag = (url) => {
      const pokemonID = url.split("/")[6];
      if(parseInt(pokemonID) < 10){
          return("#00" + pokemonID);
      }else if(parseInt(pokemonID) < 100 && parseInt(pokemonID) > 9 ){
          return("#0" + pokemonID);
      }else{
          return("#" + pokemonID);
      }
    }

    const capitalizeLetter = (name) =>{
      const goodName =  name.charAt(0).toUpperCase() + name.slice(1);
      return goodName;
    }

  const contextValue = {
    pokemonModal,
    setPokemonModal,
    flavorText,
    setFlavorText,
    evolution,
    setEvolution,
    getPokemonID,
    addHashTag,
    capitalizeLetter
  };

  return (
    <MyContext.Provider value={contextValue}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };
