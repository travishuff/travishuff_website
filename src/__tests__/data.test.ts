import { describe, it, expect } from 'vitest'
import { COWRITES } from '../data/cowrites'
import { CREDITS } from '../data/credits'
import { DISCOGRAPHY } from '../data/discography'
import { RECORDING_GEAR, MUSIC_GEAR } from '../data/gear'
import { TICKER_CREDITS } from '../data/ticker'
import { TITLES } from '../data/titles'
import { NOTABLE_CREDITS } from '../data/notableCredits'

describe('Cowrites data', () => {
  it('contains 9 entries', () => {
    expect(COWRITES).toHaveLength(9)
  })

  it('every entry has artist, song, and label', () => {
    COWRITES.forEach((entry) => {
      expect(entry.artist).toBeTruthy()
      expect(entry.song).toBeTruthy()
      expect(entry.label).toBeTruthy()
    })
  })

  it('has Spotify links on 6 of 9 entries', () => {
    const withSpotify = COWRITES.filter((e) => e.spotify)
    expect(withSpotify).toHaveLength(6)
  })

  it('all Spotify URLs are valid open.spotify.com links', () => {
    COWRITES.filter((e) => e.spotify).forEach((entry) => {
      expect(entry.spotify).toMatch(/^https:\/\/open\.spotify\.com\/(track|album)\//)
    })
  })
})

describe('Credits data', () => {
  it('contains 46 entries', () => {
    expect(CREDITS).toHaveLength(46)
  })

  it('every entry has artist, project, label, and role', () => {
    CREDITS.forEach((entry) => {
      expect(entry.artist).toBeTruthy()
      expect(entry.project).toBeTruthy()
      expect(entry.label).toBeTruthy()
      expect(entry.role).toBeTruthy()
    })
  })

  it('has Spotify links on 36 of 46 entries', () => {
    const withSpotify = CREDITS.filter((e) => e.spotify)
    expect(withSpotify).toHaveLength(36)
  })

  it('all Spotify URLs are valid open.spotify.com links', () => {
    CREDITS.filter((e) => e.spotify).forEach((entry) => {
      expect(entry.spotify).toMatch(/^https:\/\/open\.spotify\.com\/(track|album)\//)
    })
  })

  it('includes key artists', () => {
    const artists = CREDITS.map((e) => e.artist)
    expect(artists).toContain('Fall Out Boy')
    expect(artists).toContain('One Direction')
    expect(artists).toContain('Yellowcard')
  })
})

describe('Discography data', () => {
  it('contains 41 entries', () => {
    expect(DISCOGRAPHY).toHaveLength(41)
  })

  it('every entry has artist, album, label, and role', () => {
    DISCOGRAPHY.forEach((entry) => {
      expect(entry.artist).toBeTruthy()
      expect(entry.album).toBeTruthy()
      expect(entry.label).toBeTruthy()
      expect(entry.role).toBeTruthy()
    })
  })

  it('has Spotify links on 21 of 41 entries', () => {
    const withSpotify = DISCOGRAPHY.filter((e) => e.spotify)
    expect(withSpotify).toHaveLength(21)
  })

  it('all Spotify URLs are valid open.spotify.com links', () => {
    DISCOGRAPHY.filter((e) => e.spotify).forEach((entry) => {
      expect(entry.spotify).toMatch(/^https:\/\/open\.spotify\.com\/(track|album)\//)
    })
  })
})

describe('Gear data', () => {
  it('recording gear contains 30 items', () => {
    expect(RECORDING_GEAR).toHaveLength(30)
  })

  it('music gear contains 29 items', () => {
    expect(MUSIC_GEAR).toHaveLength(29)
  })

  it('all items are non-empty strings', () => {
    ;[...RECORDING_GEAR, ...MUSIC_GEAR].forEach((item) => {
      expect(typeof item).toBe('string')
      expect(item.length).toBeGreaterThan(0)
    })
  })
})

describe('Ticker data', () => {
  it('contains 26 artist names', () => {
    expect(TICKER_CREDITS).toHaveLength(26)
  })

  it('all items are non-empty strings', () => {
    TICKER_CREDITS.forEach((name) => {
      expect(typeof name).toBe('string')
      expect(name.length).toBeGreaterThan(0)
    })
  })
})

describe('Titles data', () => {
  it('contains 4 titles', () => {
    expect(TITLES).toHaveLength(4)
  })

  it('includes producer, engineer, mixer, programmer', () => {
    expect(TITLES).toEqual(['producer', 'engineer', 'mixer', 'programmer'])
  })
})

describe('Notable credits data', () => {
  it('contains 6 entries', () => {
    expect(NOTABLE_CREDITS).toHaveLength(6)
  })

  it('every entry has artist, project, role, and spotify', () => {
    NOTABLE_CREDITS.forEach((entry) => {
      expect(entry.artist).toBeTruthy()
      expect(entry.project).toBeTruthy()
      expect(entry.role).toBeTruthy()
      expect(entry.spotify).toMatch(/^https:\/\/open\.spotify\.com\/(track|album)\//)
    })
  })
})
