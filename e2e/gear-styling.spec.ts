import { test, expect } from '@playwright/test'

test.describe('Gear page list styling', () => {
  test('gear lists render as unstyled lists (no bullet markers)', async ({ page }) => {
    await page.goto('/gear')

    const lists = page.locator('ul')
    const count = await lists.count()
    expect(count).toBe(2)

    for (let i = 0; i < count; i++) {
      const listStyle = await lists.nth(i).evaluate((el) => getComputedStyle(el).listStyleType)
      expect(listStyle).toBe('none')
    }
  })

  test('gear list items have consistent font size and line height', async ({ page }) => {
    await page.goto('/gear')

    const items = page.locator('li')
    const count = await items.count()
    expect(count).toBeGreaterThan(10)

    for (let i = 0; i < Math.min(count, 5); i++) {
      const fontSize = await items.nth(i).evaluate((el) => getComputedStyle(el).fontSize)
      expect(fontSize).toBe('11px')

      const lineHeight = await items.nth(i).evaluate((el) => getComputedStyle(el).lineHeight)
      // line-height: 2 on 11px font = 22px
      expect(parseFloat(lineHeight)).toBe(22)
    }
  })

  test('gear list items have bottom borders', async ({ page }) => {
    await page.goto('/gear')

    const firstItem = page.locator('li').first()
    const borderBottom = await firstItem.evaluate(
      (el) => getComputedStyle(el).borderBottomStyle,
    )
    expect(borderBottom).toBe('solid')
  })

  test('gear lists have zero margin and padding from global reset', async ({ page }) => {
    await page.goto('/gear')

    const list = page.locator('ul').first()
    const margin = await list.evaluate((el) => getComputedStyle(el).margin)
    const padding = await list.evaluate((el) => getComputedStyle(el).padding)
    expect(margin).toBe('0px')
    expect(padding).toBe('0px')
  })
})
