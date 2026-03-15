import PageLayout from '../components/PageLayout'
import styles from './Discography.module.css'

interface DiscographyEntry {
  artist: string
  album: string
  label: string
  role: string
}

const DISCOGRAPHY: DiscographyEntry[] = [
  { artist: 'A Rocket to the Moon', album: 'TBA', label: 'Fueled By Ramen', role: 'Engineer' },
  {
    artist: '3OH!3 Feat. Katy Perry',
    album: 'Starstrukk',
    label: 'Photo Finish',
    role: 'Engineer',
  },
  {
    artist: 'Pop Levi',
    album: 'Police $ign / Terrifying',
    label: 'Ninja Tune',
    role: 'Producer / Engineer / Mixer',
  },
  { artist: 'Anina', album: 'Not My Boyfriend', label: '—', role: 'Producer / Engineer / Mixer' },
  {
    artist: 'Ian Erix',
    album: 'Song For Mutts',
    label: '—',
    role: 'Writer / Producer / Engineer / Mixer',
  },
  { artist: 'Pop Levi', album: 'Never Never Love', label: 'Ninja Tune', role: 'Engineer / Mixer' },
  {
    artist: 'Whole Wheat Bread',
    album: 'The Hearts of Hoodlums',
    label: 'Fighting Records',
    role: 'Producer / Engineer / Mixer',
  },
  { artist: 'Heartstop', album: 'Moments EP', label: 'Indie', role: 'Producer / Engineer / Mixer' },
  { artist: 'Leena Thavisin', album: 'TBA', label: 'Capitol', role: 'Engineer' },
  { artist: 'The Invincibles', album: 'TBA', label: 'TBA', role: 'Producer / Engineer / Mixer' },
  {
    artist: 'Grace Potter and the Nocturnals',
    album: 'This Is Somewhere',
    label: 'Hollywood',
    role: 'Engineer',
  },
  {
    artist: "The King's Royal",
    album: 'Beginning',
    label: 'Rukus Entertainment',
    role: 'Engineer',
  },
  { artist: 'Georgia', album: 'TBA', label: 'Atlantic', role: 'Engineer' },
  {
    artist: 'Pop Levi',
    album: 'The Return to Form Black Magick Party B-Sides',
    label: 'Ninja Tune',
    role: 'Engineer / Mixer',
  },
  { artist: 'Lavender Diamond', album: 'Imagine Our Love', label: 'Matador', role: 'Engineer' },
  {
    artist: 'Reeve Oliver',
    album: 'Touchtone Inferno',
    label: 'Capitol',
    role: 'Pro Tools / Engineer',
  },
  {
    artist: 'Whole Wheat Bread',
    album: 'Punk Life',
    label: 'Fighting Records',
    role: 'Producer / Engineer / Mixer',
  },
  {
    artist: 'The Rosewood Thieves',
    album: 'From The Decker House',
    label: 'V2/Artemis',
    role: 'Engineer',
  },
  { artist: 'Moses Mayfield', album: 'The Inside', label: 'Epic', role: 'Pro Tools / Engineer' },
  {
    artist: 'Yellowcard',
    album: 'Lights + Sounds',
    label: 'Capitol',
    role: 'Pro Tools / Engineer',
  },
  {
    artist: 'Fall Out Boy',
    album: 'From Under a Cork Tree',
    label: 'Island',
    role: 'Pro Tools / Engineer',
  },
  { artist: 'Curious', album: 'EP 2005', label: 'Indie', role: 'Producer / Engineer / Mixer' },
  { artist: 'Kazi', album: 'EP 2005', label: 'Indie', role: 'Co-Producer / Mixer' },
  {
    artist: 'Days Away',
    album: 'Mapping an Invisible World',
    label: 'Fueled By Ramen',
    role: 'Pro Tools / Engineer',
  },
  {
    artist: 'The Exies',
    album: 'Head for the Door',
    label: 'Virgin',
    role: 'Engineer / Pro Tools',
  },
  {
    artist: 'Biirdie',
    album: 'Morning Kills the Dark',
    label: 'Pop-Up Records',
    role: 'Producer / Engineer / Mixer',
  },
  { artist: 'New Found Glory', album: 'Catalyst', label: 'Geffen', role: 'Pro Tools Engineer' },
  { artist: 'Yellowcard', album: 'Ocean Avenue', label: 'Capitol', role: 'Engineer / Pro Tools' },
  {
    artist: 'The Fight',
    album: "Nothing New Since Rock 'N Roll",
    label: 'Repossession',
    role: 'Engineer / Digital Editing',
  },
  {
    artist: 'The Pharcyde',
    album: 'Humbolt Beginnings',
    label: 'V2/Chapter 1',
    role: 'Pro Tools Engineer',
  },
  { artist: 'The Exies', album: 'Demos 2004', label: 'Virgin', role: 'Engineer / Mixer' },
  {
    artist: 'Die Trying',
    album: 'Die Trying',
    label: 'Island/Def Jam',
    role: 'Pro Tools Engineer',
  },
  {
    artist: 'Home Town Hero',
    album: 'Home Town Hero',
    label: 'Maverick',
    role: 'Pro Tools Engineer',
  },
  {
    artist: 'Dick Carter Speedway',
    album: 'A Pill That Knocks Me Out',
    label: 'Indie',
    role: 'Producer / Engineer / Mixer',
  },
  { artist: 'Elisabeth Ames', album: 'Elisabeth Ames', label: 'Indie', role: 'Engineer / Mixer' },
  { artist: 'Cucoloris', album: 'Unfurl', label: 'Indie', role: 'Producer / Engineer / Mixer' },
  { artist: 'Brian Stace', album: 'Country Music...', label: 'TexDog Records', role: 'Engineer' },
  {
    artist: 'Biirdie',
    album: 'Glendale EP',
    label: 'Pop-Up Records',
    role: 'Producer / Engineer / Mixer',
  },
  { artist: 'Billion Stars', album: 'Pleads the Fifth', label: 'Indie', role: 'Engineer / Mixer' },
  {
    artist: 'Dave Stringer',
    album: 'Mala/Japa',
    label: 'Spirit Voyage Records',
    role: 'Engineer / Producer',
  },
  { artist: 'Winter', album: 'Assault', label: 'Nuclear Blast', role: 'Producer / Programmer' },
]

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
                <td className={styles.td}>{row.album}</td>
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
