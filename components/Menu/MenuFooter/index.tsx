import { email } from "../../../config/labels"
import { links } from "../../../config/links"
import styles from "./styles.module.css"

const MenuFooter = () => {
  return (
    <div className={styles.MenuFooterContainer}>
      <div className={styles.MenuFooterContent}>
        <h1 className={styles.MenuFooterTitle}>Contáctame</h1>
        <div className={styles.Email}>
          <a rel="noreferrer" target="_blank" href={links.email}>
            {email}
          </a>
        </div>
      </div>
    </div>
  )
}

export default MenuFooter
