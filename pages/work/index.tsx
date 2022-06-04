import { NextPage } from "next"
import Head from "next/head"
import Link from "next/link"
import ContactToggler from "../../components/Contact"
import Footer from "../../components/Footer"
import Menu from "../../components/Menu"
import PageContent from "../../components/PageContent"

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Portafolio | Amagentada</title>
      </Head>
      <ContactToggler />
      <Menu />
      <PageContent>
        Portafolio
        <ul>
          <li>
            <Link href="/work/pawrfectly">
              <a>Pawrfectly</a>
            </Link>
          </li>
          <li>
            <Link href="/work/nataly-postres">
              <a>Nataly Postres</a>
            </Link>
          </li>
        </ul>
      </PageContent>

      <Footer />
    </>
  )
}

export default Home
