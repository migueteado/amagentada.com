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

const pawrfectly = {
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
  date: "Septiembre 2021",
  url: "/work/pawrfectly",
}

const natalyPostres = {
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
  url: "/work/nataly-postres",
}

const works = [pawrfectly, natalyPostres]

export { pawrfectly, natalyPostres, works }
