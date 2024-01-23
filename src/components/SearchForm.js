import styles from '../style/searchForm.module.scss';
import {selectTypePokemon} from '../fetch/fetch';

function SearchForm({search, setSearch, setStatus, setPokemons, fullListPokemons}) {
    return (
            <>
                <div className={`${styles.searchBar} vertical_align`}>
                    <div className={`${styles.nameBox} vertical_align`}>
                        <span className={styles.label}>Name</span>
                        <input placeholder="Type to search..." value={search} onClick={(e) => e.target.placeholder=""} onChange={e => setSearch(e.target.value)} /> 
                    </div>
                    <div className={`${styles.typeBox} vertical_align`}>
                        <span className={styles.label}>Type</span>
                        <select name="type" onChange={(e) => selectTypePokemon(e.target.value, setStatus, setPokemons, fullListPokemons)}>
                            <option defaultValue="">All</option>
                            <option value="fire">Fire</option>
                            <option value="water">Water</option>
                            <option value="grass">Grass</option>
                            <option value="poison">Poison</option>
                            <option value="bug">Bug</option>
                            <option value="electric">Electric</option>
                            <option value="normal">Normal</option>
                            <option value="fighting">Fighting</option>
                            <option value="flying">Flying</option>
                            <option value="ground">Ground</option>
                            <option value="rock">Rock</option>
                            <option value="ghost">Ghost</option>
                            <option value="psychic">Psychic</option>
                            <option value="ice">Ice</option>
                            <option value="dragon">Dragon</option>
                            <option value="fairy">Fairy</option>
                        </select>
                    </div>
                </div>
            </>
    );
  }
export default SearchForm;