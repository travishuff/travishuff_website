import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import Discography from '../pages/Discography'

const renderWithRouter = (ui) => render(<MemoryRouter>{ui}</MemoryRouter>)

describe('Discography page', () => {
  it('renders the Discography heading', () => {
    renderWithRouter(<Discography />)
    expect(screen.getByText('Discography')).toBeInTheDocument()
  })

  it('renders column headers', () => {
    renderWithRouter(<Discography />)
    expect(screen.getByText('Artist')).toBeInTheDocument()
    expect(screen.getByText('Album / Release')).toBeInTheDocument()
    expect(screen.getByText('Label')).toBeInTheDocument()
    expect(screen.getByText('Role')).toBeInTheDocument()
  })

  it('renders a known entry — Fall Out Boy', () => {
    renderWithRouter(<Discography />)
    expect(screen.getByText('Fall Out Boy')).toBeInTheDocument()
    expect(screen.getByText('From Under a Cork Tree')).toBeInTheDocument()
  })

  it('renders a known entry — Yellowcard Ocean Avenue', () => {
    renderWithRouter(<Discography />)
    expect(screen.getByText('Ocean Avenue')).toBeInTheDocument()
  })

  it('renders role information', () => {
    renderWithRouter(<Discography />)
    // Multiple entries have 'Engineer' in the role column
    const roleCells = screen.getAllByText(/engineer/i)
    expect(roleCells.length).toBeGreaterThan(0)
  })
})
