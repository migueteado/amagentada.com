import { NextPage } from "next"
import Head from "next/head"
import ContactToggler from "../components/Contact"
import Footer from "../components/Footer"
import Menu from "../components/Menu"
import PageContent from "../components/PageContent"

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Inicio | Amagentada</title>
      </Head>
      <ContactToggler />
      <Menu />
      <PageContent>Inicio</PageContent>
      <Footer />
    </>
  )
}

export default Home
