const ROLE_TITLES = ['producer', 'engineer', 'mixer', 'programmer'] as const

export const TITLES: ReadonlyArray<string> = ROLE_TITLES
export const ROLE_TAGLINE = ROLE_TITLES.join(' · ')
