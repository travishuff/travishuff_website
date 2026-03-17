import { NOTABLE_CREDITS } from '../data/credits'
import styles from './CreditsBlock.module.css'

export default function CreditsBlock() {
  return (
    <div className={styles.block}>
      <ul className={styles.list}>
        {NOTABLE_CREDITS.map(({ id, artist, project, role, spotify }) => (
          <li key={id} className={styles.item}>
            <a href={spotify} target="_blank" rel="noopener noreferrer" className={styles.link}>
              <span className={styles.artist}>{artist}</span>
              <span className={styles.project}>{project}</span>
              <span className={styles.role}>{role}</span>
            </a>
          </li>
        ))}
      </ul>
      <p className={styles.label}>P=producer E=engineer M=mixer</p>
    </div>
  )
}
