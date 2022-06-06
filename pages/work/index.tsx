import { NextPage } from "next"
import Head from "next/head"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import Menu from "../../components/Menu"
import PageContent from "../../components/PageContent"
import Preloader from "../../components/Preloader"
import WorkCase from "../../components/WorkCase"
import { preloader } from "../../config/labels"
import { works } from "../../config/work"

const Work: NextPage = () => {
  return (
    <>
      <Head>
        <title>Portafolio | Amagentada</title>
      </Head>
      <Header />
      <PageContent>
        <div>
          {works.map((work, index) => (
            <WorkCase key={index} work={work} />
          ))}
        </div>
      </PageContent>
      <Footer />
      <Menu />
      <Preloader label={preloader.work} />
    </>
  )
}

export default Work
