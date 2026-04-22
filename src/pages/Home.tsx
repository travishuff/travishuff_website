import { useState } from 'react'
import CenterPhoto from '../components/CenterPhoto'
import CyclingTitle from '../components/CyclingTitle'
import CreditsBlock from '../components/CreditsBlock'
import HiddenPagesModal from '../components/HiddenPagesModal'
import SiteShell from '../components/SiteShell'
import styles from './Home.module.css'

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false)

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
      <button
        type="button"
        className={styles.easterEgg}
        onClick={() => setModalOpen(true)}
        aria-label="Hidden pages"
      />
      <HiddenPagesModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </SiteShell>
  )
}
