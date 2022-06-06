import { motion } from "framer-motion"
import styles from "./styles.module.css"

interface PreloaderProps {
  label: string
}

const variants = {
  show: {
    y: 0,
  },
  hidden: {
    y: "-100%",
  },
}

const transition1 = {
  delay: 1.8,
  duration: 1,
  type: "spring",
}

const transition2 = {
  delay: 2,
  duration: 1,
  type: "spring",
}

const Preloader = ({ label }: PreloaderProps): JSX.Element => {
  return (
    <>
      <motion.div
        className={styles.Layer2}
        variants={variants}
        transition={transition2}
        initial="show"
        animate="hidden"
      ></motion.div>
      <motion.div
        className={styles.Layer1}
        variants={variants}
        transition={transition1}
        initial="show"
        animate="hidden"
      >
        <h1 className={styles.PreloaderLabel}>{label}</h1>
      </motion.div>
    </>
  )
}

export default Preloader
