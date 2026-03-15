import Ticker from '../components/Ticker'
import Nav from '../components/Nav'
import CenterPhoto from '../components/CenterPhoto'
import CyclingTitle from '../components/CyclingTitle'
import CreditsBlock from '../components/CreditsBlock'
import styles from './Home.module.css'

export default function Home() {
  return (
    <div className={styles.page}>
      <Ticker />
      <Nav />
      <main className={styles.main}>
        <CenterPhoto />
        <div className={styles.bottomLeft}>
          <CyclingTitle />
          <p className={styles.name}>travis huff</p>
        </div>
        <div className={styles.bottomRight}>
          <CreditsBlock />
        </div>
      </main>
    </div>
  )
}
