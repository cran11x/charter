/**
 * The house wall. Drop a still or a loop in /public, then add a plate here.
 *
 * kind: 'image' | 'video'
 * src:  public path, e.g. '/voyage.mp4'
 * poster: first frame for video (and reduced-motion fallback)
 * span: 'wide' | 'tall' | 'square' | 'hero' | 'feature'  — bento size on the wall
 * objectPosition: optional crop, same file used as a study
 * coming: true — hung as an empty frame until you add the file
 */

export type MediaKind = 'image' | 'video'
export type Span = 'wide' | 'tall' | 'square' | 'hero' | 'feature'

export type Plate = {
  id: string
  kind: MediaKind
  src: string
  poster?: string
  titleNl: string
  titleEn: string
  captionNl: string
  captionEn: string
  span: Span
  objectPosition?: string
  coming?: boolean
}

export const plates: Plate[] = [
  {
    id: 'kade',
    kind: 'image',
    src: '/header.jpg',
    titleNl: 'De kade',
    titleEn: 'The quay',
    captionNl: 'Zonsondergang over de pakhuizen. Het boek gaat open.',
    captionEn: 'Sunset over the warehouses. The book opens.',
    span: 'feature',
    objectPosition: 'center 42%',
  },
  {
    id: 'koopman',
    kind: 'image',
    src: '/merchant.jpg',
    titleNl: 'De koopman',
    titleEn: 'The merchant',
    captionNl: 'Rug naar ons, gezicht naar de vloot.',
    captionEn: 'Back to us, face to the fleet.',
    span: 'tall',
    objectPosition: 'center 55%',
  },
  {
    id: 'perkament',
    kind: 'image',
    src: '/header.jpg',
    titleNl: 'Het perkament',
    titleEn: 'The parchment',
    captionNl: 'Een zegel, een veer, een naam.',
    captionEn: 'A seal, a quill, a name.',
    span: 'square',
    objectPosition: '72% 48%',
  },
  {
    id: 'vloot',
    kind: 'image',
    src: '/merchant.jpg',
    titleNl: 'De vloot',
    titleEn: 'The fleet',
    captionNl: 'Drie masten. Eén bestemming.',
    captionEn: 'Three masts. One destination.',
    span: 'square',
    objectPosition: 'center 18%',
  },
  {
    id: 'reis-lus',
    kind: 'video',
    src: '/voyage.mp4',
    poster: '/merchant.jpg',
    titleNl: 'De reis',
    titleEn: 'The voyage',
    captionNl: 'Een lus op zee volgt.',
    captionEn: 'A loop at sea will follow.',
    span: 'square',
    coming: true,
  },
]

export const hungPlates = plates.filter((plate) => !plate.coming && plate.src)

export const findPlate = (id: string) => plates.find((plate) => plate.id === id)
