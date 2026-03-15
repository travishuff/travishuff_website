import PageLayout from '../components/PageLayout'
import styles from './Gear.module.css'

const RECORDING_GEAR = [
  'Lynx Aurora 24 I/O',
  'dbx 160VU compressor (×2)',
  '1176 Blackface "Revision D" compressor',
  'LA-2A tube compressor',
  'Distressor EL8-X compressor (×2)',
  'Shure Level-Loc',
  'Standard Audio Level-Or',
  'Vintage Neve 1073 pre/eq (×2)',
  'API preamps (×4)',
  'API EQ 550A (×2) & 560 (×2)',
  'A-Designs AM-PEQ',
  'A Designs REDDI tube DI',
  'Royer 121 ribbon mics (×2)',
  'AKG 451 mics (×2)',
  'AKG D112 mic',
  'Audio Technica ATM25 mics (×2)',
  'Audix D6 mic',
  'Beyerdynamic m160 ribbon mics (×2)',
  'Neumann KM-54 tube mics (×2)',
  'Neumann U47 tube mic',
  'Shure 55, SM57, SM58, SM7 mics',
  'Sennheiser 421 (×2) & e906 mics',
  'Electro-Voice 664 & RE-20 mic',
  'RCA 74B ribbon mic',
  'Dangerous Music Monitor Controller',
  'Simon Systems Headphone Controller',
  'Little Labs IBP Jr.',
  'ProAc Studio 100 monitors',
  'Bryston 4B speaker amp',
  'Dynaudio Acoustics subwoofer',
]

const MUSIC_GEAR = [
  '1969 Gibson ES-335',
  '1974 Les Paul',
  '1954 Les Paul Junior',
  'Nash Telecaster (\'52 RI)',
  '1968 Martin D-18 Acoustic',
  '1972 Fender P-Bass',
  '6-piece Custom Maple Drumkit',
  'Gretsch Vintage Stop-Badge Drumkit',
  'Pork Pie Black Beauty Snare',
  'Custom Maple Snares',
  'Ludwig Hand-Hammered Bronze Snare',
  'Ludwig Supraphonic Snare',
  'Ludwig Acrolite Snare',
  'Various Zildjian, Paiste, Istanbul Cymbals',
  'Various Percussion',
  'Technics SL-1200 Turntable',
  'Vox AC30 Combo Amp',
  'Fender Pro Jr. Tube Amp',
  'Danelectro Honeytone Amp',
  'Roland Space Echo RE-201',
  'Various Effects Pedals (SansAmp Bass Driver, SansAmp Classic, Z-Vex Fuzz Factory, Line 6 Delay & Modulation Modelers, Fulltone Full-Drive 2, Tube Screamer vintage, MXR DynaComp vintage, Big Muff, Cry-Baby Wah, Boss DS-1 Distortion)',
  'Wurlitzer 200A',
  'Moog Subsequent 37',
  'Teenage Engineering OP-XY',
  'Omnichord',
  'Melodica',
  'Stylophone',
  'MicroKORG',
  'Axiom Pro 49 MIDI Keyboard',
]

export default function Gear() {
  return (
    <PageLayout>
      <div className={styles.grid}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Recording Gear</h2>
          <ul className={styles.list}>
            {RECORDING_GEAR.map((item) => (
              <li key={item} className={styles.item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Music Gear</h2>
          <ul className={styles.list}>
            {MUSIC_GEAR.map((item) => (
              <li key={item} className={styles.item}>{item}</li>
            ))}
          </ul>
        </section>
      </div>
    </PageLayout>
  )
}
