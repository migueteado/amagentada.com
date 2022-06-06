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
        <title>Inicio | Amagentada</title>
      </Head>
      <Header />
      <PageContent>
        <div className={styles.Columns}>
          <div className={styles.ImageContainer}>
            <div className={styles.ImageContent}></div>
          </div>
          <div className={styles.TextContainer}>
            <div className={styles.TextContent}>
              <Title>Hablemos sobre tu marca</Title>
              <p className={styles.PageText}>
                Puedes contactarme a traves de WhatsApp, Telegram o mi correo
                electronico!
              </p>
              <div className={styles.ContactPageContainer}>
                <div className={styles.ContactContainer}>
                  <h1 className={styles.Title}>Contacto</h1>
                  <div className={styles.Contacts}>
                    <div className={styles.WhatsApp}>
                      <a href="">
                        <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp
                      </a>
                    </div>
                    <div className={styles.Telegram}>
                      <a href="">
                        <FontAwesomeIcon icon={faTelegramPlane} /> Telegram
                      </a>
                    </div>
                    <div className={styles.Email}>
                      <a href="">
                        <FontAwesomeIcon icon={faEnvelope} />{" "}
                        amagentada@gmail.com
                      </a>
                    </div>
                  </div>
                  <h1 className={styles.Title}>Horario</h1>
                  <div>
                    <p>Lunes a Viernes de 9:00 a 18:00 (GMT-5)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageContent>
      <Footer />
      <Menu />
      <Preloader label={preloader.contact} />
    </>
  )
}

export default Contact
