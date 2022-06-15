import { NextPage } from "next"
import Head from "next/head"
import { StaticImageData } from "next/image"
import Footer from "../../../components/Footer"
import Header from "../../../components/Header"
import Menu from "../../../components/Menu"
import PageContent from "../../../components/PageContent"
import Preloader from "../../../components/Preloader"
import WorkComplement from "../../../components/WorkComplement"
import WorkContent from "../../../components/WorkContent"
import WorkImage from "../../../components/WorkImage"
import { preloader, titles } from "../../../config/labels"
import { pawrfectly, works } from "../../../config/work"

const workIndex = works.findIndex((w) => w.id === pawrfectly.id)
const prevIndex = workIndex - 1 < 0 ? works.length - 1 : workIndex - 1
const nextIndex = workIndex + 1 > works.length - 1 ? 0 : workIndex + 1

const prevWork = works[prevIndex]
const nextWork = works[nextIndex]

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
        <title>{titles.workPawrfectly}</title>
      </Head>
      <Header />
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
        <WorkComplement works={[prevWork, nextWork]} />
      </PageContent>
      <Footer />
      <Menu />
      <Preloader label={preloader.workPawrfectly} />
    </>
  )
}

export default Pawrfectly
