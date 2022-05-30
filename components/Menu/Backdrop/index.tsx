import { motion } from "framer-motion"
import styles from "./styles.module.css"

interface BackdropProps {
  isOpen: boolean
  toggle: Function
}

const variants = {
  open: {
    opacity: 1,
    display: "block",
    transition: {
      duration: 0.2,
    },
  },
  closed: {
    opacity: 0,
    display: "none",
    transition: {
      duration: 0.2,
    },
  },
}

const Backdrop = ({ isOpen, toggle }: BackdropProps): JSX.Element => {
  const handleToggle = () => {
    toggle()
  }

  return (
    <motion.div
      className={styles.Backdrop}
      animate={isOpen ? "open" : "closed"}
      variants={variants}
      onClick={handleToggle}
    ></motion.div>
  )
}

export default Backdrop
