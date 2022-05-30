import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { motion } from "framer-motion"
import styles from "./styles.module.css"

interface SocialItemProps {
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

const SocialItem = ({ to, icon, label }: SocialItemProps): JSX.Element => {
  return (
    <motion.a
      className={styles.SocialItem}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      href={to}
      target="_blank"
      rel="noreferrer"
      variants={variants}
    >
      <FontAwesomeIcon icon={icon} className={styles.SocialIcon} />
      <span>{label}</span>
    </motion.a>
  )
}

export default SocialItem
