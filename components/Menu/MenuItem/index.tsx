import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import { motion } from "framer-motion"
import styles from "./styles.module.css"

interface MenuItemProps {
  to: string
  icon: IconProp
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

const MenuItem = ({ to, icon, label }: MenuItemProps): JSX.Element => {
  return (
    <Link href={to}>
      <motion.a
        className={styles.MenuItem}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        variants={variants}
      >
        <FontAwesomeIcon icon={icon} className={styles.MenuIcon} />
        <span>{label}</span>
      </motion.a>
    </Link>
  )
}

export default MenuItem
