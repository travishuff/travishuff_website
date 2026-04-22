export interface DrummerRecording {
  title: string
  artist: string
  year: number
  appleMusic?: string
}

export function appleMusicSearchUrl(recording: DrummerRecording): string {
  if (recording.appleMusic) return recording.appleMusic
  const term = encodeURIComponent(`${recording.title} ${recording.artist}`)
  return `https://music.apple.com/us/search?term=${term}`
}

export interface Drummer {
  id: string
  name: string
  born: number
  died: number | null
  style: string
  contributions: string
  recordings: DrummerRecording[]
  note?: string
}

export const DRUMMERS: Drummer[] = [
  {
    id: 'tony-sbarbaro',
    name: 'Tony Sbarbaro',
    born: 1897,
    died: 1969,
    style: 'Early jazz, dixieland',
    contributions:
      "The drummer on the Original Dixieland Jass Band's 1917 recordings — the first jazz records ever released. A pioneering percussion stylist of the pre-Dodds era whose ragtime-inflected feel shaped the earliest recorded jazz. Later performed as Tony Spargo.",
    recordings: [
      { title: 'Livery Stable Blues', artist: 'Original Dixieland Jass Band', year: 1917 },
      { title: 'Tiger Rag', artist: 'Original Dixieland Jass Band', year: 1918 },
      { title: 'Dixie Jass Band One-Step', artist: 'Original Dixieland Jass Band', year: 1917 },
    ],
  },
  {
    id: 'baby-dodds',
    name: 'Warren "Baby" Dodds',
    born: 1898,
    died: 1959,
    style: 'Early jazz, second-line, press rolls',
    contributions:
      'The foundational New Orleans jazz drummer. Brought the second-line parade feel into small-band jazz and effectively invented the role of the drum set as an expressive voice in the music. His press rolls, rim shots, and "shimmy" beat influenced every swing drummer who followed.',
    recordings: [
      { title: 'West End Blues', artist: 'Louis Armstrong & His Hot Five', year: 1928 },
      { title: 'Dippermouth Blues', artist: "King Oliver's Creole Jazz Band", year: 1923 },
      { title: 'Baby Dodds Talking and Drum Solos', artist: 'Baby Dodds', year: 1946 },
    ],
  },
  {
    id: 'zutty-singleton',
    name: 'Zutty Singleton',
    born: 1898,
    died: 1975,
    style: 'Early jazz, swing',
    contributions:
      'A peer of Baby Dodds and a pioneer of the modern jazz drum kit. Known for his brush work and his knack for swinging small groups. Played with Louis Armstrong, Jelly Roll Morton, Sidney Bechet, and led his own bands into the 1960s.',
    recordings: [
      { title: "Knockin' a Jug", artist: 'Louis Armstrong', year: 1929 },
      { title: 'Mahogany Hall Stomp', artist: 'Louis Armstrong', year: 1929 },
      { title: 'Shim-Me-Sha-Wabble', artist: "Jelly Roll Morton's New Orleans Jazzmen", year: 1939 },
    ],
  },
  {
    id: 'paul-barbarin',
    name: 'Paul Barbarin',
    born: 1899,
    died: 1969,
    style: 'Traditional New Orleans jazz',
    contributions:
      'A first-generation New Orleans jazz drummer and composer. Wrote "Bourbon Street Parade" and "The Second Line," both of which became Crescent City standards. Played extensively with King Oliver, Luis Russell, and Louis Armstrong.',
    recordings: [
      { title: 'Bourbon Street Parade', artist: "Paul Barbarin's New Orleans Jazz Band", year: 1951 },
      { title: 'Call of the Freaks', artist: 'Luis Russell & His Orchestra', year: 1929 },
      { title: 'The Second Line', artist: 'Paul Barbarin', year: 1955 },
    ],
  },
  {
    id: 'earl-palmer',
    name: 'Earl Palmer',
    born: 1924,
    died: 2008,
    style: 'R&B, rock & roll, session',
    contributions:
      'Arguably the most recorded drummer in history and an architect of rock & roll drumming. His straight-eighth backbeat on Little Richard\'s "Tutti Frutti" helped define the genre. Later moved to Los Angeles and became a first-call session drummer across R&B, pop, rock, and film.',
    recordings: [
      { title: 'Tutti Frutti', artist: 'Little Richard', year: 1955 },
      { title: "I'm Walkin'", artist: 'Fats Domino', year: 1957 },
      { title: "You've Lost That Lovin' Feelin'", artist: 'The Righteous Brothers', year: 1964 },
    ],
  },
  {
    id: 'vernel-fournier',
    name: 'Vernel Fournier',
    born: 1928,
    died: 2000,
    style: 'Jazz, Latin-tinged swing',
    contributions:
      'Best known as the drummer in the Ahmad Jamal Trio, where his brush work and second-line-inflected grooves became a blueprint for the piano-trio sound. Later played with George Shearing and taught extensively in New York.',
    recordings: [
      { title: 'Poinciana (At the Pershing)', artist: 'Ahmad Jamal Trio', year: 1958 },
      { title: 'But Not for Me (At the Pershing)', artist: 'Ahmad Jamal Trio', year: 1958 },
      { title: 'Night Mist Blues', artist: 'Ahmad Jamal Trio', year: 1959 },
    ],
  },
  {
    id: 'ed-blackwell',
    name: 'Ed Blackwell',
    born: 1929,
    died: 1992,
    style: 'Free jazz, melodic drumming',
    contributions:
      "Brought a distinctly New Orleans, melodically tuned approach to free jazz, most famously as Ornette Coleman's drummer. His parade-feel pulse and clean ride cymbal shaped the Old and New Dreams sound and influenced generations of modern drummers.",
    recordings: [
      {
        title: 'Free Jazz',
        artist: 'Ornette Coleman Double Quartet',
        year: 1961,
        appleMusic: 'https://music.apple.com/us/album/free-jazz/50235783',
      },
      {
        title: 'El Corazón',
        artist: 'Don Cherry & Ed Blackwell',
        year: 1982,
        appleMusic: 'https://music.apple.com/us/album/el-coraz%C3%B3n/1442953259',
      },
      { title: 'Old and New Dreams', artist: 'Old and New Dreams', year: 1979 },
    ],
  },
  {
    id: 'june-gardner',
    name: 'June Gardner',
    born: 1931,
    died: 2015,
    style: 'New Orleans R&B, jazz',
    contributions:
      "A fixture of Cosimo Matassa's studio scene who drummed on countless New Orleans R&B sessions in the 1950s and '60s. Later became a go-to sideman for local jazz dates, including long stretches with Ellis Marsalis.",
    recordings: [],
    note: 'Top 3 recordings TBD — verify and fill in.',
  },
  {
    id: 'hungry-williams',
    name: 'Charles "Hungry" Williams',
    born: 1935,
    died: 1986,
    style: 'New Orleans R&B, proto-funk',
    contributions:
      "A massively influential (and underrecognized) R&B drummer of the late 1950s, and a key link between second-line and funk. His syncopated, dropped-beat feel on Huey 'Piano' Smith and Professor Longhair sessions directly shaped the way later New Orleans funk drummers — Zigaboo included — approached the groove.",
    recordings: [
      { title: "Don't You Just Know It", artist: "Huey 'Piano' Smith & The Clowns", year: 1958 },
      { title: 'Rockin\' Pneumonia and the Boogie Woogie Flu', artist: "Huey 'Piano' Smith", year: 1957 },
      { title: 'Sea Cruise', artist: "Frankie Ford with Huey Smith's Clowns", year: 1959 },
    ],
  },
  {
    id: 'john-boudreaux',
    name: 'John Boudreaux',
    born: 1936,
    died: 2017,
    style: 'New Orleans R&B, session',
    contributions:
      "A key session drummer in 1960s New Orleans R&B, working at Cosimo Matassa's studio and on AFO Records dates with Harold Battiste. Recorded with Barbara George, Lee Dorsey, and others, then spent decades as a session player on the West Coast.",
    recordings: [
      { title: 'Gris-Gris', artist: 'Dr. John', year: 1968 },
      { title: 'The Lost Paramount Tapes', artist: 'James Booker', year: 1997 },
      { title: 'Hollywood Be Thy Name', artist: 'Dr. John', year: 1975 },
    ],
  },
  {
    id: 'smokey-johnson',
    name: 'Joseph "Smokey" Johnson',
    born: 1936,
    died: 2015,
    style: 'New Orleans R&B, funk',
    contributions:
      'His 1964 instrumental "It Ain\'t My Fault" became a second-line and brass-band standard and a cornerstone of the New Orleans groove. Spent years in Fats Domino\'s touring band before joining Ray Charles\'s band, where he stayed for decades.',
    recordings: [
      { title: "It Ain't My Fault", artist: 'Smokey Johnson', year: 1964 },
    ],
  },
  {
    id: 'bob-french',
    name: 'Bob French',
    born: 1938,
    died: 2012,
    style: 'Traditional New Orleans jazz',
    contributions:
      "Longtime leader of the Original Tuxedo Jazz Band — inherited from his father, Papa French — and the voice of WWOZ's traditional-jazz radio show. A steward of the classic New Orleans drumming vocabulary and a mentor to many younger players.",
    recordings: [
      { title: 'Marsalis Music Honors Bob French', artist: 'Bob French', year: 2007 },
    ],
    note: 'Additional recordings TBD — verify and fill in.',
  },
  {
    id: 'idris-muhammad',
    name: 'Idris Muhammad',
    born: 1939,
    died: 2014,
    style: 'Jazz, funk, soul',
    contributions:
      'Born Leo Morris. Played on New Orleans R&B hits as a teenager before moving to New York, becoming a Prestige/Kudu house drummer, and cutting classic jazz-funk records of his own. His deep pocket and ghost-note finesse have been sampled extensively in hip-hop.',
    recordings: [
      { title: 'Power of Soul', artist: 'Idris Muhammad', year: 1974 },
      { title: 'Could Heaven Ever Be Like This', artist: 'Idris Muhammad', year: 1977 },
      { title: 'Everything I Play Is Funky', artist: 'Lou Donaldson', year: 1970 },
    ],
  },
  {
    id: 'james-black',
    name: 'James Black',
    born: 1940,
    died: 1988,
    style: 'Modern jazz, New Orleans fusion',
    contributions:
      "A drummer, composer, and trumpeter whose crooked, odd-metered feel shaped modern New Orleans jazz. Played in the Ellis Marsalis Quartet, recorded on key AFO sessions, and composed 'Magnolia Triangle,' which became a local standard.",
    recordings: [
      { title: 'Magnolia Triangle', artist: 'Ellis Marsalis Quartet', year: 1963 },
      { title: 'Monkey Puzzle', artist: 'Ellis Marsalis Quartet', year: 1963 },
      { title: 'I Need More', artist: 'James Black', year: 1988 },
    ],
  },
  {
    id: 'david-lee',
    name: 'David Lee',
    born: 1941,
    died: 2021,
    style: 'Jazz',
    contributions:
      'A versatile jazz drummer who played with Sonny Rollins in the mid-1960s and with a range of modern jazz artists thereafter. Known for his swing feel and taste.',
    recordings: [
      { title: "He's Coming", artist: 'Roy Ayers Ubiquity', year: 1972 },
      { title: 'Horn Culture', artist: 'Sonny Rollins', year: 1973 },
      { title: 'Evolution', artist: 'David Lee Jr.', year: 1975 },
    ],
    note: 'Release years are approximate — verify.',
  },
  {
    id: 'fred-staehle',
    name: 'Fred Staehle',
    born: 1944,
    died: 2024,
    style: 'New Orleans R&B, rock',
    contributions:
      "Dr. John's drummer across the Gris-Gris and early Atco years. Brought a loose, second-line-inflected rock feel to Dr. John's voodoo-psychedelia albums.",
    recordings: [
      { title: 'Gris-Gris', artist: 'Dr. John', year: 1968 },
      { title: 'Babylon', artist: 'Dr. John', year: 1969 },
      { title: 'Remedies', artist: 'Dr. John', year: 1970 },
    ],
  },
  {
    id: 'zigaboo-modeliste',
    name: 'Zigaboo Modeliste',
    born: 1948,
    died: null,
    style: 'New Orleans funk, second-line',
    contributions:
      'The drummer in The Meters and the defining voice of New Orleans funk. His syncopated, cross-sticking, swampy grooves have been sampled hundreds of times and form the DNA of hip-hop and modern funk drumming.',
    recordings: [
      { title: 'Cissy Strut', artist: 'The Meters', year: 1969 },
      { title: 'Look-Ka Py Py', artist: 'The Meters', year: 1969 },
      { title: "Hey Pocky A-Way", artist: 'The Meters', year: 1974 },
    ],
  },
  {
    id: 'johnny-vidacovich',
    name: 'Johnny Vidacovich',
    born: 1949,
    died: null,
    style: 'Jazz, funk, second-line',
    contributions:
      "A central figure in modern New Orleans drumming and a long-running member of Astral Project. Spent formative years backing Professor Longhair, and has mentored most of the city's working drummers. His book Street Beats helped codify the NOLA drumming approach.",
    recordings: [
      { title: 'Crawfish Fiesta', artist: 'Professor Longhair', year: 1980 },
      { title: 'Elevado', artist: 'Astral Project', year: 1999 },
      { title: 'Mysterioso', artist: 'Astral Project', year: 1994 },
    ],
  },
  {
    id: 'mean-willie-green',
    name: '"Mean" Willie Green',
    born: 1956,
    died: null,
    style: 'New Orleans funk, R&B',
    contributions:
      "The drummer in The Neville Brothers for nearly four decades, known for a deep, unhurried pocket that anchored the band's gospel-funk-R&B sound.",
    recordings: [
      { title: 'Yellow Moon', artist: 'The Neville Brothers', year: 1989 },
      { title: "Brother's Keeper", artist: 'The Neville Brothers', year: 1990 },
      { title: 'Fiyo on the Bayou', artist: 'The Neville Brothers', year: 1981 },
    ],
  },
  {
    id: 'herlin-riley',
    name: 'Herlin Riley',
    born: 1957,
    died: null,
    style: 'Modern jazz, second-line',
    contributions:
      'A direct descendant of the Lastie family drumming tradition. Longtime drummer with Wynton Marsalis and the Jazz at Lincoln Center Orchestra, bringing the second-line parade feel into large-ensemble modern jazz.',
    recordings: [
      { title: 'Blood on the Fields', artist: 'Wynton Marsalis', year: 1997 },
      { title: 'Live at the Village Vanguard', artist: 'Wynton Marsalis Septet', year: 1999 },
      { title: 'New Direction', artist: 'Herlin Riley', year: 2016 },
    ],
  },
  {
    id: 'roscoe-ernest',
    name: 'Herman "Roscoe" Ernest III',
    born: 1961,
    died: 2011,
    style: 'New Orleans funk, R&B',
    contributions:
      "Dr. John's drummer for much of the 1990s and 2000s and a staple of New Orleans session work. Known for a crisp, aggressive funk backbeat with second-line feel underneath.",
    recordings: [
      { title: 'Anutha Zone', artist: 'Dr. John', year: 1998 },
      { title: 'Creole Moon', artist: 'Dr. John', year: 2001 },
      { title: "N'Awlinz: Dis, Dat, or D'Udda", artist: 'Dr. John', year: 2004 },
    ],
  },
  {
    id: 'shannon-powell',
    name: 'Shannon Powell',
    born: 1962,
    died: null,
    style: 'Traditional New Orleans jazz, swing',
    contributions:
      "The 'King of Treme.' Grew up playing with neighborhood brass bands and became a first-call traditional-jazz drummer — longtime sideman with Harry Connick Jr. and featured drummer with Wynton Marsalis and Dr. Michael White.",
    recordings: [
      { title: 'We Are in Love', artist: 'Harry Connick Jr.', year: 1990 },
      { title: "Powell's Place", artist: 'Shannon Powell', year: 2003 },
      { title: 'When the Saints Go Marching In', artist: 'Dr. Michael White', year: 1996 },
    ],
    note: 'Third recording is a rough guess — worth verifying.',
  },
  {
    id: 'russell-batiste',
    name: 'Russell Batiste Jr.',
    born: 1965,
    died: 2024,
    style: 'New Orleans funk',
    contributions:
      'A Batiste family drummer who joined the reunited Funky Meters and became a staple of the modern New Orleans funk scene. Heavy-handed, deeply syncopated feel in the Zigaboo lineage, and a bandleader in his own right with Russell Batiste & Friends.',
    recordings: [
      { title: 'MOODOO', artist: 'Porter Batiste Stoltz', year: 2005 },
      { title: 'Vida Blue', artist: 'Vida Blue', year: 2002 },
      { title: "Doin' It", artist: 'Papa Grows Funk', year: 2003 },
    ],
    note: 'Release years are approximate — verify.',
  },
  {
    id: 'brian-blade',
    name: 'Brian Blade',
    born: 1970,
    died: null,
    style: 'Modern jazz, folk-jazz, session',
    contributions:
      'One of the most influential modern jazz drummers. Leads the Brian Blade Fellowship, was the drummer of the Wayne Shorter Quartet for two decades, and has recorded extensively with Joni Mitchell, Bob Dylan, Daniel Lanois, and Emmylou Harris. Known for a lyrical, song-serving touch.',
    recordings: [
      { title: 'Footprints Live!', artist: 'Wayne Shorter Quartet', year: 2002 },
      { title: 'Perceptual', artist: 'Brian Blade Fellowship', year: 2000 },
      { title: 'Turbulent Indigo', artist: 'Joni Mitchell', year: 1994 },
    ],
  },
  {
    id: 'stanton-moore',
    name: 'Stanton Moore',
    born: 1972,
    died: null,
    style: 'Funk, jazz, fusion',
    contributions:
      'Founding drummer of Galactic and a leading voice of modern New Orleans funk. Has extensively documented the city\'s drumming traditions through his book "Take It to the Street," clinics, and education work, and leads his own trio.',
    recordings: [
      { title: "Coolin' Off", artist: 'Galactic', year: 1996 },
      { title: "Flyin' the Koop", artist: 'Stanton Moore', year: 2002 },
      { title: 'Ya-Ka-May', artist: 'Galactic', year: 2010 },
    ],
  },
  {
    id: 'kevin-oday',
    name: "Kevin O'Day",
    born: 1973,
    died: 2022,
    style: 'New Orleans jazz, R&B, fusion',
    contributions:
      'A fixture of the New Orleans jazz and R&B scenes from the 1990s on. Led his own ensembles and recorded with Henry Butler, Nicholas Payton, and many others.',
    recordings: [
      {
        title: 'Fresh Out the Past',
        artist: 'The New Orleans Klezmer Allstars',
        year: 1999,
      },
      { title: "Let 'Em Have It", artist: 'Iris May Tango', year: 1999 },
      { title: 'Happy Birthday Sabo!', artist: 'Royal Fingerbowl', year: 1997 },
    ],
  },
  {
    id: 'jason-marsalis',
    name: 'Jason Marsalis',
    born: 1977,
    died: null,
    style: 'Modern jazz, Latin jazz',
    contributions:
      'Son of Ellis Marsalis and youngest of the Marsalis brothers. A drummer and vibraphonist who co-founded Los Hombres Calientes, played in the Marcus Roberts Trio for years, and leads his own 21st Century Trad Band.',
    recordings: [
      { title: 'Los Hombres Calientes, Vol. 1', artist: 'Los Hombres Calientes', year: 1998 },
      { title: 'Music Redeems', artist: 'Marcus Roberts Trio', year: 2012 },
      { title: 'The 21st Century Trad Band', artist: 'Jason Marsalis', year: 2014 },
    ],
  },
  {
    id: 'alvin-ford-jr',
    name: 'Alvin Ford Jr.',
    born: 1983,
    died: null,
    style: 'New Orleans funk, rock, brass band',
    contributions:
      'Longtime drummer of Trombone Shorty & Orleans Avenue, the most widely touring young New Orleans funk outfit of the last decade-plus. Combines a tight, arena-ready backbeat with deep second-line and brass-band roots.',
    recordings: [
      { title: 'Lifted', artist: 'Trombone Shorty', year: 2022 },
      { title: 'Where Do We Go From Here', artist: 'Dumpstaphunk', year: 2021 },
      {
        title: "The Big Ol' Nasty Getdown Volume 2",
        artist: "The Big Ol' Nasty Getdown",
        year: 2015,
      },
    ],
    note: 'Birth year is approximate — verify.',
  },
  {
    id: 'joe-dyson-jr',
    name: 'Joe Dyson Jr.',
    born: 1988,
    died: null,
    style: 'Modern jazz',
    contributions:
      'A rising voice in modern jazz drumming emerging from the NOCCA pipeline. Has recorded and toured with Donald Harrison, Nicholas Payton, and Christian Scott, and is part of the next generation of New Orleans players in the Jazz at Lincoln Center orbit.',
    recordings: [
      { title: 'In On It (from Side-Eye III+)', artist: 'Pat Metheny', year: 2024 },
      {
        title: 'Blackbird Special (from Jazz Party)',
        artist: 'Delfeayo Marsalis & the Uptown Jazz Orchestra',
        year: 2019,
      },
      {
        title: 'Kimathi (Main Theme) (from Afro-Caribbean Mixtape)',
        artist: 'Nicholas Payton',
        year: 2017,
      },
    ],
  },
]
