import type { ReactElement } from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import Gear from '../pages/Gear'

const renderWithRouter = (ui: ReactElement) => render(<MemoryRouter>{ui}</MemoryRouter>)

describe('Gear page', () => {
  it('renders the Recording Gear section heading', () => {
    renderWithRouter(<Gear />)
    expect(screen.getByText('Recording Gear')).toBeInTheDocument()
  })

  it('renders the Music Gear section heading', () => {
    renderWithRouter(<Gear />)
    expect(screen.getByText('Music Gear')).toBeInTheDocument()
  })

  it('renders known recording gear items', () => {
    renderWithRouter(<Gear />)
    expect(screen.getByText('Lynx Aurora 24 I/O')).toBeInTheDocument()
    expect(screen.getByText('Neumann U47 tube mic')).toBeInTheDocument()
    expect(screen.getByText('Dynaudio Acoustics subwoofer')).toBeInTheDocument()
  })

  it('renders known music gear items', () => {
    renderWithRouter(<Gear />)
    expect(screen.getByText('Moog Subsequent 37')).toBeInTheDocument()
    expect(screen.getByText('Teenage Engineering OP-XY')).toBeInTheDocument()
    expect(screen.getByText('Wurlitzer 200A')).toBeInTheDocument()
  })

  it('does not render removed gear', () => {
    renderWithRouter(<Gear />)
    expect(screen.queryByText(/Jerry Jones/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/Monome/i)).not.toBeInTheDocument()
  })
})
