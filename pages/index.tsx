import { NextPage } from "next"
import Head from "next/head"
import Footer from "../components/Footer"
import Header from "../components/Header"
import PageContent from "../components/PageContent"

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Inicio | Amagentada</title>
      </Head>
      <Header />
      <PageContent>
        <div>Inicio</div>
      </PageContent>
      <Footer />
    </>
  )
}

export default Home
