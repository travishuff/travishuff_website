export interface Credit {
  id: string
  artist: string
  project: string
  label: string
  role: string
  spotify?: string
}

export interface NotableCredit {
  id: string
  artist: string
  project: string
  role: string
  spotify: string
}

interface CreditRecord {
  artist: string
  project: string
  label: string
  role: string
  spotify?: string
  featuredAsNotable?: boolean
}

function createCreditId({ artist, project }: Pick<CreditRecord, 'artist' | 'project'>) {
  return `${artist}-${project}`
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

function hasSpotify(credit: CreditRecord): credit is CreditRecord & { spotify: string } {
  return typeof credit.spotify === 'string' && credit.spotify.length > 0
}

const CREDIT_RECORDS: ReadonlyArray<CreditRecord> = [
  {
    artist: 'X-Factor',
    project: 'Various Artists',
    label: 'Fox',
    role: 'E · M',
    spotify: 'https://open.spotify.com/album/1MA7TI6O8hTJNtUoyYvd2S',
  },
  {
    artist: 'One Direction',
    project: '"Up All Night"',
    label: 'Syco',
    role: 'E',
    spotify: 'https://open.spotify.com/album/6cunQQ7YZisYOoiFu2ywIq',
    featuredAsNotable: true,
  },
  {
    artist: 'Ariana Grande',
    project: '"Put Your Hearts Up"',
    label: 'Universal Republic',
    role: 'E',
    spotify: 'https://open.spotify.com/track/1Rp8zCRpkHyEDqaUczfMZA',
    featuredAsNotable: true,
  },
  {
    artist: 'Hollywood Ending',
    project: '"You Got Me"',
    label: 'Hollywood Records',
    role: 'P · E · M',
    spotify: 'https://open.spotify.com/track/0hCDOkU1jM0VFUPq1F0Sod',
  },
  {
    artist: 'Alberta Cross',
    project: 'Rolling Thunder',
    label: 'ATO',
    role: 'E · M',
    spotify: 'https://open.spotify.com/album/1OfUQjs3de9iU5C2bYbmYc',
  },
  {
    artist: 'All Time Low',
    project: 'Dirty Work',
    label: 'Interscope',
    role: 'E',
    spotify: 'https://open.spotify.com/album/2p2JBegkoa43Vb9RWurUcf',
  },
  {
    artist: 'The Invincibles',
    project: 'Murs & Whole Wheat Bread',
    label: 'Independent',
    role: 'P · M',
  },
  {
    artist: 'Pop Levi',
    project: 'Motorcycle 666',
    label: 'Ninjatune',
    role: 'M',
    spotify: 'https://open.spotify.com/track/1DkY7PxOJpm7mtoRIin07N',
  },
  {
    artist: 'Hey Monday',
    project: `"I Don't Want To Dance"`,
    label: 'Sony',
    role: 'E',
    spotify: 'https://open.spotify.com/track/3lgN3kbDO9FL4kB1lrd2MS',
  },
  {
    artist: 'The Ready Set',
    project: "I'm Alive, I'm Dreaming",
    label: 'Warner Bros',
    role: 'E',
    spotify: 'https://open.spotify.com/album/4xKDIXEo6PiM2KfJm5Velf',
  },
  {
    artist: 'Crossfade',
    project: 'We All Bleed',
    label: 'Eleven Seven',
    role: 'E',
    spotify: 'https://open.spotify.com/album/2oescKQk4i0tcSEcRFI0zv',
  },
  {
    artist: 'Selena Gomez',
    project: '"Sick of You"',
    label: 'Hollywood',
    role: 'E',
    spotify: 'https://open.spotify.com/track/64ZtUUvYqh0aeCkQzILgUy',
    featuredAsNotable: true,
  },
  {
    artist: 'David Archuleta',
    project: '"Look Around"',
    label: 'Jive',
    role: 'E',
    spotify: 'https://open.spotify.com/track/3Gd7VdPJdjNJXwSARI01PS',
  },
  {
    artist: 'Anine Stang',
    project: '"Trying You On" "Zip It Up" "Happy"',
    label: 'Electric Stardust',
    role: 'P · E · M',
    spotify: 'https://open.spotify.com/track/5m6vtIYqarZ4DXP7Diz7gm',
  },
  {
    artist: 'HIM',
    project: 'Screamworks: Love In Theory and Practice',
    label: 'Warner Bros',
    role: 'E',
    spotify: 'https://open.spotify.com/album/63IwQzPw1LFyUBJ0h3oa4m',
  },
  {
    artist: 'Forever The Sickest Kids',
    project: 'The Weekend: Friday',
    label: 'Universal',
    role: 'E',
    spotify: 'https://open.spotify.com/album/4m6Vgm1LrAtbxV28cy5ZGf',
  },
  {
    artist: '3OH!3 feat. Katy Perry',
    project: '"Starstrukk"',
    label: 'Atlantic',
    role: 'E',
    spotify: 'https://open.spotify.com/track/1hBM2D1ULT3aeKuddSwPsK',
    featuredAsNotable: true,
  },
  {
    artist: 'Emily Osment',
    project: 'All The Right Wrongs',
    label: 'Wind-Up',
    role: 'E',
    spotify: 'https://open.spotify.com/album/5WjNJNZr2mgiA8wt9NLGBw',
  },
  {
    artist: 'Pop Levi',
    project: 'Police $ign / Terrifying',
    label: 'Ninja Tune',
    role: 'P · E · M',
    spotify: 'https://open.spotify.com/album/6pcIo7jAfeUwxF1dwuW49y',
  },
  { artist: 'Anina', project: 'Not My Boyfriend', label: 'Electric Stardust', role: 'P · E · M' },
  {
    artist: 'Ian Erix',
    project: 'Song For Mutts',
    label: 'Independent',
    role: 'W · P · E · M',
  },
  {
    artist: 'A Rocket To The Moon',
    project: 'On Your Side',
    label: 'FBR/Atlantic',
    role: 'P · E',
    spotify: 'https://open.spotify.com/album/6VH5MF1nAVOTGbRyHdYDtV',
  },
  { artist: 'Georgia', project: 'Slow Down Easy', label: 'Atlantic', role: 'E' },
  { artist: 'Leena', project: 'Mean Old Clock EP', label: 'EMI Aust', role: 'E · M' },
  { artist: 'Leena Thavisin', project: 'TBA', label: 'Capitol', role: 'E' },
  {
    artist: 'Pop Levi',
    project: 'Never Never Love',
    label: 'Ninja Tune',
    role: 'E · M',
    spotify: 'https://open.spotify.com/album/7I6xyg55Bl96Gzm07OrXSi',
  },
  {
    artist: 'Pop Levi',
    project: 'The Return to Form Black Magick Party B-Sides',
    label: 'Ninja Tune',
    role: 'E · M',
  },
  {
    artist: 'Whole Wheat Bread',
    project: 'Hearts of Hoodlums',
    label: 'Fighting Records',
    role: 'P · E · M',
  },
  { artist: 'Heartstop', project: 'Moments', label: 'Independent', role: 'P · E · M' },
  {
    artist: "The King's Royal",
    project: 'Beginning',
    label: 'Rukus Entertainment',
    role: 'E',
  },
  {
    artist: 'Grace Potter & The Nocturnals',
    project: 'This Is Somewhere',
    label: 'Hollywood',
    role: 'E',
    spotify: 'https://open.spotify.com/album/2LyZtk8ocDxyqw8CLunluX',
  },
  {
    artist: 'Lavender Diamond',
    project: 'Imagine Our Love',
    label: 'Rough Trade',
    role: 'E',
    spotify: 'https://open.spotify.com/album/1voioM8PNb0D8BJFUHLN7b',
  },
  {
    artist: 'Whole Wheat Bread',
    project: 'Punk Life EP',
    label: 'Fighting Records',
    role: 'P · E · M',
    spotify: 'https://open.spotify.com/album/0CWglNXNUsA0IanRuYOE4J',
  },
  {
    artist: 'The Rosewood Thieves',
    project: 'From The Decker House',
    label: 'V2/Artemis',
    role: 'E',
  },
  { artist: 'Rosewood Thieves', project: 'Lonesome', label: 'V2', role: 'E' },
  {
    artist: 'Moses Mayfield',
    project: '"Roadhouse Blues"',
    label: 'Epic',
    role: 'P · E · M',
  },
  {
    artist: 'Moses Mayfield',
    project: 'The Inside',
    label: 'Epic',
    role: 'E',
    spotify: 'https://open.spotify.com/album/04k65kVtcMt0zEWCyOkuYS',
  },
  {
    artist: 'Yellowcard',
    project: 'Lights & Sounds',
    label: 'Capitol',
    role: 'E',
    spotify: 'https://open.spotify.com/album/5EaEOUs3O1MZRicDMUIuqo',
  },
  {
    artist: 'Fall Out Boy',
    project: 'From Under the Cork Tree',
    label: 'Island/Def Jam',
    role: 'E',
    spotify: 'https://open.spotify.com/album/5nkUSlIhtoJZMOUlB0sNCp',
    featuredAsNotable: true,
  },
  { artist: 'Curious', project: 'Curious', label: 'Curious Records', role: 'P · E · M' },
  {
    artist: 'Reeve Oliver',
    project: 'Touchtone Inferno',
    label: 'Capitol',
    role: 'E',
    spotify: 'https://open.spotify.com/album/7B5vJuWtSFPIao1em0bHz2',
  },
  { artist: 'Kazi', project: 'EP', label: 'Independent', role: 'P · M' },
  {
    artist: 'Days Away',
    project: 'Mapping An Invisible World',
    label: 'Fueled By Ramen',
    role: 'E',
    spotify: 'https://open.spotify.com/album/5nOMy0uE8bWKvGrFeidlQq',
  },
  {
    artist: 'New Found Glory',
    project: 'Catalyst',
    label: 'Geffen',
    role: 'E',
    spotify: 'https://open.spotify.com/album/1Igrcji3zf5aC61saylDE1',
  },
  {
    artist: 'Yellowcard',
    project: 'Ocean Avenue',
    label: 'Capitol',
    role: 'E',
    spotify: 'https://open.spotify.com/album/24IBCzEJlHBI0ioxlSuSPA',
    featuredAsNotable: true,
  },
  {
    artist: 'The Exies',
    project: 'Head For The Door',
    label: 'Virgin',
    role: 'E',
    spotify: 'https://open.spotify.com/album/6YIeqIHqnBkjlPjYFqDpdY',
  },
  {
    artist: 'The Pharcyde',
    project: 'Humbolt Beginnings',
    label: 'Chapter 1',
    role: 'E',
    spotify: 'https://open.spotify.com/album/6n6jJ2j18Ln64N0gXG3HWO',
  },
  {
    artist: 'The Exies',
    project: '"Once In A Lifetime"',
    label: 'Virgin',
    role: 'E · M',
    spotify: 'https://open.spotify.com/track/5dGWOVgzDPNLAdGL7Zd3rg',
  },
  { artist: 'The Exies', project: 'Demos 2004', label: 'Virgin', role: 'E · M' },
  {
    artist: 'Biirdie',
    project: 'Morning Kills The Dark',
    label: 'Pop Up',
    role: 'P · E · M',
    spotify: 'https://open.spotify.com/album/5JHw4viXCS83O49NZntd2F',
  },
  {
    artist: 'The Fight',
    project: 'Nothing New Since Rock n Roll',
    label: 'Repossession',
    role: 'E',
    spotify: 'https://open.spotify.com/album/7cxRdFivEkWU7yOqbhuPeR',
  },
  {
    artist: 'Die Trying',
    project: 'Die Trying',
    label: 'Island/Def Jam',
    role: 'E',
    spotify: 'https://open.spotify.com/album/1314D6boeA6ZhhQqbZ8TF9',
  },
  {
    artist: 'Home Town Hero',
    project: 'Home Town Hero',
    label: 'Maverick',
    role: 'E',
    spotify: 'https://open.spotify.com/album/418lSrVm2GMDiE2BpVY36O',
  },
  {
    artist: 'Dick Carter Speedway',
    project: 'A Pill That Knocks Me Out',
    label: 'Independent',
    role: 'P · E · M',
  },
  { artist: 'Elisabeth Ames', project: 'Elisabeth Ames', label: 'Independent', role: 'E · M' },
  { artist: 'Cucoloris', project: 'Unfurl', label: 'Independent', role: 'P · E · M' },
  { artist: 'Brian Stace', project: 'Country Music', label: 'TexDog Records', role: 'E' },
  { artist: 'Biirdie', project: 'Glendale EP', label: 'Pop Up', role: 'P · E · M' },
  { artist: 'Billion Stars', project: 'Pleads the Fifth', label: 'Independent', role: 'E · M' },
  {
    artist: 'Dave Stringer',
    project: 'Mala/Japa',
    label: 'Laxmi',
    role: 'E',
    spotify: 'https://open.spotify.com/album/6MNUA20qXv3xxcrPVjG4pE',
  },
  { artist: 'Winter', project: 'Assault', label: 'Nuclear Blast', role: 'P' },
]

export const CREDITS: ReadonlyArray<Credit> = CREDIT_RECORDS.map(
  ({ artist, project, label, role, spotify }) => ({
    id: createCreditId({ artist, project }),
    artist,
    project,
    label,
    role,
    spotify,
  }),
)

export const NOTABLE_CREDITS: ReadonlyArray<NotableCredit> = CREDIT_RECORDS.filter(
  (credit): credit is CreditRecord & { featuredAsNotable: true; spotify: string } =>
    credit.featuredAsNotable === true && hasSpotify(credit),
).map(({ artist, project, role, spotify }) => ({
  id: createCreditId({ artist, project }),
  artist,
  project,
  role,
  spotify,
}))

export const TICKER_CREDITS: ReadonlyArray<string> = Array.from(
  new Set(CREDIT_RECORDS.filter(hasSpotify).map((credit) => credit.artist)),
)
