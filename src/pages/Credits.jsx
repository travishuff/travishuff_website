import PageLayout from '../components/PageLayout'
import styles from './Credits.module.css'

const COWRITES = [
  { artist: 'It Boys!', song: '"Better Than Your Boyfriend"', label: 'Hollywood Waste' },
  { artist: 'These Kids Wear Crowns', song: '"Lifetime"', label: 'Capitol' },
  { artist: 'Allstar Weekend', song: '"Blame It On September"', label: 'Hollywood' },
  { artist: 'Ocean Is Theory', song: '"Halo"', label: 'Razor & Tie' },
  { artist: 'The New Cities', song: '"Murder Me"', label: 'Sony Canada' },
  { artist: 'The Summer Set', song: '"Someone Like You"', label: 'Razor & Tie' },
  { artist: 'Call The Cops', song: '"Girls (I Knew It Wasn\'t Love)"', label: 'Myspace' },
  { artist: 'Kaya Jones', song: '"Boyfriend"', label: 'HueMan Race' },
  { artist: 'Kaya Jones', song: '"Every Seven Seconds"', label: 'HueMan Race' },
]

const CREDITS = [
  { artist: 'X-Factor', project: 'Various Artists', label: 'Fox', role: 'E · M' },
  { artist: 'One Direction', project: '"Up All Night"', label: 'Syco', role: 'E' },
  { artist: 'Ariana Grande', project: '"Put Your Hearts Up"', label: 'Universal Republic', role: 'E' },
  { artist: 'Hollywood Ending', project: '"You Got Me"', label: '—', role: 'P · E · M' },
  { artist: 'Alberta Cross', project: 'Rolling Thunder', label: 'ATO', role: 'E · M' },
  { artist: 'All Time Low', project: 'Dirty Work', label: 'Interscope', role: 'E' },
  { artist: 'The Invincibles', project: 'Murs & Whole Wheat Bread', label: '—', role: 'P · M' },
  { artist: 'Pop Levi', project: 'Motorcycle 666', label: 'Ninjatune', role: 'M' },
  { artist: 'Hey Monday', project: '"I Don\'t Want To Dance"', label: '—', role: 'E' },
  { artist: 'The Ready Set', project: 'I\'m Alive, I\'m Dreaming', label: 'Warner Bros', role: 'E' },
  { artist: 'Crossfade', project: 'We All Bleed', label: 'Eleven Seven', role: 'E' },
  { artist: 'Selena Gomez', project: '"Sick of You"', label: 'Hollywood', role: 'E' },
  { artist: 'David Archuleta', project: '"Look Around"', label: 'Jive', role: 'E' },
  { artist: 'Anine Stang', project: '"Trying You On" "Zip It Up" "Happy"', label: '—', role: 'P · E · M' },
  { artist: 'HIM', project: 'Screamworks: Love In Theory and Practice', label: 'Warner Bros', role: 'E' },
  { artist: 'Forever The Sickest Kids', project: 'The Weekend: Friday', label: 'Universal', role: 'E' },
  { artist: '3OH!3 Featuring Katy Perry', project: '"Starstrukk"', label: 'Atlantic', role: 'E' },
  { artist: 'Emily Osment', project: 'All The Right Wrongs', label: 'Wind-Up', role: 'E' },
  { artist: 'A Rocket To The Moon', project: 'On Your Side', label: 'FBR/Atlantic', role: 'P · E' },
  { artist: 'Georgia', project: 'Slow Down Easy', label: 'Atlantic', role: 'E' },
  { artist: 'Leena', project: 'Mean Old Clock EP', label: 'EMI Aust', role: 'E · M' },
  { artist: 'Pop Levi', project: 'Never Never Love', label: 'Ninja Tune', role: 'E · M' },
  { artist: 'Whole Wheat Bread', project: 'Hearts of Hoodlums', label: 'Fighting Records', role: 'P · E · M' },
  { artist: 'Heartstop', project: 'Moments', label: '—', role: 'P · E · M' },
  { artist: 'Grace Potter & The Nocturnals', project: 'This Is Somewhere', label: 'Hollywood', role: 'E' },
  { artist: 'Lavender Diamond', project: 'Imagine Our Love', label: 'Rough Trade', role: 'E' },
  { artist: 'Whole Wheat Bread', project: 'Punk Life EP', label: 'Fighting Records', role: 'P · E · M' },
  { artist: 'Moses Mayfield', project: '"Roadhouse Blues"', label: 'Epic', role: 'P · E · M' },
  { artist: 'Rosewood Thieves', project: 'Lonesome', label: 'V2', role: 'E' },
  { artist: 'Yellowcard', project: 'Lights & Sounds', label: 'Capitol', role: 'E' },
  { artist: 'Fall Out Boy', project: 'From Under The Cork Tree', label: 'Island/Def Jam', role: 'E' },
  { artist: 'Curious', project: 'Curious', label: 'Curious Records', role: 'P · E · M' },
  { artist: 'Reeve Oliver', project: 'Touchtone Inferno', label: 'Capitol', role: 'E' },
  { artist: 'Kazi', project: 'EP', label: '—', role: '—' },
  { artist: 'Days Away', project: 'Mapping An Invisible World', label: 'Fueled By Ramen', role: 'E' },
  { artist: 'New Found Glory', project: 'Catalyst', label: 'Geffen', role: 'E' },
  { artist: 'Yellowcard', project: 'Ocean Ave', label: 'Capitol', role: 'E' },
  { artist: 'The Pharcyde', project: 'Humbolt Beginnings', label: 'Chapter 1', role: 'E' },
  { artist: 'Die Trying', project: 'Die Trying', label: 'Island/Def Jam', role: 'E' },
  { artist: 'The Exies', project: 'Head For The Door', label: 'Virgin', role: 'E' },
  { artist: 'The Exies', project: '"Once In A Lifetime"', label: 'Virgin', role: 'E · M' },
  { artist: 'Biirdie', project: 'Morning Kills The Dark', label: 'Pop Up', role: 'P · E · M' },
  { artist: 'The Fight', project: 'Nothing New Since Rock n Roll', label: 'Repossession', role: 'E' },
  { artist: 'Home Town Hero', project: 'Home Town Hero', label: 'Maverick', role: 'E' },
  { artist: 'Biirdie', project: 'Glendale EP', label: 'Pop Up', role: 'P · E · M' },
  { artist: 'Dave Stringer', project: 'Mala/Japa', label: 'Laxmi', role: 'E' },
]

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
            {COWRITES.map((row, i) => (
              <tr key={i} className={styles.row}>
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
            {CREDITS.map((row, i) => (
              <tr key={i} className={styles.row}>
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
