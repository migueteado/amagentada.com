import Brand from "./Brand"
import ContactToggler from "./ContactToggler"
import styles from "./styles.module.css"

const Header = () => {
  return (
    <div className={styles.Header}>
      <div className={styles.HeaderContent}>
        <Brand />
        <ContactToggler />
      </div>
    </div>
  )
}

export default Header
