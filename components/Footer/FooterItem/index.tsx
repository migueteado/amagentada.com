import Link from "next/link"
import { motion } from "framer-motion"
import styles from "./styles.module.css"

interface FooterItemProps {
  to: string
  label: string
}

const FooterItem = ({ to, label }: FooterItemProps): JSX.Element => {
  return (
    <Link href={to}>
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
