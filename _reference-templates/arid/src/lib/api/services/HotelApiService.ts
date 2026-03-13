import { API_CONFIG, getApiHeaders, ApiResponse } from '../config';

export interface HotelSearchParams {
  cityCode: string;
  checkInDate: string;
  checkOutDate: string;
  adults: number;
  children?: number;
  rooms?: number;
  priceRange?: {
    min: number;
    max: number;
  };
  rating?: number;
  amenities?: string[];
}

export interface HotelOffer {
  id: string;
  name: string;
  description: string;
  rating: number;
  price: {
    total: number;
    currency: string;
    base: number;
    taxes: number;
  };
  address: {
    street: string;
    city: string;
    country: string;
    coordinates: [number, number];
  };
  amenities: string[];
  images: string[];
  policies: {
    checkIn: string;
    checkOut: string;
    cancellation: string;
  };
  rooms: {
    type: string;
    beds: number;
    maxOccupancy: number;
    amenities: string[];
  }[];
  availability: {
    date: string;
    available: boolean;
    price: number;
  }[];
}

export class HotelApiService {
  private baseUrl: string;
  private apiKey: string;

  constructor() {
    this.baseUrl = API_CONFIG.HOTEL.AMADEUS.baseUrl;
    this.apiKey = API_CONFIG.HOTEL.AMADEUS.apiKey || '';
  }

  async searchHotels(params: HotelSearchParams): Promise<ApiResponse<HotelOffer[]>> {
    try {
      const queryParams = new URLSearchParams({
        cityCode: params.cityCode,
        checkInDate: params.checkInDate,
        checkOutDate: params.checkOutDate,
        adults: params.adults.toString(),
        currencyCode: 'USD',
        max: '20'
      });

      if (params.children) {
        queryParams.append('children', params.children.toString());
      }
      if (params.rooms) {
        queryParams.append('roomQuantity', params.rooms.toString());
      }
      if (params.rating) {
        queryParams.append('ratings', params.rating.toString());
      }

      const response = await fetch(`${this.baseUrl}${API_CONFIG.HOTEL.AMADEUS.endpoints.search}?${queryParams}`, {
        method: 'GET',
        headers: getApiHeaders(this.apiKey),
      });

      if (!response.ok) {
        throw new Error(`API Error: ${response.status}`);
      }

      const data = await response.json();
      return {
        success: true,
        data: data.data || [],
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      };
    }
  }

  async getHotelDetails(hotelId: string): Promise<ApiResponse<HotelOffer>> {
    try {
      const response = await fetch(
        `${this.baseUrl}${API_CONFIG.HOTEL.AMADEUS.endpoints.details.replace('{hotelId}', hotelId)}`,
        {
          method: 'GET',
          headers: getApiHeaders(this.apiKey),
        }
      );

      if (!response.ok) {
        throw new Error(`API Error: ${response.status}`);
      }

      const data = await response.json();
      return {
        success: true,
        data: data.data,
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      };
    }
  }

  async getHotelRatings(hotelId: string): Promise<ApiResponse<any>> {
    try {
      const response = await fetch(
        `${this.baseUrl}${API_CONFIG.HOTEL.AMADEUS.endpoints.ratings.replace('{hotelId}', hotelId)}`,
        {
          method: 'GET',
          headers: getApiHeaders(this.apiKey),
        }
      );

      if (!response.ok) {
        throw new Error(`API Error: ${response.status}`);
      }

      const data = await response.json();
      return {
        success: true,
        data: data.data,
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      };
    }
  }

  // Fallback to Booking.com API
  async searchHotelsBooking(params: HotelSearchParams): Promise<ApiResponse<HotelOffer[]>> {
    try {
      const response = await fetch(`${API_CONFIG.HOTEL.BOOKING_COM.baseUrl}${API_CONFIG.HOTEL.BOOKING_COM.endpoints.search}`, {
        method: 'POST',
        headers: getApiHeaders(API_CONFIG.HOTEL.BOOKING_COM.apiKey || ''),
        body: JSON.stringify({
          checkin: params.checkInDate,
          checkout: params.checkOutDate,
          rooms: params.rooms || 1,
          adults: params.adults,
          children: params.children || 0,
          city: params.cityCode,
        }),
      });

      if (!response.ok) {
        throw new Error(`API Error: ${response.status}`);
      }

      const data = await response.json();
      return {
        success: true,
        data: data.data || [],
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      };
    }
  }

  // Fallback to Expedia API
  async searchHotelsExpedia(params: HotelSearchParams): Promise<ApiResponse<HotelOffer[]>> {
    try {
      const response = await fetch(`${API_CONFIG.HOTEL.EXPEDIA.baseUrl}${API_CONFIG.HOTEL.EXPEDIA.endpoints.search}`, {
        method: 'POST',
        headers: getApiHeaders(API_CONFIG.HOTEL.EXPEDIA.apiKey || ''),
        body: JSON.stringify({
          search: {
            destination: {
              regionId: params.cityCode,
            },
            checkIn: params.checkInDate,
            checkOut: params.checkOutDate,
            rooms: [
              {
                adults: params.adults,
                children: params.children || 0,
              }
            ],
          }
        }),
      });

      if (!response.ok) {
        throw new Error(`API Error: ${response.status}`);
      }

      const data = await response.json();
      return {
        success: true,
        data: data.data || [],
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      };
    }
  }
}
