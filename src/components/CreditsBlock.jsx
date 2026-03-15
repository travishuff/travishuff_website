import styles from './CreditsBlock.module.css'

const NOTABLE = [
  {
    artist:  'One Direction',
    project: '"Up All Night"',
    role:    'E',
    spotify: 'https://open.spotify.com/album/6cunQQ7YZisYOoiFu2ywIq',
  },
  {
    artist:  'Ariana Grande',
    project: '"Put Your Hearts Up"',
    role:    'E',
    spotify: 'https://open.spotify.com/track/1Rp8zCRpkHyEDqaUczfMZA',
  },
  {
    artist:  'Selena Gomez',
    project: '"Sick of You"',
    role:    'E',
    spotify: 'https://open.spotify.com/track/64ZtUUvYqh0aeCkQzILgUy',
  },
  {
    artist:  'Fall Out Boy',
    project: 'From Under the Cork Tree',
    role:    'E',
    spotify: 'https://open.spotify.com/album/5nkUSlIhtoJZMOUlB0sNCp',
  },
  {
    artist:  'Yellowcard',
    project: 'Ocean Avenue',
    role:    'E',
    spotify: 'https://open.spotify.com/album/24IBCzEJlHBI0ioxlSuSPA',
  },
  {
    artist:  '3OH!3 feat. Katy Perry',
    project: '"Starstrukk"',
    role:    'E',
    spotify: 'https://open.spotify.com/track/1hBM2D1ULT3aeKuddSwPsK',
  },
]

export default function CreditsBlock() {
  return (
    <div className={styles.block}>
      <p className={styles.label}>P=producer  E=engineer  M=mixer</p>
      <ul className={styles.list}>
        {NOTABLE.map(({ artist, project, role, spotify }) => (
          <li key={artist} className={styles.item}>
            <a
              href={spotify}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
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
