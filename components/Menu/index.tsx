import { useState } from "react"
import styles from "./styles.module.css"
import MenuToggler from "./MenuToggler"
import Backdrop from "./Backdrop"
import MenuContainer from "./MenuContainer/Index"
import MenuItem from "./MenuItem"
import SocialItem from "./SocialItem"
import { motion } from "framer-motion"
import { navMenu, socialMenu } from "../../config/menus"
import Navigation from "./Navigation"

const socials = socialMenu
const navigation = navMenu

const variants = {
  open: {
    opacity: 1,
    transition: {
      delay: 0.3,
      duration: 0.2,
      staggerChildren: 0.3,
    },
  },
  close: {
    opacity: 0,
    transition: {
      delay: 0.3,
      duration: 0.2,
      staggerChildren: 0.3,
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
      <Backdrop isOpen={isOpen} toggle={handleMenuOpen} />
      <MenuContainer isOpen={isOpen}>
        <div className={styles.SocialsContainer}>
          <Navigation title={socials.title}>
            <motion.div
              className={styles.Socials}
              variants={variants}
              animate={isOpen ? "open" : "closed"}
            >
              {socials.links.map(({ to, label }, index) => (
                <SocialItem key={index} to={to} label={label} />
              ))}
            </motion.div>
          </Navigation>
        </div>

        <Navigation title={navigation.title}>
          <motion.div
            className={styles.Navigation}
            variants={variants}
            animate={isOpen ? "open" : "closed"}
          >
            {navigation.links.map(({ to, label }, index) => (
              <MenuItem key={index} to={to} label={label} />
            ))}
          </motion.div>
        </Navigation>
      </MenuContainer>
      <MenuToggler toggle={handleMenuOpen} isOpen={isOpen} />
    </>
  )
}

export default Menu
