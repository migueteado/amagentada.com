import Link from "next/link"
import { motion } from "framer-motion"
import styles from "./styles.module.css"

interface MenuItemProps {
  to: string
  label: string
}

const variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
  closed: {
    opacity: 0,
    y: 15,
    transition: {
      duration: 0.5,
    },
  },
}

const hover = {
  y: "-50%",
}

const MenuItem = ({ to, label }: MenuItemProps): JSX.Element => {
  return (
    <motion.div className={styles.MenuItemContainer} variants={variants}>
      <Link href={to}>
        <motion.a
          className={styles.MenuItem}
          whileHover={hover}
          whileTap={{ scale: 0.95 }}
        >
          <div className={styles.MenuItemContent}>{label}</div>
          <div className={styles.MenuItemContent}>{label}</div>
        </motion.a>
      </Link>
    </motion.div>
  )
}

export default MenuItem
