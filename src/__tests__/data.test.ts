import { describe, it, expect } from 'vitest'
import { COWRITES } from '../data/cowrites'
import { CREDITS, NOTABLE_CREDITS, TICKER_CREDITS } from '../data/credits'
import { RECORDING_GEAR, MUSIC_GEAR } from '../data/gear'
import { TITLES } from '../data/titles'

describe('Cowrites data', () => {
  it('contains at least one entry', () => {
    expect(COWRITES.length).toBeGreaterThan(0)
  })

  it('every entry has artist, song, and label', () => {
    COWRITES.forEach((entry) => {
      expect(entry.artist).toBeTruthy()
      expect(entry.song).toBeTruthy()
      expect(entry.label).toBeTruthy()
    })
  })

  it('Spotify URLs, when present, are valid open.spotify.com links', () => {
    COWRITES.filter((e) => e.spotify).forEach((entry) => {
      expect(entry.spotify).toMatch(/^https:\/\/open\.spotify\.com\/(track|album)\//)
    })
  })

  it('has no duplicate artist+song combinations', () => {
    const keys = COWRITES.map((entry) => `${entry.artist}|${entry.song}`)
    expect(new Set(keys).size).toBe(keys.length)
  })
})

describe('Credits data', () => {
  it('contains at least one entry', () => {
    expect(CREDITS.length).toBeGreaterThan(0)
  })

  it('every entry has id, artist, project, label, and role', () => {
    CREDITS.forEach((entry) => {
      expect(entry.id).toBeTruthy()
      expect(entry.artist).toBeTruthy()
      expect(entry.project).toBeTruthy()
      expect(entry.label).toBeTruthy()
      expect(entry.role).toBeTruthy()
    })
  })

  it('Spotify URLs, when present, are valid open.spotify.com links', () => {
    CREDITS.filter((e) => e.spotify).forEach((entry) => {
      expect(entry.spotify).toMatch(/^https:\/\/open\.spotify\.com\/(track|album)\//)
    })
  })

  it('has unique ids', () => {
    const ids = CREDITS.map((entry) => entry.id)
    expect(new Set(ids).size).toBe(ids.length)
  })

  it('has no duplicate artist+project combinations', () => {
    const keys = CREDITS.map((e) => `${e.artist}|${e.project}`)
    const uniqueKeys = new Set(keys)
    expect(keys.length).toBe(uniqueKeys.size)
  })
})

describe('Gear data', () => {
  it('contains recording and music gear entries', () => {
    expect(RECORDING_GEAR.length).toBeGreaterThan(0)
    expect(MUSIC_GEAR.length).toBeGreaterThan(0)
  })

  it('all items are non-empty strings', () => {
    ;[...RECORDING_GEAR, ...MUSIC_GEAR].forEach((item) => {
      expect(typeof item).toBe('string')
      expect(item.length).toBeGreaterThan(0)
    })
  })
})

describe('Ticker data', () => {
  it('contains at least one artist name', () => {
    expect(TICKER_CREDITS.length).toBeGreaterThan(0)
  })

  it('only contains artists with Spotify-backed credit entries', () => {
    const spotifyArtists = new Set(
      CREDITS.filter((entry) => entry.spotify).map((entry) => entry.artist),
    )
    TICKER_CREDITS.forEach((name) => {
      expect(spotifyArtists.has(name)).toBe(true)
    })
  })

  it('contains non-empty, unique artist names', () => {
    TICKER_CREDITS.forEach((name) => {
      expect(typeof name).toBe('string')
      expect(name.length).toBeGreaterThan(0)
    })
    expect(new Set(TICKER_CREDITS).size).toBe(TICKER_CREDITS.length)
  })
})

describe('Titles data', () => {
  it('contains at least one title', () => {
    expect(TITLES.length).toBeGreaterThan(0)
  })

  it('contains unique, non-empty titles', () => {
    TITLES.forEach((title) => {
      expect(title).toBeTruthy()
    })
    expect(new Set(TITLES).size).toBe(TITLES.length)
  })
})

describe('Notable credits data', () => {
  it('contains at least one featured credit', () => {
    expect(NOTABLE_CREDITS.length).toBeGreaterThan(0)
  })

  it('every entry is backed by a matching Spotify credit in the main dataset', () => {
    const spotifyCredits = new Map(
      CREDITS.filter((entry) => entry.spotify).map((entry) => [entry.id, entry]),
    )

    NOTABLE_CREDITS.forEach((entry) => {
      const matchingCredit = spotifyCredits.get(entry.id)

      expect(matchingCredit).toBeDefined()
      expect(entry.artist).toBe(matchingCredit?.artist)
      expect(entry.project).toBe(matchingCredit?.project)
      expect(entry.role).toBe(matchingCredit?.role)
      expect(entry.spotify).toMatch(/^https:\/\/open\.spotify\.com\/(track|album)\//)
    })
  })
})
