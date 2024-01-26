import { useState, useContext } from 'react';
import { MyContext } from '../context/MyContext';

import { fetchEvolution } from '../fetch/fetch';
import { FETCH_STATUS } from '../fetch/fetchStatus';

import Stats from './Stats';
import Evolution from './Evolution';
import Loading from './Loading';

import pokeball_background from '../img/pokeball_background.png';
import styles from '../style/modal.module.scss';
import '../style/modalColor.scss';

function Modal({openModal, statusModal, evolution}) {

  const {pokemonModal, setPokemonModal, capitalizeLetter, addHashTag} = useContext(MyContext);
  const [valueTabs, setValueTabs] = useState(0);

  const [statusEvolution, setStatusEvolution] = useState(FETCH_STATUS.IDLE);

  const tabsClick = (index) => {
    setValueTabs(index);
    const tabs = document.getElementsByClassName('tabsLi');

    for (let i = 0; i < tabs.length; i++) {
      if(tabs[i].textContent === tabs[index].textContent){
        tabs[i].classList.add('bold');
        tabs[i].classList.add(pokemonModal.types[0].type.name + 'Text');
        tabs[i].classList.add(pokemonModal.types[0].type.name + 'Border');
        tabs[i].classList.remove('tabsBorderGray');
      }else{
        tabs[i].classList.remove('bold');
        tabs[i].classList.remove(pokemonModal.types[0].type.name + 'Text');
        tabs[i].classList.add('tabsBorderGray');
        tabs[i].classList.remove(pokemonModal.types[0].type.name + 'Border');
      }
    }
  }
  const success = statusModal === FETCH_STATUS.SUCCESS;

    return (
      <>
      {success ?
        <div className={`${styles.background} vertical_align`}>
        <div className={styles.card}>

              <div className={`${styles.colorPart} ${pokemonModal.types[0].type.name}`}>
                <div className={styles.colorPartImgBackground}>
                  <img src={pokeball_background} alt="pokeball background"/>
                </div>
                <div className={styles.modalClose} onClick={()=> openModal(false)}>X</div>
                <div className={`${styles.colorPartText} vertical_align`}>
                  <div>
                    <p className={styles.colorPartName}>{capitalizeLetter(pokemonModal.name)}</p>
                    <div className={styles.colorPartId}>{addHashTag(pokemonModal.species.url)}</div>
                    <div className={styles.colorPartType}>
                      {pokemonModal.types.map((item) => (
                        <div className={`${styles.colorPartTypeBorder} ${item.type.name}Text`} key={item.slot}>{capitalizeLetter(item.type.name)}</div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className={styles.colorPartPokemonImg}>
                  <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonModal.id}.png`} alt={pokemonModal.name} />
                </div>
              </div>
              <div className={`${styles.tabsBlock} vertical_align`}>
                <ul className={`${styles.tabsUl}`}>
                  <li className={`${styles.tabs} bold tabsLi ${pokemonModal.types[0].type.name}Text ${pokemonModal.types[0].type.name}Border`} onClick={()=>tabsClick(0)}>
                    Stats              
                  </li>
                  {evolution.chain.evolves_to.length !== 0 ?
                    <li className={`${styles.tabs} tabsBorderGray tabsLi`} onClick={()=>tabsClick(1)}>
                      Evolution
                    </li>
                  :
                    <li className={`${styles.disable} ${styles.tabs} tabsBorderGray tabsLi`}>
                      No evolution
                    </li>
                  }

                </ul>
              </div>
              <div className={styles.cardInfosPartDataFlex}>
                <div className={styles.cardInfosPartData}>
                  {valueTabs === 0 ? <Stats/> : ''}
                  {valueTabs === 1 ? <Evolution evolution={evolution} status={statusModal} /> : ''} 
                </div>
              </div>

        </div>
      </div>
      :
      <div className={`${styles.background} vertical_align`}>
        <div className={styles.card}>
          <div className={styles.modalClose} onClick={()=> openModal(false)}>X</div>
          <Loading />
        </div>
      </div>
      }
      
      </>

    );
  }
  
  export default Modal;
  