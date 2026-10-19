/* Reads everything from config.js. You normally never need to edit this file. */
const S = window.SITE, $ = s => document.querySelector(s);
const wa = m => `https://wa.me/${S.whatsappNumber}?text=${encodeURIComponent(m)}`;
const esc = t => String(t).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const open = m => window.open(wa(m), '_blank', 'noopener');
const ICONS = {
  youtube:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="5" width="20" height="14" rx="4"/><path d="M10 9l5 3-5 3z" fill="currentColor"/></svg>',
  tiktok:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M14 3v11a3.5 3.5 0 1 1-3.5-3.5M14 3c.4 2.6 2 4 5 4.2"/></svg>',
  instagram:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>'
};

// Static WhatsApp buttons
document.querySelectorAll('[data-wa]').forEach(a => a.href = wa(a.dataset.wa === 'showcase' ? S.showcaseMessage : S.generalMessage));

// Services
$('#serviceGrid').innerHTML = S.services.map(s => {
  const msg = s.message || `Hello Quophi Keyz Music Studio, I am interested in ${s.title}. Please let me know the details, price and available times.`;
  return `<article class="card"><div class="ico" aria-hidden="true">${s.icon}</div><h3>${esc(s.title)}</h3><p>${esc(s.description)}</p><p class="price">${esc(s.price || 'Get a Quote')}</p><a class="btn" target="_blank" rel="noopener" href="${wa(msg)}">${s.price ? 'Book via WhatsApp' : 'Get a Quote'}</a></article>`;
}).join('');

// Packages
$('#pricingGrid').innerHTML = S.packages.map(p => `<article class="card"><h3>${esc(p.name)}</h3><div class="big">${esc(p.price)}</div><ul>${p.includes.map(i => `<li>${esc(i)}</li>`).join('')}</ul>${p.note ? `<p class="note">${esc(p.note)}</p>` : ''}<a class="btn" target="_blank" rel="noopener" href="${wa(p.message)}">${esc(p.button)}</a></article>`).join('');

// Audio player (one shared audio element)
const audio = new Audio(); audio.preload = 'none'; let curRow = null;
const fmt = s => isFinite(s) ? Math.floor(s/60) + ':' + String(Math.floor(s%60)).padStart(2,'0') : '0:00';
function renderTracks(list, el, label) {
  el.innerHTML = list.length ? list.map(t => `<div class="track" data-src="${esc(t.file)}"><button class="play" aria-label="Play ${esc(t.title)}">▶</button><div class="meta"><strong>${esc(t.title)}</strong><span>${esc(t.artist || '')}</span><input type="range" min="0" max="100" value="0" aria-label="Seek ${esc(t.title)}"><small>0:00 / 0:00</small></div>${t.link ? `<a href="${esc(t.link)}" target="_blank" rel="noopener">Open</a>` : ''}</div>`).join('')
    : `<div class="empty"><span class="tag">PLACEHOLDER</span><p>No ${label} added yet. Copy your MP3/WAV file into the <code>audio</code> folder, then list it in <code>js/config.js</code> under <code>${label}</code>. The player activates automatically.</p></div>`;
}
renderTracks(S.beats, $('#beatList'), 'beats'); renderTracks(S.songs, $('#songList'), 'songs');
function sync() { document.querySelectorAll('.play').forEach(b => b.textContent = '▶'); if (curRow && !audio.paused) curRow.querySelector('.play').textContent = '❚❚'; }
document.addEventListener('click', e => {
  const b = e.target.closest('.play'); if (!b) return; const row = b.closest('.track');
  if (curRow === row) { audio.paused ? audio.play() : audio.pause(); return; }
  if (curRow) { curRow.querySelector('input').value = 0; curRow.querySelector('small').textContent = '0:00 / 0:00'; }
  curRow = row; audio.src = row.dataset.src; audio.play().catch(() => {});
});
document.addEventListener('input', e => { if (e.target.matches('.track input') && curRow === e.target.closest('.track') && audio.duration) audio.currentTime = e.target.value / 100 * audio.duration; });
audio.onplay = audio.onpause = audio.onended = sync;
audio.ontimeupdate = () => { if (!curRow) return; curRow.querySelector('input').value = audio.duration ? audio.currentTime / audio.duration * 100 : 0; curRow.querySelector('small').textContent = fmt(audio.currentTime) + ' / ' + fmt(audio.duration); };
audio.onerror = () => { if (curRow) curRow.querySelector('small').textContent = 'Audio file not found - check the file path in config.js'; };

// YouTube
$('#ytBox').innerHTML = (S.youtubeVideos.length ? `<div class="yt">${S.youtubeVideos.map(v => `<iframe src="https://www.youtube-nocookie.com/embed/${esc(v.id)}" title="${esc(v.title || 'YouTube video')}" loading="lazy" allowfullscreen></iframe>`).join('')}</div>` : '')
  + `<p><a class="btn ghost" href="${esc(S.social.youtube.url)}" target="_blank" rel="noopener">Watch on YouTube - Ygee Clef</a></p>`
  + (S.youtubeVideos.length ? '' : `<p class="note">To show individual videos here, add their IDs to <code>youtubeVideos</code> in js/config.js.</p>`);

