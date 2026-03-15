import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Ticker from '../components/Ticker'

describe('Ticker', () => {
  it('renders known artist names in the ticker', () => {
    render(<Ticker />)
    // The visible span (not aria-hidden) contains all credits
    expect(screen.getAllByText(/One Direction/)[0]).toBeInTheDocument()
    expect(screen.getAllByText(/Fall Out Boy/)[0]).toBeInTheDocument()
    expect(screen.getAllByText(/Yellowcard/)[0]).toBeInTheDocument()
  })

  it('renders a duplicate track span for seamless looping', () => {
    render(<Ticker />)
    // One visible, one aria-hidden duplicate for the CSS marquee loop
    const spans = document.querySelectorAll('[aria-hidden="true"]')
    expect(spans.length).toBe(1)
  })
})
