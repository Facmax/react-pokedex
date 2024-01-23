import styles from '../style/stats.module.scss';
import '../style/modalColor.scss';

function Stats({stats, flavor, pokemonInfos, type}) {
  
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
        <h4 className={`${styles.statsTitle} ${type}Text`}>Base stats</h4>
        <ul className={styles.ulStats}>
          {stats.map((item, incrementAndReturn) => (
            <li key={incrementAndReturn} className={`${styles.statsInfos} vertical_align`}>
            <div className={styles.statName}>
              {tab[incrementAndReturn]} 
            </div>
            <div className={styles.statLine}></div>
            <div className={styles.statValue}>
              {stats[incrementAndReturn].base_stat} 
            </div>
          </li>
          ))}
        </ul>
      </div>
        <div className={`${styles.flavor} ${type}`}>
          {flavor.flavor_text_entries.map((item) => (
            harmonizeFlavorText(item)
          ))}  
        </div>
        <div className={styles.measure}>
          <div className={styles.measureText}>
            <h4 className={`${type}Text`}>Weight:</h4>
            <p>{pokemonInfos.weight/10} kg</p>
          </div>
          <div className={styles.measureText}>
            <h4 className={`${type}Text`}>Height:</h4>
            <p>{pokemonInfos.height/10} m</p>
          </div>
        </div>
      </>
    );
  } 
export default Stats;