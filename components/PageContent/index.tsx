import React, { ReactNode } from "react"
import styles from "./styles.module.css"

interface PageContentProps {
  children: ReactNode
}

const PageContent = ({ children }: PageContentProps): JSX.Element => {
  return (
    <div className={styles.PageContentContainer}>
      <div className={styles.PageContent}>{children}</div>
    </div>
  )
}

export default PageContent
