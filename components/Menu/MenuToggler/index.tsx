import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from "./styles.module.css"

interface MenuTogglerProps {
  toggle: Function
}

const MenuToggler = ({ toggle }: MenuTogglerProps): JSX.Element => {
  const handleToggle = () => {
    toggle()
  }

  return (
    <>
      <button className={styles.Button} onClick={handleToggle}>
        <FontAwesomeIcon icon={faBars} />
      </button>
    </>
  )
}

export default MenuToggler
