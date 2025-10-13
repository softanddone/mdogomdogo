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

// FIXED: Single Return Policy instance - create once and reuse
const SHARED_RETURN_POLICY = {
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
};

// FIXED: Return a reference to the shared policy instead of creating new ones
const generateReturnPolicy = () => SHARED_RETURN_POLICY;

// FIXED: Single Delivery Time instance - create once and reuse
const SHARED_DELIVERY_TIME = {
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
};

const generateDeliveryTime = () => SHARED_DELIVERY_TIME;

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

      // FIXED: Use reference to shared return policy
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

    // Rest of your existing schema properties...
    // [I'm keeping the rest of the properties as they were to save space, but they remain unchanged]

    // Additional properties for SEO
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
      }
    ],

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
    operatingSystem: product.version || 'Android'
  };

  return JSON.stringify(structuredData, null, 2);
}

// FIXED: Updated category schema to use shared return policy
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
          // FIXED: Use reference to shared return policy
          "hasMerchantReturnPolicy": generateReturnPolicy()
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

// FIXED: Updated homepage schema to use shared return policy
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
          "sku":  generateValidSKU(product.slug, product.id),
          "brand": {
            "@type": "Brand",
            "name": product.brand
          },
          "category": "Mobile Phones",
          "offers": {
            "@type": "Offer",
            // FIXED: Use reference to shared return policy
            "hasMerchantReturnPolicy": generateReturnPolicy(),
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

// FIXED: Updated event schema to use shared return policy
export function generateEventSchema(product: FlexibleProduct, eventData?: any) {
  if (!eventData) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    '@id': `https://mdogomdogodeals.co.ke/events/${eventData.slug}#event`,
    'name': eventData.name || `${product.name} Launch Event - Special Pricing`,
    'description': eventData.description || `Join us for the official launch of ${product.name} in Kenya. Special launch pricing with reduced deposit requirements.`,
    'startDate': eventData.startDate,
    'endDate': eventData.endDate,
    'location': {
      '@type': 'Place',
      'name': eventData.location || 'Mdogo Mdogo Deals Store',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'CBD Center, Tom Mboya Street',
        'addressLocality': 'Nairobi',
        'addressRegion': 'Nairobi County',
        'postalCode': '00100',
        'addressCountry': 'KE'
      }
    },
    'organizer': {
      '@type': 'Organization',
      'name': 'Mdogo Mdogo Deals',
      'url': 'https://mdogomdogodeals.co.ke'
    },
    'offers': {
      '@type': 'Offer',
      'price': eventData.specialPrice || parseFloat(product.totalPrice.replace(/[^\d.]/g, '')),
      'priceCurrency': 'KES',
      'availability': 'https://schema.org/InStock',
      'url': `https://mdogomdogodeals.co.ke/phones/${product.slug}`,
      // FIXED: Use reference to shared return policy
      'hasMerchantReturnPolicy': generateReturnPolicy()
    },
    'image': `https://mdogomdogodeals.co.ke${product.source}`,
    'eventStatus': 'https://schema.org/EventScheduled',
    'eventAttendanceMode': 'https://schema.org/MixedEventAttendanceMode'
  };
}

// Additional utility functions (unchanged)
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
    }
  };
}

// Modified function to handle different page types
export function generatePageSchema(pageType: 'homepage' | 'product', data: any) {
  if (pageType === 'homepage') {
    return generateHomepageSchema(data.products);
  } else if (pageType === 'product') {
    return generateProductSchema(data.product);
  }
  
  return null;}



  // Add this function to your structureData.ts file

