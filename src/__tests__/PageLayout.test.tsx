import type { ReactElement } from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import PageLayout from '../components/PageLayout'

const mockNavigate = vi.fn()

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom')
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  }
})

const renderWithRouter = (ui: ReactElement) => render(<MemoryRouter>{ui}</MemoryRouter>)

describe('PageLayout', () => {
  it('renders children inside main', () => {
    renderWithRouter(
      <PageLayout>
        <p>Test content</p>
      </PageLayout>,
    )
    expect(screen.getByText('Test content')).toBeInTheDocument()
  })

  it('clicking the page background navigates home', () => {
    mockNavigate.mockClear()
    const { container } = renderWithRouter(
      <PageLayout>
        <p>Content</p>
      </PageLayout>,
    )
    fireEvent.click(container.firstChild!)
    expect(mockNavigate).toHaveBeenCalledWith('/')
  })

  it('clicking inside main does not navigate home', () => {
    mockNavigate.mockClear()
    renderWithRouter(
      <PageLayout>
        <p>Content</p>
      </PageLayout>,
    )
    fireEvent.click(screen.getByText('Content'))
    expect(mockNavigate).not.toHaveBeenCalled()
  })

  it('renders nav links', () => {
    renderWithRouter(
      <PageLayout>
        <div />
      </PageLayout>,
    )
    expect(screen.getByRole('link', { name: /credits/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /gear/i })).toBeInTheDocument()
  })
})
