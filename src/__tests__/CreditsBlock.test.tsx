import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import CreditsBlock from '../components/CreditsBlock'
import { NOTABLE_CREDITS } from '../data/credits'

describe('CreditsBlock', () => {
  it('renders the notable credits from the data module', () => {
    render(<CreditsBlock />)
    NOTABLE_CREDITS.forEach(({ artist, project }) => {
      expect(screen.getByText(artist)).toBeInTheDocument()
      expect(screen.getByText(project)).toBeInTheDocument()
    })
  })

  it('each credit links to Spotify', () => {
    render(<CreditsBlock />)
    const links = screen.getAllByRole('link')
    expect(links).toHaveLength(NOTABLE_CREDITS.length)
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
