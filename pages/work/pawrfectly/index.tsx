import { NextPage } from "next"
import Head from "next/head"
import ContactToggler from "../../../components/Contact"
import Footer from "../../../components/Footer"
import Menu from "../../../components/Menu"
import PageContent from "../../../components/PageContent"
import WorkContent from "../../../components/WorkContent"
import WorkImage from "../../../components/WorkImage"
import Image1 from "../../../public/images/work/pawrfectly/1.gif"
import Image2 from "../../../public/images/work/pawrfectly/2.jpg"
import Image3 from "../../../public/images/work/pawrfectly/3.jpg"
import Image4 from "../../../public/images/work/pawrfectly/4.jpg"
import Image5 from "../../../public/images/work/pawrfectly/5.jpg"
import Image6 from "../../../public/images/work/pawrfectly/6.jpg"

const data = {
  title: "Pawrfectly",
  description: `Pawrfectly es una marca americana dedicada a la creación de productos personalizados con la imagen de tu mascota. Se encargan de diseñar piezas como tazas de café y suéters con la imagen que elijas y/o el nombre de tu preferencia.
    
  Su misión es cambiar la vida de muchos animalitos, ya que de cada venta un porcentaje es destinado a darle un hogar y comida a perros y gatos en situación de calle.`,
  service: "Branding",
  date: "Septiembre 2021",
}

const Pawrfectly: NextPage = () => {
  return (
    <>
      <Head>
        <title>Portafolio - Pawrfectly | Amagentada</title>
      </Head>

      <PageContent>
        <WorkImage image={Image1} description={"pawrfectly"} type={"first"} />
        <WorkContent
          title={data.title}
          description={data.description}
          service={data.service}
          date={data.date}
        />
        <WorkImage image={Image2} description={"pawrfectly"} />
        <WorkImage image={Image3} description={"pawrfectly"} />
        <WorkImage image={Image4} description={"pawrfectly"} />
        <WorkImage image={Image5} description={"pawrfectly"} />
        <WorkImage image={Image6} description={"pawrfectly"} />
      </PageContent>
      <Footer />
      <ContactToggler />
      <Menu />
    </>
  )
}

export default Pawrfectly
