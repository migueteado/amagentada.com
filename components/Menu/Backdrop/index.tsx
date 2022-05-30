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
  },
  closed: {
    opacity: 0,
    display: "none",
  },
}

const Backdrop = ({ isOpen, toggle }: BackdropProps): JSX.Element => {
  const handleToggle = () => {
    toggle()
  }

  return (
    <motion.div
      className={styles.Backdrop}
      transition={{ duration: 0.2 }}
      animate={isOpen ? "open" : "closed"}
      variants={variants}
      onClick={handleToggle}
    ></motion.div>
  )
}

export default Backdrop
