export type Deed = {
  /** 1-10; rendered as 01/10 on the paper. */
  id: number
  titleNl: string
  titleEn: string
  cargo: string
  copyNl: string
  copyEn: string
  /** Drop a real image path here later and the card will use it. */
  image?: string
}

export const EDITION = 10

export const deeds: Deed[] = [
  {
    id: 1,
    titleNl: 'Nootmuskaat',
    titleEn: 'Nutmeg',
    cargo: 'Eiland Run',
    copyNl: 'Eén eiland, geruild voor Nieuw-Amsterdam.',
    copyEn: 'One island, traded for New Amsterdam.',
  },
  {
    id: 2,
    titleNl: 'Foelie',
    titleEn: 'Mace',
    cargo: 'Rode zaadrok',
    copyNl: 'Het rode kant om de noot. Apart gewogen.',
    copyEn: 'The red lace around the nut. Weighed apart.',
  },
  {
    id: 3,
    titleNl: 'Kruidnagel',
    titleEn: 'Clove',
    cargo: 'Ternate en Tidore',
    copyNl: 'Gedroogde knoppen, geteld per pond.',
    copyEn: 'Dried buds, counted by the pound.',
  },
  {
    id: 4,
    titleNl: 'Peper',
    titleEn: 'Pepper',
    cargo: 'Zwarte lading',
    copyNl: 'De saaiste vracht. De zekerste winst.',
    copyEn: 'The dullest cargo. The surest profit.',
  },
  {
    id: 5,
    titleNl: 'Kaneel',
    titleEn: 'Cinnamon',
    cargo: 'Baal bast',
    copyNl: 'Bast in rollen, gebonden met touw.',
    copyEn: 'Bark in rolls, bound with cord.',
  },
  {
    id: 6,
    titleNl: 'Het aandeel',
    titleEn: 'The share',
    cargo: 'Anno 1602',
    copyNl: 'Het eerste openbare aandeel ter wereld.',
    copyEn: "The world's first public share.",
  },
  {
    id: 7,
    titleNl: 'Vrachtbrief',
    titleEn: 'Bill of lading',
    cargo: 'Nachtreis',
    copyNl: 'Wat aan boord ging, en wat eraf moet komen.',
    copyEn: 'What went aboard, and what must come off.',
  },
  {
    id: 8,
    titleNl: 'Pakhuiszegel',
    titleEn: 'Warehouse seal',
    cargo: 'Na de bel',
    copyNl: 'De beurs sluit. Het pakhuis niet.',
    copyEn: 'The exchange closes. The warehouse does not.',
  },
  {
    id: 9,
    titleNl: 'Nieuw-Amsterdam',
    titleEn: 'Manhattan trade',
    cargo: 'Breda, 1667',
    copyNl: 'Run bleef van ons. New York niet.',
    copyEn: 'Run stayed ours. New York did not.',
  },
  {
    id: 10,
    titleNl: 'Huisoctrooi',
    titleEn: 'House charter',
    cargo: '$CHARTER',
    copyNl: 'De naam van het huis, en niets meer.',
    copyEn: 'The name of the house, and nothing more.',
  },
]

export const lotNumber = (id: number) => String(id).padStart(2, '0')

export const findDeed = (lot: string | undefined) =>
  deeds.find((deed) => lotNumber(deed.id) === lot || String(deed.id) === lot)
