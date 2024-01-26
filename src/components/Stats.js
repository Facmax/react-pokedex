import styles from '../style/stats.module.scss';
import '../style/modalColor.scss';
import { useContext } from 'react';
import { MyContext } from '../context/MyContext';

function Stats({}) {

  const {pokemonModal, setPokemonModal} = useContext(MyContext);
  const {flavorText, setFlavorText} = useContext(MyContext);

  let counter = 0;
  const tab = ["Hp", "Atk", "Def", "Spe-Atk", "Spe-Def", "Speed"]

  function incrementAndReturn() {
    counter++;
    return counter;
  } 
  
  const harmonizeFlavorText = (item) => {
    if(item.language.name === "en"){
      if(item.version.name === "red"){
        return item.flavor_text.replace(/\f/g, ' ');
      }
    }
  }
  return (
    <>
      <div className={styles.statsBox}>
        <h4 className={`${styles.statsTitle} ${pokemonModal.types[0].type.name}Text`}>Base stats</h4>
        <ul className={styles.ulStats}>
          {pokemonModal.stats.map((item, incrementAndReturn) => (
            <li key={incrementAndReturn} className={`${styles.statsInfos} vertical_align`}>
            <div className={styles.statName}>
              {tab[incrementAndReturn]} 
            </div>
            <div className={styles.statLine}></div>
            <div className={styles.statValue}>
              {pokemonModal.stats[incrementAndReturn].base_stat} 
            </div>
          </li>
          ))}
        </ul>
      </div>
        <div className={`${styles.flavor} ${pokemonModal.types[0].type.name}`}>
          {flavorText.flavor_text_entries.map((item) => (
            harmonizeFlavorText(item)
          ))}  
        </div>
        <div className={styles.measure}>
          <div className={styles.measureText}>
            <h4 className={`${pokemonModal.types[0].type.name}Text`}>Weight:</h4>
            <p>{pokemonModal.weight/10} kg</p>
          </div>
          <div className={styles.measureText}>
            <h4 className={`${pokemonModal.types[0].type.name}Text`}>Height:</h4>
            <p>{pokemonModal.height/10} m</p>
          </div>
        </div>
      </>
    );
  } 
export default Stats;