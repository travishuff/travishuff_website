import PageLayout from '../components/PageLayout'
import styles from './Gear.module.css'

const RECORDING_GEAR = [
  'Pro Tools HD|3 Accel',
  'Digidesign 192 Interface (24 I/O)',
  'Apogee Big Ben Clock Source',
  'Digidesign Sync I/O',
  'dbx 160VU compressor (×2)',
  'Neve 2254e compressor (×2)',
  'Smart C2 compressor',
  'ADR Compex Limiter',
  '1176 Blackface "Revision D" compressor (×2)',
  'LA-2A tube compressor',
  'LA-3A compressor (×2)',
  'Distressor EL8-X compressor (×2)',
  'Gates Sta-Level tube compressor',
  'Shure Level-Loc',
  'Standard Audio Level-Or',
  'SPL Transient Designer (×4)',
  'Neve/Brent Averill 1272 preamps (×4)',
  'Vintage Neve 1073 pre/eq (×2)',
  'API preamps (×4)',
  'API EQ 550A (×2) & 560 (×2)',
  'A-Designs AM-PEQ',
  'Altec 1567A tube pre-amp/mixer (×2)',
  'A Designs REDDI tube DI',
  'Royer 121 ribbon mics (×2)',
  'AKG 414-TLII mics (×2)',
  'AKG 451 mics (×2)',
  'AKG D112 mic',
  'Audio Technica ATM25 mics (×2)',
  'Audix D6 mic',
  'Beyerdynamic m160 ribbon mics (×2)',
  'Neumann KM-54 tube mics (×2)',
  'Neumann U47 tube mic',
  'Neumann TLM-103 mic',
  'Shure 55, SM57, SM58, SM7 mics',
  'Sennheiser 421 (×2) & e906 mics',
  'Electro-Voice 664 & RE-20 mic',
  'RCA 74B ribbon mic',
  'Dangerous Music Monitor Controller',
  'Simon Systems Headphone Controller',
  'Little Labs IBP Jr.',
  'Auratone monitors',
  'Yamaha NS-10M monitors',
  'Bryston 4B speaker amp',
  'Mackie HR824 monitors',
  'Velodyne 12" subwoofer',
]

const MUSIC_GEAR = [
  '1969 Gibson ES-335',
  '1974 Les Paul',
  '1954 Les Paul Junior',
  'Nash Telecaster (\'52 RI)',
  '1968 Martin D-18 Acoustic',
  'Jerry Jones Guitar',
  'Danelectro Baritone Guitar',
  '1972 Fender P-Bass',
  '6-piece Custom Maple Drumkit',
  'Gretsch Vintage Stop-Badge Drumkit',
  'Black Beauty Snare',
  '2 Custom Maple Snares',
  'Ludwig Hand-Hammered Bronze Snare',
  'Ludwig Steel Snare',
  'Various Zildjian, Paiste, Sabian Cymbals',
  'Various Tambourines and Shakers',
  'Technics SL-1200 Turntable',
  'Vox AC30 Combo Amp',
  'Fender Pro Jr. Tube Amp',
  'Fender 1964 Spring Reverb',
  'Danelectro Honeytone Amp',
  'Roland Space Echo RE-201',
  'SansAmp Bass Driver',
  'SansAmp Classic',
  'Z-Vex Fuzz Factory',
  'Line 6 Delay & Modulation Modelers',
  'Fulltone Full-Drive 2',
  'Tube Screamer vintage',
  'MXR DynaComp vintage',
  'Big Muff',
  'Cry-Baby Wah',
  'Boss DS-1 Distortion',
  'Wurlitzer 200A',
  'Omnichord',
  'Melodica',
  'Stylophone',
  'MicroKORG',
  'Monome',
  'Axiom Pro 49 MIDI Keyboard',
  'KORG 88 Weighted-Key MIDI Controller',
  'Akai MPC MIDI Drum Pad Controller',
  'Peterson Strobe Tuner',
]

export default function Gear() {
  return (
    <PageLayout>
      <div className={styles.grid}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Recording Gear</h2>
          <ul className={styles.list}>
            {RECORDING_GEAR.map((item, i) => (
              <li key={i} className={styles.item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Music Gear</h2>
          <ul className={styles.list}>
            {MUSIC_GEAR.map((item, i) => (
              <li key={i} className={styles.item}>{item}</li>
            ))}
          </ul>
        </section>
      </div>
    </PageLayout>
  )
}
