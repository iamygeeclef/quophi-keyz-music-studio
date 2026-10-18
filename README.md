# Quophi Keyz Music Studio - Website

Plain HTML/CSS/JavaScript: no installs, no build step, no paid services.

## Folder
- `index.html` - page content and SEO tags
- `js/config.js` - **THE FILE YOU EDIT** (prices, services, music, artists, links, number)
- `js/main.js`, `css/styles.css` - logic and design (leave alone)
- `audio/` - your MP3/WAV files · `images/` - artist photos, logo

## Preview on your computer
Double-click `index.html`. (Optional: in the folder run `python -m http.server 8000`, open http://localhost:8000)

## Common edits (all in `js/config.js`)
- **Price**: change `price` / the WhatsApp `message` of the package.
- **Add a song**: copy `song.mp3` into `audio/`, then inside `songs: []` add
  `{ title: "Song Name", artist: "Artist", file: "audio/song.mp3" },` (same for `beats`).
- **Add an artist**: photo into `images/`, then inside `artists: []` add
  `{ name: "Stage Name", genre: "Gospel", photo: "images/stage.jpg", music: "https://...", social: "https://..." },`
- **YouTube videos**: `youtubeVideos: [ { id: "VIDEO_ID", title: "Title" } ]`
- **Opening hours / email**: fill `openingHours` and `email`.
- **Logo**: the logo is text in `index.html` (class `logo`). Replace it with `<img src="images/logo.png" alt="Quophi Keyz Music Studio">`.

## Publish free (GitHub Pages - recommended)
Free, reliable, and updating = re-uploading a file.
1. Create an account at github.com (Sign up).
2. Click **+ → New repository**, name it `quophi-keyz-music-studio`, keep **Public**, Create.
3. Click **uploading an existing file**, drag in everything inside this folder (not the folder itself), click **Commit changes**.
4. Go to **Settings → Pages**. Under Branch choose `main` and `/ (root)`, click **Save**.
5. After 1-3 minutes your address appears: `https://YOUR-USERNAME.github.io/quophi-keyz-music-studio/`. Share it anywhere.
6. Replace `YOUR-USERNAME...` with your real address in `index.html` (canonical + og:url), `robots.txt`, `sitemap.xml`.
To update later: open the file on GitHub → pencil icon → edit → Commit. (Alternative: Cloudflare Pages, also free.)

## Custom domain (optional, paid separately)
The `github.io` address is free. A name like `quophikeyz.com` costs a yearly fee at a registrar. Later: Settings → Pages → Custom domain, follow GitHub's DNS steps, then update the URLs above.

## Google Search
1. Go to search.google.com/search-console, add your site URL (URL prefix).
2. Verify (HTML tag method: paste the tag inside `<head>` of index.html).
3. Submit `sitemap.xml`. Ranking takes weeks or longer; no result is guaranteed.

## Status checklist
Working now: navigation, mobile menu, WhatsApp links, prices, services, social links, audio player (needs your files), forms (WhatsApp method; nothing stored online), SEO tags.
Needs your info: audio files, artist info/photos, YouTube video IDs, opening hours, email (optional), final website URL, real logo (optional). Placeholders are labelled **PLACEHOLDER** on the page. Master Mixtape extra benefits are not specified yet - add them in config.js when confirmed.
Not included: no stock photos (none could be downloaded here); add your own images. This site is built but **not yet published**.
