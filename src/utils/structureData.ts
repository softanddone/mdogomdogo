// Define a flexible product type that handles all variations
type FlexibleProduct = {
  id: number;
  name: string;
  deposit: string;
  daily: string;
  totalPrice: string;
  source: string;
  slug: string;
  description: string;
  brand: string;
  seller: string;
  [key: string]: any; // Allow any additional properties
}

// SEO-optimized brand data with comprehensive information
const brandData: Record<string, any> = {
  'Apple': {
    url: 'https://www.apple.com',
    logo: 'https://mdogomdogodeals.co.ke/assets/brands/apple-logo.png',
    sameAs: ['https://www.facebook.com/Apple', 'https://twitter.com/Apple', 'https://www.instagram.com/apple/'],
    foundingDate: '1976-04-01',
    founder: ['Steve Jobs', 'Steve Wozniak', 'Ronald Wayne']
  },
  'Samsung': {
    url: 'https://www.samsung.com',
    logo: 'https://mdogomdogodeals.co.ke/assets/brands/samsung-logo.png',
    sameAs: ['https://www.facebook.com/SamsungMobile', 'https://twitter.com/SamsungMobile'],
    foundingDate: '1969-01-01',
    founder: 'Lee Byung-chul'
  },
  'Huawei': {
    url: 'https://www.huawei.com',
    logo: 'https://mdogomdogodeals.co.ke/assets/brands/huawei-logo.png',
    sameAs: ['https://www.facebook.com/Huawei', 'https://twitter.com/Huawei'],
    foundingDate: '1987-01-01',
    founder: 'Ren Zhengfei'
  },
  'Xiaomi': {
    url: 'https://www.mi.com',
    logo: 'https://mdogomdogodeals.co.ke/assets/brands/xiaomi-logo.png',
    sameAs: ['https://www.facebook.com/XiaomiGlobal', 'https://twitter.com/Xiaomi'],
    foundingDate: '2010-04-06',
    founder: 'Lei Jun'
  },
  'Oppo': {
    url: 'https://www.oppo.com',
    logo: 'https://mdogomdogodeals.co.ke/assets/brands/oppo-logo.png',
    sameAs: ['https://www.facebook.com/oppo', 'https://twitter.com/oppo'],
    foundingDate: '2004-01-01',
    founder: 'Tony Chen'
  },
  'Vivo': {
    url: 'https://www.vivo.com',
    logo: 'https://mdogomdogodeals.co.ke/assets/brands/vivo-logo.png',
    sameAs: ['https://www.facebook.com/vivo', 'https://twitter.com/vivo_global'],
    foundingDate: '2009-01-01',
    founder: 'Shen Wei'
  },
  'OnePlus': {
    url: 'https://www.oneplus.com',
    logo: 'https://mdogomdogodeals.co.ke/assets/brands/oneplus-logo.png',
    sameAs: ['https://www.facebook.com/oneplus', 'https://twitter.com/oneplus'],
    foundingDate: '2013-12-16',
    founder: 'Pete Lau'
  },
  'Realme': {
    url: 'https://www.realme.com',
    logo: 'https://mdogomdogodeals.co.ke/assets/brands/realme-logo.png',
    sameAs: ['https://www.facebook.com/realmeGlobal', 'https://twitter.com/realmeGlobal'],
    foundingDate: '2018-05-04',
    founder: 'Sky Li'
  },
  'Tecno': {
    url: 'https://www.tecno-mobile.com',
    logo: 'https://mdogomdogodeals.co.ke/assets/brands/tecno-logo.png',
    sameAs: ['https://www.facebook.com/TECNOMobileGlobal', 'https://twitter.com/TECNOMobile'],
    foundingDate: '2006-01-01',
    founder: 'George Zhu'
  },
  'Infinix': {
    url: 'https://www.infinixmobility.com',
    logo: 'https://mdogomdogodeals.co.ke/assets/brands/infinix-logo.png',
    sameAs: ['https://www.facebook.com/InfinixMobility', 'https://twitter.com/Infinix_Mobile'],
    foundingDate: '2013-01-01',
    founder: 'Transsion Holdings'
  },
  'Ulefone': {
    url: 'https://www.ulefone.com',
    logo: 'https://mdogomdogodeals.co.ke/assets/brands/ulefone-logo.png',
    sameAs: ['https://www.facebook.com/ulefoneofficial', 'https://twitter.com/ulefone'],
    foundingDate: '2005-01-01',
    founder: 'Ulefone Team'
  }
};

// Kenya-specific location data for enhanced local SEO
const kenyaLocationData = {
  nairobi: {
    '@type': 'City',
    name: 'Nairobi',
    addressRegion: 'Nairobi County',
    addressCountry: 'KE',
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -1.2921,
      longitude: 36.8219
    }
  },
  counties: [
    'Nairobi County', 'Kiambu County', 'Machakos County', 'Kajiado County', 
    'Murang\'a County', 'Kirinyaga County', 'Nyeri County', 'Nyandarua County',
    'Laikipia County', 'Nakuru County', 'Mombasa County', 'Kisumu County'
  ]
};



const generateValidSKU = (slug: string, productId: number) => {
  return `${productId.toString().padStart(4, '0')}-${slug.replace(/\s+/g, '-').replace(/[^a-zA-Z0-9-]/g, '').toUpperCase()}`;
};

// FIX 2: Return Policy Generator
const generateReturnPolicy = () => ({
  '@type': 'MerchantReturnPolicy',
  '@id': 'https://mdogomdogodeals.co.ke#returnpolicy',
  applicableCountry: 'KE',
  returnPolicyCategory: 'https://schema.org/MerchantReturnUnlimitedWindow',
  merchantReturnDays: 365,
  returnMethod: ['https://schema.org/ReturnInStore', 'https://schema.org/ReturnByMail'],
  returnFees: 'https://schema.org/FreeReturn',
  customerRemorseReturnFees: 'https://schema.org/FreeReturn',
  refundType: 'https://schema.org/FullRefund',
  returnPolicySeasonalOverride: false,
  merchantReturnLink: 'https://mdogomdogodeals.co.ke/returns',
  restockingFee: {
    '@type': 'MonetaryAmount',
    value: '0',
    currency: 'KES'
  },
  returnShippingFeesAmount: {
    '@type': 'MonetaryAmount',
    value: '0',
    currency: 'KES'
  },
  inStoreReturnsOffered: true
});

// FIX 3: Delivery Time Generator
const generateDeliveryTime = () => ({
  '@type': 'ShippingDeliveryTime',
  handlingTime: {
    '@type': 'QuantitativeValue',
    minValue: 0,
    maxValue: 2,
    unitCode: 'HUR'
  },
  transitTime: {
    '@type': 'QuantitativeValue',
    minValue: 0,
    maxValue: 1,
    unitCode: 'DAY'
  },
  cutoffTime: '16:00',
  businessDays: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      'https://schema.org/Monday',
      'https://schema.org/Tuesday',
      'https://schema.org/Wednesday',
      'https://schema.org/Thursday',
      'https://schema.org/Friday',
      'https://schema.org/Saturday'
    ],
    opens: '08:00',
    closes: '18:00'
  }
});


