import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import utilStyles from '../styles/utils.module.css'
import Layout from '../components/layout'
import CasamentoArLivrePic from '../public/casamento-ao-ar-livre.jpg'
import { Gallery } from '../components/gallery'

const Home: NextPage = () => {
  return (
    <Layout>
      <section className={styles.conten}>
        <section className={styles.firstCollumn}>
          <menu className={styles.menu}>
            <nav>
            <div className={styles.logoPic}>
            <Image src={CasamentoArLivrePic} height={150} width={136} ></Image>
            </div>
              <a href="/casamentos">Portifólio</a>
              <a href="/">Trabalhos</a>
              <a href="/">Orçamentos</a>
              <a href="/">Workshops + Presents</a>
              <a href="/">Prices and Packages</a>
              <a href="/">Área do cliente / Client Area</a>
            </nav>
            <div className={styles.socialIcones}>

            </div>
          </menu>
        </section>
        <section className={styles.intro}>
          <div className={styles.dinhoPicContainer}>
            <Image src={CasamentoArLivrePic} className={styles.dinhoPic} height={150} width={150}></Image>
          </div>
          <h2>Hey! <br /> eu sou o dinho</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aspernatur iure dolore modi quas delectus, similique laboriosam velit sit excepturi cumque officia? Obcaecati in eaque, commodi illo quos amet voluptas?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse aliquid natus labore saepe delectus voluptate nulla, culpa in maiores! Atque consequuntur necessitatibus voluptate reiciendis tempora ut numquam dolorum deserunt ea.</p>
        </section>
        <section className={styles.gallery}>
          <Gallery title="Victor" paragraph="Esse é meu nome!" />
        </section>
      </section>
    </Layout >
  )
}

export default Home
