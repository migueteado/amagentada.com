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
import { natalyPostres } from "../../../config/work"

const data = natalyPostres
const imageIndex = natalyPostres.images.findIndex((i) => i.main)
const firstImage = natalyPostres.images.splice(imageIndex, 1)[0]
  .image as StaticImageData
const images = natalyPostres.images
  .sort((a, b) => a.order - b.order)
  .map((i) => i.image) as StaticImageData[]

const NatalyPostres: NextPage = () => {
  return (
    <>
      <Head>
        <title>Portafolio - Nataly Postres | Amagentada</title>
      </Head>

      <PageContent>
        <WorkImage image={firstImage} description={"nataly"} type={"first"} />
        <WorkContent
          title={data.title}
          description={data.description}
          service={data.service}
          date={data.date}
        />
        {images.map((image, index) => (
          <WorkImage key={index} image={image} description={"nataly"} />
        ))}
      </PageContent>
      <Footer />
      <ContactToggler />
      <Menu />
      <Preloader label={"Caso / Nataly Postres"} />
    </>
  )
}

export default NatalyPostres
