import React, { ReactNode } from "react"
import styles from "./styles.module.css"

const PageContent = ({ children }: { children: ReactNode }): JSX.Element => {
  return (
    <div className={styles.PageContentContainer}>
      <div className={styles.PageContent}>{children}</div>
    </div>
  )
}

export default PageContent
