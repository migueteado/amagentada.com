import { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import Menu from "../../components/Menu"
import PageContent from "../../components/PageContent"
import Preloader from "../../components/Preloader"
import { preloader, titles } from "../../config/labels"
import about from "../../public/images/about/me1.jpg"
import styles from "./styles.module.css"

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>{titles.about}</title>
      </Head>
      <Header />
      <Menu />
      <PageContent>
        <div className={styles.Grid}>
          <div className={styles.GridContent}>
            <div className={styles.ContentContainer}>
              <h1 className={styles.Title}>¡Hola!</h1>
              <p className={styles.Text}>
                Soy Anna Romero, Diseñadora Gráfica Venezolana, (Actualmente
                residenciada en Bogotá, Colombia) con más de 4 años de
                experiencia a la que le apasiona construir marcas capaces de
                conectar con las personas. Con experiencia en diseño para RRSS,
                Marketing Digital, Branding y Medios Impresos y además, con
                capacidad para el trabajo en equipo, responsable, ambiciosa y
                creativa.
              </p>
            </div>
          </div>
          <div className={styles.GridContent}>
            <div className={styles.ImageContainer}>
              <Image src={about} layout="responsive" />
            </div>
          </div>
        </div>
      </PageContent>
      <Footer />
      <Menu />
      <Preloader label={preloader.about} />
    </>
  )
}

export default About
