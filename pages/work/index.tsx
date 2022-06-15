import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { NextPage } from "next"
import Head from "next/head"
import { Link, animateScroll as scroll } from "react-scroll"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import Menu from "../../components/Menu"
import PageContent from "../../components/PageContent"
import Preloader from "../../components/Preloader"
import WorkCase from "../../components/WorkCase"
import { preloader, titles } from "../../config/labels"
import { works } from "../../config/work"
import styles from "./styles.module.css"

const Work: NextPage = () => {
  return (
    <>
      <Head>
        <title>{titles.work}</title>
      </Head>
      <Header />
      <PageContent>
        <div className={styles.WorkHeader}>
          <h1 className={styles.WorkTitle}>Mis Proyectos</h1>
          <p className={styles.WorkDescription}>
            Construyo marcas llenas de significado para mis clientes, aquí hay
            algunos ejemplos de mi trabajo.
          </p>
          <div className={styles.ScrollButtonContainer}>
            <Link
              activeClass="active"
              to="worksSection"
              spy={true}
              smooth={true}
              duration={500}
            >
              <button className={styles.ScrollButton}>
                <FontAwesomeIcon icon={faChevronDown} />
              </button>
            </Link>
          </div>
        </div>
        <div className={styles.Works} id="worksSection">
          {works.map((work, index) => (
            <WorkCase key={index} work={work} />
          ))}
        </div>
      </PageContent>
      <Footer />
      <Menu />
      <Preloader label={preloader.work} />
    </>
  )
}

export default Work
