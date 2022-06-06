import { NextPage } from "next"
import Head from "next/head"
import ContactToggler from "../../components/Contact"
import Footer from "../../components/Footer"
import Menu from "../../components/Menu"
import PageContent from "../../components/PageContent"
import Preloader from "../../components/Preloader"
import { preloader } from "../../config/labels"

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sobre mi | Amagentada</title>
      </Head>
      <ContactToggler />
      <Menu />
      <PageContent>Sobre mi</PageContent>
      <Footer />
      <Preloader label={preloader.about} />
    </>
  )
}

export default About
