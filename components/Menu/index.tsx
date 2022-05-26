import { faInstagram, faPinterestP } from "@fortawesome/free-brands-svg-icons"
import {
  faBriefcase,
  faComments,
  faHome,
  faPalette,
  faPaperPlane,
  faTimes,
  faUser,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import { useState } from "react"
import styles from "./styles.module.css"

interface MenuProps {
  toggleMenu: Function
  isOpen: boolean
}
const Menu = ({ toggleMenu, isOpen }: MenuProps) => {
  const handleCloseMenu = () => {
    toggleMenu(!isOpen)
  }

  return (
    <>
      <div
        className={`${styles.MainMenuContainer} ${isOpen ? styles.isOpen : ""}`}
      >
        <div className={`${styles.MainMenu} ${isOpen ? styles.isOpen : ""}`}>
          <div className={styles.CloseButtonContainer}>
            <button className={styles.CloseButton} onClick={handleCloseMenu}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
          <div className={styles.MenuContainer}>
            <div className={styles.Menu}>
              <div className={styles.SocialsContainer}>
                <div className={styles.SocialsTitle}>Redes Sociales</div>
                <div className={styles.Socials}>
                  <a
                    className={styles.SocialLink}
                    href="https://www.instagram.com/byamagentada/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faInstagram}
                      className={styles.MenuIcon}
                    />
                    <span>Instagram</span>
                  </a>
                  <a
                    className={styles.SocialLink}
                    href="https://co.pinterest.com/Amagentada/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faPinterestP}
                      className={styles.MenuIcon}
                    />
                    <span>Pinterest</span>
                  </a>
                </div>
              </div>
              <div className={styles.NavigationContainer}>
                <div className={styles.NavigationTitle}>Menu</div>
                <div className={styles.Navigation}>
                  <Link href="/">
                    <a className={styles.MenuLink}>
                      <FontAwesomeIcon
                        icon={faHome}
                        className={styles.MenuIcon}
                      />
                      <span>Inicio</span>
                    </a>
                  </Link>
                  <Link href="/about">
                    <a className={styles.MenuLink}>
                      <FontAwesomeIcon
                        icon={faUser}
                        className={styles.MenuIcon}
                      />
                      <span>Acerca de mi</span>
                    </a>
                  </Link>
                  <Link href="/consultancies">
                    <a className={styles.MenuLink}>
                      <FontAwesomeIcon
                        icon={faComments}
                        className={styles.MenuIcon}
                      />
                      <span>Asesorias</span>
                    </a>
                  </Link>
                  <Link href="/services">
                    <a className={styles.MenuLink}>
                      <FontAwesomeIcon
                        icon={faPalette}
                        className={styles.MenuIcon}
                      />
                      <span>Servicios</span>
                    </a>
                  </Link>
                  <Link href="/work">
                    <a className={styles.MenuLink}>
                      <FontAwesomeIcon
                        icon={faBriefcase}
                        className={styles.MenuIcon}
                      />
                      <span>Portafolio</span>
                    </a>
                  </Link>
                  <Link href="/contact">
                    <a className={styles.MenuLink}>
                      <FontAwesomeIcon
                        icon={faPaperPlane}
                        className={styles.MenuIcon}
                      />
                      <span>Contactame</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Menu
