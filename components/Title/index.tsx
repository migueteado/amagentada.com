import { ReactNode } from "react"
import styles from "./styles.module.css"

interface TitleProps {
  children: ReactNode
}

const Title = ({ children }: TitleProps) => {
  return (
    <div className={styles.TitleContainer}>
      <h1 className={styles.Title}>{children}</h1>
      <div className={styles.TitleDivider}></div>
    </div>
  )
}

export default Title
