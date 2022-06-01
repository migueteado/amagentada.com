import { ReactNode } from "react"
import styles from "./styles.module.css"

interface TitleProps {
  children: ReactNode
}

const Title = ({ children }: TitleProps) => {
  return <h1 className={styles.Title}>{children}</h1>
}

export default Title
