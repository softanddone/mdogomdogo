// src/data/filter-config.js
// Shared filter definitions — imported by both getStaticPaths and the page template

import { products } from './product2.js';

export const DEPOSIT_FILTERS = [
  {
    key:   'deposit-under-3000',
    label: 'Deposit Under 3,000',
    h1:    'Phones With Deposit Under KSh 3,000',
    min:   0,
    max:   2999,
  },
  {
    key:   'deposit-under-5000',
    label: 'Deposit Under 5,000',
    h1:    'Phones With Deposit Under KSh 5,000',
    min:   3000,
    max:   5000,
  },
  {
    key:   'deposit-under-8000',
    label: 'Deposit Under 8,000',
    h1:    'Phones With Deposit Under KSh 8,000',
    min:   5001,
    max:   8000,
  },
  {
    key:   'deposit-under-10000',
    label: 'Deposit Under 10,000',
    h1:    'Phones With Deposit Under KSh 10,000',
    min:   8001,
    max:   10000,
  },
  {
    key:   'deposit-above-10000',
    label: 'Deposit Above 10,000',
    h1:    'Phones With Deposit Above KSh 10,000',
    min:   10001,
    max:   Infinity,
  },
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

export function brandSlugall(brand) {
  return brand.toLowerCase().replace(/\s+/g, '-');
}

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
