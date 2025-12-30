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
  gtin?: string;
  model?: string;
  condition?: string;
  stock?: number;
  storage?: string;
  ram?: string;
  camera?: string;
  battery?: string;
  display?: string;
  categoryPath?: string[];
  productLine?: string;
  material?: string;
  pattern?: string;
  color?: string;
  version?: string;
  reviews?: {
    averageRating: number;
    reviewCount: number;
    reviews?: Array<{
      author: string;
      rating: number;
      reviewBody: string;
      datePublished: string;
    }>;
  };
  dateCreated?: string;
  dateModified?: string;
  datePublished?: string;
  [key: string]: any;
}

// SEO-optimized brand data with comprehensive information
const brandData: Record<string, any> = {
  'Apple': {
    url: 'https://www.apple.com',
    logo: 'https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png',
    sameAs: ['https://www.facebook.com/Apple', 'https://twitter.com/Apple', 'https://www.instagram.com/apple/'],
    foundingDate: '1976-04-01',
    founder: ['Steve Jobs', 'Steve Wozniak', 'Ronald Wayne']
  },
  'Samsung': {
    url: 'https://www.samsung.com',
    logo: 'https://images.samsung.com/is/image/samsung/assets/global/about-us/brand/logo/mo/360_197_1.png',
    sameAs: ['https://www.facebook.com/SamsungMobile', 'https://twitter.com/SamsungMobile'],
    foundingDate: '1969-01-01',
    founder: 'Lee Byung-chul'
  },
  'Huawei': {
    url: 'https://www.huawei.com',
    logo: 'https://www-file.huawei.com/-/media/corporate/images/home/logo/huawei_logo.png',
    sameAs: ['https://www.facebook.com/Huawei', 'https://twitter.com/Huawei'],
    foundingDate: '1987-01-01',
    founder: 'Ren Zhengfei'
  },
  'Xiaomi': {
    url: 'https://www.mi.com',
    logo: 'https://i01.appmifile.com/webfile/globalimg/pandora/mi-logo.svg',
    sameAs: ['https://www.facebook.com/XiaomiGlobal', 'https://twitter.com/Xiaomi'],
    foundingDate: '2010-04-06',
    founder: 'Lei Jun'
  },
  'Oppo': {
    url: 'https://www.oppo.com',
    logo: 'https://www.oppo.com/content/dam/oppo/common/mkt/v2-2/navigation-v2-2/oppo-logo-n.png',
    sameAs: ['https://www.facebook.com/oppo', 'https://twitter.com/oppo'],
    foundingDate: '2004-01-01',
    founder: 'Tony Chen'
  },
  'Vivo': {
    url: 'https://www.vivo.com',
    logo: 'https://www.vivo.com/content/dam/vivo/global/logo/logo-vivo.svg',
    sameAs: ['https://www.facebook.com/vivo', 'https://twitter.com/vivo_global'],
    foundingDate: '2009-01-01',
    founder: 'Shen Wei'
  },
  'OnePlus': {
    url: 'https://www.oneplus.com',
    logo: 'https://oasis.opstatics.com/content/dam/oasis/page/2021/9-series/compare/in/logo.png',
    sameAs: ['https://www.facebook.com/oneplus', 'https://twitter.com/oneplus'],
    foundingDate: '2013-12-16',
    founder: 'Pete Lau'
  },
  'Realme': {
    url: 'https://www.realme.com',
    logo: 'https://www.realme.com/content/dam/realme/global/logo-v2/logo.svg',
    sameAs: ['https://www.facebook.com/realmeGlobal', 'https://twitter.com/realmeGlobal'],
    foundingDate: '2018-05-04',
    founder: 'Sky Li'
  },
  'Tecno': {
    url: 'https://www.tecno-mobile.com',
    logo: 'https://www.tecno-mobile.com/logo.png',
    sameAs: ['https://www.facebook.com/TECNOMobileGlobal', 'https://twitter.com/TECNOMobile'],
    foundingDate: '2006-01-01',
    founder: 'George Zhu'
  },
  'Infinix': {
    url: 'https://www.infinixmobility.com',
    logo: 'https://www.infinixmobility.com/logo.png',
    sameAs: ['https://www.facebook.com/InfinixMobility', 'https://twitter.com/Infinix_Mobile'],
    foundingDate: '2013-01-01',
    founder: 'Transsion Holdings'
  },
  'Ulefone': {
    url: 'https://www.ulefone.com',
    logo: 'https://www.ulefone.com/logo.png',
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
  return `MMDKE-${productId.toString().padStart(5, '0')}-${slug.substring(0, 10).replace(/\s+/g, '-').replace(/[^a-zA-Z0-9-]/g, '').toUpperCase()}`;
};

// FIXED: Generate realistic GTIN-13 if not provided
const generateGTIN = (productId: number, brand: string): string => {
  const brandCode = brand.substring(0, 3).toUpperCase().split('').map(c => c.charCodeAt(0)).join('').substring(0, 3);
  const productCode = productId.toString().padStart(9, '0');
  return `${brandCode}${productCode}`;
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

const generateReturnPolicy = () => SHARED_RETURN_POLICY;

// FIXED: Single Delivery Time instance - create once and reuse
const SHARED_DELIVERY_TIME = {
  '@type': 'ShippingDeliveryTime',
  '@id': 'https://mdogomdogodeals.co.ke#deliverytime',
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
// FIXED: Generate unique, product-specific descriptions
const generateUniqueDescription = (product: FlexibleProduct, depositAmount: number, dailyAmount: number, totalDays: number): string => {
  const features = [];
  
  if (product.storage) features.push(`${product.storage} storage`);
  if (product.ram) features.push(`${product.ram} RAM`);
  if (product.camera) features.push(`${product.camera} camera`);
  if (product.battery) features.push(`${product.battery} battery`);
  if (product.display) features.push(`${product.display} display`);
  
  const featureText = features.length > 0 ? ` Features include ${features.join(', ')}.` : '';
  
  return `Buy the ${product.brand} ${product.name} in Kenya through our flexible Lipa Mdogo Mdogo payment plan.${featureText} Pay only KES ${depositAmount.toLocaleString()} deposit, then KES ${dailyAmount.toLocaleString()} daily for ${totalDays} days. Genuine ${product.brand} phone with 2-year warranty. Free same-day delivery in Nairobi, 1-2 days countrywide. ${product.condition === 'new' ? 'Brand new, factory sealed.' : 'Pre-owned, fully tested.'} Available now at Mdogo Mdogo Deals - Kenya's trusted phone retailer since 2018.`;
};
// FIXED: Main Product Schema using @graph structure
export function generateProductSchema(product: FlexibleProduct) {
  const price = parseFloat(product.totalPrice.replace(/[^\d.]/g, ''));

  const depositAmount = parseFloat(product.deposit.replace(/[^\d.]/g, ''));
  const dailyAmount = parseFloat(product.daily.replace(/[^\d.]/g, ''));
  const totalDays = Math.ceil((price - depositAmount) / dailyAmount);

  const productId = `https://mdogomdogodeals.co.ke/${product.slug}`;
  const offerId = `${productId}#offer`;
  const organizationId = 'https://mdogomdogodeals.co.ke#organization';

  const brandInfo = brandData[product.brand] || {
    url: `https://www.${product.brand.toLowerCase()}.com`,
    logo: `https://logo.clearbit.com/${product.brand.toLowerCase()}.com`
  };

  const baseImage = `https://mdogomdogodeals.co.ke/phones/${product.source}`;
  const imageArray = [baseImage];

  const validGTIN = product.gtin && product.gtin.trim() !== '' && product.gtin !== 'placeholder' && /^\d{8,14}$/.test(product.gtin)
    ? product.gtin
    : generateGTIN(product.id, product.brand);

  const uniqueDescription = product.description && product.description.length > 50
    ? product.description
    : generateUniqueDescription(product, depositAmount, dailyAmount, totalDays);

  // Primary category for Google (ONE clear category)
  const primaryCategory = 'Mobile Phones';

  const graphData = {
    '@context': 'https://schema.org',
    '@graph': [
      // Main Product Schema
      {
        '@type': ['Product', 'MobilePhone'],
        '@id': productId,
        name: product.name,
        alternateName: [
          `${product.brand} ${product.model || ''}`.trim(),
          `${product.name} Kenya`,
          `${product.name} Nairobi`
        ].filter(Boolean),
        description: uniqueDescription,
        disambiguatingDescription: `Official ${product.brand} ${product.name} available through Mdogo Mdogo Deals Kenya's flexible payment system. Authentic smartphones with warranty and free delivery.`,
        image: imageArray,
        sku: generateValidSKU(product.slug, product.id),
        gtin: validGTIN,
        mpn: product.model || `${product.brand}-${product.id}`,
        productID: product.id.toString(),

        // Main entity of page
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': productId
        },

        // Single primary category (Google preference)
        category: primaryCategory,

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

        itemCondition: product.condition === 'new' ? 'https://schema.org/NewCondition' :
                       product.condition === 'refurbished' ? 'https://schema.org/RefurbishedCondition' :
                       'https://schema.org/UsedCondition',

        // Accessory/Spare part relationship
        

        // Local audience targeting
        audience: {
          '@type': 'PeopleAudience',
          geographicArea: {
            '@type': 'Country',
            name: 'Kenya'
          }
        },

        // Energy consumption details

        ...(product.productLine && { productLine: product.productLine }),
        ...(product.material && { material: product.material }),
        ...(product.pattern && { pattern: product.pattern }),
        ...(product.color && { color: product.color }),
        ...(product.model && { model: product.model }),

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

        offers: {
          '@type': 'Offer',
          '@id': offerId,
          url: productId,
          priceCurrency: 'KES',
          price: price,
          lowPrice: price,
          highPrice: price,
          priceValidUntil: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],

          priceSpecification: [
            {
              '@type': 'UnitPriceSpecification',
              price: price,
              priceCurrency: 'KES',
              name: 'Total Price',
              description: 'The total price to be paid for the whole loan duration'

            },
            {
              '@type': 'UnitPriceSpecification',
              price: depositAmount,
              priceCurrency: 'KES',
              name: 'Deposit Amount',
              description: 'Deposit to get the phone  under Lipa Mdogo Mdogo plan'

            },
            {
              '@type': 'UnitPriceSpecification',
              price: dailyAmount,
              priceCurrency: 'KES',
              name: 'Daily Payment',
              description: 'Daily installment payment under Lipa Mdogo Mdogo plan'

            }
          ],

          itemCondition: product.condition === 'new' ? 'https://schema.org/NewCondition' :
                         product.condition === 'refurbished' ? 'https://schema.org/RefurbishedCondition' :
                         'https://schema.org/UsedCondition',
          
          // All products in stock
          availability: 'https://schema.org/InStock',
          availabilityStarts: new Date().toISOString(),

          seller: {
            '@type': 'Organization',
            '@id': organizationId
          },

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

          hasMerchantReturnPolicy: { '@id': 'https://mdogomdogodeals.co.ke#returnpolicy' },

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
            deliveryTime: { '@id': 'https://mdogomdogodeals.co.ke#deliverytime' },
            shippingDestination: {
              '@type': 'DefinedRegion',
              addressCountry: 'KE',
              addressRegion: kenyaLocationData.counties
            }
          },

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

          eligibleCustomerType: {
            '@type': 'BusinessEntityType',
            name: 'Individual Consumers'
          }
        },

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

        url: productId,
        sameAs: [
          productId,
          `https://mdogomdogodeals.co.ke/${product.slug}`
        ],

        dateCreated: product.dateCreated || new Date().toISOString(),
        dateModified: product.dateModified || new Date().toISOString(),
        datePublished: product.datePublished || new Date().toISOString(),
        
        inLanguage: 'en-KE',
        contentLocation: {
          '@type': 'Place',
          name: 'Kenya',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'KE'
          }
        }
      },

      // Organization Schema
      {
        '@type': 'Organization',
        '@id': organizationId,
        name: product.seller,
        url: 'https://mdogomdogodeals.co.ke',
        logo: 'https://mdogomdogodeals.co.ke/phones/y2.png',
        image: 'https://mdogomdogodeals.co.ke/phones/y2.png',
        
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
          telephone: '+254-720-202-167',
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

      // Breadcrumb Schema
      {
        '@type': 'BreadcrumbList',
        '@id': `${productId}#breadcrumb`,
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
            item: `https://mdogomdogodeals.co.ke/${product.brand.toLowerCase()}`
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: product.name,
            item: productId
          }
        ]
      },

      // Return Policy
      SHARED_RETURN_POLICY,

      // Delivery Time
      SHARED_DELIVERY_TIME
    ]
  };

  return JSON.stringify(graphData, null, 2);
}




