import { useState, useEffect } from 'react'
import styles from './CyclingTitle.module.css'

const TITLES = ['producer', 'engineer', 'mixer', 'programmer']

export default function CyclingTitle() {
  const [index, setIndex] = useState(0)
  const [animKey, setAnimKey] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % TITLES.length)
      setAnimKey((k) => k + 1)
    }, 3200)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className={styles.container}>
      <span key={animKey} className={styles.title}>
        {TITLES[index]}
      </span>
    </div>
  )
}
