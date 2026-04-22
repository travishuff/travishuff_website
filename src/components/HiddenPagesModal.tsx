import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import styles from './HiddenPagesModal.module.css'

interface HiddenPage {
  path: string
  title: string
  blurb: string
}

const HIDDEN_PAGES: HiddenPage[] = [
  {
    path: '/drummers-of-nola',
    title: 'The Drummers of New Orleans',
    blurb: 'An interactive timeline of the drummers who shaped New Orleans music.',
  },
]

interface Props {
  open: boolean
  onClose: () => void
}

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'

export default function HiddenPagesModal({ open, onClose }: Props) {
  const modalRef = useRef<HTMLDivElement>(null)
  const closeBtnRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return

    const previouslyFocused = document.activeElement as HTMLElement | null
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeBtnRef.current?.focus()

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
        return
      }
      if (e.key !== 'Tab' || !modalRef.current) return
      const focusable = modalRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)
      if (focusable.length === 0) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      const active = document.activeElement
      if (e.shiftKey && active === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && active === last) {
        e.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', handleKey)
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = previousOverflow
      previouslyFocused?.focus?.()
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      className={styles.backdrop}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="hidden-pages-title"
    >
      <div ref={modalRef} className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <span id="hidden-pages-title" className={styles.title}>
            Hidden Pages
          </span>
          <button
            ref={closeBtnRef}
            type="button"
            className={styles.close}
            onClick={onClose}
            aria-label="Close"
          >
            ×
          </button>
        </div>
        <ul className={styles.list}>
          {HIDDEN_PAGES.map((p) => (
            <li key={p.path} className={styles.item}>
              <Link to={p.path} className={styles.link} onClick={onClose}>
                {p.title}
              </Link>
              <p className={styles.blurb}>{p.blurb}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
