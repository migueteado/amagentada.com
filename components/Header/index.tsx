import styles from "./styles.module.css"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Menu from "../Menu"
import { useState } from "react"

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false)

  const handleMenuOpen = () => {
    setMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <div className={styles.MainHeader}>
        <div className={styles.MainHeader__Container}>
          <button className={styles.MainMenuToggler} onClick={handleMenuOpen}>
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      </div>
      <Menu toggleMenu={handleMenuOpen} isOpen={isMenuOpen} />
    </>
  )
}

export default Header
