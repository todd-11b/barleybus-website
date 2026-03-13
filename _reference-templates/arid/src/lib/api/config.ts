// API Configuration for Travel Services
export const API_CONFIG = {
  // Travel/Tour APIs
  TRAVEL: {
    AMADEUS: {
      baseUrl: 'https://api.amadeus.com/v1',
      endpoints: {
        search: '/shopping/activities',
        details: '/shopping/activities/{id}',
        availability: '/shopping/activities/{id}/availability'
      },
      apiKey: process.env.NEXT_PUBLIC_AMADEUS_API_KEY,
      apiSecret: process.env.AMADEUS_API_SECRET,
    },
    BOOKING_COM: {
      baseUrl: 'https://distribution-xml.booking.com/2.0/json',
      endpoints: {
        search: '/hotelAvailability',
        details: '/hotelDetails',
        reviews: '/hotelReviews'
      },
      apiKey: process.env.NEXT_PUBLIC_BOOKING_API_KEY,
    },
    TRIPADVISOR: {
      baseUrl: 'https://api.content.tripadvisor.com/api/v1',
      endpoints: {
        search: '/location/search',
        details: '/location/{id}/details',
        reviews: '/location/{id}/reviews'
      },
      apiKey: process.env.NEXT_PUBLIC_TRIPADVISOR_API_KEY,
    }
  },

  // Flight APIs
  FLIGHT: {
    AMADEUS: {
      baseUrl: 'https://api.amadeus.com/v2',
      endpoints: {
        search: '/shopping/flight-offers',
        searchMultiCity: '/shopping/flight-offers',
        priceCalendar: '/shopping/flight-dates',
        priceAnalysis: '/shopping/flight-offers/price-analysis',
        airlineCode: '/reference-data/airlines',
        airportCode: '/reference-data/locations',
        cityCode: '/reference-data/locations/cities'
      },
      apiKey: process.env.NEXT_PUBLIC_AMADEUS_API_KEY,
      apiSecret: process.env.AMADEUS_API_SECRET,
    },
    SKYSCANNER: {
      baseUrl: 'https://partners.api.skyscanner.net/apiservices',
      endpoints: {
        search: '/browsequotes/v1.0/{country}/{currency}/{locale}/{originPlace}/{destinationPlace}/{outboundPartialDate}',
        searchMultiCity: '/browsequotes/v1.0/{country}/{currency}/{locale}/{originPlace}/{destinationPlace}/{outboundPartialDate}',
        livePrices: '/pricing/v1.0',
        autocomplete: '/autosuggest/v1.0/{country}/{currency}/{locale}'
      },
      apiKey: process.env.NEXT_PUBLIC_SKYSCANNER_API_KEY,
    },
    GOOGLE_FLIGHTS: {
      baseUrl: 'https://www.googleapis.com/travel/v1',
      endpoints: {
        search: '/flights/search',
        priceInsights: '/flights/price-insights'
      },
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_FLIGHTS_API_KEY,
    }
  },

  // Hotel APIs
  HOTEL: {
    AMADEUS: {
      baseUrl: 'https://api.amadeus.com/v1',
      endpoints: {
        search: '/shopping/hotel-offers',
        details: '/shopping/hotel-offers/{hotelId}',
        ratings: '/shopping/hotel-offers/{hotelId}/ratings'
      },
      apiKey: process.env.NEXT_PUBLIC_AMADEUS_API_KEY,
      apiSecret: process.env.AMADEUS_API_SECRET,
    },
    BOOKING_COM: {
      baseUrl: 'https://distribution-xml.booking.com/2.0/json',
      endpoints: {
        search: '/hotelAvailability',
        details: '/hotelDetails',
        reviews: '/hotelReviews',
        photos: '/hotelPhotos'
      },
      apiKey: process.env.NEXT_PUBLIC_BOOKING_API_KEY,
    },
    EXPEDIA: {
      baseUrl: 'https://api.expediapartnercentral.com',
      endpoints: {
        search: '/v3/properties/search',
        details: '/v3/properties/{propertyId}',
        availability: '/v3/properties/{propertyId}/availability'
      },
      apiKey: process.env.NEXT_PUBLIC_EXPEDIA_API_KEY,
    }
  },

  // Visa APIs
  VISA: {
    VISA_CENTRAL: {
      baseUrl: 'https://api.visacentral.com/v1',
      endpoints: {
        search: '/visas/search',
        requirements: '/visas/{country}/requirements',
        processing: '/visas/{country}/processing-times',
        application: '/visas/application'
      },
      apiKey: process.env.NEXT_PUBLIC_VISA_CENTRAL_API_KEY,
    },
    TRAVEL_DOCS: {
      baseUrl: 'https://api.traveldocs.com/v1',
      endpoints: {
        countries: '/countries',
        requirements: '/requirements/{country}',
        processing: '/processing-times/{country}',
        application: '/applications'
      },
      apiKey: process.env.NEXT_PUBLIC_TRAVEL_DOCS_API_KEY,
    }
  },

  // Payment APIs
  PAYMENT: {
    STRIPE: {
      baseUrl: 'https://api.stripe.com/v1',
      endpoints: {
        paymentIntent: '/payment_intents',
        paymentMethod: '/payment_methods',
        customer: '/customers'
      },
      apiKey: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
      secretKey: process.env.STRIPE_SECRET_KEY,
    },
    PAYPAL: {
      baseUrl: 'https://api.paypal.com/v2',
      endpoints: {
        orders: '/checkout/orders',
        payments: '/payments',
        subscriptions: '/billing/subscriptions'
      },
      clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
      clientSecret: process.env.PAYPAL_CLIENT_SECRET,
    }
  },

  // Maps & Location APIs
  MAPS: {
    GOOGLE_MAPS: {
      baseUrl: 'https://maps.googleapis.com/maps/api',
      endpoints: {
        geocode: '/geocode/json',
        places: '/place/nearbysearch/json',
        directions: '/directions/json',
        distanceMatrix: '/distancematrix/json'
      },
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    },
    MAPBOX: {
      baseUrl: 'https://api.mapbox.com',
      endpoints: {
        geocoding: '/geocoding/v5/mapbox.places',
        directions: '/directions/v5/mapbox',
        matrix: '/directions-matrix/v1/mapbox'
      },
      apiKey: process.env.NEXT_PUBLIC_MAPBOX_API_KEY,
    }
  },

  // Weather APIs
  WEATHER: {
    OPENWEATHER: {
      baseUrl: 'https://api.openweathermap.org/data/2.5',
      endpoints: {
        current: '/weather',
        forecast: '/forecast',
        historical: '/onecall/timemachine'
      },
      apiKey: process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY,
    },
    WEATHER_API: {
      baseUrl: 'https://api.weatherapi.com/v1',
      endpoints: {
        current: '/current.json',
        forecast: '/forecast.json',
        history: '/history.json'
      },
      apiKey: process.env.NEXT_PUBLIC_WEATHER_API_KEY,
    }
  }
};

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Common API Headers
export const getApiHeaders = (apiKey: string) => ({
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${apiKey}`,
  'Accept': 'application/json',
});

// Rate Limiting Configuration
export const RATE_LIMITS = {
  AMADEUS: {
    requestsPerMinute: 10,
    requestsPerDay: 1000,
  },
  BOOKING: {
    requestsPerMinute: 5,
    requestsPerDay: 500,
  },
  GOOGLE: {
    requestsPerMinute: 100,
    requestsPerDay: 10000,
  }
};
