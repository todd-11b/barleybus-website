"use client";

import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const VisaListingPagination = () => {
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
    <div className="mt-8 flex flex-col sm:flex-row items-center justify-between">
      <div className="text-sm text-gray-600">
        Showing <span className="font-medium">1-12</span> of{" "}
        <span className="font-medium">156</span> visas
      </div>

      <nav className="flex flex-wrap items-center space-x-1">
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

        <div className="flex items-center space-x-1">
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
        </div>

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
  );
};

export default VisaListingPagination;
