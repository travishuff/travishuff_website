import CenterPhoto from '../components/CenterPhoto'
import CyclingTitle from '../components/CyclingTitle'
import CreditsBlock from '../components/CreditsBlock'
import SiteShell from '../components/SiteShell'
import styles from './Home.module.css'

export default function Home() {
  return (
    <SiteShell mainClassName={styles.main}>
      <CenterPhoto />
      <div className={styles.bottomLeft}>
        <CyclingTitle />
        <p className={styles.name}>travis huff</p>
      </div>
      <div className={styles.bottomRight}>
        <CreditsBlock />
      </div>
    </SiteShell>
  )
}
