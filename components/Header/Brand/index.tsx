import Link from "next/link"
import { links } from "../../../config/links"
import styles from "./styles.module.css"

const Brand = () => {
  return (
    <Link href={links.home} className={styles.Brand}>
      <a className={styles.Brand}>amagentada</a>
    </Link>
  )
}

export default Brand
