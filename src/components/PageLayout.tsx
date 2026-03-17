import { useEffect, useRef, useState, type ReactNode } from 'react'
import ClickAwayHome from './ClickAwayHome'
import SiteShell from './SiteShell'
import styles from './PageLayout.module.css'

interface PageLayoutProps {
  children: ReactNode
}

export default function PageLayout({ children }: PageLayoutProps) {
  const contentRef = useRef<HTMLDivElement>(null)
  const [scrollbar, setScrollbar] = useState({
    isScrollable: false,
    thumbHeight: 0,
    thumbOffset: 0,
  })

  useEffect(() => {
    const element = contentRef.current

    if (!element) {
      return
    }

    const updateScrollbar = () => {
      const { clientHeight, scrollHeight, scrollTop } = element
      const isScrollable = scrollHeight > clientHeight + 1

      if (!isScrollable) {
        setScrollbar({
          isScrollable: false,
          thumbHeight: 0,
          thumbOffset: 0,
        })
        return
      }

      const thumbHeight = Math.max(36, (clientHeight / scrollHeight) * clientHeight)
      const maxThumbOffset = clientHeight - thumbHeight
      const maxScrollTop = scrollHeight - clientHeight
      const thumbOffset = maxScrollTop > 0 ? (scrollTop / maxScrollTop) * maxThumbOffset : 0

      setScrollbar({
        isScrollable: true,
        thumbHeight,
        thumbOffset,
      })
    }

    const resizeObserver =
      typeof ResizeObserver !== 'undefined' ? new ResizeObserver(updateScrollbar) : null
    resizeObserver?.observe(element)

    if (element.firstElementChild) {
      resizeObserver?.observe(element.firstElementChild)
    }

    const mutationObserver =
      typeof MutationObserver !== 'undefined' ? new MutationObserver(updateScrollbar) : null
    mutationObserver?.observe(element, { childList: true, subtree: true, characterData: true })

    updateScrollbar()
    window.addEventListener('resize', updateScrollbar)
    element.addEventListener('scroll', updateScrollbar, { passive: true })

    return () => {
      resizeObserver?.disconnect()
      mutationObserver?.disconnect()
      window.removeEventListener('resize', updateScrollbar)
      element.removeEventListener('scroll', updateScrollbar)
    }
  }, [])

  return (
    <SiteShell>
      <ClickAwayHome contentClassName={styles.shell}>
        <div className={styles.panel}>
          <div ref={contentRef} className={styles.content}>
            {children}
          </div>
          {scrollbar.isScrollable ? (
            <div className={styles.scrollbar} aria-hidden="true">
              <div
                className={styles.scrollbarThumb}
                style={{
                  height: `${scrollbar.thumbHeight}px`,
                  transform: `translateY(${scrollbar.thumbOffset}px)`,
                }}
              />
            </div>
          ) : null}
        </div>
      </ClickAwayHome>
    </SiteShell>
  )
}