export function generateProductSchema(product: FlexibleProduct) {
  const price = parseFloat(product.totalPrice.replace(/[^\d.]/g, ''));
  const depositAmount = parseFloat(product.deposit.replace(/[^\d.]/g, ''));
  const dailyAmount = parseFloat(product.daily.replace(/[^\d.]/g, ''));
  const totalDays = Math.ceil((price - depositAmount) / dailyAmount);

  const productId = `https://mdogomdogodeals.co.ke/phones/${product.slug}`;
  const offerId = `${productId}#offer`;
  const organizationId = 'https://mdogomdogodeals.co.ke#organization';










  
  
  // Enhanced brand information
  const brandInfo = brandData[product.brand] || {
    url: `https://mdogomdogodeals.co.ke/brands/${product.brand.toLowerCase().replace(/\s+/g, '-')}`,
    logo: `https://mdogomdogodeals.co.ke/assets/brands/${product.brand.toLowerCase()}-logo.png`
  };

  // Generate comprehensive image array for better SEO
  const imageArray = [
    `https://mdogomdogodeals.co.ke${product.source}`,
    `https://mdogomdogodeals.co.ke${product.source.replace(/\.(jpg|jpeg|png|webp)$/i, '-front.$1')}`,
    `https://mdogomdogodeals.co.ke${product.source.replace(/\.(jpg|jpeg|png|webp)$/i, '-back.$1')}`,
    `https://mdogomdogodeals.co.ke${product.source.replace(/\.(jpg|jpeg|png|webp)$/i, '-side.$1')}`,
    `https://mdogomdogodeals.co.ke${product.source.replace(/\.(jpg|jpeg|png|webp)$/i, '-packaging.$1')}`
  ].filter(Boolean);

  // Enhanced SEO keywords and categories
  const seoKeywords = [
    `${product.brand} ${product.name}`,
    `${product.name} Kenya`,
    `Buy ${product.name} Nairobi`,
    `Lipa Mdogo Mdogo ${product.brand}`,
    `Affordable ${product.brand} phones`,
    `${product.brand} installments Kenya`,
    `Mobile phones Kenya`,
    `Smartphone deals Kenya`,
    `${product.brand} price Kenya`,
    `Phone financing Kenya`
  ];

  const structuredData: any = {
    '@context': 'https://schema.org',
    '@type': ['Product', 'MobilePhone'],
    '@id': productId,
    
    // Basic product information with SEO optimization
    name: product.name,
    alternateName: [
      `${product.brand} ${product.model || ''}`.trim(),
      `${product.name} Kenya`,
      `${product.name} Nairobi`
    ].filter(Boolean),
    
    description: `${product.description} Available in Kenya with Lipa Mdogo Mdogo payment plan. Pay KES ${depositAmount.toLocaleString()} deposit and KES ${dailyAmount.toLocaleString()} daily for ${totalDays} days. Free delivery in Nairobi and surrounding counties.`,
    
    disambiguatingDescription: `Official ${product.brand} ${product.name} available through Mdogo Mdogo Deals Kenya's flexible payment system. Authentic smartphones with warranty and free delivery.`,
    
    image: imageArray,
    
    // Enhanced product identifiers for better indexing
    // sku: product.slug,
    sku: generateValidSKU(product.slug, product.id),
    mpn: product.model || product.slug,
    productID: product.id.toString(),
    ...(product.gtin && product.gtin.trim() !== '' && product.gtin !== 'placeholder' && { gtin: product.gtin }),
    
    // Enhanced brand with comprehensive data
    brand: {
      '@type': 'Brand',
      '@id': `${brandInfo.url}#brand`,
      name: product.brand,
      url: brandInfo.url,
      logo: brandInfo.logo,
      ...(brandInfo.sameAs && { sameAs: brandInfo.sameAs }),
      ...(brandInfo.foundingDate && { foundingDate: brandInfo.foundingDate }),
      ...(brandInfo.founder && { founder: brandInfo.founder }),
      description: `Official ${product.brand} products available in Kenya through authorized dealers.`
    },

    // Comprehensive category structure
    category: [
      'Electronics',
      'Mobile Phones',
      'Smartphones',
      `${product.brand} Phones`,
      product.categoryPath ? product.categoryPath.join(' > ') : 'Mobile Phones'
    ],

    // Enhanced condition mapping
    itemCondition: product.condition === 'new' ? 'https://schema.org/NewCondition' :
                   product.condition === 'refurbished' ? 'https://schema.org/RefurbishedCondition' :
                   'https://schema.org/UsedCondition',

    // Additional product properties for SEO
    ...(product.productLine && { productLine: product.productLine }),
    ...(product.material && { material: product.material }),
    ...(product.pattern && { pattern: product.pattern }),
    ...(product.color && { color: product.color }),
    ...(product.model && { model: product.model }),

    // Enhanced warranty information
    warranty: {
      '@type': 'WarrantyPromise',
      durationOfWarranty: {
        '@type': 'QuantitativeValue',
        value: 2,
        unitCode: 'ANN'
      },
      warrantyScope: 'https://schema.org/WarrantyPromise',
      warrantee: {
        '@type': 'Organization',
        name: product.brand,
        url: brandInfo.url
      }
    },

    // Reviews and ratings (if available)
    ...(product.reviews && product.reviews.reviewCount > 0 && {
      aggregateRating: {
        '@type': 'AggregateRating',
        '@id': `${productId}#aggregaterating`,
        ratingValue: product.reviews.averageRating.toString(),
        bestRating: '5',
        worstRating: '1',
        reviewCount: product.reviews.reviewCount.toString(),
        ratingExplanation: `Based on ${product.reviews.reviewCount} customer reviews`
      },
      ...(product.reviews.reviews && product.reviews.reviews.length > 0 && {
        review: product.reviews.reviews.map((review: any, index: number) => ({
          '@type': 'Review',
          '@id': `${productId}#review${index + 1}`,
          author: {
            '@type': 'Person',
            name: review.author,
            location: {
              '@type': 'Place',
              name: 'Kenya'
            }
          },
          reviewRating: {
            '@type': 'Rating',
            ratingValue: review.rating.toString(),
            bestRating: '5',
            worstRating: '1'
          },
          reviewBody: review.reviewBody,
          datePublished: review.datePublished,
          inLanguage: 'en-KE'
        }))
      })
    }),

    // Comprehensive offer with enhanced SEO data
    offers: {
      '@type': 'Offer',
      '@id': offerId,
      url: productId,
      priceCurrency: 'KES',
      price: price,
      lowPrice: price,
      highPrice: price,
      priceValidUntil: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      
      // Enhanced pricing information
      priceSpecification: [
        {
          '@type': 'UnitPriceSpecification',
          price: price,
          priceCurrency: 'KES',
          name: 'Total Price'
        },
        {
          '@type': 'UnitPriceSpecification',
          price: depositAmount,
          priceCurrency: 'KES',
          name: 'Deposit Amount'
        },
        {
          '@type': 'UnitPriceSpecification',
          price: dailyAmount,
          priceCurrency: 'KES',
          name: 'Daily Payment'
        }
      ],

      itemCondition: product.condition === 'new' ? 'https://schema.org/NewCondition' :
                     product.condition === 'refurbished' ? 'https://schema.org/RefurbishedCondition' :
                     'https://schema.org/UsedCondition',
      
      availability: 'https://schema.org/InStock',
      inventoryLevel: product.stock || 50,

      // Enhanced seller information with organization schema
      seller: {
        '@type': 'Organization',
        '@id': organizationId,
        name: product.seller,
        url: 'https://mdogomdogodeals.co.ke',
        logo: 'https://mdogomdogodeals.co.ke/assets/logo.png',
        image: 'https://mdogomdogodeals.co.ke/assets/logo.png',
        
        description: 'Kenya\'s leading mobile phone retailer offering flexible payment plans through Lipa Mdogo Mdogo system.',
        
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Nairobi',
          addressRegion: 'Nairobi County',
          addressCountry: 'KE',
          streetAddress: 'CBD, Nairobi',
          postalCode: '00100'
        },
        
        geo: kenyaLocationData.nairobi.geo,
        areaServed: kenyaLocationData.counties.map(county => ({
          '@type': 'AdministrativeArea',
          name: county,
          addressCountry: 'KE'
        })),
        
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+254-700-000-000',
          contactType: 'customer service',
          availableLanguage: ['English', 'Swahili'],
          areaServed: 'KE'
        },
        
        sameAs: [
          'https://www.facebook.com/mdogomdogodeals',
          'https://twitter.com/mdogomdogodeals',
          'https://www.instagram.com/mdogomdogodeals'
        ]
      },

      // Enhanced payment methods
      acceptedPaymentMethod: [
        {
          '@type': 'PaymentMethod',
          '@id': 'https://schema.org/CreditCard',
          name: 'Credit Card'
        },
        {
          '@type': 'PaymentMethod',
          '@id': 'https://schema.org/PaymentMethodCreditCard',
          name: 'Debit Card'
        },
        {
          '@type': 'PaymentMethod',
          name: 'M-Pesa',
          identifier: 'MPESA'
        },
        {
          '@type': 'PaymentMethod',
          name: 'Bank Transfer',
          identifier: 'BANK_TRANSFER'
        }
      ],

      // Enhanced return policy
  hasMerchantReturnPolicy: generateReturnPolicy(),

      // Comprehensive shipping details
      shippingDetails: {
        '@type': 'OfferShippingDetails',
        shippingRate: {
          '@type': 'MonetaryAmount',
          value: '0',
          currency: 'KES'
        },
        freeShippingThreshold: {
          '@type': 'MonetaryAmount',
          value: '0',
          currency: 'KES'
        },
      deliveryTime: generateDeliveryTime(),
       
        shippingDestination: {
          '@type': 'DefinedRegion',
          addressCountry: 'KE',
          addressRegion: kenyaLocationData.counties
        }
      },

      // Enhanced availability regions with proper geographic targeting
      availableAtOrFrom: kenyaLocationData.counties.map(county => ({
        '@type': 'Place',
        name: county,
        addressCountry: 'KE'
      })),

      validFrom: new Date().toISOString(),
      eligibleRegion: {
        '@type': 'Country',
        name: 'Kenya',
        identifier: 'KE'
      },

      // Geographic and demographic targeting through offer properties
      eligibleCustomerType: {
        '@type': 'BusinessEntityType',
        name: 'Individual Consumers'
      }
    },

    // Comprehensive additional properties for SEO
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        '@id': `${productId}#paymentplan`,
        name: 'Payment Plan Type',
        value: 'Installment Plan - Lipa Mdogo Mdogo',
        description: 'Flexible daily payment system for affordable smartphone ownership'
      },
      {
        '@type': 'PropertyValue',
        name: 'Deposit Amount',
        value: `KES ${depositAmount.toLocaleString()}`,
        unitCode: 'KES'
      },
      {
        '@type': 'PropertyValue',
        name: 'Daily Payment',
        value: `KES ${dailyAmount.toLocaleString()}`,
        unitCode: 'KES'
      },
      {
        '@type': 'PropertyValue',
        name: 'Payment Duration',
        value: `${totalDays} days`,
        unitCode: 'DAY'
      },
      // Technical specifications
      ...(product.phonedisplay ? [{
        '@type': 'PropertyValue',
        name: 'Display',
        value: product.phonedisplay,
        propertyID: 'display'
      }] : []),
      ...(product.processor ? [{
        '@type': 'PropertyValue',
        name: 'Processor',
        value: product.processor,
        propertyID: 'processor'
      }] : []),
      ...(product.camera ? [{
        '@type': 'PropertyValue',
        name: 'Camera',
        value: product.camera,
        propertyID: 'camera'
      }] : []),
      ...(product.memory ? [{
        '@type': 'PropertyValue',
        name: 'Memory',
        value: product.memory,
        propertyID: 'memory'
      }] : []),
      ...(product.battery ? [{
        '@type': 'PropertyValue',
        name: 'Battery',
        value: product.battery,
        propertyID: 'battery'
      }] : []),
      ...(product.version ? [{
        '@type': 'PropertyValue',
        name: 'Operating System',
        value: product.version,
        propertyID: 'os'
      }] : []),
      ...(product.storage ? [{
        '@type': 'PropertyValue',
        name: 'Storage Capacity',
        value: product.storage,
        propertyID: 'storage'
      }] : []),
      ...(product.weight ? [{
        '@type': 'PropertyValue',
        name: 'Weight',
        value: product.weight,
        propertyID: 'weight'
      }] : []),
      // Service features
      {
        '@type': 'PropertyValue',
        name: 'Delivery',
        value: 'Free Delivery in Nairobi & Surrounding Counties',
        description: 'Same-day delivery available within Nairobi CBD'
      },
      {
        '@type': 'PropertyValue',
        name: 'Return Policy',
        value: 'Free Returns (M-Kopa products)',
        description: '30-day return window with free return shipping'
      },
      {
        '@type': 'PropertyValue',
        name: 'Warranty',
        value: '2 Years Manufacturer Warranty',
        description: 'Full manufacturer warranty with local support'
      },
      {
        '@type': 'PropertyValue',
        name: 'Financing Partners',
        value: 'M-Kopa, Watu Simu, Ulefone',
        description: 'Multiple financing options available'
      }
    ],

    // Enhanced dimensions (if available)
    ...(product.dimensions && {
      depth: {
        '@type': 'QuantitativeValue',
        value: product.dimensions.length,
        unitCode: 'MMT'
      },
      width: {
        '@type': 'QuantitativeValue',
        value: product.dimensions.width,
        unitCode: 'MMT'
      },
      height: {
        '@type': 'QuantitativeValue',
        value: product.dimensions.height,
        unitCode: 'MMT'
      }
    }),

    // Related products for better internal linking
    ...(product.relatedProducts?.length > 0 && {
      isRelatedTo: product.relatedProducts.map((related: any) => ({
        '@type': 'Product',
        '@id': `https://mdogomdogodeals.co.ke/phones/${related.slug}`,
        name: related.name,
        url: `https://mdogomdogodeals.co.ke/phones/${related.slug}`
      }))
    }),

    // Product variants for better SEO coverage
    ...(product.variants?.length > 0 && {
      hasVariant: product.variants.map((variant: any) => ({
        '@type': 'Product',
        '@id': `https://mdogomdogodeals.co.ke/phones/${variant.slug}`,
        name: variant.name,
        url: `https://mdogomdogodeals.co.ke/phones/${variant.slug}`,
        // sku: variant.slug
        sku: generateValidSKU(variant.slug, product.id),
      }))
    }),

    // FAQ schema for rich snippets
    ...(product.faqs?.length > 0 && {
      mainEntity: product.faqs.map((faq: any, index: number) => ({
        '@type': 'Question',
        '@id': `${productId}#faq${index + 1}`,
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
          inLanguage: 'en-KE'
        }
      }))
    }),

    // Enhanced subject matter for topical authority
    subjectOf: {
      '@type': 'CreativeWork',
      '@id': `${productId}#creativework`,
      about: [
        { '@type': 'Thing', name: 'Lipa Mdogo Mdogo Phones Kenya', sameAs: 'https://mdogomdogodeals.co.ke' },
        { '@type': 'Thing', name: 'Affordable Smartphone Installments', sameAs: 'https://mdogomdogodeals.co.ke/payment-plans' },
        { '@type': 'Thing', name: `Buy ${product.brand} in Kenya`, sameAs: `https://mdogomdogodeals.co.ke/brands/${product.brand.toLowerCase()}` },
        { '@type': 'Thing', name: product.name, sameAs: productId },
        { '@type': 'Thing', name: 'Mobile Phone Financing Kenya' },
        { '@type': 'Thing', name: 'Smartphone Deals Nairobi' }
      ],
      keywords: seoKeywords.join(', '),
      inLanguage: 'en-KE'
    },

    // Primary URL and additional URLs
    url: productId,
    sameAs: [
      productId,
      `https://mdogomdogodeals.co.ke/products/${product.slug}`,
      `https://mdogomdogodeals.co.ke/mobile-phones/${product.slug}`
    ],

    // Enhanced metadata for better indexing
    dateCreated: product.dateCreated || new Date().toISOString(),
    dateModified: product.dateModified || new Date().toISOString(),
    datePublished: product.datePublished || new Date().toISOString(),
    
    // Language and region
    inLanguage: 'en-KE',
    contentLocation: {
      '@type': 'Place',
      name: 'Kenya',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'KE'
      }
    },

    // Additional SEO properties
    keywords: seoKeywords,
    applicationCategory: 'MobileApplication',
    operatingSystem: product.version || 'Android',
    
    // Accessibility information
    accessibilityFeature: [
      'highContrastDisplay',
      'voiceControl',
      'screenReader'
    ],

    // Purchase context
    potentialAction: {
      '@type': 'BuyAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: productId,
        inLanguage: 'en-KE',
        actionPlatform: [
          'https://schema.org/DesktopWebPlatform',
          'https://schema.org/MobileWebPlatform'
        ]
      },
      price: price,
      priceCurrency: 'KES'
    }
  };

  return JSON.stringify(structuredData, null, 2);
}



