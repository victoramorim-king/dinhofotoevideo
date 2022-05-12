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
      <section className={styles.gallery}>
         <Gallery title="Victor" paragraph="Esse é meu nome!" />
      </section>
    </Layout >
  )
}

export default Home
