import { footerLinks } from "../../config/menus"
import { brandLabel, devLabel } from "../../config/labels"
import FooterItem from "./FooterItem"
import styles from "./styles.module.css"

const navigation = footerLinks

const Footer = (): JSX.Element => {
  return (
    <>
      <div className={styles.MainFooter}>
        <div className={styles.MainFooter__Container}>
          {/* <div className={styles.MainFooterLinks}>
            {navigation.links.map(({ id, to, label }) => (
              <FooterItem key={id} to={to} label={label} />
            ))}
          </div> */}
          <div className={styles.MainFooterLabel}>
            <div className={styles.PageLabel}>{brandLabel}</div>
            <div className={styles.DevBrand}>{devLabel}</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