// Additional SEO utility functions
export function generateBreadcrumbSchema(product: FlexibleProduct) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://mdogomdogodeals.co.ke'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Mobile Phones',
        item: 'https://mdogomdogodeals.co.ke/phones'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: product.brand,
        item: `https://mdogomdogodeals.co.ke/brands/${product.brand.toLowerCase()}`
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: product.name,
        item: `https://mdogomdogodeals.co.ke/phones/${product.slug}`
      }
    ]
  };
}

export function generateWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://mdogomdogodeals.co.ke#website',
    url: 'https://mdogomdogodeals.co.ke',
    name: 'Mdogo Mdogo Deals',
    description: 'Kenya\'s premier mobile phone retailer offering flexible payment plans',
    publisher: {
      '@id': 'https://mdogomdogodeals.co.ke#organization'
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://mdogomdogodeals.co.ke/search?q={search_term_string}',
        actionPlatform: [
          'https://schema.org/DesktopWebPlatform',
          'https://schema.org/MobileWebPlatform'
        ]
      },
      'query-input': 'required name=search_term_string'
    },
    inLanguage: 'en-KE',
    audience: {
      '@type': 'Audience',
      geographicArea: {
        '@type': 'Country',
        name: 'Kenya'
      }
    }
  };
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://mdogomdogodeals.co.ke#organization',
    name: 'Mdogo Mdogo Deals',
    alternateName: ['Mdogo Mdogo Deals Kenya', 'MMD Kenya'],
    url: 'https://mdogomdogodeals.co.ke',
    logo: {
      '@type': 'ImageObject',
      url: 'https://mdogomdogodeals.co.ke/assets/logo.png',
      width: 300,
      height: 150
    },
    image: 'https://mdogomdogodeals.co.ke/assets/logo.png',
    description: 'Leading mobile phone retailer in Kenya offering flexible payment plans through Lipa Mdogo Mdogo system. Buy smartphones with daily payments starting from KES 50.',
    
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'CBD Center',
      addressLocality: 'Nairobi',
      addressRegion: 'Nairobi County',
      postalCode: '00100',
      addressCountry: 'KE'
    },
    
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -1.2921,
      longitude: 36.8219
    },
    
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+254-700-000-000',
        contactType: 'customer service',
        availableLanguage: ['English', 'Swahili'],
        areaServed: 'KE',
        hoursAvailable: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: [
            'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
          ],
          opens: '08:00',
          closes: '18:00'
        }
      },
      {
        '@type': 'ContactPoint',
        telephone: '+254-711-000-000',
        contactType: 'sales',
        availableLanguage: ['English', 'Swahili'],
        areaServed: 'KE'
      }
    ],
    
    sameAs: [
      'https://www.facebook.com/mdogomdogodeals',
      'https://twitter.com/mdogomdogodeals',
      'https://www.instagram.com/mdogomdogodeals',
      'https://www.linkedin.com/company/mdogomdogodeals',
      'https://www.youtube.com/c/mdogomdogodeals'
    ],
    
    foundingDate: '2018-01-01',
    founder: {
      '@type': 'Person',
      name: 'Mdogo Mdogo Deals Founder'
    },
    
    areaServed: kenyaLocationData.counties.map(county => ({
      '@type': 'AdministrativeArea',
      name: county,
      addressCountry: 'KE'
    })),
    
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: -1.2921,
        longitude: 36.8219
      },
      geoRadius: '500000' // 500km radius
    },
    
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Mobile Phones Catalog',
      itemListElement: [
        {
          '@type': 'OfferCatalog',
          name: 'Apple Phones',
          itemListElement: []
        },
        {
          '@type': 'OfferCatalog',
          name: 'Samsung Phones',
          itemListElement: []
        },
        {
          '@type': 'OfferCatalog',
          name: 'Huawei Phones',
          itemListElement: []
        }
      ]
    },
    
    knowsAbout: [
      'Mobile Phone Sales',
      'Smartphone Financing',
      'Payment Plans',
      'Electronics Retail',
      'Customer Service',
      'Warranty Services'
    ],
    
    slogan: 'Lipa Mdogo Mdogo - Own Your Dream Phone Today!',
    
    award: [
      'Best Mobile Phone Retailer Kenya 2023',
      'Customer Choice Award 2023',
      'Innovation in Payment Systems 2022'
    ]
  };
}

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://mdogomdogodeals.co.ke#localbusiness',
    name: 'Mdogo Mdogo Deals',
    image: 'https://mdogomdogodeals.co.ke/assets/store-front.jpg',
    url: 'https://mdogomdogodeals.co.ke',
    telephone: '+254-700-000-000',
    priceRange: 'KES 5,000 - KES 200,000',
    
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'CBD Center, Tom Mboya Street',
      addressLocality: 'Nairobi',
      addressRegion: 'Nairobi County',
      postalCode: '00100',
      addressCountry: 'KE'
    },
    
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -1.2921,
      longitude: 36.8219
    },
    
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '17:00'
      }
    ],
    
    servesCuisine: 'Electronics',
    acceptsReservations: false,
    
    paymentAccepted: [
      'Cash',
      'Credit Card',
      'M-Pesa',
      'Bank Transfer',
      'Installment Plans'
    ],
    
    currenciesAccepted: 'KES'
  };
}

