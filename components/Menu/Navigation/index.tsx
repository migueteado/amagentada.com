import { ReactNode } from "react"
import styles from "./styles.module.css"

interface NavigationProps {
  children: ReactNode
  title: string
}

const Navigation = ({ children, title }: NavigationProps): JSX.Element => {
  return (
    <>
      <div className={styles.Navigation}>
        <div className={styles.NavigationTitle}>{title}</div>
        {children}
      </div>
    </>
  )
}

export default Navigation
