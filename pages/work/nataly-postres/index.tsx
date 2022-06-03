import { NextPage } from "next"
import Head from "next/head"
import ContactToggler from "../../../components/Contact"
import Footer from "../../../components/Footer"
import Menu from "../../../components/Menu"
import PageContent from "../../../components/PageContent"
import WorkContent from "../../../components/WorkContent"
import WorkImage from "../../../components/WorkImage"
import Image1 from "../../../public/images/work/nataly-postres/1.gif"
import Image2 from "../../../public/images/work/nataly-postres/2.jpg"
import Image3 from "../../../public/images/work/nataly-postres/3.jpg"
import Image4 from "../../../public/images/work/nataly-postres/4.jpg"
import Image5 from "../../../public/images/work/nataly-postres/5.jpg"
import Image6 from "../../../public/images/work/nataly-postres/6.jpg"

const data = {
  title: "Nataly Postres",
  description: `Nataly Postres es una marca que crea productos de repostería de calidad, que además ofrece la mejor disposición al atender a sus clientes. Todos sus productos son hechos con amor, y más que un postre ofrece una experiencia agradable a cada consumidor.
    
  Su misión es lograr que sus clientes se sientan satisfechos con sus productos y desarrollen amor por la marca.`,
  service: "Branding",
  date: "Abril 2022",
}

const NatalyPostres: NextPage = () => {
  return (
    <>
      <Head>
        <title>Portafolio - Nataly Postres | Amagentada</title>
      </Head>

      <PageContent>
        <WorkImage
          image={Image1}
          description={"nataly postres"}
          type={"first"}
        />
        <WorkContent
          title={data.title}
          description={data.description}
          service={data.service}
          date={data.date}
        />
        <WorkImage image={Image2} description={"nataly postres"} />
        <WorkImage image={Image3} description={"nataly postres"} />
        <WorkImage image={Image4} description={"nataly postres"} />
        <WorkImage image={Image5} description={"nataly postres"} />
        <WorkImage image={Image6} description={"nataly postres"} />
      </PageContent>
      <Footer />
      <ContactToggler />
      <Menu />
    </>
  )
}

export default NatalyPostres
