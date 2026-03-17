import type { ReactNode } from 'react'
import Ticker from './Ticker'
import Nav from './Nav'
import styles from './SiteShell.module.css'

interface SiteShellProps {
  children: ReactNode
  mainClassName?: string
}

function classNames(...names: Array<string | undefined>) {
  return names.filter(Boolean).join(' ')
}

export default function SiteShell({ children, mainClassName }: SiteShellProps) {
  return (
    <div className={styles.page}>
      <Ticker />
      <Nav />
      <main className={classNames(styles.main, mainClassName)}>{children}</main>
    </div>
  )
}
