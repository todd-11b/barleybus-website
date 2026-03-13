import { useState, useEffect } from 'react';
import { TravelApiService } from '@/lib/api/services/TravelApiService';
import { FlightApiService } from '@/lib/api/services/FlightApiService';
import { HotelApiService } from '@/lib/api/services/HotelApiService';
import { VisaApiService } from '@/lib/api/services/VisaApiService';

// Generic API hook
export const useApi = <T>(
  apiCall: () => Promise<{ success: boolean; data?: T; error?: string }>,
  dependencies: any[] = []
) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const result = await apiCall();
        if (result.success && result.data) {
          setData(result.data);
        } else {
          setError(result.error || 'Unknown error occurred');
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, dependencies);

  const refetch = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const result = await apiCall();
      if (result.success && result.data) {
        setData(result.data);
      } else {
        setError(result.error || 'Unknown error occurred');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error occurred');
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, refetch };
};

// Travel API hooks
export const useTravelSearch = (params: any) => {
  const [travelService] = useState(() => new TravelApiService());
  
  return useApi(
    () => travelService.searchActivities(params),
    [params]
  );
};

export const useTravelDetails = (activityId: string) => {
  const [travelService] = useState(() => new TravelApiService());
  
  return useApi(
    () => travelService.getActivityDetails(activityId),
    [activityId]
  );
};

// Flight API hooks
export const useFlightSearch = (params: any) => {
  const [flightService] = useState(() => new FlightApiService());
  
  return useApi(
    () => flightService.searchFlights(params),
    [params]
  );
};

export const useFlightPriceAnalysis = (flightId: string) => {
  const [flightService] = useState(() => new FlightApiService());
  
  return useApi(
    () => flightService.getFlightPriceAnalysis(flightId),
    [flightId]
  );
};

export const useAirportCodes = (keyword: string) => {
  const [flightService] = useState(() => new FlightApiService());
  
  return useApi(
    () => flightService.getAirportCodes(keyword),
    [keyword]
  );
};

// Hotel API hooks
export const useHotelSearch = (params: any) => {
  const [hotelService] = useState(() => new HotelApiService());
  
  return useApi(
    () => hotelService.searchHotels(params),
    [params]
  );
};

export const useHotelDetails = (hotelId: string) => {
  const [hotelService] = useState(() => new HotelApiService());
  
  return useApi(
    () => hotelService.getHotelDetails(hotelId),
    [hotelId]
  );
};

export const useHotelRatings = (hotelId: string) => {
  const [hotelService] = useState(() => new HotelApiService());
  
  return useApi(
    () => hotelService.getHotelRatings(hotelId),
    [hotelId]
  );
};

// Visa API hooks
export const useVisaSearch = (params: any) => {
  const [visaService] = useState(() => new VisaApiService());
  
  return useApi(
    () => visaService.searchVisas(params),
    [params]
  );
};

export const useVisaRequirements = (country: string) => {
  const [visaService] = useState(() => new VisaApiService());
  
  return useApi(
    () => visaService.getVisaRequirements(country),
    [country]
  );
};

export const useVisaProcessingTimes = (country: string) => {
  const [visaService] = useState(() => new VisaApiService());
  
  return useApi(
    () => visaService.getProcessingTimes(country),
    [country]
  );
};

// Weather API hook
export const useWeather = (city: string) => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!city) return;

    const fetchWeather = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY}&units=metric`
        );
        
        if (!response.ok) {
          throw new Error('Weather data not available');
        }
        
        const data = await response.json();
        setWeather(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city]);

  return { weather, loading, error };
};

// Maps API hook
export const useGeocoding = (address: string) => {
  const [coordinates, setCoordinates] = useState<[number, number] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!address) return;

    const fetchCoordinates = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`
        );
        
        if (!response.ok) {
          throw new Error('Geocoding failed');
        }
        
        const data = await response.json();
        if (data.results && data.results.length > 0) {
          const { lat, lng } = data.results[0].geometry.location;
          setCoordinates([lat, lng]);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchCoordinates();
  }, [address]);

  return { coordinates, loading, error };
};
