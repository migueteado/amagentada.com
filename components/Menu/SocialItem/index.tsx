import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { motion } from "framer-motion"
import styles from "./styles.module.css"

interface SocialItemProps {
  key: string
  to: string
  icon: IconProp
  label: string
}

const SocialItem = ({ key, to, icon, label }: SocialItemProps): JSX.Element => {
  return (
    <motion.a
      key={key}
      className={styles.SocialItem}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      href={to}
      target="_blank"
      rel="noreferrer"
    >
      <FontAwesomeIcon icon={icon} className={styles.SocialIcon} />
      <span>{label}</span>
    </motion.a>
  )
}

export default SocialItem
