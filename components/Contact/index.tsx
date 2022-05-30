import { faComment } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import { motion } from "framer-motion"
import styles from "./styles.module.css"

const ContactToggler = (): JSX.Element => {
  return (
    <>
      <Link href="/contact">
        <motion.a
          className={styles.Button}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <FontAwesomeIcon icon={faComment} />
        </motion.a>
      </Link>
    </>
  )
}

export default ContactToggler