// Enhanced SEO meta tags generator
export function generateMetaTags(product: FlexibleProduct) {
  const price = parseFloat(product.totalPrice.replace(/[^\d.]/g, ''));
  const depositAmount = parseFloat(product.deposit.replace(/[^\d.]/g, ''));
  const dailyAmount = parseFloat(product.daily.replace(/[^\d.]/g, ''));
  
  return {
    title: `${product.name} - Buy with KES ${depositAmount.toLocaleString()} Deposit | Lipa Mdogo Mdogo Kenya`,
    
    description: `Buy ${product.name} in Kenya with flexible payment plan. Pay KES ${depositAmount.toLocaleString()} deposit + KES ${dailyAmount.toLocaleString()} daily. Free delivery in Nairobi. 2-year warranty. Authentic ${product.brand} phones.`,
    
    keywords: [
      `${product.name}`,
      `${product.name} Kenya`,
      `${product.name} price Kenya`,
      `Buy ${product.name} Nairobi`,
      `${product.brand} phones Kenya`,
      `Lipa Mdogo Mdogo ${product.brand}`,
      `${product.name} installments`,
      `Affordable ${product.brand} Kenya`,
      `Mobile phone financing Kenya`,
      `Smartphone payment plan Kenya`
    ].join(', '),
    
    openGraph: {
      title: `${product.name} - KES ${price.toLocaleString()} | Lipa Mdogo Mdogo`,
      description: `Get ${product.name} with just KES ${depositAmount.toLocaleString()} deposit. Pay KES ${dailyAmount.toLocaleString()} daily. Free delivery across Kenya.`,
      image: `https://mdogomdogodeals.co.ke${product.source}`,
      url: `https://mdogomdogodeals.co.ke/phones/${product.slug}`,
      type: 'product',
      site_name: 'Mdogo Mdogo Deals',
      locale: 'en_KE'
    },
    
    twitter: {
      card: 'product',
      site: '@mdogomdogodeals',
      title: `${product.name} - Flexible Payment Plan Kenya`,
      description: `Buy ${product.name} with KES ${depositAmount.toLocaleString()} deposit + daily payments. Free delivery in Kenya.`,
      image: `https://mdogomdogodeals.co.ke${product.source}`,
      'app:name:iphone': 'Mdogo Mdogo Deals',
      'app:id:iphone': '123456789',
      'app:name:android': 'Mdogo Mdogo Deals',
      'app:id:android': 'com.mdogomdogodeals.app'
    },
    
    canonical: `https://mdogomdogodeals.co.ke/phones/${product.slug}`,
    
    alternateUrls: [
      {
        href: `https://mdogomdogodeals.co.ke/phones/${product.slug}`,
        hreflang: 'en-ke'
      },
      {
        href: `https://mdogomdogodeals.co.ke/sw/simu/${product.slug}`,
        hreflang: 'sw-ke'
      }
    ],
    
    robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    
    additionalMetaTags: [
      { name: 'author', content: 'Mdogo Mdogo Deals' },
      { name: 'publisher', content: 'Mdogo Mdogo Deals' },
      { name: 'geo.region', content: 'KE' },
      { name: 'geo.placename', content: 'Kenya' },
      { name: 'geo.position', content: '-1.2921;36.8219' },
      { name: 'ICBM', content: '-1.2921, 36.8219' },
      { name: 'apple-mobile-web-app-title', content: 'MMD Kenya' },
      { name: 'application-name', content: 'Mdogo Mdogo Deals' },
      { name: 'theme-color', content: '#1a365d' },
      { property: 'product:price:amount', content: price.toString() },
      { property: 'product:price:currency', content: 'KES' },
      { property: 'product:brand', content: product.brand },
      { property: 'product:availability', content: 'in stock' },
      { property: 'product:condition', content: product.condition || 'new' },
      { property: 'product:retailer_item_id', content: product.slug },
      { name: 'mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' }
    ]
  };
}

