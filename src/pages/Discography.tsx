import PageLayout from '../components/PageLayout'
import { DISCOGRAPHY } from '../data/discography'
import styles from './Discography.module.css'

export default function Discography() {
  return (
    <PageLayout>
      <section>
        <h2 className={styles.sectionTitle}>Discography</h2>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.th}>Artist</th>
              <th className={styles.th}>Album / Release</th>
              <th className={styles.th}>Label</th>
              <th className={styles.th}>Role</th>
            </tr>
          </thead>
          <tbody>
            {DISCOGRAPHY.map((row) => (
              <tr key={row.artist + row.album} className={styles.row}>
                <td className={`${styles.td} ${styles.artist}`}>{row.artist}</td>
                <td className={styles.td}>
                  {row.spotify ? (
                    <a
                      href={row.spotify}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.spotifyLink}
                    >
                      {row.album}
                    </a>
                  ) : (
                    row.album
                  )}
                </td>
                <td className={`${styles.td} ${styles.label}`}>{row.label}</td>
                <td className={`${styles.td} ${styles.role}`}>{row.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </PageLayout>
  )
}
