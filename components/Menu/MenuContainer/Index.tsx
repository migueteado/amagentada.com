import { faTimes } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { motion } from "framer-motion"
import { ReactNode } from "react"
import styles from "./styles.module.css"

interface MenuContainerProps {
  isOpen: boolean
  toggle: Function
  children: ReactNode
}

const variants = {
  open: {
    x: 0,
  },
  closed: {
    x: "100%",
  },
}

const MenuContainer = ({
  isOpen,
  toggle,
  children,
}: MenuContainerProps): JSX.Element => {
  const handleToggle = () => {
    toggle()
  }

  return (
    <>
      <motion.div
        className={styles.MenuContainer}
        transition={{ duration: 0.2 }}
        animate={isOpen ? "open" : "closed"}
        variants={variants}
      >
        <div className={styles.CloseButtonContainer}>
          <button className={styles.CloseButton} onClick={handleToggle}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        <div className={styles.Menu}>
          <div className={styles.MenuContent}>{children}</div>
        </div>
      </motion.div>
    </>
  )
}

export default MenuContainer
