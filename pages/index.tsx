import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import utilStyles from '../styles/utils.module.css'
import Layout from '../components/layout'
import profilePic from '../public/teste.png'


const Home: NextPage = () => {
  return (
    <Layout>
      <section className={styles.homeSection}>
        <h2>Casamentos</h2>
        <div>
        <Image
                    priority
                    src={profilePic}
                    className={styles.header}
                    height={'253px'}
                    width={'380px'}
                    alt={'teste'}
                  />
        <Image
                    priority
                    src={profilePic}
                    className={styles.header}
                    height={'253px'}
                    width={'380px'}
                    alt={'teste'}
                  />


        <Image
                    priority
                    src={profilePic}
                    className={styles.header}
                    height={'253px'}
                    width={'380px'}
                    alt={'teste'}
                  />
        </div>
        
      </section>
      
      <section className={styles.homeSection}>
        <h2>Debutantes</h2>
        <div>
        <Image
                    priority
                    src={profilePic}
                    className={styles.header}
                    height={'253px'}
                    width={'380px'}
                    alt={'teste'}
                  />
        <Image
                    priority
                    src={profilePic}
                    className={styles.header}
                    height={'253px'}
                    width={'380px'}
                    alt={'teste'}
                  />


        <Image
                    priority
                    src={profilePic}
                    className={utilStyles.header}
                    height={'253px'}
                    width={'380px'}
                    alt={'teste'}
                  />
        </div>

      </section>

      <section className={styles.homeSection}>
        <h2>Infantil</h2>
        <div>
        <Image
                    priority
                    src={profilePic}
                    className={utilStyles.header}
                    height={'253px'}
                    width={'380px'}
                    alt={'teste'}
                  />
        <Image
                    priority
                    src={profilePic}
                    className={utilStyles.header}
                    height={'253px'}
                    width={'380px'}
                    alt={'teste'}
                  />


        <Image
                    priority
                    src={profilePic}
                    className={utilStyles.header}
                    height={'253px'}
                    width={'380px'}
                    alt={'teste'}
                  />
        </div>
        
      </section>
    </Layout>
  )
}

export default Home
