# Lavin Photography Website

Fine art nature and wildlife photography — built for GitHub Pages.

## File structure

```
lavinphotography/
├── index.html          ← Home
├── landscapes.html     ← Landscapes gallery
├── cityscapes.html     ← Cityscapes gallery
├── wildlife.html       ← Wildlife (Owls / Hummingbirds / Loons / Cranes / India / Kenya)
├── prints.html         ← Shop prints
├── search.html         ← Live image search & filter
├── contact.html        ← Contact form
├── css/style.css       ← All styles
└── js/main.js          ← Lightbox, mobile menu, scroll reveal, filters
```

## Deploying to GitHub Pages

1. Create a new GitHub repo (e.g. `lavinphotography`)
2. Push all files to the `main` branch
3. Go to **Settings → Pages** → source: `main`, folder: `/ (root)`
4. Live at: `https://yourusername.github.io/lavinphotography/`

## Replacing placeholder images

Images currently use Unsplash URLs. To use your own:
1. Add your photos to an `images/` folder in the repo
2. Replace `src="https://images.unsplash.com/..."` with `src="images/your-photo.jpg"`

## Wiring up the contact form (Formspree)

1. Sign up at formspree.io and create a form
2. In `contact.html`, change `<form id="contact-form">` to:
   `<form id="contact-form" action="https://formspree.io/f/YOUR_KEY" method="POST">`

## Customizing colors

Edit the CSS variables at the top of `css/style.css`:
- `--accent` — the gold tone used throughout
- `--bg` — page background
- `--text-primary` — main text color
