import { NOTABLE_CREDITS } from '../data/notableCredits'
import styles from './CreditsBlock.module.css'

export default function CreditsBlock() {
  return (
    <div className={styles.block}>
      <p className={styles.label}>P=producer E=engineer M=mixer</p>
      <ul className={styles.list}>
        {NOTABLE_CREDITS.map(({ artist, project, role, spotify }) => (
          <li key={artist} className={styles.item}>
            <a href={spotify} target="_blank" rel="noopener noreferrer" className={styles.link}>
              <span className={styles.artist}>{artist}</span>
              <span className={styles.project}>{project}</span>
              <span className={styles.role}>{role}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
