import PageLayout from '../components/PageLayout'
import { COWRITES } from '../data/cowrites'
import { CREDITS } from '../data/credits'
import styles from './Credits.module.css'

export default function Credits() {
  return (
    <PageLayout>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Released Co-Writes</h2>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.th}>Artist</th>
              <th className={styles.th}>Song</th>
              <th className={styles.th}>Label</th>
            </tr>
          </thead>
          <tbody>
            {COWRITES.map((row) => (
              <tr key={row.artist + row.song} className={styles.row}>
                <td className={`${styles.td} ${styles.artist}`}>{row.artist}</td>
                <td className={styles.td}>{row.song}</td>
                <td className={`${styles.td} ${styles.label}`}>{row.label}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Production Credits</h2>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.th}>Artist</th>
              <th className={styles.th}>Project</th>
              <th className={styles.th}>Label</th>
              <th className={`${styles.th} ${styles.roleCol}`}>Role</th>
            </tr>
          </thead>
          <tbody>
            {CREDITS.map((row) => (
              <tr key={row.artist + row.project} className={styles.row}>
                <td className={`${styles.td} ${styles.artist}`}>{row.artist}</td>
                <td className={styles.td}>{row.project}</td>
                <td className={`${styles.td} ${styles.label}`}>{row.label}</td>
                <td className={`${styles.td} ${styles.role}`}>{row.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className={styles.legend}>P = Producer · E = Engineer · M = Mixer · W = Writer</p>
      </section>
    </PageLayout>
  )
}
