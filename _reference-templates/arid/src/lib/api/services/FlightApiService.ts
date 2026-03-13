import { API_CONFIG, getApiHeaders, ApiResponse } from '../config';

export interface FlightSearchParams {
  origin: string;
  destination: string;
  departureDate: string;
  returnDate?: string;
  adults: number;
  children?: number;
  infants?: number;
  cabinClass?: 'ECONOMY' | 'PREMIUM_ECONOMY' | 'BUSINESS' | 'FIRST';
  currency?: string;
}

export interface FlightOffer {
  id: string;
  price: {
    total: number;
    currency: string;
    base: number;
    fees: number;
  };
  itineraries: {
    duration: string;
    segments: FlightSegment[];
  }[];
  validatingAirlineCodes: string[];
  travelerPricings: {
    travelerId: string;
    fareOption: string;
    travelerType: string;
    price: {
      currency: string;
      total: number;
      base: number;
    };
    fareDetailsBySegment: {
      segmentId: string;
      cabin: string;
      fareBasis: string;
      class: string;
      includedCheckedBags: {
        weight: number;
        weightUnit: string;
      };
    }[];
  }[];
}

export interface FlightSegment {
  departure: {
    iataCode: string;
    terminal?: string;
    at: string;
  };
  arrival: {
    iataCode: string;
    terminal?: string;
    at: string;
  };
  carrierCode: string;
  number: string;
  aircraft: {
    code: string;
  };
  operating: {
    carrierCode: string;
  };
  duration: string;
  id: string;
}

export class FlightApiService {
  private baseUrl: string;
  private apiKey: string;

  constructor() {
    this.baseUrl = API_CONFIG.FLIGHT.AMADEUS.baseUrl;
    this.apiKey = API_CONFIG.FLIGHT.AMADEUS.apiKey || '';
  }

  async searchFlights(params: FlightSearchParams): Promise<ApiResponse<FlightOffer[]>> {
    try {
      const queryParams = new URLSearchParams({
        originLocationCode: params.origin,
        destinationLocationCode: params.destination,
        departureDate: params.departureDate,
        adults: params.adults.toString(),
        currencyCode: params.currency || 'USD',
        max: '10'
      });

      if (params.returnDate) {
        queryParams.append('returnDate', params.returnDate);
      }
      if (params.children) {
        queryParams.append('children', params.children.toString());
      }
      if (params.infants) {
        queryParams.append('infants', params.infants.toString());
      }
      if (params.cabinClass) {
        queryParams.append('travelClass', params.cabinClass);
      }

      const response = await fetch(`${this.baseUrl}${API_CONFIG.FLIGHT.AMADEUS.endpoints.search}?${queryParams}`, {
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

  async getFlightPriceAnalysis(flightId: string): Promise<ApiResponse<any>> {
    try {
      const response = await fetch(
        `${this.baseUrl}${API_CONFIG.FLIGHT.AMADEUS.endpoints.priceAnalysis}`,
        {
          method: 'POST',
          headers: getApiHeaders(this.apiKey),
          body: JSON.stringify({ flightOfferId: flightId }),
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

  async getAirlineCodes(): Promise<ApiResponse<any[]>> {
    try {
      const response = await fetch(`${this.baseUrl}${API_CONFIG.FLIGHT.AMADEUS.endpoints.airlineCode}`, {
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

  async getAirportCodes(keyword: string): Promise<ApiResponse<any[]>> {
    try {
      const response = await fetch(
        `${this.baseUrl}${API_CONFIG.FLIGHT.AMADEUS.endpoints.airportCode}?keyword=${encodeURIComponent(keyword)}`,
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
        data: data.data || [],
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      };
    }
  }

  // Fallback to Skyscanner API
  async searchFlightsSkyscanner(params: FlightSearchParams): Promise<ApiResponse<any[]>> {
    try {
      const response = await fetch(
        `${API_CONFIG.FLIGHT.SKYSCANNER.baseUrl}${API_CONFIG.FLIGHT.SKYSCANNER.endpoints.search}`,
        {
          method: 'GET',
          headers: getApiHeaders(API_CONFIG.FLIGHT.SKYSCANNER.apiKey || ''),
        }
      );

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
