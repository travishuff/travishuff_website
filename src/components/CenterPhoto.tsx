import styles from './CenterPhoto.module.css'

export default function CenterPhoto() {
  return (
    <div className={styles.container}>
      <div className={styles.frame}>
        <img src="/images/travis9000k.jpg" alt="Travis Huff" className={styles.photo} />
        <div className={styles.scanlines} aria-hidden="true" />
        <div className={styles.glitch} aria-hidden="true">
          <img src="/images/travis9000k.jpg" alt="" className={styles.glitchSlice1} />
          <img src="/images/travis9000k.jpg" alt="" className={styles.glitchSlice2} />
        </div>
        <div className={styles.vignette} aria-hidden="true" />
      </div>
    </div>
  )
}
