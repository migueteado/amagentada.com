import { useAnimation, motion } from "framer-motion"
import Image, { StaticImageData } from "next/image"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import styles from "./styles.module.css"

interface WorkImageProps {
  description: string
  image: StaticImageData
  type?: string
}

const variants = {
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  hidden: { opacity: 0, y: 100, transition: { duration: 1 } },
}

const WorkImage = ({
  image,
  description,
  type,
}: WorkImageProps): JSX.Element => {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  if (type === "first") {
    return (
      <motion.div className={styles.WorkImageContainer}>
        <Image src={image} alt={description} layout="responsive" />
      </motion.div>
    )
  } else {
    return (
      <motion.div
        ref={ref}
        animate={controls}
        variants={variants}
        initial="hidden"
        className={styles.WorkImageContainer}
      >
        <Image
          src={image}
          alt={description}
          layout="responsive"
          placeholder="blur"
        />
      </motion.div>
    )
  }
}

export default WorkImage
