import styles from '../style/header.module.scss';
import pokeball_menu from '../img/pokeballLoading.png';
import gitHub from '../img/github.png';
import linkedIn from '../img/linkedin-in.png'

function Header() {

  const handleClick = () => {
    const menu = document.getElementById("ulMenu");

    if(menu.classList.contains("block")){
      menu.classList.add("none");
      menu.classList.remove("block");
    }else{
      menu.classList.add("block");
      menu.classList.remove("none");
    }

  }
    return (
      <>
        <header className="vertical_align">
          <div className={styles.title}>
            <h1>Pokedex - ReactJS</h1>
          </div>
          <div className={styles.contactDesktop}>
            <div className={`${styles.contactCircle} vertical_align`}>
              <img src={gitHub} alt="github icon" />
            </div>
            <div className={`${styles.contactCircle} vertical_align`}>
              <img src={linkedIn} alt="linked icon" />
            </div>
          </div>
          <div className={styles.contactMobile} onClick={() =>handleClick()}>
            <img src={pokeball_menu} alt="burger menu icon" />
          </div>
          <ul id="ulMenu" className={`${styles.ulMenu} none`}>
            <li>GitHub</li>
            <li>LinkedIn</li>
          </ul>
        </header>
      </>
    );
  }
export default Header;