import Link from "next/link"
import { motion } from "framer-motion"
import styles from "./styles.module.css"
import { ReactNode } from "react"

export enum LinkButtonType {
  internal = "internal",
  external = "external",
}

interface LinkButtonProps {
  to: string
  children: ReactNode
  type: LinkButtonType
}

const tap = {
  scale: 0.95,
}

const LinkButton = ({ to, type, children }: LinkButtonProps): JSX.Element => {
  if (type === LinkButtonType.internal) {
    return (
      <Link href={to}>
        <motion.button whileTap={tap} className={styles.Button}>
          {children}
        </motion.button>
      </Link>
    )
  } else {
    return (
      <a target="_blank" rel="noreferrer" href={to}>
        <motion.button whileTap={tap} className={styles.Button}>
          {children}
        </motion.button>
      </a>
    )
  }
}

export default LinkButton
