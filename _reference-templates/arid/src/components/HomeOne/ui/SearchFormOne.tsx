"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import DatePicker from "react-datepicker";
import type { ActionMeta } from "react-select";

import "react-datepicker/dist/react-datepicker.css";

// Dynamically import react-select with SSR disabled
const Select = dynamic(() => import("react-select"), {
  ssr: false,
});

type TabType = "flight" | "hotel" | "tour" | "visa";

type OptionType = {
  value: string;
  label: string;
};

const tourOptions: OptionType[] = [
  { value: "Honeymoon", label: "Honeymoon" },
  { value: "Hill Traking", label: "Hill Traking" },
  { value: "Day outing", label: "Day outing" },
  { value: "River Cruise", label: "River Cruise" },
  { value: "Summer Vacation", label: "Summer Vacation" },
  { value: "Others", label: "Others" },
];

const SearchFormOne = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<TabType>("tour");
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([
    null,
    null,
  ]);
  const [startDate, endDate] = dateRange;
  const [selectedOption, setSelectedOption] = useState<OptionType | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  // Hotel form states
  const [hotelLocation, setHotelLocation] = useState("Cox's Bazar");
  const [hotelCountry, setHotelCountry] = useState("Bangladesh");
  const [rooms, setRooms] = useState(1);
  const [guests, setGuests] = useState(2);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [showRoomGuestModal, setShowRoomGuestModal] = useState(false);

  // Search preferences
  const [searchPreferences, setSearchPreferences] = useState({
    business: false,
    couples: false,
    families: false,
    friends: false,
    solo: false,
  });

  // Only render Select component after component has mounted on the client
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handlePreferenceChange = (
    preference: keyof typeof searchPreferences
  ) => {
    setSearchPreferences((prev) => ({
      ...prev,
      [preference]: !prev[preference],
    }));
  };

  const handleRoomChange = (type: "increment" | "decrement") => {
    if (type === "increment") {
      setRooms((prev) => Math.min(prev + 1, 10));
    } else {
      setRooms((prev) => Math.max(prev - 1, 1));
    }
  };

  const handleAdultChange = (type: "increment" | "decrement") => {
    if (type === "increment") {
      setAdults((prev) => Math.min(prev + 1, 20));
    } else {
      setAdults((prev) => Math.max(prev - 1, 1));
    }
    setGuests(adults + children);
  };

  const handleChildrenChange = (type: "increment" | "decrement") => {
    if (type === "increment") {
      setChildren((prev) => Math.min(prev + 1, 10));
    } else {
      setChildren((prev) => Math.max(prev - 1, 0));
    }
    setGuests(adults + children);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirect based on active tab
    if (activeTab === "flight") {
      router.push("/flight-listings");
    } else if (activeTab === "hotel") {
      router.push("/hotel-listings");
    } else if (activeTab === "visa") {
      router.push("/visa-listings");
    } else {
      router.push("/travel-listings");
    }
  };

  const tabs = [
    {
      id: "tour",
      label: "Tour",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-binoculars-icon lucide-binoculars"><path d="M10 10h4"/><path d="M19 7V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3"/><path d="M20 21a2 2 0 0 0 2-2v-3.851c0-1.39-2-2.962-2-4.829V8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v11a2 2 0 0 0 2 2z"/><path d="M 22 16 L 2 16"/><path d="M4 21a2 2 0 0 1-2-2v-3.851c0-1.39 2-2.962 2-4.829V8a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v11a2 2 0 0 1-2 2z"/><path d="M9 7V4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v3"/></svg>      ),
    },
    {
      id: "flight",
      label: "Flight",
      icon: (
        <div className="relative group">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="transition-transform duration-300 group-hover:translate-x-1"
          >
            <path
              d="M21 16V14L13 9V3.5C13 2.67 12.33 2 11.5 2S10 2.67 10 3.5V9L2 14V16L10 13.5V19L8 20.5V22L11.5 21L15 22V20.5L13 19V13.5L21 16Z"
              fill="currentColor"
            />
          </svg>
        </div>
      ),
    },
    {
      id: "hotel",
      label: "Hotel",
      icon: (
        <div className="relative group">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
          </svg>
        </div>
      ),
    },
    {
      id: "visa",
      label: "Visa",
      icon: (
        <div className="relative group">
          {/* <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="transition-transform duration-300 group-hover:rotate-3"
          >
            <rect
              x="4"
              y="4"
              width="16"
              height="16"
              rx="2"
              fill="currentColor"
              className="transition-all duration-300"
            />
            <path d="M8 8H16V10H8V8Z" fill="white" className="animate-pulse" />
            <path
              d="M8 12H14V14H8V12Z"
              fill="white"
              className="animate-pulse"
              style={{ animationDelay: "0.3s" }}
            />
            <circle
              cx="18"
              cy="6"
              r="2"
              fill="currentColor"
              className="animate-ping"
              style={{ animationDuration: "2s" }}
            /> 
          </svg>*/}
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" width="24px" height="24px"><path d="M1 4H23V6H1V4ZM1 18H23V20H1V18ZM19.6217 14.9136L19.448 14.0436L17.4994 14.0435L17.1899 14.907L15.6275 14.9105C16.6316 12.5036 17.3767 10.7206 17.8628 9.56169C17.9898 9.25902 18.2156 9.10462 18.5482 9.10699C18.802 9.10888 19.2168 9.10912 19.7927 9.10771L21 14.9108L19.6217 14.9136ZM17.9376 12.8518H19.1936L18.7248 10.6715L17.9376 12.8518ZM7.87203 9.10561L9.44245 9.10764L7.01511 14.9136L5.42535 14.9129C4.88785 12.8424 4.49315 11.3073 4.24125 10.3076C4.16402 10.001 4.01042 9.787 3.71519 9.68577C3.45195 9.59551 3.01355 9.45594 2.4 9.26707V9.10771C3.54718 9.10757 4.38339 9.10757 4.90863 9.10771C5.34299 9.10784 5.59619 9.31703 5.67765 9.74655C5.75942 10.1779 5.96599 11.2743 6.29735 13.0359L7.87203 9.10561ZM11.5994 9.10765L10.3588 14.913L8.86434 14.9108C8.89383 14.7698 9.30682 12.8347 10.1033 9.10561L11.5994 9.10765ZM14.6307 9C15.0773 9 15.6405 9.13846 15.9652 9.26707L15.703 10.4706C15.41 10.3532 14.9284 10.1944 14.5228 10.2006C13.933 10.2097 13.569 10.4566 13.569 10.6936C13.569 11.0783 14.2015 11.272 14.8528 11.6929C15.5956 12.1729 15.6937 12.603 15.6845 13.0713C15.6739 14.0422 14.8528 15 13.12 15C12.3286 14.9882 12.0444 14.9219 11.3995 14.6936L11.6718 13.4376C12.3282 13.712 12.6066 13.7991 13.1675 13.7991C13.6816 13.7991 14.1229 13.5918 14.1267 13.2308C14.1294 12.974 13.972 12.847 13.395 12.5293C12.8181 12.2117 12.0095 11.7726 12.0199 10.8889C12.0332 9.75821 13.1066 9 14.6307 9Z"></path></svg>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full max-w-[800px]">
      {/* Tab Navigation */}
      <div className="bg-white/90 backdrop-blur-sm rounded-t-2xl p-4 shadow-sm">
        <div className="flex space-x-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id as TabType)}
              className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-medium transition-all duration-200 ${
                activeTab === tab.id
                  ? "bg-primary-1 text-white shadow-sm"
                  : "text-gray-600 hover:text-gray-800 hover:bg-white/50"
              }`}
            >
              {tab.icon}
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Form Container */}
      <div
        className="rounded-b-2xl p-6 backdrop-blur-[21px] shadow-lg overflow-hidden"
        style={{
          background:
            "linear-gradient(152.97deg, rgba(255, 255, 255, 0.36) 0%, rgba(255, 255, 255, 0.12) 100%)",
        }}
      >
        {/* Tab Content Container with Smooth Transitions */}
        <div className="relative overflow-hidden">
          {/* Tour Form */}
          <div
            className={`transition-all duration-500 ease-in-out transform ${
              activeTab === "tour"
                ? "translate-x-0 opacity-100 scale-100"
                : "translate-x-full opacity-0 scale-95 absolute inset-0 pointer-events-none"
            }`}
          >
            {activeTab === "tour" && (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                {/* Form Title */}
                <div className="text-center mb-6">
                  <h3 className="text-white text-xl font-bold">
                    Discover Amazing Tours
                  </h3>
                </div>

                {/* Tour Search Form */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Destination */}
                  <div className="space-y-1">
                    <label className="text-xs text-white/80 uppercase tracking-wide">
                      DESTINATION
                    </label>
                    <div className="relative">
                      <input
                        list="data-destination"
                        type="text"
                        placeholder="Where to ?"
                        className="w-full h-12 bg-white/90 backdrop-blur-sm border border-white/30 rounded-lg px-3 py-3 text-sm font-medium text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-1 focus:border-transparent placeholder:text-gray-500"
                      />
                      <datalist id="data-destination">
                        <option value="New York"></option>
                        <option value="London"></option>
                        <option value="Paris"></option>
                        <option value="Dubai"></option>
                        <option value="Miami"></option>
                        <option value="Rome"></option>
                        <option value="Seattle"></option>
                        <option value="Amsterdam"></option>
                        <option value="Las vegas"></option>
                      </datalist>
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin-icon lucide-map-pin"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>
                      </div>
                    </div>
                  </div>

                  {/* Tour Type */}
                  <div className="space-y-1">
                    <label className="text-xs text-white/80 uppercase tracking-wide">
                      TOUR TYPE
                    </label>
                    {isMounted && (
                      <Select
                        defaultValue={selectedOption}
                        onChange={(newValue: any) => {
                          setSelectedOption(newValue as OptionType | null);
                        }}
                        options={tourOptions}
                        className="react-select-search"
                        placeholder="Select Tour Type"
                        classNamePrefix="!rounded-lg !z-index-9999999 !text-sm !font-medium !text-gray-800 focus:ring-primary-1 react-select"
                        menuPortalTarget={document.body}
                        styles={{
                          control: (provided) => ({
                            ...provided,
                            maxHeight: "48px",
                            height: "48px",
                          }),
                          valueContainer: (provided) => ({
                            ...provided,
                            height: "48px",
                            padding: "0 12px",
                          }),
                          input: (provided) => ({
                            ...provided,
                            height: "48px",
                            margin: "0px",
                            padding: "0px",
                          }),
                          indicatorsContainer: (provided) => ({
                            ...provided,
                            height: "48px",
                          }),
                        }}
                      />
                    )}
                  </div>
                </div>

                {/* Search Button */}
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="bg-primary-1 hover:bg-primary-2 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg"
                  >
                    Search Tours
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Flight Form */}
          <div
            className={`transition-all duration-500 ease-in-out transform ${
              activeTab === "flight"
                ? "translate-x-0 opacity-100 scale-100"
                : activeTab === "tour"
                ? "-translate-x-full opacity-0 scale-95 absolute inset-0 pointer-events-none"
                : "translate-x-full opacity-0 scale-95 absolute inset-0 pointer-events-none"
            }`}
          >
            {activeTab === "flight" && (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                {/* Form Title */}
                <div className="text-center mb-6">
                  <h3 className="text-white text-xl font-bold">
                    Find Best Flight Deals
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs text-white/80 uppercase tracking-wide">
                      FROM
                    </label>
                    <input
                      type="text"
                      placeholder="Departure City"
                      className="w-full h-12 bg-white/90 backdrop-blur-sm border border-white/30 rounded-lg px-3 py-3 text-sm font-medium text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-1 focus:border-transparent placeholder:text-gray-500"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs text-white/80 uppercase tracking-wide">
                      TO
                    </label>
                    <input
                      type="text"
                      placeholder="Destination City"
                      className="w-full h-12 bg-white/90 backdrop-blur-sm border border-white/30 rounded-lg px-3 py-3 text-sm font-medium text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-1 focus:border-transparent placeholder:text-gray-500"
                    />
                  </div>
                </div>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="bg-primary-1 hover:bg-primary-2 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg"
                  >
                    Search Flights
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Hotel Form */}
          <div
            className={`transition-all duration-500 ease-in-out transform ${
              activeTab === "hotel"
                ? "translate-x-0 opacity-100 scale-100"
                : activeTab === "visa"
                ? "-translate-x-full opacity-0 scale-95 absolute inset-0 pointer-events-none"
                : "translate-x-full opacity-0 scale-95 absolute inset-0 pointer-events-none"
            }`}
          >
            {activeTab === "hotel" && (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                {/* Form Title */}
                <div className="text-center mb-6">
                  <h3 className="text-white text-xl font-bold">
                    Find Your Perfect Stay
                  </h3>
                </div>

                {/* Hotel Search Form */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {/* City/Hotel/Resort/Area */}
                  <div className="space-y-1">
                    <label className="text-xs text-white/80 uppercase tracking-wide">
                      CITY/HOTEL/RESORT/AREA
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={hotelLocation}
                        onChange={(e) => setHotelLocation(e.target.value)}
                        className="w-full h-12 bg-white/90 backdrop-blur-sm border border-white/30 rounded-lg px-3 py-3 text-sm font-semibold text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-1 focus:border-transparent placeholder:text-gray-500"
                      />
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin-icon lucide-map-pin"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>
                      </div>
                    </div>
                    <p className="text-xs text-white/70">{hotelCountry}</p>
                  </div>

                  {/* Check In */}
                  <div className="space-y-1">
                    <label className="text-xs text-white/80 uppercase tracking-wide">
                      CHECK IN
                    </label>
                    <div className="relative">
                      <DatePicker
                        selected={startDate}
                        onChange={(date) => setDateRange([date, endDate])}
                        placeholderText="Select Date"
                        className="w-full h-12 bg-white/90 backdrop-blur-sm border border-white/30 rounded-lg px-3 py-3 text-sm font-semibold text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-1 focus:border-transparent placeholder:text-gray-500"
                      />
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.9583 2.96669V1.66669C13.9583 1.32502 13.675 1.04169 13.3333 1.04169C12.9916 1.04169 12.7083 1.32502 12.7083 1.66669V2.91669H7.29165V1.66669C7.29165 1.32502 7.00831 1.04169 6.66665 1.04169C6.32498 1.04169 6.04165 1.32502 6.04165 1.66669V2.96669C3.79165 3.17502 2.69999 4.51669 2.53332 6.50835C2.51665 6.75002 2.71665 6.95002 2.94999 6.95002H17.05C17.2916 6.95002 17.4916 6.74169 17.4666 6.50835C17.3 4.51669 16.2083 3.17502 13.9583 2.96669Z"
                            fill="#6B7280"
                          />
                          <path
                            d="M16.6667 8.20001C17.125 8.20001 17.5 8.57501 17.5 9.03335V14.1667C17.5 16.6667 16.25 18.3333 13.3333 18.3333H6.66667C3.75 18.3333 2.5 16.6667 2.5 14.1667V9.03335C2.5 8.57501 2.875 8.20001 3.33333 8.20001H16.6667Z"
                            fill="#353535"
                          />
                        </svg>
                      </div>
                    </div>
                    <p className="text-xs text-white/70">
                      {startDate
                        ? startDate.toLocaleDateString("en-US", {
                            weekday: "long",
                          })
                        : "Friday"}
                    </p>
                  </div>

                  {/* Check Out */}
                  <div className="space-y-1">
                    <label className="text-xs text-white/80 uppercase tracking-wide">
                      CHECK OUT
                    </label>
                    <div className="relative">
                      <DatePicker
                        selected={endDate}
                        onChange={(date) => setDateRange([startDate, date])}
                        placeholderText="Select Date"
                        className="w-full h-12 bg-white/90 backdrop-blur-sm border border-white/30 rounded-lg px-3 py-3 text-sm font-semibold text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-1 focus:border-transparent placeholder:text-gray-500"
                      />
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.9583 2.96669V1.66669C13.9583 1.32502 13.675 1.04169 13.3333 1.04169C12.9916 1.04169 12.7083 1.32502 12.7083 1.66669V2.91669H7.29165V1.66669C7.29165 1.32502 7.00831 1.04169 6.66665 1.04169C6.32498 1.04169 6.04165 1.32502 6.04165 1.66669V2.96669C3.79165 3.17502 2.69999 4.51669 2.53332 6.50835C2.51665 6.75002 2.71665 6.95002 2.94999 6.95002H17.05C17.2916 6.95002 17.4916 6.74169 17.4666 6.50835C17.3 4.51669 16.2083 3.17502 13.9583 2.96669Z"
                            fill="#6B7280"
                          />
                          <path
                            d="M16.6667 8.20001C17.125 8.20001 17.5 8.57501 17.5 9.03335V14.1667C17.5 16.6667 16.25 18.3333 13.3333 18.3333H6.66667C3.75 18.3333 2.5 16.6667 2.5 14.1667V9.03335C2.5 8.57501 2.875 8.20001 3.33333 8.20001H16.6667Z"
                            fill="#353535"
                          />
                        </svg>
                      </div>
                    </div>
                    <p className="text-xs text-white/70">
                      {endDate
                        ? endDate.toLocaleDateString("en-US", {
                            weekday: "long",
                          })
                        : "Saturday"}
                    </p>
                  </div>

                  {/* Rooms & Guests */}
                  <div className="space-y-1">
                    <label className="text-xs text-white/80 uppercase tracking-wide">
                      ROOMS & GUESTS
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={`${rooms} Room, ${guests} Guests`}
                        readOnly
                        className="w-full h-12 bg-white/90 backdrop-blur-sm border border-white/30 rounded-lg px-3 py-3 text-sm font-semibold text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-1 focus:border-transparent cursor-pointer"
                        onClick={() => setShowRoomGuestModal(true)}
                      />
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10 2C11.1 2 12 2.9 12 4C12 5.1 11.1 6 10 6C8.9 6 8 5.1 8 4C8 2.9 8.9 2 10 2ZM10 8C11.1 8 12 8.9 12 10C12 11.1 11.1 12 10 12C8.9 12 8 11.1 8 10C8 8.9 8.9 8 10 8ZM10 14C11.1 14 12 14.9 12 16C12 17.1 11.1 18 10 18C8.9 18 8 17.1 8 16C8 14.9 8.9 14 10 14Z"
                            fill="#6B7280"
                          />
                        </svg>
                      </div>
                    </div>
                    <p className="text-xs text-white/70">
                      {adults} Adults
                      {children > 0 && `, ${children} Children`}
                    </p>
                  </div>
                </div>

                {/* Search Preferences */}
                <div className="space-y-3">
                  <h4 className="text-sm font-medium text-white/90">
                    Search for
                  </h4>
                  <div className="flex flex-wrap gap-4">
                    {Object.entries(searchPreferences).map(([key, value]) => (
                      <label
                        key={key}
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={value}
                          onChange={() =>
                            handlePreferenceChange(
                              key as keyof typeof searchPreferences
                            )
                          }
                          className="w-4 h-4 text-primary-1 border-white/30 rounded focus:ring-primary-1 focus:ring-2 bg-white/90"
                        />
                        <span className="text-sm text-white/90 capitalize">
                          {key}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Search Button */}
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="bg-primary-1 hover:bg-primary-2 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg"
                  >
                    Search Hotels
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Visa Form */}
          <div
            className={`transition-all duration-500 ease-in-out transform ${
              activeTab === "visa"
                ? "translate-x-0 opacity-100 scale-100"
                : "-translate-x-full opacity-0 scale-95 absolute inset-0 pointer-events-none"
            }`}
          >
            {activeTab === "visa" && (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                {/* Form Title */}
                <div className="text-center mb-6">
                  <h3 className="text-white text-xl font-bold">
                    Apply for Visa
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs text-white/80 uppercase tracking-wide">
                      COUNTRY
                    </label>
                    <select className="w-full h-12 bg-white/90 backdrop-blur-sm border border-white/30 rounded-lg px-3 py-3 text-sm font-medium text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-1 focus:border-transparent">
                      <option value="">Select Country</option>
                      <option value="usa">United States</option>
                      <option value="uk">United Kingdom</option>
                      <option value="france">France</option>
                      <option value="germany">Germany</option>
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs text-white/80 uppercase tracking-wide">
                      VISA TYPE
                    </label>
                    <select className="w-full h-12 bg-white/90 backdrop-blur-sm border border-white/30 rounded-lg px-3 py-3 text-sm font-medium text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-1 focus:border-transparent">
                      <option value="">Select Visa Type</option>
                      <option value="tourist">Tourist Visa</option>
                      <option value="business">Business Visa</option>
                      <option value="student">Student Visa</option>
                    </select>
                  </div>
                </div>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="bg-primary-1 hover:bg-primary-2 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg"
                  >
                    Apply for Visa
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Room & Guest Selection Modal */}
      {showRoomGuestModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900">
                Rooms & Guests
              </h3>
              <button
                onClick={() => setShowRoomGuestModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Rooms Selection */}
            <div className="mb-6">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="text-sm font-medium text-gray-900">Rooms</h4>
                  <p className="text-xs text-gray-500">Number of rooms</p>
                </div>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => handleRoomChange("decrement")}
                    disabled={rooms <= 1}
                    className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20 12H4"
                      />
                    </svg>
                  </button>
                  <span className="w-8 text-center font-medium">{rooms}</span>
                  <button
                    onClick={() => handleRoomChange("increment")}
                    disabled={rooms >= 10}
                    className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Adults Selection */}
            <div className="mb-6">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="text-sm font-medium text-gray-900">Adults</h4>
                  <p className="text-xs text-gray-500">Ages 13 or above</p>
                </div>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => handleAdultChange("decrement")}
                    disabled={adults <= 1}
                    className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20 12H4"
                      />
                    </svg>
                  </button>
                  <span className="w-8 text-center font-medium">{adults}</span>
                  <button
                    onClick={() => handleAdultChange("increment")}
                    disabled={adults >= 20}
                    className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Children Selection */}
            <div className="mb-6">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="text-sm font-medium text-gray-900">
                    Children
                  </h4>
                  <p className="text-xs text-gray-500">Ages 0 to 12</p>
                </div>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => handleChildrenChange("decrement")}
                    disabled={children <= 0}
                    className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20 12H4"
                      />
                    </svg>
                  </button>
                  <span className="w-8 text-center font-medium">
                    {children}
                  </span>
                  <button
                    onClick={() => handleChildrenChange("increment")}
                    disabled={children >= 10}
                    className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Done Button */}
            <button
              onClick={() => setShowRoomGuestModal(false)}
              className="w-full bg-primary-1 text-white py-3 px-4 rounded-lg font-medium hover:bg-primary-2 transition-colors"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchFormOne;