import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import { motion } from "framer-motion"
import styles from "./styles.module.css"

interface MenuItemProps {
  key: string
  to: string
  icon: IconProp
  label: string
}

const MenuItem = ({ key, to, icon, label }: MenuItemProps): JSX.Element => {
  return (
    <Link key={key} href={to}>
      <motion.a
        className={styles.MenuItem}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <FontAwesomeIcon icon={icon} className={styles.MenuIcon} />
        <span>{label}</span>
      </motion.a>
    </Link>
  )
}

export default MenuItem
