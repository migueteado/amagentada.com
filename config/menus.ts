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
import { links } from "./links"
import { menu, socials } from "./labels"

const socialMenu = {
  title: socials.title,
  links: [
    {
      to: links.instagram,
      label: socials.instagram,
      icon: faInstagram,
    },
    {
      to: links.pinterest,
      label: socials.pinterest,
      icon: faPinterestP,
    },
    {
      to: links.linkedin,
      label: socials.linkedin,
      icon: faLinkedinIn,
    },
  ],
}

const navMenu = {
  title: menu.title,
  links: [
    {
      to: links.home,
      label: menu.home,
      icon: faHome,
    },
    {
      to: links.about,
      label: menu.about,
      icon: faUser,
    },
    {
      to: links.work,
      label: menu.work,
      icon: faBriefcase,
    },
    {
      to: links.consultancies,
      label: menu.consultancies,
      icon: faComments,
    },
    {
      to: links.services,
      label: menu.services,
      icon: faPalette,
    },
    {
      to: links.contact,
      label: menu.contact,
      icon: faPaperPlane,
    },
  ],
}

export { navMenu, socialMenu }
