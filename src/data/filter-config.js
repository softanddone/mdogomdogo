// src/data/filter-config.js
// Shared filter definitions — imported by both getStaticPaths and the page template

import { products } from './product2.js';

export const DEPOSIT_FILTERS = [
  { key: 'under-3k',  label: 'Under KSh 3K',  min: 0,     max: 2999     },
  { key: '3k-5k',     label: 'KSh 3K – 5K',   min: 3000,  max: 5000     },
  { key: '5k-8k',     label: 'KSh 5K – 8K',   min: 5001,  max: 8000     },
  { key: '8k-10k',    label: 'KSh 8K – 10K',  min: 8001,  max: 10000    },
  { key: 'above-10k', label: 'KSh 10K+',       min: 10001, max: Infinity },
];

export const ALL_BRANDS = [...new Set(products.map(p => p.brand).filter(Boolean))];

export function brandSlug(brand) {
  return brand.toLowerCase().replace(/\s+/g, '-');
}

export function parseDeposit(str) {
  if (!str) return 0;
  return parseInt(str.replace(/[^0-9]/g, ''), 10) || 0;
}