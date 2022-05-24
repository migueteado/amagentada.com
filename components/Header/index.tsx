import styles from "./styles.module.css"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Menu from "../Menu"

const Header = () => {
  return (
    <>
      <div className={styles.MainHeader}>
        <div className={styles.MainHeader__Container}>
          <button className={styles.MainMenuToggler}>
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      </div>
      <Menu />
    </>
  )
}

export default Header
