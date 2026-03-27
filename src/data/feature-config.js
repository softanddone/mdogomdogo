// ─── feature-config.js ────────────────────────────────────────────────────────
// Centralised feature definitions used by [featureSlug].astro
// Add new features here — the page, sitemap, and internal links update automatically.

export const FEATURE_FILTERS = [
  {
    key: '5g',
    label: '5G',
    h1: '5G Phones in Kenya',
    description: 'Buy 5G phones on installments in Nairobi. Browse all 5G smartphones available on Lipa Mdogo Mdogo with a small deposit.',
    match: p => p.is_it_5g === 'yes',
  },
  {
    key: 'gaming',
    label: 'Gaming',
    h1: 'Gaming Phones in Kenya',
    description: 'Top gaming phones available on installments in Kenya. High refresh rates, powerful processors, and large batteries.',
    match: p => p.gaming_phone === 'yes',
  },
  {
    key: 'amoled',
    label: 'AMOLED',
    h1: 'AMOLED Display Phones in Kenya',
    description: 'Phones with AMOLED screens available on Lipa Mdogo Mdogo in Nairobi. Vivid colours, deep blacks, and low power consumption.',
    match: p => p.amoled_display === 'yes',
  },
  {
    key: 'fast-charging',
    label: 'Fast Charging',
    h1: 'Fast Charging Phones in Kenya',
    description: 'Buy fast-charging smartphones on easy installments in Nairobi. Never wait long for a full charge.',
    match: p => p.fast_charging === 'yes',
  },
  {
    key: '120hz',
    label: '120Hz',
    h1: '120Hz Display Phones in Kenya',
    description: 'Phones with 120Hz refresh rate screens on installments in Kenya. Smooth scrolling and responsive gaming.',
    match: p => p.refresh_rate === '120Hz',
  },
  {
    key: '108mp-camera',
    label: '108MP Camera',
    h1: '108MP Camera Phones in Kenya',
    description: 'Buy phones with 108MP cameras on Lipa Mdogo Mdogo in Nairobi. Pro-grade photography without the flagship price.',
    match: p => p.megapixel === '108MP',
  },
  {
    key: 'curved-screen',
    label: 'Curved Screen',
    h1: 'Curved Screen Phones in Kenya',
    description: 'Phones with premium curved displays available on installments in Nairobi.',
    match: p => p.curved_screen === 'yes',
  },
  {
    key: 'dual-sim',
    label: 'Dual SIM',
    h1: 'Dual SIM Phones in Kenya',
    description: 'Dual SIM smartphones on Lipa Mdogo Mdogo installments — carry two lines in one phone.',
    match: p => p.dual_sim === 'yes',
  },
  {
    key: 'waterproof',
    label: 'Waterproof',
    h1: 'Waterproof Phones in Kenya',
    description: 'Water-resistant and waterproof phones on easy installments in Nairobi. IP-rated smartphones for everyday confidence.',
    match: p => p.waterproof === 'yes',
  },
  {
    key: 'wireless-charging',
    label: 'Wireless Charging',
    h1: 'Wireless Charging Phones in Kenya',
    description: 'Buy wireless-charging smartphones on installments in Kenya. Cut the cable for good.',
    match: p => p.wireless_charging === 'yes',
  },
  {
    key: 'esim',
    label: 'eSIM',
    h1: 'eSIM Phones in Kenya',
    description: 'eSIM compatible phones available on Lipa Mdogo Mdogo in Nairobi. Switch carriers without a physical SIM.',
    match: p => p.esim_compatible === 'yes',
  },
  {
    key: 'under-display-fingerprint',
    label: 'Under-Display Fingerprint',
    h1: 'Under-Display Fingerprint Phones in Kenya',
    description: 'Phones with in-display fingerprint sensors available on installments in Nairobi.',
    match: p => p.fingerprint === 'under display',
  },
];

// ─── Canonical combo pairs ─────────────────────────────────────────────────────
// The order here IS the canonical slug order. Never build a combo slug manually —
// always call comboSlug() / comboHref() so every link resolves to a real page.

export const COMBO_PAIRS = [
  ['5g',           'gaming'],
  ['5g',           'amoled'],
  ['5g',           '120hz'],
  ['5g',           'fast-charging'],
  ['gaming',       'amoled'],
  ['gaming',       '120hz'],
  ['amoled',       '120hz'],
  ['108mp-camera', 'amoled'],
  ['108mp-camera', 'fast-charging'],
];

// ─── helpers ──────────────────────────────────────────────────────────────────

/**
 * Returns the canonical slug string for a two-feature combo, regardless of argument order.
 * Returns null when the pair has no registered page — so callers can skip the link.
 *
 *   comboSlug('amoled', '5g')  →  '5g-amoled'   (canonical order from COMBO_PAIRS)
 *   comboSlug('5g', 'amoled')  →  '5g-amoled'
 *   comboSlug('5g', 'esim')    →  null           (pair not registered)
 */
export function comboSlug(keyA, keyB) {
  const pair = COMBO_PAIRS.find(
    ([a, b]) => (a === keyA && b === keyB) || (a === keyB && b === keyA)
  );
  return pair ? `${pair[0]}-${pair[1]}` : null;
}

/**
 * Returns the full href for a combo page, optionally scoped to a brand.
 * Returns null when the pair has no registered page.
 *
 *   comboHref('amoled', '5g')            →  '/features/5g-amoled-phones-kenya'
 *   comboHref('amoled', '5g', 'Xiaomi')  →  '/features/xiaomi-5g-amoled-phones-kenya'
 */
export function comboHref(keyA, keyB, brand) {
  const slug = comboSlug(keyA, keyB);
  if (!slug) return null;
  const brandPart = brand ? `${brand.toLowerCase().replace(/\s+/g, '-')}-` : '';
  return `/features/${brandPart}${slug}-phones-kenya`;
}

/**
 * Returns feature keys that apply to a product (used to auto-link from product pages).
 */
export function getProductFeatures(product) {
  return FEATURE_FILTERS.filter(f => f.match(product)).map(f => f.key);
}

/**
 * Returns a single-feature page href, optionally scoped to a brand.
 *   featureHref('5g')            →  '/features/5g-phones-kenya'
 *   featureHref('5g', 'Xiaomi')  →  '/features/xiaomi-5g-phones-kenya'
 */
export function featureHref(featureKey, brand) {
  const brandPart = brand ? `${brand.toLowerCase().replace(/\s+/g, '-')}-` : '';
  return `/features/${brandPart}${featureKey}-phones-kenya`;
}

/**
 * Normalise a brand name to a URL-safe slug.
 */
export function featureBrandSlug(brand) {
  return brand.toLowerCase().replace(/\s+/g, '-');
}
