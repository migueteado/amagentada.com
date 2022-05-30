import { useState } from "react"
import styles from "./styles.module.css"
import MenuToggler from "./MenuToggler"
import Backdrop from "./Backdrop"
import MenuContainer from "./MenuContainer/Index"
import MenuItem from "./MenuItem"
import SocialItem from "./SocialItem"
import { motion } from "framer-motion"
import { menuLinks, socialLinks } from "../../config/const"

const socials = socialLinks
const navigation = menuLinks

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
        <div className={styles.SocialsContainer}>
          <div className={styles.SocialsTitle}>{socials.title}</div>
          <motion.ul className={styles.Socials}>
            {socials.links.map(({ id, to, label, icon }) => (
              <SocialItem key={id} to={to} label={label} icon={icon} />
            ))}
          </motion.ul>
        </div>
        <div className={styles.NavigationContainer}>
          <div className={styles.NavigationTitle}>{navigation.title}</div>
          <motion.ul className={styles.Navigation}>
            {navigation.links.map(({ id, to, label, icon }) => (
              <MenuItem key={id} to={to} label={label} icon={icon} />
            ))}
          </motion.ul>
        </div>
      </MenuContainer>
    </>
  )
}

export default Menu
