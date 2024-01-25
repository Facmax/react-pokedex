import Loading from './Loading';

import styles from '../style/modal.module.scss';

function ModalLoading(openModal) {
    return(
        <div className={`${styles.background} vertical_align`}>
            <div className={styles.card}>
                <div className={styles.modalClose} onClick={()=> openModal(false)}>X</div>
                <Loading />
            </div>
        </div>

    )
}
export default ModalLoading;