import { NextPage } from "next"
import Head from "next/head"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
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
      <Header />
      <Menu />
      <PageContent>Sobre mi</PageContent>
      <Footer />
      <Menu />
      <Preloader label={preloader.about} />
    </>
  )
}

export default About
