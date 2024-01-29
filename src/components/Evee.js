import { useContext } from 'react';
import { MyContext } from '../context/MyContext';

import styles from '../style/evolution.module.scss';

function Evee() {

    const {getPokemonID, addHashTag, capitalizeLetter, evolution} = useContext(MyContext);

    return(
        <>
            <div className={styles.evolutionImg}>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${getPokemonID(evolution.chain.species.url)}.png`} alt={evolution.chain.species.name} />
                <div>
                  <p className={styles.evolutionId}>{addHashTag(evolution.chain.species.url)}</p>
                  <p className={styles.evolutionName}>{capitalizeLetter(evolution.chain.species.name)}</p>
                </div>
            </div> 
            <div className={styles.evolutionImg}>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${getPokemonID(evolution.chain.evolves_to[0].species.url)}.png`} alt={evolution.chain.evolves_to[0].species.name} />
                <div>
                  <p className={styles.evolutionId}>{addHashTag(evolution.chain.evolves_to[0].species.url)}</p>
                  <p className={styles.evolutionName}>{capitalizeLetter(evolution.chain.evolves_to[0].species.name)}</p>
                </div>
            </div> 
            <div className={styles.evolutionImg}>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${getPokemonID(evolution.chain.evolves_to[1].species.url)}.png`} alt={evolution.chain.evolves_to[1].species.name} />
                <div>
                  <p className={styles.evolutionId}>{addHashTag(evolution.chain.evolves_to[1].species.url)}</p>
                  <p className={styles.evolutionName}>{capitalizeLetter(evolution.chain.evolves_to[1].species.name)}</p>
                </div>
            </div> 
            <div className={styles.evolutionImg}>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${getPokemonID(evolution.chain.evolves_to[2].species.url)}.png`} alt={evolution.chain.evolves_to[2].species.name} />
                <div>
                  <p className={styles.evolutionId}>{addHashTag(evolution.chain.evolves_to[2].species.url)}</p>
                  <p className={styles.evolutionName}>{capitalizeLetter(evolution.chain.evolves_to[2].species.name)}</p>
                </div>
            </div> 
        </>
    )
}

export default Evee

