import { faTelegramPlane, faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { NextPage } from "next"
import Head from "next/head"
import Footer from "../../components/Footer"
import Menu from "../../components/Menu"
import PageContent from "../../components/PageContent"
import Title from "../../components/Title"
import styles from "./styles.module.css"
import Preloader from "../../components/Preloader"
import { preloader } from "../../config/labels"
import Header from "../../components/Header"

const Contact: NextPage = () => {
  return (
    <>
      <Head>
        <title>Contacto | Amagentada</title>
      </Head>
      <Header />
      <PageContent>
        <h1 className={styles.Title}>Hablemos sobre tu marca</h1>
        <p className={styles.Text}>
          Puedes contactarme a traves de WhatsApp y correo electronico!
        </p>
        <h2 className={styles.Subtitle}>Contacto</h2>
        <ul className={styles.Text}>
          <li>
            <a href="">
              <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp
            </a>
          </li>
          <li>
            <a href="">
              <FontAwesomeIcon icon={faEnvelope} /> amagentada@gmail.com
            </a>
          </li>
        </ul>
        <h2 className={styles.Subtitle}>Horario</h2>
        <p className={styles.Text}>Lunes a Viernes de 9:00 a 18:00 (GMT-5)</p>
      </PageContent>
      <Footer />
      <Menu />
      <Preloader label={preloader.contact} />
    </>
  )
}

export default Contact
