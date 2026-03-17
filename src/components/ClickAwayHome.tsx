import type { ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './ClickAwayHome.module.css'

interface ClickAwayHomeProps {
  children: ReactNode
  contentClassName?: string
}

function classNames(...names: Array<string | undefined>) {
  return names.filter(Boolean).join(' ')
}

export default function ClickAwayHome({ children, contentClassName }: ClickAwayHomeProps) {
  const navigate = useNavigate()

  return (
    <div className={styles.frame}>
      <div
        className={styles.backdrop}
        data-testid="click-away-backdrop"
        onClick={() => navigate('/')}
      />
      <div className={classNames(styles.content, contentClassName)}>{children}</div>
    </div>
  )
}
