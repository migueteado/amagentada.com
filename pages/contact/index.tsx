import { NextPage } from "next"
import ContactForm from "../../components/ContactForm"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import styles from "./styles.module.css"

const Contact: NextPage = () => {
  return (
    <>
      <Header />
      <div className={styles.ContactPage}>
        <div className={styles.Title}>Conversemos sobre tu marca</div>
        <ContactForm />
      </div>
      <Footer />
    </>
  )
}

export default Contact
