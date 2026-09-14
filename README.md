# CHARTER

A merchant house for tokenized stocks on Robinhood Chain. Cartoon-clean front end,
Prinsenvlag palette, Dutch first with English underneath.

Nothing on-chain yet — no ERC-20, no ERC-721, no wallet. This is the front door.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build
npm run lint
```

## Routes

| Path            | Page                                            |
| --------------- | ----------------------------------------------- |
| `/`             | Act 1 the quay, marquee, Act 2 the voyage south |
| `/desk`         | Comptoir — where Stock Tokens will be listed    |
| `/manifest`     | Ten deeds                                       |
| `/manifest/:lot`| One deed, `01`–`10`                             |

## Palette

The three Prinsenvlag hues, re-roled so the page reads light instead of muddy.
All of it lives in `:root` in `src/styles/charter.css`.

| Token      | Value     | Role                            |
| ---------- | --------- | ------------------------------- |
| `--cream`  | `#FDF4E3` | page                            |
| `--ink`    | `#15366B` | text, 3px outlines, hard shadow |
| `--orange` | `#F0801F` | buttons, accents, wordmark      |
| `--sky`    | `#CBE4F7` | hero sky, card header band      |
| `--sea`    | `#2E6DB4` | water                           |
| `--sand`   | `#EFD3A1` | quay planks, crates             |
| `--paper`  | `#FFFFFF` | cards                           |

Cartoon idiom: `--radius`, `--outline`, and `--pop` (a hard shadow, no blur).
Hover lifts an element and shrinks its shadow.

Type is **Baloo 2** for display and **Nunito** for body, loaded in `index.html`.

## The merchant loop

`public/merchant.mp4` is your AI-generated loop of him standing and writing.
A video cannot carry transparency, so `MerchantVideo` hides all four edges at once:

1. **A radial mask** feathers the frame so it dissolves into the page rather than
   cutting off.
2. **A blend mode** drops the backdrop it was shot on. Pass `blend` to
   `MerchantVideo`: `multiply` for a light background, `screen` for a dark one,
   `normal` when it already matches cream. Default is `multiply`.
3. **The scene foreground** renders over the lower part of the video, so his feet
   and the bottom crop line sit behind barrels and sacks. This is what makes him
   read as standing in the scene instead of pasted onto it.

Generating him on a **flat cream background near `#FDF4E3`** gives the best result
for near-zero effort. Solid green will not work — CSS cannot key it out, that needs
a canvas or WebGL keyer.

Frame him with headroom and some space below the waist so the barrels have
something to cover. `public/merchant.jpg` is the poster frame, used for first paint
and for `prefers-reduced-motion`; the loop also falls back to it if autoplay is
refused.

If you make a second loop of the ship at sea, it drops into Act 2 the same way,
between `SeaBack` and `SeaFront`.

## Scenes

Each scene is an SVG split into a back layer and a bottom-anchored front layer,
with the video sitting between them.

- `QuayScene` — sky, sun, clouds, sails, water, planks behind; sacks, barrels and
  a crate in front. The middle of the back layer is deliberately kept plain,
  because `multiply` lets anything busy show through his collar and ledger pages.
- `SeaScene` — sky and open water behind the route chart; waves and the
  East-Indiaman in front.
- `SpiceRoute` — Texel to the Molukken, with a nutmeg mark sailing the lane.

## Copy

`Line` renders a Dutch–English pair, Dutch above and the English gloss below. Nav
labels are Dutch only; the gloss under three nav items was the noisiest thing on
the page.