// Generate comprehensive FAQ schema for better SEO
export function generateFAQSchema(product: FlexibleProduct) {
  const price = parseFloat(product.totalPrice.replace(/[^\d.]/g, ''));
  const depositAmount = parseFloat(product.deposit.replace(/[^\d.]/g, ''));
  const dailyAmount = parseFloat(product.daily.replace(/[^\d.]/g, ''));
  const totalDays = Math.ceil((price - depositAmount) / dailyAmount);

  const defaultFAQs = [
    {
      question: `What is the price of ${product.name} in Kenya?`,
      answer: `The ${product.name} costs KES ${price.toLocaleString()} in Kenya. You can buy it through our Lipa Mdogo Mdogo payment plan with just KES ${depositAmount.toLocaleString()} deposit and KES ${dailyAmount.toLocaleString()} daily payments for ${totalDays} days.`
    },
    {
      question: `How does the Lipa Mdogo Mdogo payment plan work for ${product.name}?`,
      answer: `Our flexible payment plan allows you to own the ${product.name} by paying KES ${depositAmount.toLocaleString()} as deposit, then KES ${dailyAmount.toLocaleString()} daily for ${totalDays} days. No interest charges, no hidden fees.`
    },
    {
      question: `Is ${product.name} available for delivery in Kenya?`,
      answer: `Yes, we offer free delivery for ${product.name} across Nairobi and surrounding counties including Kiambu, Machakos, Kajiado, and Murang'a. Same-day delivery available within Nairobi CBD.`
    },
    {
      question: `What warranty comes with ${product.name}?`,
      answer: `${product.name} comes with a 2-year manufacturer warranty. We also provide local support and free repairs for warranty-covered issues.`
    },
    {
      question: `Can I return ${product.name} if I'm not satisfied?`,
      answer: `Yes, you have 30 days to return ${product.name} if you're not completely satisfied. We offer free returns with full refund for unused items in original packaging.`
    }
  ];

  const combinedFAQs = [...(product.faqs || []), ...defaultFAQs];

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `https://mdogomdogodeals.co.ke/phones/${product.slug}#faq`,
    mainEntity: combinedFAQs.map((faq, index) => ({
      '@type': 'Question',
      '@id': `https://mdogomdogodeals.co.ke/phones/${product.slug}#faq-${index + 1}`,
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
        inLanguage: 'en-KE'
      }
    }))
  };
}

