import { useContext } from 'react';
import { MyContext } from '../context/MyContext';

import Loading from './Loading';
import Evee from './Evee';

import styles from '../style/evolution.module.scss';

function Evolution({status}) {
  
  const {getPokemonID, addHashTag, capitalizeLetter, evolution} = useContext(MyContext);
  if(status === "success"){
    let firstEvolution = false;
    let secondEvolution = false;
    let thirdEvolution = false;

    let id_1 = getPokemonID(evolution.chain.species.url);
    let id_2 = null;
    let id_3 = null;

    firstEvolution = true;
 
    let a = evolution.chain.evolves_to.length;
    if(a !== 0){
      id_2 = getPokemonID(evolution.chain.evolves_to[0].species.url);

        secondEvolution = true;
  

    let b = evolution.chain.evolves_to[0].evolves_to.length;
      if(b !== 0){
        id_3 = getPokemonID(evolution.chain.evolves_to[0].evolves_to[0].species.url);

          thirdEvolution = true

      }
    }

    return(
      <>
        <div className={styles.evolutionBlock}>
          {id_1 === "133" ? <Evee/> 
          :
            <>
            {firstEvolution ?
              <div className={styles.evolutionImg}>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id_1}.png`} alt={evolution.chain.species.name} />
                <div>
                  <p className={styles.evolutionId}>{addHashTag(evolution.chain.species.url)}</p>
                  <p className={styles.evolutionName}>{capitalizeLetter(evolution.chain.species.name)}</p>
                  {id_1 > 151 ? <p className={styles.evolutionOtherGen}>Pokemon unavailable in 1st generation</p> : ""}
                </div>
              </div> 
              
              : 
                <></>
            }
            
            {secondEvolution ?
              <div className={styles.evolutionImg}>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id_2}.png`} alt={evolution.chain.evolves_to[0].species.name} />
                <div>
                  <p className={styles.evolutionId}>{addHashTag(evolution.chain.evolves_to[0].species.url)}</p>
                  <p className={styles.evolutionName}>{capitalizeLetter(evolution.chain.evolves_to[0].species.name)}</p>
                  {id_2 > 151 ? <p className={styles.evolutionOtherGen}>Pokemon unavailable in 1st generation</p> : ""}
                </div>
              </div>  
              : 
                <></>
            }
            {thirdEvolution ?
              <div className={styles.evolutionImg}>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id_3}.png`} alt={evolution.chain.evolves_to[0].evolves_to[0].species.name} />
                <div>
                  <p className={styles.evolutionId}>{addHashTag(evolution.chain.evolves_to[0].evolves_to[0].species.url)}</p>
                  <p className={styles.evolutionName}>{capitalizeLetter(evolution.chain.evolves_to[0].evolves_to[0].species.name)}</p>
                  {id_3 > 151 ? <p className={styles.evolutionOtherGen}>Pokemon unavailable in 1st generation</p> : ""}
                </div>
              </div> 
              : 
                <></>
            }
            </>
          }
          
        </div>
     </>
    )
  }else{
    return(
      <div className={styles.evolutionBlock}>
        <Loading />
      </div>
    )
  }
}
export default Evolution;