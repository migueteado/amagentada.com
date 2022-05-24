import styles from "./styles.module.css"

const Footer = () => {
  return (
    <>
      <div className={styles.MainFooter}>
        <div className={styles.MainFooter__Container}>
          <div className={styles.MainFooterLinks}>
            <a href="">Politicas de Privacidad</a>
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
