import { test, expect } from '@playwright/test'

test.describe('Glitch animation on homepage photo', () => {
  test('photo and glitch overlay elements are present', async ({ page }) => {
    await page.goto('/')

    // Main photo
    const photo = page.locator('img[alt="Travis Huff"]')
    await expect(photo).toBeVisible()

    // CRT scanlines overlay
    const scanlines = page.locator('[aria-hidden="true"]').first()
    await expect(scanlines).toBeAttached()

    // Glitch container with two slice images
    const glitchSlices = page.locator('img[alt=""]')
    await expect(glitchSlices).toHaveCount(2)
  })

  test('glitch container has CSS animation applied', async ({ page }) => {
    await page.goto('/')

    // The glitch div wrapping the slices should have an animation
    // It's the div containing the two img[alt=""] elements
    const glitchDiv = page.locator('img[alt=""]').first().locator('..')
    const animationName = await glitchDiv.evaluate(
      (el) => getComputedStyle(el).animationName,
    )
    expect(animationName).not.toBe('none')
    expect(animationName).toBeTruthy()
  })

  test('glitch slices have animation with 7s duration', async ({ page }) => {
    await page.goto('/')

    const glitchSlice = page.locator('img[alt=""]').first()
    const duration = await glitchSlice.evaluate(
      (el) => getComputedStyle(el).animationDuration,
    )
    expect(duration).toBe('7s')
  })

  test('glitch slices have clip-path for band effect', async ({ page }) => {
    await page.goto('/')

    const glitchSlice = page.locator('img[alt=""]').first()
    const clipPath = await glitchSlice.evaluate(
      (el) => getComputedStyle(el).clipPath,
    )
    expect(clipPath).toContain('polygon')
  })

  test('photo has CRT sepia filter', async ({ page }) => {
    await page.goto('/')

    const photo = page.locator('img[alt="Travis Huff"]')
    const filter = await photo.evaluate((el) => getComputedStyle(el).filter)
    expect(filter).toContain('sepia')
  })
})
