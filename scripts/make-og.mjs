import sharp from 'sharp';
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
<rect width="1200" height="630" fill="#ffffff"/><rect x="0" y="0" width="16" height="630" fill="#1d4ed8"/>
<text x="80" y="130" font-family="Arial,Helvetica,sans-serif" font-size="30" font-weight="700" fill="#1d4ed8">RUSTAM SALMANOV</text>
<text x="80" y="270" font-family="Arial,Helvetica,sans-serif" font-size="68" font-weight="700" fill="#111827">Desarrollo web</text>
<text x="80" y="350" font-family="Arial,Helvetica,sans-serif" font-size="68" font-weight="700" fill="#111827">en Barcelona</text>
<text x="80" y="440" font-family="Arial,Helvetica,sans-serif" font-size="32" fill="#4b5563">Webs rápidas para autónomos y pequeños negocios</text>
<text x="80" y="560" font-family="Arial,Helvetica,sans-serif" font-size="28" fill="#4b5563">Español · Català · English</text></svg>`;
await sharp(Buffer.from(svg)).png().toFile('public/og.png');
