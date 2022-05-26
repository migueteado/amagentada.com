import { NextPage } from "next"
import Head from "next/head"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import PageContent from "../../components/PageContent"

const Work: NextPage = () => {
  return (
    <>
      <Head>
        <title>Trabajos | Amagentada</title>
      </Head>
      <Header />
      <PageContent>
        <div>Portafolio</div>
      </PageContent>
      <Footer />
    </>
  )
}

export default Work
