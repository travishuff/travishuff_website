import { useNavigate } from 'react-router-dom'
import Ticker from './Ticker'
import Nav from './Nav'
import styles from './PageLayout.module.css'

export default function PageLayout({ children }) {
  const navigate = useNavigate()

  return (
    <div className={styles.page} onClick={() => navigate('/')}>
      <div onClick={e => e.stopPropagation()}>
        <Ticker />
        <Nav />
      </div>
      <main className={styles.content} onClick={e => e.stopPropagation()}>
        {children}
      </main>
    </div>
  )
}
