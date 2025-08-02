export function generateProductSchema(product: {
  name: string;
  slug: string;
  description: string;
  deposit: string;
  daily: string;
  totalPrice: string;
  source: string;
}) {
  const price = product.totalPrice.replace(/[^\d.]/g, ''); // Remove Ksh and commas
  const depositAmount = product.deposit.replace(/[^\d.]/g, '');
  const dailyAmount = product.daily.replace(/[^\d.]/g, '');

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    image: [`https://mdogomdogodeals.co.ke${product.source}`],
    description: product.description,
    sku: product.slug,
    mpn: product.slug,
    brand: {
      '@type': 'Brand',
      name: 'Mdogomdogo Deals',
    },
    offers: {
      '@type': 'Offer',
      url: `https://mdogomdogodeals.co.ke/phones/${product.slug}`,
      priceCurrency: 'KES',
      price: price,
      priceValidUntil: '2025-12-31',
      itemCondition: 'https://schema.org/NewCondition',
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: 'Mdogomdogo Deals',
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