// Generate How-To schema for payment process
export function generateHowToSchema(product: FlexibleProduct) {
  const depositAmount = parseFloat(product.deposit.replace(/[^\d.]/g, ''));

  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    '@id': `https://mdogomdogodeals.co.ke/phones/${product.slug}#howto`,
    name: `How to Buy ${product.name} with Lipa Mdogo Mdogo`,
    description: `Step-by-step guide to purchasing ${product.name} using our flexible payment plan`,
    image: `https://mdogomdogodeals.co.ke${product.source}`,
    totalTime: 'PT15M',
    estimatedCost: {
      '@type': 'MonetaryAmount',
      currency: 'KES',
      value: depositAmount
    },
    supply: [
      {
        '@type': 'HowToSupply',
        name: 'Valid ID (National ID or Passport)'
      },
      {
        '@type': 'HowToSupply',
        name: 'M-Pesa or Bank Account'
      },
      {
        '@type': 'HowToSupply',
        name: `Deposit Amount: KES ${depositAmount.toLocaleString()}`
      }
    ],
    step: [
      {
        '@type': 'HowToStep',
        name: 'Choose Your Phone',
        text: `Select ${product.name} from our catalog and click "Buy Now"`,
        image: `https://mdogomdogodeals.co.ke/assets/how-to-step1.jpg`
      },
      {
        '@type': 'HowToStep',
        name: 'Provide Details',
        text: 'Fill in your personal information and delivery address',
        image: `https://mdogomdogodeals.co.ke/assets/how-to-step2.jpg`
      },
      {
        '@type': 'HowToStep',
        name: 'Pay Deposit',
        text: `Pay the deposit of KES ${depositAmount.toLocaleString()} via M-Pesa or bank transfer`,
        image: `https://mdogomdogodeals.co.ke/assets/how-to-step3.jpg`
      },
      {
        '@type': 'HowToStep',
        name: 'Receive Your Phone',
        text: 'Get free delivery within 1-3 business days and start your daily payments',
        image: `https://mdogomdogodeals.co.ke/assets/how-to-step4.jpg`
      }
    ]
  };
}

// Generate VideoObject schema (if product has video)
export function generateVideoSchema(product: FlexibleProduct, videoData?: any) {
  if (!videoData) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    '@id': `https://mdogomdogodeals.co.ke/phones/${product.slug}#video`,
    name: `${product.name} Review and Unboxing`,
    description: `Watch our comprehensive review of ${product.name}. See the unboxing, features demonstration, and payment plan explanation for Kenya buyers.`,
    thumbnailUrl: videoData.thumbnail || `https://mdogomdogodeals.co.ke${product.source}`,
    uploadDate: videoData.uploadDate || new Date().toISOString(),
    duration: videoData.duration || 'PT5M30S',
    contentUrl: videoData.url,
    embedUrl: videoData.embedUrl,
    publisher: {
      '@type': 'Organization',
      name: 'Mdogo Mdogo Deals',
      logo: {
        '@type': 'ImageObject',
        url: 'https://mdogomdogodeals.co.ke/assets/logo.png'
      }
    },
    inLanguage: 'en-KE',
    isPartOf: {
      '@type': 'WebPage',
      url: `https://mdogomdogodeals.co.ke/phones/${product.slug}`
    }
  };
}

// Generate Article schema for product reviews/guides
export function generateArticleSchema(product: FlexibleProduct, articleData?: any) {
  const price = parseFloat(product.totalPrice.replace(/[^\d.]/g, ''));
  const depositAmount = parseFloat(product.deposit.replace(/[^\d.]/g, ''));

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `https://mdogomdogodeals.co.ke/phones/${product.slug}#article`,
    headline: articleData?.headline || `${product.name} Review: Complete Buying Guide for Kenya 2025`,
    description: articleData?.description || `Comprehensive review of ${product.name} including specifications, price analysis, and how to buy with Lipa Mdogo Mdogo payment plan in Kenya.`,
    image: `https://mdogomdogodeals.co.ke${product.source}`,
    author: {
      '@type': 'Person',
      name: articleData?.author || 'Mdogo Mdogo Deals Team',
      url: 'https://mdogomdogodeals.co.ke/about'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Mdogo Mdogo Deals',
      logo: {
        '@type': 'ImageObject',
        url: 'https://mdogomdogodeals.co.ke/assets/logo.png'
      }
    },
    datePublished: articleData?.datePublished || new Date().toISOString(),
    dateModified: articleData?.dateModified || new Date().toISOString(),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://mdogomdogodeals.co.ke/phones/${product.slug}`
    },
    articleSection: 'Mobile Phone Reviews',
    wordCount: articleData?.wordCount || 1500,
    inLanguage: 'en-KE',
    about: [
      {
        '@type': 'Thing',
        name: product.name
      },
      {
        '@type': 'Thing',
        name: 'Mobile Phone Financing Kenya'
      }
    ],
    mentions: [
      {
        '@type': 'Product',
        name: product.name,
        url: `https://mdogomdogodeals.co.ke/phones/${product.slug}`
      },
      {
        '@type': 'Organization',
        name: product.brand
      }
    ]
  };
}

