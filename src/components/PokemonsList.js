import { useState, useContext } from 'react';
import { MyContext } from '../context/MyContext';

import { FETCH_STATUS } from '../fetch/fetchStatus';
import { ClickModal } from '../fetch/fetch';

import Modal from './Modal';

import pokeball_background from '../img/pokeball_background.png';
import styles from '../style/pokemonsList.module.scss';

function PokemonsList({pokemons}) {

    const {setPokemonModal, setFlavorText, getPokemonID, addHashTag, capitalizeLetter, setEvolution} = useContext(MyContext);
    const [statusModal, setStatusModal] = useState(FETCH_STATUS.IDLE)
    const [openModal, setOpenModal] = useState(false);

    openModal?document.body.style.overflow="hidden" : document.body.style.overflow=""

    return (
        <>
            {openModal ? <Modal openModal={setOpenModal} statusModal={statusModal}/> : ""}
            {pokemons.map((item) => (
                <div className={styles.card} key={getPokemonID(item.url)} onClick={()=>ClickModal(setStatusModal, item, setPokemonModal, setOpenModal, setFlavorText, setEvolution)}>
                    <div className={styles.img_background}>
                        <img src={pokeball_background} alt="pokeball background"/>
                    </div>
                    <div className={styles.img_block}>
                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${getPokemonID(item.url)}.png`} alt={item.name} />
                    </div>
                    <div className={styles.text_block}>
                        <p className={styles.hashtag}>{addHashTag(item.url)}</p>
                        <p>{capitalizeLetter(item.name)}</p>
                    </div> 
                </div> 
            ))}
        </>
    );
  }
  
  export default PokemonsList;
  