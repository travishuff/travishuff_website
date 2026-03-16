import { TICKER_CREDITS } from '../data/ticker'
import styles from './Ticker.module.css'

export default function Ticker() {
  const text = TICKER_CREDITS.join('  ·  ')

  return (
    <div className={styles.wrapper}>
      <div className={styles.track}>
        <span>{text}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <span aria-hidden="true">{text}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
      </div>
    </div>
  )
}
