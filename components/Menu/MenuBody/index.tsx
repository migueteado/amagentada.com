import { ReactNode } from "react"
import styles from "./styles.module.css"

interface MenuBodyProps {
  children: ReactNode
}

const MenuBody = ({ children }: MenuBodyProps) => {
  return (
    <div className={styles.MenuBody}>
      <div className={styles.MenuBodyContainer}>
        <div className={styles.MenuBodyContent}>{children}</div>
      </div>
    </div>
  )
}

export default MenuBody
