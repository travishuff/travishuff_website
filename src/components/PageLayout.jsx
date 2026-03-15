import Ticker from './Ticker'
import Nav from './Nav'
import styles from './PageLayout.module.css'

export default function PageLayout({ children }) {
  return (
    <div className={styles.page}>
      <Ticker />
      <Nav />
      <main className={styles.content}>{children}</main>
    </div>
  )
}
