import { NextPage } from "next"
import ContactForm from "../../components/ContactForm"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import styles from "./styles.module.css"
import Head from "next/head"
import PageContent from "../../components/PageContent"

const Contact: NextPage = () => {
  return (
    <>
      <Head>
        <title>Contactame | Amagendata</title>
      </Head>
      <Header />
      <PageContent>
        <div className={styles.Title}>Conversemos sobre tu marca</div>
        <ContactForm />
      </PageContent>
      <Footer />
    </>
  )
}

export default Contact
