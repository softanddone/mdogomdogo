export function generateProductSchema(product: {
  name: string;
  slug: string;
  description: string;
  deposit: string;
  daily: string;
  totalPrice: string;
  source: string;
}) {
  const price = parseFloat(product.totalPrice.replace(/[^\d.]/g, '')); // Convert to number
  const depositAmount = product.deposit.replace(/[^\d.]/g, '');
  const dailyAmount = product.daily.replace(/[^\d.]/g, '');

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': `https://mdogomdogodeals.co.ke/phones/${product.slug}`, // Add unique ID
    name: product.name,
    image: `https://mdogomdogodeals.co.ke${product.source}`, // Single image instead of array
    description: product.description,
    sku: product.slug,
    mpn: product.slug,
    brand: {
      '@type': 'Brand',
      name: 'Mdogomdogo Deals',
    },
    offers: {
      '@type': 'Offer',
      '@id': `https://mdogomdogodeals.co.ke/phones/${product.slug}#offer`,
      url: `https://mdogomdogodeals.co.ke/phones/${product.slug}`,
      priceCurrency: 'KES',
      price: price, // Now a number
      priceValidUntil: '2025-12-31',
      itemCondition: 'https://schema.org/NewCondition',
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: 'Mdogomdogo Deals',
        url: 'https://mdogomdogodeals.co.ke'
      },
    },
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: 'Payment Plan',
        value: `Deposit Ksh ${depositAmount}, Daily Ksh ${dailyAmount}`,
      },
    ],
  };

  return JSON.stringify(structuredData, null, 2);
}