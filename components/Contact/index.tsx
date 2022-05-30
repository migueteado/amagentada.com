import { faComment } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import styles from "./styles.module.css"

const ContactToggler = (): JSX.Element => {
  return (
    <>
      <Link href="/contact">
        <a className={styles.Button}>
          <FontAwesomeIcon icon={faComment} />
        </a>
      </Link>
    </>
  )
}

export default ContactToggler