export function generateFAQSchema(product: FlexibleProduct, customFAQs?: Array<{question: string, answer: string}>) {
  // Default FAQs if none provided
  const defaultFAQs = [
    {
      question: `How does the credit payment work for ${product.name}?`,
      answer: `Pay ${product.deposit} deposit, then ${product.daily} daily until fully paid. No hidden fees. Total price is ${product.totalPrice}. Available through ${product.seller} and other credit providers.`
    },
    {
      question: "Is delivery free in Nairobi?",
      answer: "Yes, we offer free same-day delivery within Nairobi CBD. Outer areas may have a small delivery fee. We deliver throughout Kenya."
    },
    {
      question: "What if I miss a payment?",
      answer: "Contact your provider immediately. Most offer flexible payment options and will work with you to find a solution."
    },
    {
      question: `Is the ${product.name} genuine?`,
      answer: `Yes, all our ${product.name} phones are 100% genuine with warranty. We source directly from authorized distributors in Kenya.`
    },
    {
      question: `What's included with the ${product.name}?`,
      answer: `The package includes the ${product.name} phone, original charger, USB cable, SIM ejector tool, user manual, and warranty card. All items are brand new and sealed.`
    },
    {
      question: "Can I upgrade my phone later?",
      answer: "Yes, you can trade in your phone for an upgrade after completing at least 60% of your payment plan. Contact our customer service for trade-in values."
    }
  ];

  const faqs = customFAQs || defaultFAQs;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `https://mdogomdogodeals.co.ke/phones/${product.slug}#faq`,
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

// Optional: Generate product-specific How-To schema for setup guides
export function generateHowToSchema(product: FlexibleProduct) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "@id": `https://mdogomdogodeals.co.ke/phones/${product.slug}#howto`,
    "name": `How to Buy ${product.name} on Credit in Kenya`,
    "description": `Step-by-step guide to purchasing ${product.name} through our flexible payment plan`,
    "image": `https://mdogomdogodeals.co.ke${product.source}`,
    "totalTime": "PT15M",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "KES",
      "value": product.deposit.replace(/[^\d]/g, '')
    },
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Choose Your Phone",
        "text": `Select the ${product.name} from our catalog`,
        "url": `https://mdogomdogodeals.co.ke/phones/${product.slug}`
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Apply for Credit",
        "text": "Click 'Apply for Credit Now' and fill out the simple application form with your ID and phone number",
        "itemListElement": [
          {
            "@type": "HowToDirection",
            "text": "Provide your national ID number"
          },
          {
            "@type": "HowToDirection",
            "text": "Enter your M-Pesa registered phone number"
          }
        ]
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Get Instant Approval",
        "text": "Receive approval within minutes via SMS",
        "itemListElement": [
          {
            "@type": "HowToDirection",
            "text": "Wait for SMS confirmation (usually under 5 minutes)"
          }
        ]
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Pay Deposit",
        "text": `Pay the ${product.deposit} deposit via M-Pesa to the number provided in your approval SMS`,
        "itemListElement": [
          {
            "@type": "HowToDirection",
            "text": "Go to M-Pesa menu"
          },
          {
            "@type": "HowToDirection",
            "text": "Select Lipa na M-Pesa"
          },
          {
            "@type": "HowToDirection",
            "text": `Enter the paybill and amount ${product.deposit}`
          }
        ]
      },
      {
        "@type": "HowToStep",
        "position": 5,
        "name": "Receive Your Phone",
        "text": "Get free delivery within 24 hours in Nairobi or 2-3 days countrywide",
        "itemListElement": [
          {
            "@type": "HowToDirection",
            "text": "Track your delivery via SMS"
          },
          {
            "@type": "HowToDirection",
            "text": "Receive and inspect your phone upon delivery"
          }
        ]
      },
      {
        "@type": "HowToStep",
        "position": 6,
        "name": "Start Daily Payments",
        "text": `Make daily payments of ${product.daily} via M-Pesa until the phone is fully paid`,
        "itemListElement": [
          {
            "@type": "HowToDirection",
            "text": "Receive daily payment reminders via SMS"
          },
          {
            "@type": "HowToDirection",
            "text": "Pay anytime using M-Pesa to the provided paybill"
          }
        ]
      }
    ]
  };
}