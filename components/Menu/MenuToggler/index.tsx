import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { motion } from "framer-motion"
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
      <motion.button
        className={styles.Button}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleToggle}
      >
        <FontAwesomeIcon icon={faBars} />
      </motion.button>
    </>
  )
}

export default MenuToggler
