import { render, screen, act } from '@testing-library/react'
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import CyclingTitle from '../components/CyclingTitle'

const TITLES = ['producer', 'engineer', 'mixer', 'programmer']

describe('CyclingTitle', () => {
  beforeEach(() => vi.useFakeTimers())
  afterEach(() => vi.useRealTimers())

  it('renders the first title on mount', () => {
    render(<CyclingTitle />)
    expect(screen.getByText('producer')).toBeInTheDocument()
  })

  it('cycles to the next title after 3200ms', () => {
    render(<CyclingTitle />)
    act(() => vi.advanceTimersByTime(3200))
    expect(screen.getByText('engineer')).toBeInTheDocument()
  })

  it('cycles through all titles and wraps back to the first', () => {
    render(<CyclingTitle />)
    TITLES.forEach((title, i) => {
      if (i > 0) act(() => vi.advanceTimersByTime(3200))
      expect(screen.getByText(title)).toBeInTheDocument()
    })
    // wrap around
    act(() => vi.advanceTimersByTime(3200))
    expect(screen.getByText('producer')).toBeInTheDocument()
  })

  it('cleans up interval on unmount', () => {
    const clearSpy = vi.spyOn(global, 'clearInterval')
    const { unmount } = render(<CyclingTitle />)
    unmount()
    expect(clearSpy).toHaveBeenCalled()
  })
})
