import { test, expect } from '@playwright/test'

test.describe('Click-away navigation on sub-pages', () => {
  const subPages = [
    { path: '/credits', heading: 'Released Co-Writes' },
    { path: '/discography', heading: 'Discography' },
    { path: '/gear', heading: 'Recording Gear' },
  ]

  for (const { path, heading } of subPages) {
    test(`clicking background on ${path} navigates home`, async ({ page }) => {
      await page.goto(path)
      await expect(page.getByRole('heading', { name: heading })).toBeVisible()

      // Click the page background (the outer wrapper div), far from content
      // The page wrapper has cursor: pointer and onClick -> navigate('/')
      // We click at coordinates in the far-left margin area
      await page.mouse.click(5, page.viewportSize()!.height / 2)

      await expect(page).toHaveURL('/')
    })

    test(`clicking content on ${path} does NOT navigate home`, async ({ page }) => {
      await page.goto(path)
      const headingEl = page.getByRole('heading', { name: heading })
      await expect(headingEl).toBeVisible()

      await headingEl.click()

      // Should stay on the same page
      await expect(page).toHaveURL(path)
    })
  }
})
