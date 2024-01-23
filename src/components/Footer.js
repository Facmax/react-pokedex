import styles from '../style/footer.module.scss';

function Footer() {
    return (
      <footer className='vertical_align'>
        <div className={styles.copyright}>
          <p>©2024 by Maxime Vigneron, all rights reserved</p>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  