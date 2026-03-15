import { test, expect } from '@playwright/test'

test.describe('Responsive layout on narrow viewports', () => {
  test.use({ viewport: { width: 375, height: 667 } }) // iPhone SE size

  test('homepage photo stays vertically centered on mobile', async ({ page }) => {
    await page.goto('/')

    const container = page.locator('img[alt="Travis Huff"]').locator('..')
    const containerParent = container.locator('..')

    // The photo container uses absolute positioning with translate(-50%, -50%)
    const transform = await containerParent.evaluate(
      (el) => getComputedStyle(el).transform,
    )
    // transform: translate(-50%, -50%) computes to a matrix
    expect(transform).not.toBe('none')

    // Verify the photo is roughly vertically centered by checking its bounding box
    const box = await containerParent.boundingBox()
    expect(box).not.toBeNull()
    const viewportHeight = 667
    const centerY = box!.y + box!.height / 2
    // Should be within ~30% of viewport center
    expect(Math.abs(centerY - viewportHeight / 2)).toBeLessThan(viewportHeight * 0.3)
  })

  test('bottom-left text stays pinned at bottom on mobile', async ({ page }) => {
    await page.goto('/')

    // The cycling title should be visible and positioned near the bottom
    const title = page.getByText(/^(producer|engineer|mixer|programmer)$/)
    await expect(title).toBeVisible()

    // Check the title's parent container is absolutely positioned
    const bottomLeft = title.locator('..').locator('..')
    const position = await bottomLeft.evaluate((el) => getComputedStyle(el).position)
    expect(position).toBe('absolute')

    const bottom = await bottomLeft.evaluate((el) => getComputedStyle(el).bottom)
    expect(parseInt(bottom)).toBeLessThanOrEqual(20) // 16px on mobile
  })

  test('bottom-right credits stay pinned at bottom on mobile', async ({ page }) => {
    await page.goto('/')

    // Use the specific credits link (not the ticker text)
    const creditsLink = page.locator('a[href*="open.spotify.com"]').first()
    await expect(creditsLink).toBeVisible()

    // Walk up to the bottomRight container — link > li > ul > block div > bottomRight div
    const bottomRight = creditsLink.locator('..').locator('..').locator('..').locator('..')
    const position = await bottomRight.evaluate((el) => getComputedStyle(el).position)
    expect(position).toBe('absolute')

    const bottom = await bottomRight.evaluate((el) => getComputedStyle(el).bottom)
    expect(parseInt(bottom)).toBeLessThanOrEqual(20)
  })

  test('photo uses 90vw width on mobile', async ({ page }) => {
    await page.goto('/')

    const frame = page.locator('img[alt="Travis Huff"]').locator('..')
    const width = await frame.evaluate((el) => el.getBoundingClientRect().width)
    const viewportWidth = 375

    // 90vw = 337.5px; allow some margin for box model
    expect(width).toBeGreaterThan(viewportWidth * 0.85)
    expect(width).toBeLessThanOrEqual(viewportWidth)
  })

  test('nav links are visible and functional on mobile', async ({ page }) => {
    await page.goto('/')

    await expect(page.getByRole('link', { name: /credits/i })).toBeVisible()
    await page.getByRole('link', { name: /credits/i }).click()
    await expect(page).toHaveURL('/credits')
  })

  test('sub-page content scrolls on mobile', async ({ page }) => {
    await page.goto('/credits')

    // The content area should be scrollable when content overflows
    const main = page.locator('main')
    const isScrollable = await main.evaluate(
      (el) => el.scrollHeight > el.clientHeight,
    )
    expect(isScrollable).toBe(true)
  })
})
