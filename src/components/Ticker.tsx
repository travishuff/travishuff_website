import styles from './Ticker.module.css'

const CREDITS = [
  'One Direction',
  'Ariana Grande',
  'Selena Gomez',
  'Fall Out Boy',
  'Yellowcard',
  '3OH!3 feat. Katy Perry',
  'All Time Low',
  'HIM',
  'New Found Glory',
  'A Rocket to the Moon',
  'Grace Potter & the Nocturnals',
  'Alberta Cross',
  'The Ready Set',
  'Pop Levi',
  'Forever the Sickest Kids',
  'Emily Osment',
  'Crossfade',
  'David Archuleta',
  'The Pharcyde',
  'Days Away',
  'Whole Wheat Bread',
  'Lavender Diamond',
  'Reeve Oliver',
  'Moses Mayfield',
  'The Exies',
  'Biirdie',
]

export default function Ticker() {
  const text = CREDITS.join('  ·  ')

  return (
    <div className={styles.wrapper}>
      <div className={styles.track}>
        <span>{text}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <span aria-hidden="true">{text}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
      </div>
    </div>
  )
}
