import styles from '../style/modal.module.scss';
import '../style/modalColor.scss';
import pokeball_background from '../img/pokeball_background.png';
import Stats from './Stats';
import Evolution from './Evolution';
import { useState, useEffect } from 'react';
import { fetchEvolution } from '../fetch/fetch';
import { FETCH_STATUS } from '../fetch/fetchStatus';
import { capitalizeLetter, addHashTag} from '../utils/utils';

function Modal({pokemonInfos, openModal, id, flavor}) {

  const [valueTabs, setValueTabs] = useState(0);
  const [evolution, setEvolution] = useState(null);
  const [statusEvolution, setStatusEvolution] = useState(FETCH_STATUS.IDLE);
  const [type, setType] = useState("");

  const tabsClick = (index) => {
    setValueTabs(index);
    const tabs = document.getElementsByClassName('tabsLi');

    if(index === 1){
      fetchEvolution(pokemonInfos.species.url, setEvolution, evolution, setStatusEvolution);
    }

    for (let i = 0; i < tabs.length; i++) {
      if(tabs[i].textContent === tabs[index].textContent){
        tabs[i].classList.add('bold');
        tabs[i].classList.add(type + 'Text');
        tabs[i].classList.add(type + 'Border');
        tabs[i].classList.remove('tabsBorderGray');
      }else{
        tabs[i].classList.remove('bold');
        tabs[i].classList.remove(type + 'Text');
        tabs[i].classList.add('tabsBorderGray');
        tabs[i].classList.remove(type + 'Border');
      }
    }
  }

  const getPokemonType = () => {
    setType(pokemonInfos.types[0].type.name);
  }

  useEffect(() => { 
      getPokemonType();
  },[]);
  
    return (
      <div className={`${styles.background} vertical_align`}>
        <div className={`${styles.card} ${type}shadow`}>

              <div className={`${styles.colorPart} ${type}`}>
                <div className={styles.colorPartImgBackground}>
                  <img src={pokeball_background} alt="pokeball background"/>
                </div>
                <div className={styles.modalClose} onClick={()=> openModal(false)}>X</div>
                <div className={`${styles.colorPartText} vertical_align`}>
                  <div>
                    <div className={styles.colorPartName}>{capitalizeLetter(pokemonInfos.name)}</div>
                    <div className={styles.colorPartId}>{addHashTag(pokemonInfos.species.url)}</div>
                    <div className={styles.colorPartType}>
                      {pokemonInfos.types.map((item) => (
                        <div className={styles.colorPartTypeBorder} key={item.slot}>{capitalizeLetter(item.type.name)}</div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className={styles.colorPartPokemonImg}>
                  <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonInfos.id}.png`} alt={pokemonInfos.name} />
                </div>
              </div>
              <div className={`${styles.tabsBlock} vertical_align`}>
                <ul className={`${styles.tabsUl}`}>
                  <li className={`${styles.tabs} bold tabsLi ${type}Text ${type}Border`} onClick={()=>tabsClick(0)}>
                    Stats              
                  </li>
                  <li className={`${styles.tabs} tabsBorderGray tabsLi`} onClick={()=>tabsClick(1)}>
                    Evolution
                  </li>
                </ul>
              </div>
              <div className={styles.cardInfosPartData}>
                <div>
                  {valueTabs === 0 ? <Stats stats={pokemonInfos.stats} flavor={flavor} pokemonInfos={pokemonInfos} type={type}/> : ''}
                  {valueTabs === 1 ? <Evolution evolution={evolution} status={statusEvolution} id={id} /> : ''} 
                </div>
              </div>

        </div>
      </div>
    );
  }
  
  export default Modal;
  