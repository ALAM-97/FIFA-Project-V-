// CSS
import styles from '../styles/menu.module.css'

let MENU_LINKS = ['PLAYER BIO', 'PLAYER DETAILS', 'ATTRIBUTE DETAILS', 'PLAYER TRAITS']

const Menu = () => {

  return (
    <div className={styles.menu}>
      {
        MENU_LINKS.map(link => (
          <h3 key={link} className={styles.menuLink} onClick={() => activeLink()}>{link}</h3>
        ))
      }
    </div>
  );
}

export default Menu;