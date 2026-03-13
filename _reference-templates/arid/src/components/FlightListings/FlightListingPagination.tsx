"use client";

import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const FlightListingPagination = () => {
  const currentPage = 4;
  const totalPages = 8;
  const maxVisiblePages = 5;

  const generatePageNumbers = () => {
    const pages = [];
    const startPage = Math.max(
      1,
      currentPage - Math.floor(maxVisiblePages / 2)
    );
    const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  };

  const pageNumbers = generatePageNumbers();

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mt-8">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Results Info */}
        <div className="text-sm text-gray-600">
          Showing <span className="font-medium">1-12</span> of{" "}
          <span className="font-medium">247</span> flights
        </div>

        {/* Pagination */}
        <nav className="flex items-center space-x-1">
          {/* Previous Button */}
          <Link
            href="#"
            className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
              currentPage <= 1
                ? "text-gray-400 cursor-not-allowed"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            <ChevronLeftIcon className="w-4 h-4" />
            Previous
          </Link>

          {/* Page Numbers */}
          <div className="flex items-center space-x-1">
            {/* First Page */}
            {pageNumbers[0] > 1 && (
              <>
                <Link
                  href="#"
                  className="px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  1
                </Link>
                {pageNumbers[0] > 2 && (
                  <span className="px-2 text-gray-400">...</span>
                )}
              </>
            )}

            {/* Page Numbers */}
            {pageNumbers.map((page) => (
              <Link
                key={page}
                href="#"
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  page === currentPage
                    ? "bg-primary-1 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {page}
              </Link>
            ))}

            {/* Last Page */}
            {pageNumbers[pageNumbers.length - 1] < totalPages && (
              <>
                {pageNumbers[pageNumbers.length - 1] < totalPages - 1 && (
                  <span className="px-2 text-gray-400">...</span>
                )}
                <Link
                  href="#"
                  className="px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  {totalPages}
                </Link>
              </>
            )}
          </div>

          {/* Next Button */}
          <Link
            href="#"
            className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
              currentPage >= totalPages
                ? "text-gray-400 cursor-not-allowed"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            Next
            <ChevronRightIcon className="w-4 h-4" />
          </Link>
        </nav>
      </div>

      {/* Quick Jump */}
      <div className="mt-4 pt-4 border-t border-gray-200">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <span>Go to page:</span>
          <select className="border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-primary-1 focus:border-transparent">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <option key={page} value={page}>
                {page}
              </option>
            ))}
          </select>
          <button className="bg-primary-1 text-white px-3 py-1 rounded text-sm hover:bg-primary-2 transition-colors">
            Go
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlightListingPagination;
