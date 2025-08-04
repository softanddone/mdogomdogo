export function generateProductSchema(product: {
  name: string;
  slug: string;
  description: string;
  deposit: string;
  daily: string;
  totalPrice: string;
  source: string;
  brand: string;
  seller: string;
  model?: string;
  color?: string;
  storage?: string;
  condition?: 'new' | 'refurbished' | 'used';
  gtin?: string; // Global Trade Item Number (barcode)
  categoryPath?: string[]; // e.g., ['Electronics', 'Mobile Phones', 'Smartphones']
  weight?: string;
  dimensions?: { length: string; width: string; height: string };
}) {
  const price = parseFloat(product.totalPrice.replace(/[^\d.]/g, ''));
  const depositAmount = parseFloat(product.deposit.replace(/[^\d.]/g, ''));
  const dailyAmount = parseFloat(product.daily.replace(/[^\d.]/g, ''));

  // Calculate installment terms
  const totalDays = Math.ceil((price - depositAmount) / dailyAmount);
  
  // Generate unique identifiers
  const productId = `https://mdogomdogodeals.co.ke/phones/${product.slug}`;
  const offerId = `${productId}#offer`;
  
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': productId,
    name: product.name,
    description: product.description,
    
    // Enhanced image handling
    image: [
      `https://mdogomdogodeals.co.ke${product.source}`,
      // Add multiple images if available
    ],
    
    // Product identifiers (crucial for Google Shopping)
    sku: product.slug,
    mpn: product.model || product.slug,
    // Only include GTIN if you have the real one - never use fake GTINs
    ...(product.gtin && product.gtin !== 'placeholder' && { gtin: product.gtin }),
    
    // Brand information
    brand: {
      '@type': 'Brand',
      name: product.brand,
      url: `https://mdogomdogodeals.co.ke/brands/${product.brand.toLowerCase().replace(/\s+/g, '-')}`
    },
    
    // Category classification
    category: product.categoryPath ? product.categoryPath.join(' > ') : 'Mobile Phones',
    
    // Product condition
    itemCondition: product.condition === 'new' ? 'https://schema.org/NewCondition' :
                   product.condition === 'refurbished' ? 'https://schema.org/RefurbishedCondition' :
                   'https://schema.org/UsedCondition',
    
    // Enhanced offers with installment details
    offers: {
      '@type': 'Offer',
      '@id': offerId,
      url: productId,
      priceCurrency: 'KES',
      price: price,
      priceValidUntil: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // 90 days from now
      itemCondition: product.condition === 'new' ? 'https://schema.org/NewCondition' :
                     product.condition === 'refurbished' ? 'https://schema.org/RefurbishedCondition' :
                     'https://schema.org/UsedCondition',
      availability: 'https://schema.org/InStock',
      
      // Enhanced seller information
      seller: {
        '@type': 'Organization',
        name: product.seller,
        url: 'https://mdogomdogodeals.co.ke',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Nairobi',
          addressCountry: 'KE'
        },
        areaServed: 'KE'
      },
      
      // Payment method and installment info
      acceptedPaymentMethod: [
        'https://schema.org/CreditCard',
        'https://schema.org/PaymentMethodCreditCard'
      ],
      
      // Shipping details for Kenya
      shippingDetails: {
        '@type': 'OfferShippingDetails',
        shippingRate: {
          '@type': 'MonetaryAmount',
          value: '0',
          currency: 'KES'
        },
        deliveryTime: {
          '@type': 'ShippingDeliveryTime',
          handlingTime: {
            '@type': 'QuantitativeValue',
            minValue: 1,
            maxValue: 2,
            unitCode: 'DAY'
          },
          transitTime: {
            '@type': 'QuantitativeValue',
            minValue: 1,
            maxValue: 3,
            unitCode: 'DAY'
          }
        },
        shippingDestination: {
          '@type': 'DefinedRegion',
          addressCountry: 'KE'
        }
      }
    },
    
    // Installment plan as structured property
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: 'Payment Plan Type',
        value: 'Installment Plan - Lipa Mdogo Mdogo'
      },
      {
        '@type': 'PropertyValue',
        name: 'Deposit Amount',
        value: `KES ${depositAmount.toLocaleString()}`
      },
      {
        '@type': 'PropertyValue',
        name: 'Daily Payment',
        value: `KES ${dailyAmount.toLocaleString()}`
      },
      {
        '@type': 'PropertyValue',
        name: 'Payment Duration',
        value: `${totalDays} days`
      },
      ...(product.color ? [{
        '@type': 'PropertyValue',
        name: 'Color',
        value: product.color
      }] : []),
      ...(product.storage ? [{
        '@type': 'PropertyValue',
        name: 'Storage Capacity',
        value: product.storage
      }] : []),
      ...(product.weight ? [{
        '@type': 'PropertyValue',
        name: 'Weight',
        value: product.weight
      }] : [])
    ],
    
    // Audience targeting for Kenya
    audience: {
      '@type': 'Audience',
      geographicArea: {
        '@type': 'Country',
        name: 'Kenya'
      }
    },
    
    // Manufacturing details if available
    ...(product.model && {
      model: product.model
    }),
    
    // Physical dimensions if available
    ...(product.dimensions && {
      depth: product.dimensions.length,
      width: product.dimensions.width,
      height: product.dimensions.height
    }),
    
    // URL for the product page
    url: productId,
    
    // Potential aggregate rating placeholder (add when you have reviews)
    // aggregateRating: {
    //   '@type': 'AggregateRating',
    //   ratingValue: '4.5',
    //   reviewCount: '89'
    // }
  };

  return JSON.stringify(structuredData, null, 2);
}