// ─── feature-config.js ────────────────────────────────────────────────────────
// Centralised feature definitions used by [featureSlug].astro
// Add new features here — the page, sitemap, and internal links update automatically.

export const FEATURE_FILTERS = [
  {
    key: '5g',
    label: '5G',
    h1: '5G Phones in Kenya',
    description: 'Buy 5G phones on installments in Nairobi. Browse all 5G smartphones available on Lipa Mdogo Mdogo with small deposit.',
    match: p => p.is_it_5g === 'yes',
    icon: '🚀',
  },
  {
    key: 'gaming',
    label: 'Gaming',
    h1: 'Gaming Phones in Kenya',
    description: 'Top gaming phones available on installments in Kenya. High refresh rates, powerful processors, and large batteries.',
    match: p => p.gaming_phone === 'yes',
    icon: '🎮',
  },
  {
    key: 'amoled',
    label: 'AMOLED',
    h1: 'AMOLED Display Phones in Kenya',
    description: 'Phones with AMOLED screens available on Lipa Mdogo Mdogo in Nairobi. Vivid colours, deep blacks, and low power consumption.',
    match: p => p.amoled_display === 'yes',
    icon: '✨',
  },
  {
    key: 'fast-charging',
    label: 'Fast Charging',
    h1: 'Fast Charging Phones in Kenya',
    description: 'Buy fast-charging smartphones on easy installments in Nairobi. Never wait long for a full charge.',
    match: p => p.fast_charging === 'yes',
    icon: '⚡',
  },
  {
    key: '120hz',
    label: '120Hz',
    h1: '120Hz Display Phones in Kenya',
    description: 'Phones with 120Hz refresh rate screens on installments in Kenya. Buttery-smooth scrolling and gaming.',
    match: p => p.refresh_rate === '120Hz',
    icon: '🖥️',
  },
  {
    key: '108mp-camera',
    label: '108MP Camera',
    h1: '108MP Camera Phones in Kenya',
    description: 'Buy phones with 108MP cameras on Lipa Mdogo Mdogo in Nairobi. Pro-grade photography without the flagship price.',
    match: p => p.megapixel === '108MP',
    icon: '📸',
  },
  {
    key: 'curved-screen',
    label: 'Curved Screen',
    h1: 'Curved Screen Phones in Kenya',
    description: 'Phones with premium curved displays available on installments in Nairobi.',
    match: p => p.curved_screen === 'yes',
    icon: '📱',
  },
  {
    key: 'dual-sim',
    label: 'Dual SIM',
    h1: 'Dual SIM Phones in Kenya',
    description: 'Dual SIM smartphones on Lipa Mdogo Mdogo installments — carry two lines in one phone.',
    match: p => p.dual_sim === 'yes',
    icon: '📲',
  },
  {
    key: 'waterproof',
    label: 'Waterproof',
    h1: 'Waterproof Phones in Kenya',
    description: 'Water-resistant and waterproof phones on easy installments in Nairobi. IP-rated smartphones for everyday confidence.',
    match: p => p.waterproof === 'yes',
    icon: '💧',
  },
  {
    key: 'wireless-charging',
    label: 'Wireless Charging',
    h1: 'Wireless Charging Phones in Kenya',
    description: 'Buy wireless-charging smartphones on installments in Kenya. Cut the cable for good.',
    match: p => p.wireless_charging === 'yes',
    icon: '🔋',
  },
  {
    key: 'esim',
    label: 'eSIM',
    h1: 'eSIM Phones in Kenya',
    description: 'eSIM compatible phones available on Lipa Mdogo Mdogo in Nairobi. Switch carriers without a physical SIM.',
    match: p => p.esim_compatible === 'yes',
    icon: '🌐',
  },
  {
    key: 'under-display-fingerprint',
    label: 'Under-Display Fingerprint',
    h1: 'Under-Display Fingerprint Phones in Kenya',
    description: 'Phones with in-display fingerprint sensors available on installments in Nairobi.',
    match: p => p.fingerprint === 'under display',
    icon: '👆',
  },
];

// ─── helpers ──────────────────────────────────────────────────────────────────

/**
 * Returns an array of feature keys that apply to a product.
 * Use this to auto-generate internal links on product pages.
 */
export function getProductFeatures(product) {
  return FEATURE_FILTERS
    .filter(f => f.match(product))
    .map(f => f.key);
}

/**
 * Returns a URL for a feature page, optionally scoped to a brand.
 * e.g. featureHref('5g', 'Xiaomi') → '/features/xiaomi-5g-phones-kenya'
 *      featureHref('5g')            → '/features/5g-phones-kenya'
 */
export function featureHref(featureKey, brand) {
  if (brand) {
    return `/features/${brand.toLowerCase()}-${featureKey}-phones-kenya`;
  }
  return `/features/${featureKey}-phones-kenya`;
}

/**
 * Normalise a brand name to a URL slug.
 */
export function featureBrandSlug(brand) {
  return brand.toLowerCase().replace(/\s+/g, '-');
}