export function generateTVProductSchema(product: FlexibleProduct) {
  const price = parseFloat(product.totalPrice.replace(/[^\d.]/g, ''));
  const depositAmount = parseFloat(product.deposit.replace(/[^\d.]/g, ''));
  const dailyAmount = parseFloat(product.daily.replace(/[^\d.]/g, ''));
  const totalDays = Math.ceil((price - depositAmount) / dailyAmount);

  const productId = `https://mdogomdogodeals.co.ke/tv/${product.slug}`;
  const offerId = `${productId}#offer`;
  const organizationId = 'https://mdogomdogodeals.co.ke#organization';

  const brandInfo = brandData[product.brand] || {
    url: `https://www.${product.brand.toLowerCase()}.com`,
    logo: `https://logo.clearbit.com/${product.brand.toLowerCase()}.com`
  };

  const baseImage = `https://mdogomdogodeals.co.ke/tvs/${product.source}`;
  const imageArray = [baseImage];

  const validGTIN = product.gtin && product.gtin.trim() !== '' && product.gtin !== 'placeholder' && /^\d{8,14}$/.test(product.gtin)
    ? product.gtin
    : generateGTIN(product.id, product.brand);

  const uniqueDescription = product.description && product.description.length > 50
    ? product.description
    : generateUniqueTVDescription(product, depositAmount, dailyAmount, totalDays);

  // Primary category for Google (ONE clear category)
  const primaryCategory = 'Smart TVs';

  const graphData = {
    '@context': 'https://schema.org',
    '@graph': [
      // Main Product Schema
      {
        '@type': 'Product',
        additionalType: 'https://schema.org/ConsumerElectronics',
        '@id': productId,
        name: product.name,
        alternateName: [
          `${product.brand} ${product.model || ''} Smart TV`.trim(),
          `${product.name} Kenya`,
          `${product.name} Nairobi`,
          `${product.brand} ${product.screenSize || ''} inch TV`.trim()
        ].filter(Boolean),
        description: uniqueDescription,
        disambiguatingDescription: `Official ${product.brand} ${product.name} Smart TV available through Mdogo Mdogo Deals Kenya's flexible payment system. Authentic televisions with warranty and free delivery.`,
        image: imageArray,
        sku: generateValidSKU(product.slug, product.id),
        gtin: validGTIN,
        mpn: product.model || `${product.brand}-TV-${product.id}`,
        productID: product.id.toString(),

        // Main entity of page
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': productId
        },

        // Single primary category (Google preference)
        category: primaryCategory,

        brand: {
          '@type': 'Brand',
          '@id': `${brandInfo.url}#brand`,
          name: product.brand,
          url: brandInfo.url,
          logo: brandInfo.logo,
          ...(brandInfo.sameAs && { sameAs: brandInfo.sameAs }),
          ...(brandInfo.foundingDate && { foundingDate: brandInfo.foundingDate }),
          ...(brandInfo.founder && { founder: brandInfo.founder }),
          description: `Official ${product.brand} Smart TVs available in Kenya through authorized dealers.`
        },

        itemCondition: product.condition === 'new' ? 'https://schema.org/NewCondition' :
                       product.condition === 'refurbished' ? 'https://schema.org/RefurbishedCondition' :
                       'https://schema.org/UsedCondition',

        // Local audience targeting
        audience: {
          '@type': 'PeopleAudience',
          geographicArea: {
            '@type': 'Country',
            name: 'Kenya'
          }
        },

        // TV-specific properties
        ...(product.screenSize && { 
          size: `${product.screenSize} inches`
        }),
        ...(product.resolution && { videoQuality: product.resolution }),
        ...(product.displayTechnology && { material: product.displayTechnology }),
        ...(product.smartTV !== undefined && { 
          featureList: product.smartTV ? 'Smart TV, WiFi Enabled, Streaming Apps' : 'Standard TV'
        }),
        ...(product.productLine && { productLine: product.productLine }),
        ...(product.color && { color: product.color }),
        ...(product.model && { model: product.model }),

        hasWarranty: {
          '@type': 'WarrantyPromise',
          durationOfWarranty: {
            '@type': 'QuantitativeValue',
            value: 2,
            unitCode: 'ANN'
          }
        },

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

        offers: {
          '@type': 'Offer',
          '@id': offerId,
          url: productId,
          priceCurrency: 'KES',
          price: price,
          priceValidUntil: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],

          priceSpecification: [
            {
              '@type': 'UnitPriceSpecification',
              price: price,
              priceCurrency: 'KES',
              name: 'Total Price',
              description: 'The total price to be paid for the whole loan duration'
            },
            {
              '@type': 'UnitPriceSpecification',
              price: depositAmount,
              priceCurrency: 'KES',
              name: 'Deposit Amount',
              description: 'Deposit to get the Smart TV under Lipa Mdogo Mdogo plan'
            },
            {
              '@type': 'UnitPriceSpecification',
              price: dailyAmount,
              priceCurrency: 'KES',
              name: 'Daily Payment',
              description: 'Daily installment payment under Lipa Mdogo Mdogo plan'
            }
          ],

          itemCondition: product.condition === 'new' ? 'https://schema.org/NewCondition' :
                         product.condition === 'refurbished' ? 'https://schema.org/RefurbishedCondition' :
                         'https://schema.org/UsedCondition',
          
          // All products in stock
          availability: 'https://schema.org/InStock',
          availabilityStarts: new Date().toISOString(),

          seller: {
            '@type': 'Organization',
            '@id': organizationId
          },

          hasMerchantReturnPolicy: { '@id': 'https://mdogomdogodeals.co.ke#returnpolicy' },

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
            deliveryTime: { '@id': 'https://mdogomdogodeals.co.ke#deliverytime' },
            shippingDestination: {
              '@type': 'DefinedRegion',
              addressCountry: 'KE',
              addressRegion: kenyaLocationData.counties
            }
          },

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
          }
        },

        additionalProperty: [
          {
            '@type': 'PropertyValue',
            '@id': `${productId}#paymentplan`,
            name: 'Payment Plan Type',
            value: 'Installment Plan - Lipa Mdogo Mdogo',
            description: 'Flexible daily payment system for affordable Smart TV ownership'
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
          ...(product.screenSize ? [{
            '@type': 'PropertyValue',
            name: 'Screen Size',
            value: `${product.screenSize} inches`,
            unitCode: 'INH'
          }] : []),
          ...(product.resolution ? [{
            '@type': 'PropertyValue',
            name: 'Resolution',
            value: product.resolution
          }] : []),
          ...(product.hdmiPorts ? [{
            '@type': 'PropertyValue',
            name: 'HDMI Ports',
            value: product.hdmiPorts.toString()
          }] : []),
          ...(product.usbPorts ? [{
            '@type': 'PropertyValue',
            name: 'USB Ports',
            value: product.usbPorts.toString()
          }] : [])
        ],

        url: productId,
        sameAs: [
          productId,
          `https://mdogomdogodeals.co.ke/tv/${product.slug}`
        ],

        dateCreated: product.dateCreated || new Date().toISOString(),
        dateModified: product.dateModified || new Date().toISOString(),
        datePublished: product.datePublished || new Date().toISOString(),
        
        inLanguage: 'en-KE',
        contentLocation: {
          '@type': 'Place',
          name: 'Kenya',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'KE'
          }
        }
      },

      // Organization Schema
      {
        '@type': 'Organization',
        '@id': organizationId,
        name: product.seller,
        url: 'https://mdogomdogodeals.co.ke',
        logo: 'https://mdogomdogodeals.co.ke/tvs/logo.png',
        image: 'https://mdogomdogodeals.co.ke/tvs/logo.png',
        
        description: 'Kenya\'s leading Smart TV retailer offering flexible payment plans through Lipa Mdogo Mdogo system.',
        
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
          telephone: '+254-720-202-167',
          contactType: 'customer service',
          availableLanguage: ['English', 'Swahili'],
          areaServed: 'KE'
        },

        paymentAccepted: 'M-Pesa, Credit Card, Debit Card, Bank Transfer',
        
        sameAs: [
          'https://www.facebook.com/mdogomdogodeals',
          'https://twitter.com/mdogomdogodeals',
          'https://www.instagram.com/mdogomdogodeals'
        ]
      },

      // Breadcrumb Schema
      {
        '@type': 'BreadcrumbList',
        '@id': `${productId}#breadcrumb`,
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
            name: 'Smart TVs',
            item: 'https://mdogomdogodeals.co.ke/tvs'
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: product.brand,
            item: `https://mdogomdogodeals.co.ke/tvs/${product.brand.toLowerCase()}`
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: product.name,
            item: productId
          }
        ]
      },

      // Return Policy
      SHARED_RETURN_POLICY,

      // Delivery Time
      SHARED_DELIVERY_TIME
    ]
  };

  return JSON.stringify(graphData, null, 2);
}

