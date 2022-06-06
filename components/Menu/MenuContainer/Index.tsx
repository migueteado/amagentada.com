import { motion } from "framer-motion"
import { ReactNode } from "react"
import MenuBody from "../MenuBody"
import MenuFooter from "../MenuFooter"
import styles from "./styles.module.css"

interface MenuContainerProps {
  isOpen: boolean
  children: ReactNode
}

const variants = {
  open: {
    x: 0,
    opacity: 1,
    maxWidth: 800,
    transition: {
      duration: 0.5,
    },
  },
  closed: {
    x: "100%",
    opacity: 0,
    maxWidth: 0,
    transition: {
      duration: 0.5,
    },
  },
}

const MenuContainer = ({
  isOpen,
  children,
}: MenuContainerProps): JSX.Element => {
  return (
    <>
      <motion.div
        className={styles.MenuContainer}
        animate={isOpen ? "open" : "closed"}
        variants={variants}
      >
        <MenuBody>{children}</MenuBody>
        <MenuFooter />
      </motion.div>
    </>
  )
}

export default MenuContainer
