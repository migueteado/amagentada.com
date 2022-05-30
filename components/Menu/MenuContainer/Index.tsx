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
    transition: {
      duration: 0.2,
    },
  },
  closed: {
    x: "100%",
    transition: {
      duration: 0.2,
    },
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
        animate={isOpen ? "open" : "closed"}
        variants={variants}
      >
        <div className={styles.CloseButtonContainer}>
          <motion.button
            className={styles.CloseButton}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleToggle}
          >
            <FontAwesomeIcon icon={faTimes} />
          </motion.button>
        </div>
        <div className={styles.Menu}>
          <div className={styles.MenuContent}>{children}</div>
        </div>
      </motion.div>
    </>
  )
}

export default MenuContainer
