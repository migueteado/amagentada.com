import Link from "next/link"
import { motion } from "framer-motion"
import styles from "./styles.module.css"

interface FooterItemProps {
  key: string
  to: string
  label: string
}

const FooterItem = ({ key, to, label }: FooterItemProps): JSX.Element => {
  return (
    <Link key={key} href={to}>
      <motion.a
        className={styles.FooterItem}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {label}
      </motion.a>
    </Link>
  )
}

export default FooterItem
