import Link from "next/link"
import { useAnimation, motion } from "framer-motion"
import { brandLabel, devLabel } from "../../config/labels"
import { links } from "../../config/links"
import { socialMenu } from "../../config/menus"
import FooterItem from "./FooterItem"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import styles from "./styles.module.css"

const socials = socialMenu

const variants = {
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  hidden: { opacity: 0, y: 100, transition: { duration: 1 } },
}

const Footer = (): JSX.Element => {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <>
      <div className={styles.Footer}>
        <motion.div
          className={styles.FooterContainer}
          ref={ref}
          animate={controls}
          variants={variants}
          initial="hidden"
        >
          <div className={styles.FooterContact}>
            <div className={styles.FooterContactTitle}>¿Tienes una idea?</div>
            <div className={styles.FooterContactLink}>
              <Link href={links.contact}>
                <a>Coméntame al respecto</a>
              </Link>
            </div>
          </div>
          <div className={styles.FooterContent}>
            <div className={styles.FooterLabels}>
              <div className={styles.FooterCopy}>{brandLabel}</div>
              <div className={styles.FooterDev}>{devLabel}</div>
            </div>
            <div className={styles.FooterMenu}>
              <div className={styles.FooterSocials}>
                {socials.links.map(({ to, label }, index) => (
                  <FooterItem key={index} to={to} label={label} />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  )
}

export default Footer
