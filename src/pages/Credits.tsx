import PageLayout from '../components/PageLayout'
import { COWRITES } from '../data/cowrites'
import { CREDITS } from '../data/credits'
import styles from './Credits.module.css'

function SpotifyCell({ href, label }: { href?: string; label: string }) {
  if (!href) return <>{label}</>
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={styles.spotifyLink}>
      {label}
    </a>
  )
}

export default function Credits() {
  return (
    <PageLayout>
      <section className={styles.section}>
        <h2 className={`${styles.sectionTitle} ${styles.cowritesTitle}`}>Released Co-Writes</h2>
        <div className={styles.tableWrapper}>
          <table className={`${styles.table} ${styles.cowritesTable}`}>
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
                    <SpotifyCell href={row.spotify} label={row.song} />
                  </td>
                  <td className={`${styles.td} ${styles.label}`}>{row.label}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={`${styles.sectionTitle} ${styles.creditsTitle}`}>Production Credits</h2>
        <div className={styles.tableWrapper}>
          <table className={`${styles.table} ${styles.creditsTable}`}>
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
                    <SpotifyCell href={row.spotify} label={row.project} />
                  </td>
                  <td className={`${styles.td} ${styles.label}`}>{row.label}</td>
                  <td className={`${styles.td} ${styles.role}`}>{row.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className={styles.legend}>P = Producer · E = Engineer · M = Mixer · W = Writer</p>
      </section>
    </PageLayout>
  )
}
