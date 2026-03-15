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

export const STORAGE_FILTERS = [
  { key: 'storage-64gb',  label: '64GB'  },
  { key: 'storage-128gb', label: '128GB' },
  { key: 'storage-256gb', label: '256GB' },
  { key: 'storage-512gb', label: '512GB' },
  { key: 'storage-1tb',   label: '1TB'   },
];

export const PAYMENT_FILTERS = [
  { key: 'pay-daily',   label: 'Pay Daily'   },
  { key: 'pay-weekly',  label: 'Pay Weekly'  },
  { key: 'pay-monthly', label: 'Pay Monthly' },
];

export const ALL_BRANDS = [...new Set(products.map(p => p.brand).filter(Boolean))];

export function brandSlug(brand) {
  return brand.toLowerCase().replace(/\s+/g, '-');
}

export function parseDeposit(str) {
  if (!str) return 0;
  return parseInt(str.replace(/[^0-9]/g, ''), 10) || 0;
}

// Normalise a storage string from product data to a slug key
// e.g. "128GB ROM" → "storage-128gb", "1TB" → "storage-1tb"
export function parseStorageSlug(str) {
  if (!str) return null;
  const clean = str.replace(/[^0-9a-zA-Z]/g, '').toUpperCase();
  if (clean.includes('1TB') || clean === '1024GB') return 'storage-1tb';
  if (clean.includes('512')) return 'storage-512gb';
  if (clean.includes('256')) return 'storage-256gb';
  if (clean.includes('128')) return 'storage-128gb';
  if (clean.includes('64'))  return 'storage-64gb';
  return null;
}
