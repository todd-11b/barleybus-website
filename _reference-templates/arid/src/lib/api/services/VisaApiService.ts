import { API_CONFIG, getApiHeaders, ApiResponse } from '../config';

export interface VisaSearchParams {
  country: string;
  visaType: string;
  nationality: string;
  purpose: string;
  duration?: number;
}

export interface VisaRequirement {
  id: string;
  name: string;
  description: string;
  required: boolean;
  documents: string[];
  processingTime: string;
  validity: string;
  cost: {
    amount: number;
    currency: string;
  };
}

export interface VisaApplication {
  id: string;
  country: string;
  visaType: string;
  status: 'PENDING' | 'APPROVED' | 'REJECTED' | 'IN_PROGRESS';
  submittedAt: string;
  estimatedProcessing: string;
  requirements: VisaRequirement[];
  documents: {
    name: string;
    status: 'PENDING' | 'UPLOADED' | 'APPROVED' | 'REJECTED';
    url?: string;
  }[];
}

export class VisaApiService {
  private baseUrl: string;
  private apiKey: string;

  constructor() {
    this.baseUrl = API_CONFIG.VISA.VISA_CENTRAL.baseUrl;
    this.apiKey = API_CONFIG.VISA.VISA_CENTRAL.apiKey || '';
  }

  async searchVisas(params: VisaSearchParams): Promise<ApiResponse<VisaRequirement[]>> {
    try {
      const response = await fetch(`${this.baseUrl}${API_CONFIG.VISA.VISA_CENTRAL.endpoints.search}`, {
        method: 'POST',
        headers: getApiHeaders(this.apiKey),
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

  async getVisaRequirements(country: string): Promise<ApiResponse<VisaRequirement[]>> {
    try {
      const response = await fetch(
        `${this.baseUrl}${API_CONFIG.VISA.VISA_CENTRAL.endpoints.requirements.replace('{country}', country)}`,
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

  async getProcessingTimes(country: string): Promise<ApiResponse<any>> {
    try {
      const response = await fetch(
        `${this.baseUrl}${API_CONFIG.VISA.VISA_CENTRAL.endpoints.processing.replace('{country}', country)}`,
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

  async submitVisaApplication(application: Partial<VisaApplication>): Promise<ApiResponse<VisaApplication>> {
    try {
      const response = await fetch(`${this.baseUrl}${API_CONFIG.VISA.VISA_CENTRAL.endpoints.application}`, {
        method: 'POST',
        headers: getApiHeaders(this.apiKey),
        body: JSON.stringify(application),
      });

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

  async getApplicationStatus(applicationId: string): Promise<ApiResponse<VisaApplication>> {
    try {
      const response = await fetch(
        `${this.baseUrl}${API_CONFIG.VISA.VISA_CENTRAL.endpoints.application}/${applicationId}`,
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

  // Fallback to TravelDocs API
  async getCountries(): Promise<ApiResponse<any[]>> {
    try {
      const response = await fetch(`${API_CONFIG.VISA.TRAVEL_DOCS.baseUrl}${API_CONFIG.VISA.TRAVEL_DOCS.endpoints.countries}`, {
        method: 'GET',
        headers: getApiHeaders(API_CONFIG.VISA.TRAVEL_DOCS.apiKey || ''),
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

  async getRequirementsTravelDocs(country: string): Promise<ApiResponse<any[]>> {
    try {
      const response = await fetch(
        `${API_CONFIG.VISA.TRAVEL_DOCS.baseUrl}${API_CONFIG.VISA.TRAVEL_DOCS.endpoints.requirements.replace('{country}', country)}`,
        {
          method: 'GET',
          headers: getApiHeaders(API_CONFIG.VISA.TRAVEL_DOCS.apiKey || ''),
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
