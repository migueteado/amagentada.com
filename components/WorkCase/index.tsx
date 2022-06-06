import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import styles from "./styles.module.css"
import LinkButton, { LinkButtonType } from "../LinkButton"

interface WorkCaseProps {
  work: {
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
  }
}

const WorkCase = ({ work }: WorkCaseProps): JSX.Element => {
  const thumbnail = work.images.find((i) => i.thumbnail)
    ?.image as StaticImageData

  return (
    <>
      <div className={styles.WorkCase}>
        <div className={styles.WorkCaseContent}>
          <div className={styles.WorkCaseService}>{work.service}</div>
          <h1 className={styles.WorkCaseTitle}>{work.title}</h1>
          <p className={styles.WorkCaseDescription}>
            {work.description.slice(0, 180) + "..."}
          </p>
          <LinkButton to={work.url} type={LinkButtonType.internal}>
            Ver Caso de Estudio
          </LinkButton>
        </div>
        <div className={styles.WorkCaseImageContainer}>
          <Link href={work.url}>
            <div className={styles.WorkCaseImage}>
              <motion.div whileHover={{ scale: 1.2 }}>
                <Image
                  src={thumbnail}
                  alt={work.title}
                  layout={"responsive"}
                  placeholder="blur"
                />
              </motion.div>
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}

export default WorkCase
