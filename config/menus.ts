import { links } from "./links"
import { menu, socials } from "./labels"

const socialMenu = {
  title: socials.title,
  links: [
    {
      to: links.instagram,
      label: socials.instagram,
    },
    {
      to: links.pinterest,
      label: socials.pinterest,
    },
    {
      to: links.linkedin,
      label: socials.linkedin,
    },
  ],
}

const navMenu = {
  title: menu.title,
  links: [
    {
      to: links.work,
      label: menu.work,
    },
    {
      to: links.about,
      label: menu.about,
    },
    {
      to: links.consultancies,
      label: menu.consultancies,
    },
    {
      to: links.services,
      label: menu.services,
    },
    {
      to: links.contact,
      label: menu.contact,
    },
  ],
}

export { navMenu, socialMenu }
