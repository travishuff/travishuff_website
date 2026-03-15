import styles from './CreditsBlock.module.css'

const NOTABLE = [
  { artist: 'One Direction',         project: '"Up All Night"',           role: 'E' },
  { artist: 'Ariana Grande',         project: '"Put Your Hearts Up"',      role: 'E' },
  { artist: 'Selena Gomez',          project: '"Sick of You"',             role: 'E' },
  { artist: 'Fall Out Boy',          project: 'From Under the Cork Tree',  role: 'E' },
  { artist: 'Yellowcard',            project: 'Ocean Avenue',              role: 'E' },
  { artist: '3OH!3 feat. Katy Perry',project: '"Starstrukk"',              role: 'E' },
]

export default function CreditsBlock() {
  return (
    <div className={styles.block}>
      <p className={styles.label}>P=producer  E=engineer  M=mixer</p>
      <ul className={styles.list}>
        {NOTABLE.map(({ artist, project, role }) => (
          <li key={artist} className={styles.item}>
            <span className={styles.artist}>{artist}</span>
            <span className={styles.project}>{project}</span>
            <span className={styles.role}>{role}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
