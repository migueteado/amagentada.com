import { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ReactNode } from "react"
import styles from "./styles.module.css"

interface ContactCardProps {
  children: ReactNode
  to: string
  icon: IconDefinition
}
const ContactCard = ({ to, icon, children }: ContactCardProps): JSX.Element => {
  return (
    <a href={to} target="_blank" rel="noreferrer">
      <div className={styles.ContactCard}>
        <div className={styles.IconContainer}>
          <FontAwesomeIcon icon={icon} className={styles.Icon} />
        </div>
        <div className={styles.Content}>{children}</div>
      </div>
    </a>
  )
}

export default ContactCard
