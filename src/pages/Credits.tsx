import PageLayout from '../components/PageLayout'
import { COWRITES } from '../data/cowrites'
import { CREDITS } from '../data/credits'
import styles from './Credits.module.css'

export default function Credits() {
  return (
    <PageLayout>
      <section className={styles.section}>
        <h2 className={`${styles.sectionTitle} ${styles.cowritesTitle}`}>Released Co-Writes</h2>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={`${styles.th} ${styles.cowritesTh}`}>Artist</th>
              <th className={`${styles.th} ${styles.cowritesTh}`}>Song</th>
              <th className={`${styles.th} ${styles.cowritesTh}`}>Label</th>
            </tr>
          </thead>
          <tbody>
            {COWRITES.map((row) => (
              <tr key={`${row.artist}-${row.song}`} className={styles.row}>
                <td className={`${styles.td} ${styles.artist}`}>{row.artist}</td>
                <td className={styles.td}>
                  {row.spotify ? (
                    <a
                      href={row.spotify}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.spotifyLink}
                    >
                      {row.song}
                    </a>
                  ) : (
                    row.song
                  )}
                </td>
                <td className={`${styles.td} ${styles.label}`}>{row.label}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className={styles.section}>
        <h2 className={`${styles.sectionTitle} ${styles.creditsTitle}`}>Production Credits</h2>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={`${styles.th} ${styles.creditsTh}`}>Artist</th>
              <th className={`${styles.th} ${styles.creditsTh}`}>Project</th>
              <th className={`${styles.th} ${styles.creditsTh}`}>Label</th>
              <th className={`${styles.th} ${styles.creditsTh} ${styles.roleCol}`}>Role</th>
            </tr>
          </thead>
          <tbody>
            {CREDITS.map((row) => (
              <tr key={row.id} className={styles.row}>
                <td className={`${styles.td} ${styles.artist}`}>{row.artist}</td>
                <td className={styles.td}>
                  {row.spotify ? (
                    <a
                      href={row.spotify}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.spotifyLink}
                    >
                      {row.project}
                    </a>
                  ) : (
                    row.project
                  )}
                </td>
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
