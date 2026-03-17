import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Ticker from '../components/Ticker'
import { TICKER_CREDITS } from '../data/credits'

describe('Ticker', () => {
  it('renders ticker artists from the shared credits data', () => {
    render(<Ticker />)
    const [visibleTrack] = screen.getAllByText(new RegExp(TICKER_CREDITS[0]))
    expect(visibleTrack.textContent?.replace(/\s+/g, ' ').trim()).toBe(TICKER_CREDITS.join(' · '))
  })

  it('renders a duplicate track span for seamless looping', () => {
    render(<Ticker />)
    // One visible, one aria-hidden duplicate for the CSS marquee loop
    const spans = document.querySelectorAll('[aria-hidden="true"]')
    expect(spans.length).toBe(1)
  })
})
