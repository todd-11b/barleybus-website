"use client";

import { useState } from "react";
import Image from "next/image";
import {
  MagnifyingGlassIcon,
  PlusIcon,
  EyeIcon,
  PencilIcon,
  TrashIcon,
  StarIcon,
  MapPinIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

const AdminPackages = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [selectedPackages, setSelectedPackages] = useState<string[]>([]);

  const packages = [
    {
      id: "1",
      title: "Cox's Bazar Beach Adventure Tour",
      image: "/assets/images/packages/p1-1.webp",
      location: "Cox's Bazar, Bangladesh",
      duration: "3 Days",
      price: 450,
      originalPrice: 550,
      rating: 4.8,
      reviewCount: 127,
      category: "Adventure Tours",
      status: "active",
      bookings: 45,
    },
    {
      id: "2",
      title: "St. Martin Island Day Trip",
      image: "/assets/images/packages/p1-2.webp",
      location: "St. Martin Island, Bangladesh",
      duration: "1 Day",
      price: 320,
      originalPrice: 400,
      rating: 4.6,
      reviewCount: 89,
      category: "Day Trips",
      status: "active",
      bookings: 32,
    },
    {
      id: "3",
      title: "Sylhet Hill Station Tour",
      image: "/assets/images/packages/p1-3.webp",
      location: "Sylhet, Bangladesh",
      duration: "2 Days",
      price: 280,
      originalPrice: 350,
      rating: 4.7,
      reviewCount: 156,
      category: "Cultural Tours",
      status: "inactive",
      bookings: 28,
    },
    {
      id: "4",
      title: "Dhaka City Heritage Walk",
      image: "/assets/images/packages/p1-4.webp",
      location: "Dhaka, Bangladesh",
      duration: "1 Day",
      price: 150,
      originalPrice: 200,
      rating: 4.5,
      reviewCount: 78,
      category: "City Tours",
      status: "active",
      bookings: 67,
    },
    {
      id: "5",
      title: "Chittagong Port City Tour",
      image: "/assets/images/packages/p1-5.webp",
      location: "Chittagong, Bangladesh",
      duration: "2 Days",
      price: 200,
      originalPrice: 250,
      rating: 4.4,
      reviewCount: 94,
      category: "City Tours",
      status: "active",
      bookings: 41,
    },
  ];

  const filteredPackages = packages.filter((pkg) => {
    const matchesSearch =
      pkg.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pkg.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pkg.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      categoryFilter === "all" || pkg.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800";
      case "inactive":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const handleSelectPackage = (packageId: string) => {
    setSelectedPackages((prev) =>
      prev.includes(packageId)
        ? prev.filter((id) => id !== packageId)
        : [...prev, packageId]
    );
  };

  const handleSelectAll = () => {
    if (selectedPackages.length === filteredPackages.length) {
      setSelectedPackages([]);
    } else {
      setSelectedPackages(filteredPackages.map((pkg) => pkg.id));
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Packages Management
          </h1>
          <p className="text-gray-600 mt-2">Manage travel packages and tours</p>
        </div>
        <div className="mt-4 sm:mt-0">
          <button className="bg-primary-1 text-white px-4 py-2 rounded-lg hover:bg-primary-2 transition-colors flex items-center">
            <PlusIcon className="w-4 h-4 mr-2" />
            Add Package
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="p-3 bg-blue-500 rounded-lg">
              <StarIcon className="w-6 h-6 text-white" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">
                Total Packages
              </p>
              <p className="text-2xl font-bold text-gray-900">24</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="p-3 bg-green-500 rounded-lg">
              <StarIcon className="w-6 h-6 text-white" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">
                Active Packages
              </p>
              <p className="text-2xl font-bold text-gray-900">18</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="p-3 bg-yellow-500 rounded-lg">
              <StarIcon className="w-6 h-6 text-white" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">
                Total Bookings
              </p>
              <p className="text-2xl font-bold text-gray-900">213</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="p-3 bg-purple-500 rounded-lg">
              <StarIcon className="w-6 h-6 text-white" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Avg Rating</p>
              <p className="text-2xl font-bold text-gray-900">4.6</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Search */}
          <div className="relative">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search packages..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-1 focus:border-transparent"
            />
          </div>

          {/* Category Filter */}
          <div>
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-1 focus:border-transparent"
            >
              <option value="all">All Categories</option>
              <option value="Adventure Tours">Adventure Tours</option>
              <option value="Day Trips">Day Trips</option>
              <option value="Cultural Tours">Cultural Tours</option>
              <option value="City Tours">City Tours</option>
            </select>
          </div>
        </div>
      </div>

      {/* Packages Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPackages.map((pkg) => (
          <div
            key={pkg.id}
            className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
          >
            {/* Package Image */}
            <div className="relative h-48">
              <Image
                src={pkg.image}
                alt={pkg.title}
                fill
                className="object-cover"
              />
              <div className="absolute top-3 right-3">
                <input
                  type="checkbox"
                  checked={selectedPackages.includes(pkg.id)}
                  onChange={() => handleSelectPackage(pkg.id)}
                  className="rounded border-gray-300 text-primary-1 focus:ring-primary-1"
                />
              </div>
              <div className="absolute top-3 left-3">
                <span
                  className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(
                    pkg.status
                  )}`}
                >
                  {pkg.status}
                </span>
              </div>
            </div>

            {/* Package Content */}
            <div className="p-6">
              <div className="mb-3">
                <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
                  {pkg.title}
                </h3>
                <div className="flex items-center gap-1 text-sm text-gray-600 mt-1">
                  <MapPinIcon className="w-4 h-4" />
                  <span className="truncate">{pkg.location}</span>
                </div>
              </div>

              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="flex items-center">
                    <StarIcon className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium text-gray-900 ml-1">
                      {pkg.rating}
                    </span>
                  </div>
                  <span className="text-sm text-gray-500">
                    ({pkg.reviewCount})
                  </span>
                </div>
                <div className="flex items-center gap-1 text-sm text-gray-600">
                  <ClockIcon className="w-4 h-4" />
                  <span>{pkg.duration}</span>
                </div>
              </div>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold text-gray-900">
                    ${pkg.price}
                  </span>
                  {pkg.originalPrice && (
                    <span className="text-lg text-gray-500 line-through">
                      ${pkg.originalPrice}
                    </span>
                  )}
                </div>
                <div className="text-sm text-gray-600">
                  {pkg.bookings} bookings
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                  {pkg.category}
                </span>
                <div className="flex items-center space-x-2">
                  <button className="text-blue-600 hover:text-blue-900">
                    <EyeIcon className="w-4 h-4" />
                  </button>
                  <button className="text-yellow-600 hover:text-yellow-900">
                    <PencilIcon className="w-4 h-4" />
                  </button>
                  <button className="text-red-600 hover:text-red-900">
                    <TrashIcon className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-700">
            Showing <span className="font-medium">1</span> to{" "}
            <span className="font-medium">5</span> of{" "}
            <span className="font-medium">{filteredPackages.length}</span>{" "}
            results
          </div>
          <div className="flex items-center space-x-2">
            <button className="px-3 py-1 border border-gray-300 rounded-md text-sm hover:bg-gray-50">
              Previous
            </button>
            <button className="px-3 py-1 bg-primary-1 text-white rounded-md text-sm">
              1
            </button>
            <button className="px-3 py-1 border border-gray-300 rounded-md text-sm hover:bg-gray-50">
              2
            </button>
            <button className="px-3 py-1 border border-gray-300 rounded-md text-sm hover:bg-gray-50">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPackages;
