import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import CasamentoArLivrePic from '../public/casamento-ao-ar-livre.jpg'


const name = 'Dinho Foto e vídeo'
export const siteTitle = 'Dinho foto e vídeo'

export default function Layout({
  children,
  home
}: {
  children: React.ReactNode
  home?: boolean
}) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="Dinho foto e vídeo"
          content="Fotografo especializado em casamentos!"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {
        <section className={styles.firstCollumn}>
          <menu className={styles.menu}>
            <nav>
            <div className={styles.logoPic}>
            <Image src={CasamentoArLivrePic} height={150} width={136} ></Image>
            </div>
              <p>Portifólio</p>
              <p>Trabalhos</p>
              <p>Orçamentos</p>
              <p>Workshops + Presents</p>
              <p>Prices and Packages</p>
              <p>Área do cliente / Client Area</p>
            </nav>
            <div className={styles.socialIcones}>

            </div>
          </menu>
        </section>
        }
      </header>
      <main className={styles.container}>{children}</main>
      {/* !home && (
        <footer className={styles.footer}>
          <Link href="/">
            <nav className={styles.footerMenu}>
                <ul>
                    <li><a>Início</a></li>
                    <li><a>Portfólio</a></li>
                    <li><a>Casamentos</a></li>
                    <li><a>Debutante 15 anos</a></li>
                    <li><a>Festa infantil</a></li>
                </ul>
            </nav>
          </Link>
        </footer>
      )*/}
    </div>
  )
}