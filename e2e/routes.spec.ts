import { test, expect } from '@playwright/test'

test.describe('All 4 routes render correctly', () => {
  test('homepage loads with key elements', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveTitle('Travis Huff')
    await expect(page.getByRole('link', { name: 'travis huff' })).toBeVisible()
    await expect(page.locator('img[alt="Travis Huff"]')).toBeVisible()
    // Cycling title — one of the four should be visible
    await expect(
      page.getByText(/^(producer|engineer|mixer|programmer)$/),
    ).toBeVisible()
  })

  test('credits page loads with both tables', async ({ page }) => {
    await page.goto('/credits')
    await expect(page.getByRole('heading', { name: 'Released Co-Writes' })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Production Credits' })).toBeVisible()
    await expect(page.getByRole('cell', { name: 'Fall Out Boy' })).toBeVisible()
    await expect(page.getByRole('cell', { name: 'It Boys!' })).toBeVisible()
  })

  test('discography page loads with table', async ({ page }) => {
    await page.goto('/discography')
    await expect(page.getByRole('heading', { name: 'Discography' })).toBeVisible()
    await expect(page.getByText('Artist')).toBeVisible()
    await expect(page.getByText('Album / Release')).toBeVisible()
    await expect(page.getByText('Ocean Avenue')).toBeVisible()
  })

  test('gear page loads with both sections', async ({ page }) => {
    await page.goto('/gear')
    await expect(page.getByRole('heading', { name: 'Recording Gear' })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Music Gear' })).toBeVisible()
    await expect(page.getByText('Lynx Aurora 24 I/O')).toBeVisible()
    await expect(page.getByText('Moog Subsequent 37')).toBeVisible()
  })

  test('unknown route redirects to homepage', async ({ page }) => {
    await page.goto('/foo')
    await expect(page).toHaveURL('/')
    await expect(page.locator('img[alt="Travis Huff"]')).toBeVisible()
  })

  test('deeply nested unknown route redirects to homepage', async ({ page }) => {
    await page.goto('/some/random/path')
    await expect(page).toHaveURL('/')
    await expect(page.locator('img[alt="Travis Huff"]')).toBeVisible()
  })

  test('navigation links work between pages', async ({ page }) => {
    await page.goto('/')
    await page.getByRole('link', { name: /credits/i }).click()
    await expect(page).toHaveURL('/credits')
    await expect(page.getByRole('heading', { name: 'Released Co-Writes' })).toBeVisible()

    await page.getByRole('link', { name: /discography/i }).click()
    await expect(page).toHaveURL('/discography')

    await page.getByRole('link', { name: /gear/i }).click()
    await expect(page).toHaveURL('/gear')

    await page.getByRole('link', { name: 'travis huff' }).click()
    await expect(page).toHaveURL('/')
  })
})
