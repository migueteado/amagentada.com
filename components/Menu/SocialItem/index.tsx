import { motion } from "framer-motion"
import styles from "./styles.module.css"

interface SocialItemProps {
  to: string
  label: string
}

const variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
    },
  },
  closed: {
    opacity: 0,
    y: 15,
    transition: {
      duration: 0.2,
    },
  },
}

const SocialItem = ({ to, label }: SocialItemProps): JSX.Element => {
  return (
    <motion.div className={styles.SocialItemContainer} variants={variants}>
      <motion.a
        className={styles.SocialItem}
        whileHover={{ y: "-50%" }}
        whileTap={{ scale: 0.95 }}
        href={to}
        target="_blank"
        rel="noreferrer"
      >
        <div className={styles.SocialItemContent}>{label}</div>
        <div className={styles.SocialItemContent}>{label}</div>
      </motion.a>
    </motion.div>
  )
}

export default SocialItem
