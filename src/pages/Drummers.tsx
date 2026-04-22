import { useMemo, useState } from 'react'
import PageLayout from '../components/PageLayout'
import { DRUMMERS, appleMusicSearchUrl, type Drummer } from '../data/drummers'
import styles from './Drummers.module.css'

const PRESENT_YEAR = new Date().getFullYear()

function formatDates(d: Drummer): string {
  const end = d.died === null ? 'present' : String(d.died)
  return `${d.born}–${end}`
}

export default function Drummers() {
  const [openId, setOpenId] = useState<string | null>(null)

  const { minYear, range, decades, dotOffsets } = useMemo(() => {
    const births = DRUMMERS.map((d) => d.born)
    const ends = DRUMMERS.map((d) => d.died ?? PRESENT_YEAR)
    const min = Math.min(...births)
    const max = Math.max(...ends)
    const decadeMarks: number[] = []
    const first = Math.ceil(min / 10) * 10
    for (let y = first; y <= max; y += 10) {
      decadeMarks.push(y)
    }

    const groups = new Map<number, string[]>()
    for (const d of DRUMMERS) {
      const list = groups.get(d.born) ?? []
      list.push(d.id)
      groups.set(d.born, list)
    }
    const offsets = new Map<string, number>()
    const step = 14
    for (const [, ids] of groups) {
      ids.forEach((id, idx) => {
        offsets.set(id, (idx - (ids.length - 1) / 2) * step)
      })
    }

    return { minYear: min, range: max - min, decades: decadeMarks, dotOffsets: offsets }
  }, [])

  const pct = (year: number) => ((year - minYear) / (range || 1)) * 100

  const closeOthers = (keepId: string) => {
    for (const other of DRUMMERS) {
      if (other.id === keepId) continue
      const otherEl = document.getElementById(`drummer-${other.id}`) as HTMLDetailsElement | null
      if (otherEl && otherEl.open) otherEl.open = false
    }
  }

  const handleDotClick = (id: string) => {
    const el = document.getElementById(`drummer-${id}`) as HTMLDetailsElement | null
    if (!el) return
    closeOthers(id)
    el.open = true
    setOpenId(id)
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <PageLayout>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Drummers of New Orleans</h2>
        <p className={styles.intro}>
          An interactive timeline of the drummers who shaped New Orleans music — from the
          foundational jazz drummers who invented the role of the drum set, through the R&B and funk
          innovators, and into the modern players carrying the lineage forward. Click any dot on the
          timeline, or expand a card below, to read about a drummer.
        </p>

        <div className={styles.layout}>
          <div className={styles.axis} aria-hidden="true">
            <div className={styles.line} />

            {decades.map((year) => (
              <span key={`decade-${year}`}>
                <span className={styles.decade} style={{ top: `${pct(year)}%` }}>
                  {year}
                </span>
                <span className={styles.decadeTick} style={{ top: `${pct(year)}%` }} />
              </span>
            ))}

            {DRUMMERS.map((d) => {
              const endYear = d.died ?? PRESENT_YEAR
              const topPct = pct(d.born)
              const heightPct = pct(endYear) - topPct
              return (
                <span key={`${d.id}-lifespan`}>
                  <span
                    className={styles.lifespan}
                    style={{ top: `${topPct}%`, height: `${heightPct}%` }}
                  />
                </span>
              )
            })}

            {DRUMMERS.map((d) => {
              const offset = dotOffsets.get(d.id) ?? 0
              return (
                <button
                  key={`${d.id}-dot`}
                  type="button"
                  className={`${styles.dot} ${openId === d.id ? styles.dotActive : ''}`}
                  style={{ top: `${pct(d.born)}%`, left: `calc(56px + ${offset}px)` }}
                  onClick={() => handleDotClick(d.id)}
                  aria-label={`${d.name}, ${formatDates(d)}`}
                >
                  <span className={styles.dotLabel}>{d.name}</span>
                </button>
              )
            })}
          </div>

          <div className={styles.cards}>
            {DRUMMERS.map((d) => (
              <details
                key={d.id}
                id={`drummer-${d.id}`}
                className={styles.card}
                onToggle={(event) => {
                  const el = event.currentTarget
                  if (el.open) {
                    closeOthers(d.id)
                    setOpenId(d.id)
                  } else if (openId === d.id) {
                    setOpenId(null)
                  }
                }}
              >
                <summary className={styles.summary}>
                  <span className={styles.caret}>▶</span>
                  <span className={styles.name}>{d.name}</span>
                  <span className={styles.styleTag}>{d.style}</span>
                  <span className={styles.dates}>{formatDates(d)}</span>
                </summary>
                <div className={styles.body}>
                  <p className={styles.contributions}>{d.contributions}</p>

                  <div>
                    <div className={styles.recordingsTitle}>Top 3 Recordings</div>
                    {d.recordings.length > 0 ? (
                      <ul className={styles.recordings}>
                        {d.recordings.map((r) => (
                          <li key={`${d.id}-${r.title}`} className={styles.recording}>
                            <a
                              href={appleMusicSearchUrl(r)}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={styles.recordingLink}
                            >
                              {r.title}
                            </a>
                            <span className={styles.recordingMeta}>
                              {' '}
                              — {r.artist}, {r.year}
                            </span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className={styles.emptyRecordings}>To be filled in.</p>
                    )}
                  </div>

                  {d.note ? <p className={styles.note}>{d.note}</p> : null}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
