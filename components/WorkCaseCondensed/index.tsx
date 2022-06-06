import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import styles from "./styles.module.css"
import LinkButton, { LinkButtonType } from "../LinkButton"

interface WorkCaseCondensedProps {
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

const WorkCaseCondensed = ({ work }: WorkCaseCondensedProps): JSX.Element => {
  const thumbnail = work.images.find((i) => i.thumbnail)
    ?.image as StaticImageData

  return (
    <>
      <div className={styles.WorkCaseCondensed}>
        <div className={styles.WorkCaseCondensedImageContainer}>
          <Link href={work.url}>
            <div className={styles.WorkCaseCondensedImage}>
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
        <div className={styles.WorkCaseCondensedContent}>
          <div className={styles.WorkCaseCondensedService}>{work.service}</div>
          <h1 className={styles.WorkCaseCondensedTitle}>{work.title}</h1>
          <p className={styles.WorkCaseCondensedDescription}>
            {work.description.slice(0, 180) + "..."}
          </p>
          <LinkButton to={work.url} type={LinkButtonType.internal}>
            Ver Caso de Estudio
          </LinkButton>
        </div>
      </div>
    </>
  )
}

export default WorkCaseCondensed
