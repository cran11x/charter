# CHARTER

A merchant house for tokenized stocks on Robinhood Chain.
Cinematic, picture-first front end. Dutch first, English underneath.

Nothing on-chain yet — no ERC-20, no ERC-721, no wallet. This is the front door.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build
npm run lint
```

## Routes

| Path             | Page                                             |
| ---------------- | ------------------------------------------------ |
| `/`              | Hero, atelier wall, voyage, three house doors    |
| `/desk`          | Comptoir — where Stock Tokens will be listed     |
| `/manifest`      | Ten deeds                                        |
| `/manifest/:lot` | One deed, `01`–`10`                              |
| `/charter`       | Octrooi — the house share                        |

The homepage hero is the harbor loop `public/header.mp4`, with `header.jpg` as the poster
and reduced-motion fallback.

## Adding pictures and videos

The site is built to grow as a wall of plates. Drop a file in `public/`, then
register it in `src/data/gallery.ts`.

```ts
{
  id: 'batavia-avond',
  kind: 'image', // or 'video'
  src: '/batavia.jpg',
  poster: '/batavia.jpg', // required for video
  titleNl: 'Batavia',
  titleEn: 'Batavia',
  captionNl: 'Avond aan de kade.',
  captionEn: 'Evening on the quay.',
  span: 'wide', // 'wide' | 'tall' | 'square' | 'hero' | 'feature'
}
```

A plate with `coming: true` hangs as an empty frame until you add the file.
Tiles with `kind: 'video'` play muted on hover and open in the lightbox.

Deed images work the same way: set `image: '/deeds/nootmuskaat.jpg'` on a deed
in `src/data/manifest.ts`.

## Palette

Dark espresso canvas so the gold-hour plates read as windows, not stickers.
Tokens live in `:root` in `src/styles/charter.css`.

| Token        | Role                                      |
| ------------ | ----------------------------------------- |
| `--page`     | canvas                                    |
| `--cream`    | type on dark                              |
| `--ink`      | type on parchment (deeds)                 |
| `--gold`     | eyebrows, live marks                      |
| `--paper`    | deed stock                                |
| `--panel`    | empty frames, still wells                 |

Type is **Cinzel** for the house mark, **Cormorant Garamond** for titles,
**Outfit** for body.

## Copy

`Line` renders a Dutch–English pair, Dutch above and the English gloss below.
Nav labels are Dutch only.