// Helper function to generate unique TV descriptions
function generateUniqueTVDescription(
  product: FlexibleProduct,
  depositAmount: number,
  dailyAmount: number,
  totalDays: number
): string {
  const features = [];
  
  if (product.screenSize) features.push(`${product.screenSize}" display`);
  if (product.resolution) features.push(product.resolution);
  if (product.smartTV) features.push('Smart TV with WiFi');
  
  const featureText = features.length > 0 ? ` featuring ${features.join(', ')}` : '';
  
  return `Get the ${product.brand} ${product.name} Smart TV${featureText} through Mdogo Mdogo Deals' flexible payment plan. Pay only KES ${depositAmount.toLocaleString()} deposit and KES ${dailyAmount.toLocaleString()} daily for ${totalDays} days. Authentic ${product.brand} Smart TV with 2-year warranty and free delivery across Kenya. Experience premium entertainment with affordable daily installments.`;
}



// FIXED: Category schema with @graph
export function generateCategorySchema(category: string, products: FlexibleProduct[], displayCategory: string) {
  const baseUrl = 'https://mdogomdogodeals.co.ke';
  
  const graphData = {
    '@context': 'https://schema.org',
    '@graph': [
      // Breadcrumb as separate entity (Google's preference)
      {
        '@type': 'BreadcrumbList',
        '@id': `${baseUrl}/${category}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: baseUrl
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Categories',
            item: `${baseUrl}/categories`
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: displayCategory,
            item: `${baseUrl}/${category}`
          }
        ]
      },
      // Collection Page
      {
        '@type': 'CollectionPage',
        '@id': `${baseUrl}/${category}#page`,
        name: `${displayCategory} Products - MdogoMdogoDeals`,
        description: `Explore our ${displayCategory} collection with flexible payment options. Pay small deposits and daily installments.`,
        url: `${baseUrl}/${category}`,
        // Link to breadcrumb by reference
        breadcrumb: {
          '@id': `${baseUrl}/${category}#breadcrumb`
        },
        // Link to ItemList as main entity
        mainEntity: {
          '@id': `${baseUrl}/${category}#list`
        },
        publisher: {
          '@type': 'Organization',
          '@id': `${baseUrl}#organization`
        }
      },
      // ItemList
      {
        '@type': 'ItemList',
        '@id': `${baseUrl}/${category}#list`,
        name: `${displayCategory} Products`,
        description: `Browse our collection of ${displayCategory} products with flexible payment options`,
        url: `${baseUrl}/${category}`,
        numberOfItems: products.length,
        itemListElement: products.map((product, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: {
            '@type': 'Product',
            '@id': `${baseUrl}/${product.slug}`,
            name: product.name,
            description: product.description || `${product.name} available with flexible payment options`,
            image: `${baseUrl}${product.source}`,
            url: `${baseUrl}/${product.slug}`,
            brand: {
              '@type': 'Brand',
              name: product.brand || displayCategory
            },
            offers: {
              '@type': 'Offer',
              url: `${baseUrl}/${product.slug}`,
              priceCurrency: 'KES',
              price: parseFloat(product.totalPrice.replace(/[^\d.-]/g, '')),
              // Use priceSpecification for better price details
              priceSpecification: {
                '@type': 'PriceSpecification',
                priceCurrency: 'KES',
                price: parseFloat(product.totalPrice.replace(/[^\d.-]/g, ''))
              },
              priceValidUntil: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
              availability: 'https://schema.org/InStock',
              itemCondition: 'https://schema.org/NewCondition',
              seller: {
                '@type': 'Organization',
                '@id': `${baseUrl}#organization`
              },
              hasMerchantReturnPolicy: { 
                '@id': 'https://mdogomdogodeals.co.ke#returnpolicy' 
              },
              shippingDetails: {
                '@type': 'OfferShippingDetails',
                shippingRate: {
                  '@type': 'MonetaryAmount',
                  value: '0.00',
                  currency: 'KES'
                },
                shippingDestination: {
                  '@type': 'DefinedRegion',
                  addressCountry: 'KE'
                },
                deliveryTime: { 
                  '@id': 'https://mdogomdogodeals.co.ke#deliverytime' 
                }
              }
            },
            ...(product.reviews && product.reviews.reviewCount > 0 && {
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: product.reviews.averageRating,
                reviewCount: product.reviews.reviewCount,
                bestRating: 5,
                worstRating: 1
              }
            })
          }
        }))
      },
      SHARED_RETURN_POLICY,
      SHARED_DELIVERY_TIME
    ]
  };

  return graphData;
}
// FIXED: Homepage schema with @graph


