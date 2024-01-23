export const capitalizeLetter = (name) =>{
    const goodName =  name.charAt(0).toUpperCase() + name.slice(1);
    return goodName;
}

export const addHashTag = (url) => {
    const pokemonID = url.split("/")[6];
    if(parseInt(pokemonID) < 10){
        return("#00" + pokemonID);
    }else if(parseInt(pokemonID) < 100 && parseInt(pokemonID) > 9 ){
        return("#0" + pokemonID);
    }else{
        return("#" + pokemonID);
    }}