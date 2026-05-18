# MageMail — Gmail Alias Generator

> Generate every possible Gmail dot alias from your address instantly. Free, client-side, no sign-up required.

**Live:** [magemail.vercel.app](https://magemail.vercel.app)

## What it does

Gmail ignores dots in usernames — `j.ohndoe@gmail.com` and `johndoe@gmail.com` are the same inbox. This tool computes all **2ⁿ⁻¹** possible dot placements for any Gmail username, giving you a full list of working aliases you can use to sign up for services, filter email, or track who sells your data.

## Features

- Instant generation — all logic runs in the browser
- Copy & next — copies the current alias and auto-advances to the next
- Download as CSV or TXT
- View all aliases in a scrollable list
- No data stored, no server, no sign-up

## Tech stack

- [Next.js 16](https://nextjs.org) (static export)
- [Tailwind CSS v4](https://tailwindcss.com)
- [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans)
- TypeScript

## Getting started

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # static export → /out
```

## Author

**Abubakar Ibrahim** ([@sadiqdev1](https://sadiqdev-portfolio.vercel.app))

---

*Not affiliated with Google LLC. Gmail is a trademark of Google LLC.*
