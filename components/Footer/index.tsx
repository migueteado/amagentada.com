import Link from "next/link"
import styles from "./styles.module.css"

const Footer = () => {
  return (
    <>
      <div className={styles.MainFooter}>
        <div className={styles.MainFooter__Container}>
          <div className={styles.MainFooterLinks}>
            <Link href="/privacy">
              <a>Politicas de Privacidad</a>
            </Link>
          </div>
          <div className={styles.MainFooterLabel}>
            <div className={styles.PageLabel}>
              AMAGENTADA | Branding e Identidad de Marca &copy; 2022
            </div>
            <div className={styles.DevBrand}>DEVELOPED BY SOYMVILLALOBOS</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
