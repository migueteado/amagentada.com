import { faInstagram, faPinterest } from "@fortawesome/free-brands-svg-icons"
import { faTimes } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import styles from "./styles.module.css"

const Menu = () => {
  return (
    <>
      <div className={styles.MainMenuContainer}>
        <div className={styles.MainMenu}>
          <div className={styles.CloseButtonContainer}>
            <button className={styles.CloseButton}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
          <div className={styles.Menu}>
            <div className={styles.SocialsContainer}>
              <div className={styles.SocialsTitle}>Socials</div>
              <div className={styles.Socials}>
                <a className={styles.SocialLink} href="">
                  Instagram
                </a>
                <a className={styles.SocialLink} href="">
                  Pinterest
                </a>
              </div>
            </div>
            <div className={styles.NavigationContainer}>
              <div className={styles.NavigationTitle}>Menu</div>
              <div className={styles.Navigation}>
                <Link href="/">
                  <a className={styles.MenuLink}>Inicio</a>
                </Link>
                <Link href="/">
                  <a className={styles.MenuLink}>Acerca de mi</a>
                </Link>
                <Link href="/">
                  <a className={styles.MenuLink}>Asesorias</a>
                </Link>
                <Link href="/">
                  <a className={styles.MenuLink}>Servicios</a>
                </Link>
                <Link href="/">
                  <a className={styles.MenuLink}>Portafolio</a>
                </Link>
                <Link href="/contact">
                  <a className={styles.MenuLink}>Contactame</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Menu
