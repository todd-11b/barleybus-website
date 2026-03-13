import { API_CONFIG, getApiHeaders, ApiResponse } from '../config';

export interface TravelSearchParams {
  destination: string;
  startDate: string;
  endDate: string;
  travelers: number;
  budget?: number;
  interests?: string[];
}

export interface TravelActivity {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  rating: number;
  images: string[];
  location: {
    address: string;
    coordinates: [number, number];
  };
  duration: string;
  category: string;
  provider: string;
  availability: {
    date: string;
    slots: number;
  }[];
}

export class TravelApiService {
  private baseUrl: string;
  private apiKey: string;

  constructor() {
    this.baseUrl = API_CONFIG.TRAVEL.AMADEUS.baseUrl;
    this.apiKey = API_CONFIG.TRAVEL.AMADEUS.apiKey || '';
  }

  async searchActivities(params: TravelSearchParams): Promise<ApiResponse<TravelActivity[]>> {
    try {
      const response = await fetch(`${this.baseUrl}${API_CONFIG.TRAVEL.AMADEUS.endpoints.search}`, {
        method: 'GET',
        headers: getApiHeaders(this.apiKey),
        // Add query parameters
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

  async getActivityDetails(activityId: string): Promise<ApiResponse<TravelActivity>> {
    try {
      const response = await fetch(
        `${this.baseUrl}${API_CONFIG.TRAVEL.AMADEUS.endpoints.details.replace('{id}', activityId)}`,
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

  async checkAvailability(activityId: string, date: string): Promise<ApiResponse<any>> {
    try {
      const response = await fetch(
        `${this.baseUrl}${API_CONFIG.TRAVEL.AMADEUS.endpoints.availability.replace('{id}', activityId)}`,
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
  async searchHotels(params: any): Promise<ApiResponse<any>> {
    try {
      const response = await fetch(`${API_CONFIG.TRAVEL.BOOKING_COM.baseUrl}${API_CONFIG.TRAVEL.BOOKING_COM.endpoints.search}`, {
        method: 'POST',
        headers: getApiHeaders(API_CONFIG.TRAVEL.BOOKING_COM.apiKey || ''),
        body: JSON.stringify(params),
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
