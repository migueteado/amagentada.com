import Link from "next/link"
import { brandLabel, devLabel, email } from "../../config/labels"
import { links } from "../../config/links"
import { socialMenu } from "../../config/menus"
import FooterItem from "./FooterItem"
import styles from "./styles.module.css"

const socials = socialMenu

const Footer = (): JSX.Element => {
  return (
    <>
      <div className={styles.Footer}>
        <div className={styles.FooterContainer}>
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
        </div>
      </div>
    </>
  )
}

export default Footer