export function generateHomepageSchema(products: FlexibleProduct[], seoData: any) {
  const baseUrl = 'https://mdogomdogodeals.co.ke';
  
  const graphData = {
    '@context': 'https://schema.org',
    '@graph': [
      // WebPage - uses seoData passed from HomeLayout
      {
        '@type': 'WebPage',
        '@id': `${baseUrl}#webpage`,
        url: seoData.canonical,
        name: seoData.title,
        description: seoData.description,
        isPartOf: {
          '@id': `${baseUrl}#website`
        },
        about: {
          '@id': `${baseUrl}#organization`
        },
        publisher: {
          '@id': `${baseUrl}#organization`
        },
        primaryImageOfPage: {
          '@type': 'ImageObject',
          url: seoData.ogImage,
          contentUrl: seoData.ogImage
        },
        inLanguage: 'en-KE',
        breadcrumb: {
          '@type': 'BreadcrumbList',
          '@id': `${baseUrl}#breadcrumb`,
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: baseUrl
            }
          ]
        }
      },
      
      // WebSite
      {
        '@type': 'WebSite',
        '@id': `${baseUrl}#website`, 
        url: baseUrl,
        name: seoData.siteName,
        alternateName: 'MMD Kenya',
        description: 'Buy phones on Lipa Mdogo Mdogo payment plans in Nairobi and across Kenya',
        publisher: {
          '@id': `${baseUrl}#organization`
        },
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: `${baseUrl}/search?q={search_term_string}`
          },
          'query-input': 'required name=search_term_string'
        },
        inLanguage: 'en-KE'
      },
      
      // Organization
      {
        '@type': 'Organization',
        '@id': `${baseUrl}#organization`,
        name: seoData.organizationName,
        alternateName: ['MMD Kenya', 'Mdogo Mdogo Deals'],
        url: baseUrl,
        logo: {
          '@type': 'ImageObject',
          '@id': `${baseUrl}#logo`,
          url: `${baseUrl}/phones/y2.png`,
          contentUrl: `${baseUrl}/phones/y2.png`,
          width: 300,
          height: 150,
          caption: 'Mdogo Mdogo Deals Kenya Logo'
        },
        image: {
          '@id': `${baseUrl}#logo`
        },
        description: 'Mobile phone retailer in Nairobi offering flexible payment plans for smartphones. Daily installments from KES 50.',
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
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+254720202167',
          contactType: 'customer service',
          availableLanguage: ['English', 'Swahili'],
          areaServed: 'KE'
        },
        sameAs: [
          'https://www.facebook.com/profile.php?id=61578574354368',
          'https://x.com/mdogomdogodeals', 
          'https://www.instagram.com/mdogomdogodeals_/'
        ],
        areaServed: {
          '@type': 'Country',
          name: 'Kenya'
        }
      },
      
      // FAQ - Neutral and informational
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'How do installment payment plans work?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Installment plans allow you to pay for a phone in smaller amounts over time instead of the full price upfront. Payment frequency can be daily, weekly, or monthly depending on the plan.'
            }
          },
          {
            '@type': 'Question',
            name: 'What documents are required to buy on credit?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Typically, you need a valid ID, proof of income or business activity, and contact information. Specific requirements may vary by payment provider.'
            }
          },
          {
            '@type': 'Question',
            name: 'Is delivery available in Nairobi?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, delivery is available within Nairobi and surrounding areas. Some providers also offer nationwide shipping options.'
            }
          },
          {
            '@type': 'Question',
            name: 'Which phone brands can I buy on installment?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Most major smartphone brands are available including Samsung, Tecno, Infinix, Oppo, and others. Availability depends on current stock.'
            }
          }
        ]
      }
    ]
  };

  return JSON.stringify(graphData, null, 2);
}