// Artists
$('#artistGrid').innerHTML = S.artists.length ? S.artists.map(a => `<article class="card">${a.photo ? `<img class="ph" src="${esc(a.photo)}" alt="Photo of ${esc(a.name)}" loading="lazy">` : `<div class="ph" aria-hidden="true">${esc(a.name[0])}</div>`}<h3>${esc(a.name)}</h3><p>${esc(a.genre || '')}</p>${a.music ? `<a href="${esc(a.music)}" target="_blank" rel="noopener">Listen</a>` : ''}${a.social ? `<a href="${esc(a.social)}" target="_blank" rel="noopener">Follow</a>` : ''}</article>`).join('')
  : `<article class="card"><span class="tag">PLACEHOLDER</span><div class="ph" aria-hidden="true">?</div><h3>Featured artist spot</h3><p>No artists featured yet. Add real artists in js/config.js. Your name could be here after review.</p><a class="btn" target="_blank" rel="noopener" href="${wa(S.showcaseMessage)}">Get Featured</a></article>`;

// Socials, contact info
document.querySelectorAll('[data-socials]').forEach(el => el.innerHTML = Object.entries(S.social).map(([k, v]) => `<a href="${esc(v.url)}" target="_blank" rel="noopener" aria-label="${esc(v.label)}">${ICONS[k]}</a>`).join(''));
$('#cName').textContent = S.name; $('#cLoc').textContent = 'Location: ' + S.location;
$('#cHours').textContent = 'Opening hours: ' + (S.openingHours || 'please ask on WhatsApp');
$('#cEmail').innerHTML = S.email ? `Email: <a href="mailto:${esc(S.email)}">${esc(S.email)}</a>` : '';
$('#mapLink').href = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Ablekuma Fanmilk, Accra, Ghana');
$('#yr').textContent = new Date().getFullYear();

// Contact form
$('#svcSel').innerHTML = '<option value="">General enquiry</option>' + S.packages.map((p, i) => `<option value="p${i}">${esc(p.name)} - ${esc(p.price)}</option>`).join('') + S.services.map((s, i) => `<option value="s${i}">${esc(s.title)}</option>`).join('');
$('#contactForm').addEventListener('submit', e => {
  e.preventDefault(); const v = $('#svcSel').value, name = $('#cn').value.trim(), d = $('#cd').value.trim(); let m;
  if (v[0] === 'p') m = S.packages[+v.slice(1)].message;
  else if (v[0] === 's') m = `Hello Quophi Keyz Music Studio, I am interested in ${S.services[+v.slice(1)].title}. Please let me know the details, price and available times.`;
  else m = S.generalMessage;
  if (name) m += ` My name is ${name}.`; if (d) m += ` Project details: ${d}`; open(m);
});

// Artist submission form (WhatsApp fallback - nothing is stored online)
$('#artistForm').addEventListener('submit', e => {
  e.preventDefault(); const f = e.target, g = n => f[n].value.trim(), msg = $('#artistMsg'); msg.className = 'msg';
  const bad = [!g('stage') && 'stage name', !/^\+?[\d\s-]{9,15}$/.test(g('phone')) && 'a valid WhatsApp number', !g('genre') && 'genre', !g('song') && 'song title', !/^https?:\/\/\S+/.test(g('link')) && 'a link starting with https://', !f.consent.checked && 'consent'].filter(Boolean);
  if (bad.length) { msg.className = 'msg err'; msg.textContent = 'Please provide: ' + bad.join(', ') + '.'; return; }
  const m = `Hello Quophi Keyz Music Studio, I would like to submit my music for the Upcoming Artists Showcase.\nStage name: ${g('stage')}\nContact name: ${g('contact') || '-'}\nWhatsApp: ${g('phone')}\nEmail: ${g('email') || '-'}\nGenre: ${g('genre')}\nSong: ${g('song')}\nLink: ${g('link')}\nSocial: ${g('social') || '-'}\nIntro: ${g('bio') || '-'}\nI agree to be contacted about this submission.`;
  msg.className = 'msg ok'; msg.textContent = 'Opening WhatsApp - press Send there to complete your submission.'; open(m);
});

// Mobile menu
const btn = $('#menuBtn'), nav = $('#nav');
btn.onclick = () => { const o = nav.classList.toggle('open'); btn.setAttribute('aria-expanded', o); btn.textContent = o ? '✕' : '☰'; };
nav.onclick = e => { if (e.target.tagName === 'A') { nav.classList.remove('open'); btn.setAttribute('aria-expanded', false); btn.textContent = '☰'; } };
