import { NextPage } from "next"
import Head from "next/head"
import ContactToggler from "../../components/Contact"
import Footer from "../../components/Footer"
import Menu from "../../components/Menu"
import PageContent from "../../components/PageContent"
import Preloader from "../../components/Preloader"
import { preloader } from "../../config/labels"

const Services: NextPage = () => {
  return (
    <>
      <Head>
        <title>Servicios | Amagentada</title>
      </Head>
      <ContactToggler />
      <Menu />
      <PageContent>Servicios</PageContent>
      <Footer />
      <Preloader label={preloader.services} />
    </>
  )
}

export default Services
