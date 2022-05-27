import {
  faInstagram,
  faPinterest,
  faPinterestP,
} from "@fortawesome/free-brands-svg-icons"
import { motion } from "framer-motion"
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

  const socials = {
    title: "Redes Sociales",
    links: [
      {
        id: "instagram",
        to: "https://www.instagram.com/byamagentada/",
        label: "Instagram",
        icon: faInstagram,
      },
      {
        id: "pinterest",
        to: "https://co.pinterest.com/Amagentada/",
        label: "Pinterest",
        icon: faPinterest,
      },
    ],
  }

  const navigation = {
    title: "Menu",
    links: [
      {
        id: "home",
        to: "/",
        label: "Inicio",
        icon: faHome,
      },
      {
        id: "about",
        to: "/about",
        label: "Acerca de mi",
        icon: faUser,
      },
      {
        id: "consultancies",
        to: "/consultancies",
        label: "Asesorias",
        icon: faComments,
      },
      {
        id: "services",
        to: "/services",
        label: "Servicios",
        icon: faPalette,
      },
      {
        id: "work",
        to: "/work",
        label: "Portafolio",
        icon: faBriefcase,
      },
      {
        id: "contact",
        to: "/contact",
        label: "Contactame",
        icon: faPaperPlane,
      },
    ],
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
                <div className={styles.SocialsTitle}>{socials.title}</div>
                <div className={styles.Socials}>
                  {socials.links.map(({ id, to, label, icon }) => (
                    <a
                      key={id}
                      className={styles.SocialLink}
                      href={to}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FontAwesomeIcon
                        icon={icon}
                        className={styles.MenuIcon}
                      />
                      <span>{label}</span>
                    </a>
                  ))}
                </div>
              </div>
              <div className={styles.NavigationContainer}>
                <div className={styles.NavigationTitle}>{navigation.title}</div>
                <div className={styles.Navigation}>
                  {navigation.links.map(({ id, to, label, icon }) => (
                    <Link key={id} href={to}>
                      <a className={styles.MenuLink}>
                        <FontAwesomeIcon
                          icon={icon}
                          className={styles.MenuIcon}
                        />
                        <span>{label}</span>
                      </a>
                    </Link>
                  ))}
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
