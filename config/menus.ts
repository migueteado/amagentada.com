import {
  faBriefcase,
  faComments,
  faHome,
  faPalette,
  faPaperPlane,
  faUser,
} from "@fortawesome/free-solid-svg-icons"
import {
  faInstagram,
  faLinkedinIn,
  faPinterestP,
} from "@fortawesome/free-brands-svg-icons"

const footerLinks = {
  title: "Footer",
  links: [
    {
      id: "privacy",
      to: "/privacy",
      label: "Politicas de Privacidad",
    },
  ],
}

const socialLinks = {
  title: "Redes Sociales",
  links: [
    {
      id: "instagram",
      to: "https://www.instagram.com/byamagentada/",
      label: "Instagram",
      icon: faInstagram,
    },
    {
      id: "pinterest",
      to: "https://co.pinterest.com/Amagentada/",
      label: "Pinterest",
      icon: faPinterestP,
    },
    {
      id: "linkedin",
      to: "https://www.linkedin.com/in/amagentada/",
      label: "LinkedIn",
      icon: faLinkedinIn,
    },
  ],
}

const menuLinks = {
  title: "Menu",
  links: [
    {
      id: "home",
      to: "/",
      label: "Inicio",
      icon: faHome,
    },
    // {
    //   id: "about",
    //   to: "/about",
    //   label: "Acerca de mi",
    //   icon: faUser,
    // },
    // {
    //   id: "consultancies",
    //   to: "/consultancies",
    //   label: "Asesorias",
    //   icon: faComments,
    // },
    // {
    //   id: "services",
    //   to: "/services",
    //   label: "Servicios",
    //   icon: faPalette,
    // },
    {
      id: "work",
      to: "/work",
      label: "Portafolio",
      icon: faBriefcase,
    },
    // {
    //   id: "contact",
    //   to: "/contact",
    //   label: "Contactame",
    //   icon: faPaperPlane,
    // },
  ],
}

export { footerLinks, menuLinks, socialLinks }
