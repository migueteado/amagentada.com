import { brandLabel, devLabel } from "../../config/labels"
import styles from "./styles.module.css"

const Footer = (): JSX.Element => {
  return (
    <>
      <div className={styles.MainFooter}>
        <div className={styles.MainFooter__Container}>
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
