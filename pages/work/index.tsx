import { NextPage } from "next"
import Head from "next/head"
import Link from "next/link"
import ContactToggler from "../../components/Contact"
import Footer from "../../components/Footer"
import Menu from "../../components/Menu"
import PageContent from "../../components/PageContent"
import Preloader from "../../components/Preloader"
import Title from "../../components/Title"
import WorkCase from "../../components/WorkCase"
import { works } from "../../config/work"

const Work: NextPage = () => {
  return (
    <>
      <Head>
        <title>Portafolio | Amagentada</title>
      </Head>
      <PageContent>
        <div>
          {works.map((work, index) => (
            <WorkCase key={index} work={work} />
          ))}
        </div>
      </PageContent>
      <Footer />
      <ContactToggler />
      <Menu />
      <Preloader label={"Portafolio"} />
    </>
  )
}

export default Work
