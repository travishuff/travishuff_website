import { NavLink } from 'react-router-dom'
import styles from './Nav.module.css'

function navClass({ isActive }: { isActive: boolean }) {
  return isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
}

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.left}>
        <NavLink to="/" className={styles.homeLink}>
          travis huff
        </NavLink>
        <a
          href="mailto:travis@travishuff.com"
          className={styles.emailLink}
          aria-label="Email Travis"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
        </a>
        <NavLink to="/credits" className={navClass}>
          credits
        </NavLink>
        <NavLink to="/discography" className={navClass}>
          discography
        </NavLink>
        <NavLink to="/gear" className={navClass}>
          gear
        </NavLink>
      </div>
      <div className={styles.right}>
        <span className={styles.roles}>producer · engineer · mixer · programmer</span>
      </div>
    </nav>
  )
}
