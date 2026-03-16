import type { ReactElement } from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import Credits from '../pages/Credits'

const renderWithRouter = (ui: ReactElement) => render(<MemoryRouter>{ui}</MemoryRouter>)

describe('Credits page', () => {
  it('renders the Released Co-Writes section heading', () => {
    renderWithRouter(<Credits />)
    expect(screen.getByText('Released Co-Writes')).toBeInTheDocument()
  })

  it('renders the Production Credits section heading', () => {
    renderWithRouter(<Credits />)
    expect(screen.getByText('Production Credits')).toBeInTheDocument()
  })

  it('renders a known co-write entry', () => {
    renderWithRouter(<Credits />)
    expect(screen.getByText('It Boys!')).toBeInTheDocument()
    expect(screen.getByText('"Better Than Your Boyfriend"')).toBeInTheDocument()
  })

  it('renders a known production credit entry', () => {
    renderWithRouter(<Credits />)
    expect(screen.getByText('Fall Out Boy')).toBeInTheDocument()
    expect(screen.getByText('From Under The Cork Tree')).toBeInTheDocument()
  })

  it('renders former discography entries in production credits', () => {
    renderWithRouter(<Credits />)
    expect(screen.getByText('Ocean Ave')).toBeInTheDocument()
    expect(screen.getByText('Dick Carter Speedway')).toBeInTheDocument()
    expect(screen.getByText('Winter')).toBeInTheDocument()
  })

  it('renders the role legend', () => {
    renderWithRouter(<Credits />)
    expect(screen.getByText(/P = Producer/i)).toBeInTheDocument()
  })

  it('renders column headers for co-writes table', () => {
    renderWithRouter(<Credits />)
    const artistHeaders = screen.getAllByText('Artist')
    expect(artistHeaders.length).toBeGreaterThanOrEqual(1)
    const songHeaders = screen.getAllByText('Song')
    expect(songHeaders.length).toBeGreaterThanOrEqual(1)
  })
})
