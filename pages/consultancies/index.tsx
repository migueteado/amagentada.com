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
        <h1>Agendemos una asesoria</h1>
        <p>
          Mis asesorias consisten en un servicio profesional de informacion y
          consejo en temas y procesos relacionados al diseno grafico, incluyendo
          topicos mas especificos como la definicion, concepcion y construccion
          de marcas personales y empresariales.
        </p>
        <p>
          Las asesorias tienen un costo de $30 dolares americanos y duran 1
          hora.
        </p>
        <h2>Que no incluyen las asesoria?</h2>
        <ul>
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
