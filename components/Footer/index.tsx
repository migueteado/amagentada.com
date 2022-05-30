import { footerLinks } from "../../config/const"
import FooterItem from "./FooterItem"
import styles from "./styles.module.css"

const navigation = footerLinks

const Footer = (): JSX.Element => {
  return (
    <>
      <div className={styles.MainFooter}>
        <div className={styles.MainFooter__Container}>
          <div className={styles.MainFooterLinks}>
            {navigation.links.map(({ id, to, label }) => (
              <FooterItem key={id} to={to} label={label} />
            ))}
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