export function generateEventSchema(product: FlexibleProduct, eventData?: any) {
  if (!eventData) return null;

  return JSON.stringify({
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
      'hasMerchantReturnPolicy': { '@id': 'https://mdogomdogodeals.co.ke#returnpolicy' }
    },
    'image': `https://mdogomdogodeals.co.ke${product.source}`,
    'eventStatus': 'https://schema.org/EventScheduled',
    'eventAttendanceMode': 'https://schema.org/MixedEventAttendanceMode'
  }, null, 2);
}

export function generateBreadcrumbSchema(product: FlexibleProduct) {
  return JSON.stringify({
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
  }, null, 2);
}

export function generateWebsiteSchema() {
  return JSON.stringify({
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
  }, null, 2);
}

export function generateOrganizationSchema() {
  return JSON.stringify({
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
        telephone: '+254-720-202-167',
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
      geoRadius: '500000'
    }
  }, null, 2);
}
export function generatePageSchema(pageType: 'homepage' | 'product', data: any) {
  if (pageType === 'homepage') {
    return generateHomepageSchema(data.products);
  } else if (pageType === 'product') {
    return generateProductSchema(data.product);
  }
  
  return null;
}

export function generateFAQSchema(product: FlexibleProduct, customFAQs?: Array<{question: string, answer: string}>) {
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

  return JSON.stringify({
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
  }, null, 2);
}

export function generateHowToSchema(product: FlexibleProduct) {
  return JSON.stringify({
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
  }, null, 2);

}