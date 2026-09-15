import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const DIST_DIR = path.join(ROOT_DIR, 'dist');
const MANIFEST_PATH = path.join(ROOT_DIR, 'src/lib/route-manifest.ts');

const CLAIM_PATTERNS = [
  /\b\d[\d.,]*\s*\+/iu,
  /%\s*\d+/iu,
  /\b\d[\d.,]*\s*(?:-\s*\d[\d.,]*)?\s*(?:gün|hafta|ay|yıl|saat|kişi|kat|metre|m|m²|m³|kJ|TL|km|knot)\b/iu,
  /\b(?:max|min)\.?\s*\d+/iu,
  /[<>]\s*\d+\s*(?:saniye|dakika|gün|hafta|ay|yıl)/iu,
  /7\s*\/\s*24/iu,
  /\b(?:garanti|sigorta|ücretsiz|lider|öncü|sıfır\s+kaza)\b/iu,
  /(?:başarı\s+oranı|iş\s+yerleştirme|global\s+iş\s+imkanları?|uluslararası\s+network|tam\s+ekipman|dünya\s+çapında)/iu,
  /(?:Swiss|Avusturya|Gazex|Wyssen)/iu,
  /\b(?:profesyonel|deneyimli|uzman|yetkin)\p{L}*/iu,
  /\b(?:tam\s+kapsamlı|entegre\s+mühendislik)\b/iu,
  /\bdijital\s+çığ\b/iu,
  /\b(?:full[- ]scale|test\s+rapor)\b/iu,
  /\b(?:TUPRAS|BOTAŞ|PETKİM)\b/iu,
  /\b(?:maliyet\s+etkin|uygun\s+fiyat|rekabetçi\s+fiyat|müşteri\s+memnuniyeti)\b/iu,
  /\b(?:Türkiye|yurtdışı|uluslararası)\s+(?:genelinde|çapında|geneli|hizmet|proje|deneyim|ağ)\b/iu,
  /\b(?:hizmet|servis)\s+ağı\b/iu,
  /\b(?:hızlı|acil)\s+(?:teslimat|mobilizasyon|kurulum|müdahale|uygulama|tedarik|montaj)\b/iu,
];

const decodeEntities = (value) => value
  .replace(/&amp;/g, '&')
  .replace(/&quot;/g, '"')
  .replace(/&#39;/g, "'")
  .replace(/&lt;/g, '<')
  .replace(/&gt;/g, '>');

const extractServiceRoutes = () => {
  const manifest = fs.readFileSync(MANIFEST_PATH, 'utf-8');
  return [...manifest.matchAll(/\{ path: '([^']+)', type: 'service'/g)].map((match) => match[1]);
};

const visibleMainText = (html) => {
  const main = html.match(/<main\b[\s\S]*?<\/main>/i)?.[0] || '';
  return decodeEntities(main
    .replace(/<script\b[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style\b[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim());
};

const visibleWhyText = (html) => {
  const whyLists = [...html.matchAll(/<ul[^>]+class=["'][^"']*why-list[^"']*["'][^>]*>[\s\S]*?<\/ul>/gi)]
    .map((match) => match[0])
    .join(' ');
  return decodeEntities(whyLists.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim());
};

const routes = extractServiceRoutes();
const findings = [];

for (const routePath of routes) {
  const filePath = path.join(DIST_DIR, routePath.slice(1), 'index.html');
  const text = visibleMainText(fs.readFileSync(filePath, 'utf-8'));
  const matches = CLAIM_PATTERNS
    .map((pattern) => text.match(pattern)?.[0])
    .filter(Boolean);
  const whyText = visibleWhyText(fs.readFileSync(filePath, 'utf-8'));
  const whyMatches = [
    /\b(?:referans(?:lar|ı|ları)?|portföyü)\b/iu,
  ].map((pattern) => whyText.match(pattern)?.[0]).filter(Boolean);

  if (matches.length > 0 || whyMatches.length > 0) {
    findings.push({ routePath, matches: [...new Set([...matches, ...whyMatches])].join(' | ') });
  }
}

if (findings.length > 0) {
  console.table(findings);
  throw new Error(`Unsupported public claim patterns found on ${findings.length} service page(s).`);
}

console.log(`[Service Claim Validation] SUCCESS: ${routes.length} service pages contain no unverified numeric, guarantee or superiority claims in visible main content.`);