// Generate Event schema for product launches or sales
export function generateEventSchema(product: FlexibleProduct, eventData?: any) {
  if (!eventData) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    '@id': `https://mdogomdogodeals.co.ke/events/${eventData.slug}#event`,
    name: eventData.name || `${product.name} Launch Event - Special Pricing`,
    description: eventData.description || `Join us for the official launch of ${product.name} in Kenya. Special launch pricing with reduced deposit requirements.`,
    startDate: eventData.startDate,
    endDate: eventData.endDate,
    location: {
      '@type': 'Place',
      name: eventData.location || 'Mdogo Mdogo Deals Store',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'CBD Center, Tom Mboya Street',
        addressLocality: 'Nairobi',
        addressRegion: 'Nairobi County',
        postalCode: '00100',
        addressCountry: 'KE'
      }
    },
    organizer: {
      '@type': 'Organization',
      name: 'Mdogo Mdogo Deals',
      url: 'https://mdogomdogodeals.co.ke'
    },
    offers: {
      '@type': 'Offer',
      price: eventData.specialPrice || parseFloat(product.totalPrice.replace(/[^\d.]/g, '')),
      priceCurrency: 'KES',
      availability: 'https://schema.org/InStock',
      url: `https://mdogomdogodeals.co.ke/phones/${product.slug}`
    },
    image: `https://mdogomdogodeals.co.ke${product.source}`,
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/MixedEventAttendanceMode'
  };
}

// Generate Review schema for individual product reviews
export function generateReviewSchema(product: FlexibleProduct, reviewData: any) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Review',
    '@id': `https://mdogomdogodeals.co.ke/phones/${product.slug}#review-${reviewData.id}`,
    itemReviewed: {
      '@type': 'Product',
      name: product.name,
      image: `https://mdogomdogodeals.co.ke${product.source}`,
      brand: {
        '@type': 'Brand',
        name: product.brand
      }
    },
    author: {
      '@type': 'Person',
      name: reviewData.author,
      location: {
        '@type': 'Place',
        name: reviewData.location || 'Kenya'
      }
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: reviewData.rating,
      bestRating: '5',
      worstRating: '1'
    },
    reviewBody: reviewData.reviewBody,
    datePublished: reviewData.datePublished,
    publisher: {
      '@type': 'Organization',
      name: 'Mdogo Mdogo Deals'
    },
    inLanguage: 'en-KE'
  };
}

// Master function to generate all schemas
export function generateAllSchemas(product: FlexibleProduct, additionalData?: {
  video?: any;
  article?: any;
  event?: any;
  reviews?: any[];
}) {
  const schemas: any = {
    product: JSON.parse(generateProductSchema(product)),
    breadcrumb: generateBreadcrumbSchema(product),
    website: generateWebsiteSchema(),
    organization: generateOrganizationSchema(),
    localBusiness: generateLocalBusinessSchema(),
    faq: generateFAQSchema(product),
    howTo: generateHowToSchema(product)
  };

  // Add optional schemas if data is provided
  if (additionalData?.video) {
    const videoSchema = generateVideoSchema(product, additionalData.video);
    if (videoSchema) {
      schemas.video = videoSchema;
    }
  }

  if (additionalData?.article) {
    schemas.article = generateArticleSchema(product, additionalData.article);
  }

  if (additionalData?.event) {
    const eventSchema = generateEventSchema(product, additionalData.event);
    if (eventSchema) {
      schemas.event = eventSchema;
    }
  }

  if (additionalData?.reviews && additionalData.reviews.length > 0) {
    schemas.reviews = additionalData.reviews.map(review => 
      generateReviewSchema(product, review)
    );
  }

  return schemas;
}

// Utility function to generate core schemas only (always safe)
export function generateCoreSchemas(product: FlexibleProduct) {
  return {
    product: JSON.parse(generateProductSchema(product)),
    breadcrumb: generateBreadcrumbSchema(product),
    website: generateWebsiteSchema(),
    organization: generateOrganizationSchema(),
    localBusiness: generateLocalBusinessSchema(),
    faq: generateFAQSchema(product),
    howTo: generateHowToSchema(product)
  };
}

// Utility function to get schema as JSON-LD script tags
export function generateSchemaScripts(product: FlexibleProduct, additionalData?: {
  video?: any;
  article?: any;
  event?: any;
  reviews?: any[];
}) {
  const allSchemas = generateAllSchemas(product, additionalData);
  const scripts: string[] = [];

  // Generate script tags for each schema
  Object.entries(allSchemas).forEach(([key, schema]) => {
    if (schema) {
      scripts.push(`<script type="application/ld+json">${JSON.stringify(schema, null, 2)}</script>`);
    }
  });

  return scripts;
}

