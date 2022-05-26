import { NextPage } from "next"
import Head from "next/head"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import PageContent from "../../components/PageContent"

const Privacy: NextPage = () => {
  return (
    <>
      <Head>
        <title>Politicas de Privacidad | Amagentada</title>
      </Head>
      <Header />
      <PageContent>
        <div>Politicas de Privacidad</div>
      </PageContent>
      <Footer />
    </>
  )
}

export default Privacy
