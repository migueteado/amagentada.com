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

const hover = {
  scale: 1.1,
}

const tap = {
  scale: 0.95,
}

const LinkButton = ({ to, type, children }: LinkButtonProps) => {
  if (type === LinkButtonType.internal) {
    return (
      <Link href={to}>
        <motion.button
          whileHover={hover}
          whileTap={tap}
          className={styles.Button}
        >
          {children}
        </motion.button>
      </Link>
    )
  } else {
    return (
      <a target="_blank" rel="noreferrer" href={to}>
        <motion.button
          whileHover={hover}
          whileTap={tap}
          className={styles.Button}
        >
          {children}
        </motion.button>
      </a>
    )
  }
}

export default LinkButton
