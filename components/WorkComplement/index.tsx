import { StaticImageData } from "next/image"
import WorkCaseCondensed from "../WorkCaseCondensed"
import styles from "./styles.module.css"

interface WorkComplementProps {
  works: {
    title: string
    images: {
      image: StaticImageData
      order: number
      thumbnail?: boolean
      main?: boolean
    }[]
    description: string
    service: string
    url: string
  }[]
}

const WorkComplement = ({ works }: WorkComplementProps): JSX.Element => {
  return (
    <div className={styles.WorkComplement}>
      <h1 className={styles.Title}>Otros Casos de Estudio</h1>
      <div className={styles.WorkGrid}>
        {works.map((work, index) => (
          <WorkCaseCondensed key={index} work={work} />
        ))}
      </div>
    </div>
  )
}

export default WorkComplement
