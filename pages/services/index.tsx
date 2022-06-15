import { NextPage } from "next"
import Head from "next/head"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import Menu from "../../components/Menu"
import PageContent from "../../components/PageContent"
import Preloader from "../../components/Preloader"
import { preloader, titles } from "../../config/labels"

const Services: NextPage = () => {
  return (
    <>
      <Head>
        <title>{titles.services}</title>
      </Head>
      <Header />
      <PageContent>Servicios</PageContent>
      <Footer />
      <Menu />
      <Preloader label={preloader.services} />
    </>
  )
}

export default Services
