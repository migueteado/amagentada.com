import { useState } from "react"
import styles from "./styles.module.css"
import MenuToggler from "./MenuToggler"
import Backdrop from "./Backdrop"
import MenuContainer from "./MenuContainer/Index"
import MenuItem from "./MenuItem"
import SocialItem from "./SocialItem"
import { motion } from "framer-motion"
import { menuLinks, socialLinks } from "../../config/menus"
import Navigation from "./Navigation"

const socials = socialLinks
const navigation = menuLinks

const variants = {
  open: {
    opacity: 1,
    transition: {
      delay: 0.3,
      duration: 0.2,
      staggerChildren: 0.1,
    },
  },
  close: {
    opacity: 0,
    transition: {
      delay: 0.3,
      duration: 0.2,
      staggerChildren: 0.1,
    },
  },
}

const Menu = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false)

  const handleMenuOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <MenuToggler toggle={handleMenuOpen} />
      <Backdrop isOpen={isOpen} toggle={handleMenuOpen} />
      <MenuContainer isOpen={isOpen} toggle={handleMenuOpen}>
        <Navigation title={socials.title}>
          <motion.ul
            className={styles.Socials}
            variants={variants}
            animate={isOpen ? "open" : "closed"}
          >
            {socials.links.map(({ id, to, label, icon }) => (
              <SocialItem key={id} to={to} label={label} icon={icon} />
            ))}
          </motion.ul>
        </Navigation>
        <Navigation title={navigation.title}>
          <motion.ul
            className={styles.Navigation}
            variants={variants}
            animate={isOpen ? "open" : "closed"}
          >
            {navigation.links.map(({ id, to, label, icon }) => (
              <MenuItem key={id} to={to} label={label} icon={icon} />
            ))}
          </motion.ul>
        </Navigation>
      </MenuContainer>
    </>
  )
}

export default Menu
