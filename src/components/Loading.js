import pokeballLoading from '../img/pokeballLoading.png';
import styles from '../style/loading.module.scss';

function Loading() {
    return (
            <div className={`${styles.loading} vertical_align`}>  
                <div className={`${styles.loadingIcon} vertical_align`}>
                    <img src={pokeballLoading} alt="Loading icon"/>
                    <h2>Loading</h2>
                </div>
            </div>
    );
  }
export default Loading;
  