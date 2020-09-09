import Head from 'next/head'
import styles from '../styles/Home.module.css'
import MainContainer from '../components/main/mainContainer'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>spaceX</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.globalContainer}>
        <h1 className={styles.title}>SpaceX Launch Programs</h1>
          <MainContainer />
      </div>
    </div>
  )
}
