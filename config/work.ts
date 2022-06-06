import pawrfectly1 from "../public/images/work/pawrfectly/1.gif"
import pawrfectly2 from "../public/images/work/pawrfectly/2.jpg"
import pawrfectly3 from "../public/images/work/pawrfectly/3.jpg"
import pawrfectly4 from "../public/images/work/pawrfectly/4.jpg"
import pawrfectly5 from "../public/images/work/pawrfectly/5.jpg"
import pawrfectly6 from "../public/images/work/pawrfectly/6.jpg"
import nataly1 from "../public/images/work/nataly-postres/1.gif"
import nataly2 from "../public/images/work/nataly-postres/2.jpg"
import nataly3 from "../public/images/work/nataly-postres/3.jpg"
import nataly4 from "../public/images/work/nataly-postres/4.jpg"
import nataly5 from "../public/images/work/nataly-postres/5.jpg"
import nataly6 from "../public/images/work/nataly-postres/6.jpg"
import mari1 from "../public/images/work/mari-manrique/1.gif"
import mari2 from "../public/images/work/mari-manrique/2.jpg"
import mari3 from "../public/images/work/mari-manrique/3.jpg"
import mari4 from "../public/images/work/mari-manrique/4.jpg"
import mari5 from "../public/images/work/mari-manrique/5.jpg"
import mari6 from "../public/images/work/mari-manrique/6.jpg"
import andy1 from "../public/images/work/content-andy/1.gif"
import andy2 from "../public/images/work/content-andy/2.jpg"
import andy3 from "../public/images/work/content-andy/3.jpg"
import andy4 from "../public/images/work/content-andy/4.jpg"
import andy5 from "../public/images/work/content-andy/5.jpg"
import andy6 from "../public/images/work/content-andy/6.jpg"
import { links } from "./links"

const pawrfectly = {
  id: "pawrfectly",
  images: [
    { image: pawrfectly1, order: 1, main: true },
    { image: pawrfectly2, order: 2 },
    { image: pawrfectly3, order: 3 },
    { image: pawrfectly4, order: 4 },
    { image: pawrfectly5, order: 5, thumbnail: true },
    { image: pawrfectly6, order: 6 },
  ],
  title: "Pawrfectly",
  description: `Pawrfectly es una marca americana dedicada a la creación de productos personalizados con la imagen de tu mascota. Se encargan de diseñar piezas como tazas de café y suéters con la imagen que elijas y/o el nombre de tu preferencia.
    
  Su misión es cambiar la vida de muchos animalitos, ya que de cada venta un porcentaje es destinado a darle un hogar y comida a perros y gatos en situación de calle.`,
  service: "Branding",
  date: "Agosto 2021",
  url: links.workPawrfectly,
}

const natalyPostres = {
  id: "nataly",
  images: [
    { image: nataly1, order: 1, main: true },
    { image: nataly2, order: 2 },
    { image: nataly3, order: 3 },
    { image: nataly4, order: 4, thumbnail: true },
    { image: nataly5, order: 5 },
    { image: nataly6, order: 6 },
  ],
  title: "Nataly Postres",
  description: `Nataly Postres es una marca que crea productos de repostería de calidad y además ofrece la mejor disposición al atender a sus clientes. Todos sus productos son hechos con amor, y más que un postre ofrece una experiencia agradable a cada consumidor.
    
  Su misión es lograr que sus clientes se sientan satisfechos con sus productos y desarrollen amor por la marca.`,
  service: "Branding",
  date: "Abril 2022",
  url: links.workNataly,
}

const mariManrique = {
  id: "mari",
  images: [
    { image: mari1, order: 1, main: true },
    { image: mari2, order: 2 },
    { image: mari3, order: 3 },
    { image: mari4, order: 4 },
    { image: mari5, order: 5 },
    { image: mari6, order: 6, thumbnail: true },
  ],
  title: "Mari Manrique",
  description: `Mari Manrique es una marca personal que ofrece la creación de ebooks, cursos online, inteligencia emocional, productividad, vender sin vender, transformación de mentalidad y asesorías.

  Su misión es ayudar a emprendedores a desarrollar la creatividad y trabajar la emocionalidad para vender a través de las redes sociales con psicología del consumidor.`,
  service: "Branding",
  date: "Agosto 2021",
  url: links.workMari,
}

const contentAndy = {
  id: "andy",
  images: [
    { image: andy1, order: 1, main: true },
    { image: andy2, order: 2 },
    { image: andy3, order: 3 },
    { image: andy4, order: 4 },
    { image: andy5, order: 5, thumbnail: true },
    { image: andy6, order: 6 },
  ],
  title: "Content Andy",
  description: `Content Andy es una marca personal que ofrece creación de contenido, estrategias para RRSS, gestión de social media, herramientas y asesoría en la gestión de contenidos.
  
  Su misión es apoyar a marcas y/o empresas a crecer y proyectarse en RRSS mediante estrategias innovadoras, creativas, adecuadas y diseñadas para cada una de ellas de manera personalizada.`,
  service: "Branding",
  date: "Octubre 2021",
  url: links.workAndy,
}

const works = [natalyPostres, contentAndy, pawrfectly, mariManrique]

export { pawrfectly, natalyPostres, mariManrique, contentAndy, works }