export function generateCategorySchema(category: string, products: FlexibleProduct[], displayCategory: string) {
  const baseUrl = 'https://mdogomdogodeals.co.ke';
  
  // Generate ItemList schema for the category page
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": `${displayCategory} Products`,
    "description": `Browse our collection of ${displayCategory} products with flexible payment options`,
    "url": `${baseUrl}/category/${category}`,
    "numberOfItems": products.length,
    "itemListElement": products.map((product, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Product",
        "@id": `${baseUrl}/${product.slug}`,
        "name": product.name,
        "description": product.description || `${product.name} available with flexible payment options`,
        "image": `${baseUrl}${product.source}`,
        "url": `${baseUrl}/${product.slug}`,
        "brand": {
          "@type": "Brand",
          "name": product.brand || displayCategory
        },
        "offers": {
          "@type": "Offer",
          "priceCurrency": "KES",
          "price": parseFloat(product.totalPrice.replace(/[^\d.-]/g, '')),
          "priceValidUntil": new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
          "availability": "https://schema.org/InStock",
          "seller": {
            "@type": "Organization",
            "name": product.seller || "MdogoMdogoDeals"
          },
          "paymentAccepted": ["Cash", "Credit", "Installment"],
          "availableDeliveryMethod": "https://schema.org/DeliveryModeDirectDownload",
          "shippingDetails": {
            "@type": "OfferShippingDetails",
            "shippingRate": {
              "@type": "MonetaryAmount",
              "value": "0.00",
              "currency": "KES"
            },
            "shippingDestination": {
              "@type": "DefinedRegion",
              "addressCountry": "KE",
              "addressRegion": ["Nairobi", "Kiambu"]
            },
            "deliveryTime": {
              "@type": "ShippingDeliveryTime",
              "handlingTime": {
                "@type": "QuantitativeValue",
                "minValue": 0,
                "maxValue": 1,
                "unitCode": "d"
              },
              "transitTime": {
                "@type": "QuantitativeValue",
                "minValue": 0,
                "maxValue": 2,
                "unitCode": "d"
              }
            }
          },
          "hasMerchantReturnPolicy": {
            "@type": "MerchantReturnPolicy",
            "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
            "merchantReturnDays": 7,
            "returnMethod": "https://schema.org/ReturnInStore",
            "returnFees": "https://schema.org/FreeReturn",
            "applicableCountry": "KE"
          }
        },
        "aggregateRating": product.reviews ? {
          "@type": "AggregateRating",
          "ratingValue": product.reviews.averageRating,
          "reviewCount": product.reviews.reviewCount,
          "bestRating": 5,
          "worstRating": 1
        } : undefined
      }
    }))
  };

  // Generate CollectionPage schema
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": `${displayCategory} Products - MdogoMdogoDeals`,
    "description": `Explore our ${displayCategory} collection with flexible payment options. Pay small deposits and daily installments.`,
    "url": `${baseUrl}/category/${category}`,
    "mainEntity": itemListSchema,
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": baseUrl
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Categories",
          "item": `${baseUrl}/categories`
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": displayCategory,
          "item": `${baseUrl}/category/${category}`
        }
      ]
    },
    "publisher": {
      "@type": "Organization",
      "name": "MdogoMdogoDeals",
      "url": baseUrl,
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/logo.png`
      }
    }
  };

  return [collectionSchema, itemListSchema];
}


export function generateHomepageSchema(products: FlexibleProduct[]) {
  const baseUrl = 'https://mdogomdogodeals.co.ke';
  
  // Main organization schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${baseUrl}#organization`,
    "name": "Lipa Mdogo Mdogo Phones",
    "alternateName": ["Mdogo Mdogo Deals", "MMD Kenya"],
    "url": baseUrl,
    "logo": {
      "@type": "ImageObject",
      "url": `${baseUrl}/assets/logo.png`,
      "width": 300,
      "height": 150
    },
    "description": "Kenya's leading mobile phone retailer offering flexible payment plans through Lipa Mdogo Mdogo system. Buy smartphones with daily payments starting from KES 50.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "CBD Center",
      "addressLocality": "Nairobi",
      "addressRegion": "Nairobi County", 
      "postalCode": "00100",
      "addressCountry": "KE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -1.2921,
      "longitude": 36.8219
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+254-700-000-000",
      "contactType": "customer service",
      "availableLanguage": ["English", "Swahili"],
      "areaServed": "KE"
    },
    "sameAs": [
      "https://www.facebook.com/mdogomdogodeals",
      "https://twitter.com/mdogomdogodeals", 
      "https://www.instagram.com/mdogomdogodeals"
    ],
    "areaServed": kenyaLocationData.counties.map(county => ({
      "@type": "AdministrativeArea",
      "name": county,
      "addressCountry": "KE"
    }))
  };

  // ItemList schema for products on homepage
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Featured Mobile Phones - Lipa Mdogo Mdogo",
    "description": "Browse our featured collection of smartphones with flexible payment options in Kenya",
    "url": baseUrl,
    "numberOfItems": products.length,
    "itemListElement": products.map((product, index) => {
      const price = parseFloat(product.totalPrice.replace(/[^\d.]/g, ''));
      const depositAmount = parseFloat(product.deposit.replace(/[^\d.]/g, ''));
      const dailyAmount = parseFloat(product.daily.replace(/[^\d.]/g, ''));
      
      return {
        "@type": "ListItem", 
        "position": index + 1,
        "item": {
          "@type": "Product",
          "@id": `${baseUrl}/phones/${product.slug}`,
          "name": product.name,
          "description": product.description || `${product.name} available with flexible payment options in Kenya`,
          "image": `${baseUrl}${product.source}`,
          "url": `${baseUrl}/phones/${product.slug}`,
          "sku": product.slug,
          "brand": {
            "@type": "Brand",
            "name": product.brand
          },
          "category": "Mobile Phones",
          "offers": {
            "@type": "Offer",
            "@id": `${baseUrl}/phones/${product.slug}#offer`,
            "priceCurrency": "KES",
            "price": price,
            "priceValidUntil": new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
            "availability": "https://schema.org/InStock",
            "itemCondition": "https://schema.org/NewCondition",
            "seller": {
              "@type": "Organization", 
              "name": product.seller || "Lipa Mdogo Mdogo Phones",
              "@id": `${baseUrl}#organization`
            },
            "priceSpecification": [
              {
                "@type": "UnitPriceSpecification",
                "price": depositAmount,
                "priceCurrency": "KES", 
                "name": "Deposit Amount"
              },
              {
                "@type": "UnitPriceSpecification",
                "price": dailyAmount,
                "priceCurrency": "KES",
                "name": "Daily Payment"
              }
            ],
            "shippingDetails": {
              "@type": "OfferShippingDetails",
              "shippingRate": {
                "@type": "MonetaryAmount",
                "value": "0",
                "currency": "KES"
              },
              "shippingDestination": {
                "@type": "DefinedRegion", 
                "addressCountry": "KE",
                "addressRegion": ["Nairobi County", "Kiambu County"]
              }
            },
            "acceptedPaymentMethod": [
              "https://schema.org/CreditCard",
              "https://schema.org/PaymentMethodCreditCard",
              {
                "@type": "PaymentMethod",
                "name": "M-Pesa"
              }
            ]
          },
          // Add reviews if available
          ...(product.reviews && product.reviews.reviewCount > 0 && {
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": product.reviews.averageRating,
              "reviewCount": product.reviews.reviewCount,
              "bestRating": "5",
              "worstRating": "1"
            }
          })
        }
      };
    })
  };

  // Website schema  
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}#website`, 
    "url": baseUrl,
    "name": "Lipa Mdogo Mdogo Phones",
    "description": "Kenya's premier mobile phone retailer offering flexible payment plans",
    "publisher": {
      "@id": `${baseUrl}#organization`
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${baseUrl}/search?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    },
    "inLanguage": "en-KE"
  };

  // Combine all schemas into single JSON-LD
  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema,
      websiteSchema, 
      itemListSchema
    ]
  };

  return JSON.stringify(combinedSchema, null, 2);
}

// Modified function to handle different page types
export function generatePageSchema(pageType: 'homepage' | 'product', data: any) {
  if (pageType === 'homepage') {
    return generateHomepageSchema(data.products);
  } else if (pageType === 'product') {
    return generateProductSchema(data.product);
  }
  
  return null;
}