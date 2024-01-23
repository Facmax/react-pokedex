import styles from '../style/pokemonsList.module.scss';
import pokeball_background from '../img/pokeball_background.png';
import { FETCH_STATUS } from '../fetch/fetchStatus';
import { capitalizeLetter, addHashTag } from '../utils/utils';
import { ClickModal } from '../fetch/fetch';
import { useState } from 'react';
import Modal from './Modal';

function PokemonsList({pokemons}) {

    const [statusModal, setStatusModal] = useState(FETCH_STATUS.IDLE)
    const [pokemonModal, setPokemonModal] = useState(null);
    const [openModal, setOpenModal] = useState(false);
    const [flavorText, setFlavorText] = useState(null);

    openModal?document.body.style.overflow="hidden" : document.body.style.overflow=""

    const getPokemonID = (url) => {
        const pokemonID = url.split("/")[6];
        return(pokemonID);  
    }

    return (
        <>
            {openModal ? <Modal pokemonInfos={pokemonModal} openModal={setOpenModal} id={getPokemonID} flavor={flavorText} /> : ""}
            {pokemons.map((item) => (
                <div className={styles.card} key={getPokemonID(item.url)} onClick={()=>ClickModal(setStatusModal, item, setPokemonModal, setOpenModal, setFlavorText)}>
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
  