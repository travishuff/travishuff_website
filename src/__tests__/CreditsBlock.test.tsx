import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import CreditsBlock from '../components/CreditsBlock'

describe('CreditsBlock', () => {
  it('renders all six notable credits', () => {
    render(<CreditsBlock />)
    expect(screen.getByText('One Direction')).toBeInTheDocument()
    expect(screen.getByText('Ariana Grande')).toBeInTheDocument()
    expect(screen.getByText('Selena Gomez')).toBeInTheDocument()
    expect(screen.getByText('Fall Out Boy')).toBeInTheDocument()
    expect(screen.getByText('Yellowcard')).toBeInTheDocument()
    expect(screen.getByText('3OH!3 feat. Katy Perry')).toBeInTheDocument()
  })

  it('each credit links to Spotify', () => {
    render(<CreditsBlock />)
    const links = screen.getAllByRole('link')
    links.forEach((link) => {
      expect(link).toHaveAttribute('href', expect.stringContaining('open.spotify.com'))
    })
  })

  it('all Spotify links open in a new tab', () => {
    render(<CreditsBlock />)
    const links = screen.getAllByRole('link')
    links.forEach((link) => {
      expect(link).toHaveAttribute('target', '_blank')
      expect(link).toHaveAttribute('rel', 'noopener noreferrer')
    })
  })

  it('renders the role legend', () => {
    render(<CreditsBlock />)
    expect(screen.getByText(/P=producer/i)).toBeInTheDocument()
  })
})
