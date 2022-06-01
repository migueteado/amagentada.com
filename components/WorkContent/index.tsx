import { ReactNode } from "react"
import styles from "./styles.module.css"

interface WorkContentProps {
  title: string
  description: string
  service: string
  date: string
}

const WorkContent = ({
  title,
  description,
  service,
  date,
}: WorkContentProps): JSX.Element => {
  return (
    <div className={styles.WorkContentContainer}>
      <div className={styles.WorkContent}>
        <div className={styles.MetadataContainer}>
          <div className={styles.MetadataServiceContainer}>
            <h1 className={styles.MetadataTitle}>Servicio</h1>
            <p className={styles.MetadataDescription}>{service}</p>
          </div>
          <div className={styles.MetadataDateContainer}>
            <h1 className={styles.MetadataTitle}>Fecha</h1>
            <p className={styles.MetadataDescription}>{date}</p>
            <div className={styles.Decorator}></div>
          </div>
        </div>
        <div className={styles.DescriptionContainer}>
          <h1 className={styles.Title}>{title}</h1>
          <p className={styles.Description}>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default WorkContent
