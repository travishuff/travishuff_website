import { test, expect } from '@playwright/test'

test.describe('Spotify links open in new tabs', () => {
  test('homepage credits block has 6 Spotify links with target=_blank', async ({ page }) => {
    await page.goto('/')

    const spotifyLinks = page.locator('a[href*="open.spotify.com"]')
    await expect(spotifyLinks).toHaveCount(6)

    const expectedArtists = [
      'One Direction',
      'Ariana Grande',
      'Selena Gomez',
      'Fall Out Boy',
      'Yellowcard',
      '3OH!3 feat. Katy Perry',
    ]

    for (const artist of expectedArtists) {
      const link = page.locator('a[href*="open.spotify.com"]', { has: page.getByText(artist) })
      await expect(link).toHaveAttribute('target', '_blank')
      await expect(link).toHaveAttribute('rel', 'noopener noreferrer')
    }
  })

  test('each Spotify link points to a valid Spotify URL', async ({ page }) => {
    await page.goto('/')

    const spotifyLinks = page.locator('a[href*="open.spotify.com"]')
    const count = await spotifyLinks.count()

    for (let i = 0; i < count; i++) {
      const href = await spotifyLinks.nth(i).getAttribute('href')
      expect(href).toMatch(/^https:\/\/open\.spotify\.com\/(album|track)\//)
    }
  })
})
