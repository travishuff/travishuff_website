import PageLayout from '../components/PageLayout'
import { RECORDING_GEAR, MUSIC_GEAR } from '../data/gear'
import styles from './Gear.module.css'

export default function Gear() {
  return (
    <PageLayout>
      <div className={styles.grid}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Recording Gear</h2>
          <ul className={styles.list}>
            {RECORDING_GEAR.map((item) => (
              <li key={item} className={styles.item}>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Music Gear</h2>
          <ul className={styles.list}>
            {MUSIC_GEAR.map((item) => (
              <li key={item} className={styles.item}>
                {item}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </PageLayout>
  )
}
