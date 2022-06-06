import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { motion } from "framer-motion"
import styles from "./styles.module.css"

interface MenuTogglerProps {
  toggle: Function
  isOpen: boolean
}

const MenuToggler = ({ toggle, isOpen }: MenuTogglerProps): JSX.Element => {
  const handleToggle = () => {
    toggle()
  }

  return (
    <>
      <motion.button className={styles.Button} onClick={handleToggle}>
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
      </motion.button>
    </>
  )
}

export default MenuToggler
