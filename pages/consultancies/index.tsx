import { NextPage } from "next"
import Head from "next/head"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import LinkButton, { LinkButtonType } from "../../components/LinkButton"
import Menu from "../../components/Menu"
import PageContent from "../../components/PageContent"
import Preloader from "../../components/Preloader"
import { preloader } from "../../config/labels"
import { links } from "../../config/links"
import styles from "./styles.module.css"

const Consultancies: NextPage = () => {
  return (
    <>
      <Head>
        <title>Asesorias | Amagentada</title>
      </Head>
      <Header />
      <PageContent>
        <h1 className={styles.Title}>Agendemos una asesoria</h1>
        <p className={styles.Text}>
          Mis asesorias consisten en un servicio profesional de informacion y
          consejo en temas y procesos relacionados al diseno grafico, incluyendo
          topicos mas especificos como la definicion, concepcion y construccion
          de marcas personales y empresariales.
        </p>
        <p className={styles.Text}>
          Las asesorias tienen un costo de $30 dolares americanos y duran 1
          hora.
        </p>
        <h2 className={styles.Subtitle}>¿Que no incluyen las asesorias?</h2>
        <ul className={styles.Text}>
          <li>Servicio de Branding.</li>
        </ul>
        <LinkButton
          to={`${links.whatsapp}?text=${encodeURI(
            "Hola! Estoy interesad@ en agendar una asesoria."
          )}`}
          type={LinkButtonType.external}
        >
          Agenda tu asesoria
        </LinkButton>
      </PageContent>
      <Footer />
      <Menu />
      <Preloader label={preloader.consultancies} />
    </>
  )
}

export default Consultancies
