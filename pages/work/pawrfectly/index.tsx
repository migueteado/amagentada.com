import { NextPage } from "next"
import Head from "next/head"
import { StaticImageData } from "next/image"
import ContactToggler from "../../../components/Contact"
import Footer from "../../../components/Footer"
import Menu from "../../../components/Menu"
import PageContent from "../../../components/PageContent"
import Preloader from "../../../components/Preloader"
import WorkContent from "../../../components/WorkContent"
import WorkImage from "../../../components/WorkImage"
import { pawrfectly } from "../../../config/work"

const data = pawrfectly
const imageIndex = pawrfectly.images.findIndex((i) => i.main)
const firstImage = pawrfectly.images.splice(imageIndex, 1)[0]
  .image as StaticImageData
const images = pawrfectly.images
  .sort((a, b) => a.order - b.order)
  .map((i) => i.image) as StaticImageData[]

const Pawrfectly: NextPage = () => {
  return (
    <>
      <Head>
        <title>Portafolio - Pawrfectly | Amagentada</title>
      </Head>

      <PageContent>
        <WorkImage
          image={firstImage}
          description={"pawrfectly"}
          type={"first"}
        />
        <WorkContent
          title={data.title}
          description={data.description}
          service={data.service}
          date={data.date}
        />
        {images.map((image, index) => (
          <WorkImage key={index} image={image} description={"pawrfectly"} />
        ))}
      </PageContent>
      <Footer />
      <ContactToggler />
      <Menu />
      <Preloader label={"Caso / Pawrfeclty"} />
    </>
  )
}

export default Pawrfectly
