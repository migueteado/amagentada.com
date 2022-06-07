import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import { useAnimation, motion } from "framer-motion"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
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

const variants = {
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  hidden: { opacity: 0, x: "-50%", transition: { duration: 1 } },
}

const WorkCaseCondensed = ({ work }: WorkCaseCondensedProps): JSX.Element => {
  const thumbnail = work.images.find((i) => i.thumbnail)
    ?.image as StaticImageData

  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <>
      <div className={styles.WorkCaseCondensed}>
        <motion.div
          className={styles.WorkCaseCondensedContainer}
          ref={ref}
          animate={controls}
          variants={variants}
          initial="hidden"
        >
          <div className={styles.WorkCondensedContentContainer}>
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
              <div className={styles.WorkCaseCondensedService}>
                {work.service}
              </div>
              <h1 className={styles.WorkCaseCondensedTitle}>{work.title}</h1>
              <p className={styles.WorkCaseCondensedDescription}>
                {work.description.slice(0, 180) + "..."}
              </p>
              <LinkButton to={work.url} type={LinkButtonType.internal}>
                Ver Caso de Estudio
              </LinkButton>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  )
}

export default WorkCaseCondensed
