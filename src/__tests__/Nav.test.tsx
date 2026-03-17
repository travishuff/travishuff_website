import type { ReactElement } from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import { ROLE_TAGLINE } from '../data/titles'
import Nav from '../components/Nav'

const renderWithRouter = (ui: ReactElement, { initialEntries = ['/'] } = {}) =>
  render(<MemoryRouter initialEntries={initialEntries}>{ui}</MemoryRouter>)

describe('Nav', () => {
  it('renders the home link', () => {
    renderWithRouter(<Nav />)
    expect(screen.getByText('travis huff')).toBeInTheDocument()
  })

  it('renders all nav links', () => {
    renderWithRouter(<Nav />)
    expect(screen.getByRole('link', { name: /credits/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /gear/i })).toBeInTheDocument()
  })

  it('renders the email link', () => {
    renderWithRouter(<Nav />)
    const emailLink = screen.getByRole('link', { name: /email travis/i })
    expect(emailLink).toHaveAttribute('href', 'mailto:travis@travishuff.com')
  })

  it('renders the roles tagline', () => {
    renderWithRouter(<Nav />)
    expect(screen.getByText(ROLE_TAGLINE)).toBeInTheDocument()
  })

  it('nav links point to correct routes', () => {
    renderWithRouter(<Nav />)
    expect(screen.getByRole('link', { name: /credits/i })).toHaveAttribute('href', '/credits')
    expect(screen.getByRole('link', { name: /gear/i })).toHaveAttribute('href', '/gear')
  })
})
