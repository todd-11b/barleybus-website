"use client";

import React, { useState, useEffect } from "react";
import { Receipt } from "@/types/receipt";
import { PDFService } from "@/services/pdfService";
import { QRCodeService } from "@/services/qrCodeService";
import ReceiptPreview from "@/components/Receipt/ReceiptPreview";
import { sampleReceipts } from "@/data/sampleReceipts";
import {
  MagnifyingGlassIcon,
  FunnelIcon,
  EyeIcon,
  ArrowDownTrayIcon,
  PrinterIcon,
  PlusIcon,
  DocumentTextIcon,
  CurrencyDollarIcon,
  CalendarIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

const ReceiptsPage: React.FC = () => {
  const [receipts, setReceipts] = useState<Receipt[]>(sampleReceipts);
  const [selectedReceipt, setSelectedReceipt] = useState<Receipt | null>(
    sampleReceipts[0] || null
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [typeFilter, setTypeFilter] = useState<string>("all");
  const [isLoading, setIsLoading] = useState(false);

  // Filter receipts based on search and filters
  const filteredReceipts = receipts.filter((receipt) => {
    const matchesSearch =
      receipt.receiptNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      receipt.customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      receipt.customer.email.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      statusFilter === "all" || receipt.status === statusFilter;
    const matchesType = typeFilter === "all" || receipt.type === typeFilter;

    return matchesSearch && matchesStatus && matchesType;
  });

  // Auto-select first filtered receipt if current selection is not in filtered results
  useEffect(() => {
    if (filteredReceipts.length > 0) {
      const isSelectedReceiptInFiltered =
        selectedReceipt &&
        filteredReceipts.some((receipt) => receipt.id === selectedReceipt.id);

      if (!isSelectedReceiptInFiltered) {
        setSelectedReceipt(filteredReceipts[0]);
      }
    } else {
      setSelectedReceipt(null);
    }
  }, [filteredReceipts, selectedReceipt]);

  const handleDownloadPDF = async (receipt: Receipt) => {
    setIsLoading(true);
    try {
      const blob = await PDFService.generateReceiptPDF(receipt);
      PDFService.downloadPDF(blob, `receipt-${receipt.receiptNumber}.pdf`);
    } catch (error) {
      console.error("Error downloading PDF:", error);
      alert("Failed to download PDF. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handlePrintReceipt = async (receipt: Receipt) => {
    try {
      // Generate PDF and open in new window for printing
      const blob = await PDFService.generateReceiptPDF(receipt);
      PDFService.openPDF(blob);
    } catch (error) {
      console.error("Error printing receipt:", error);
      alert("Failed to print receipt. Please try again.");
    }
  };

  const getStatusBadge = (status: string) => {
    const statusClasses = {
      paid: "bg-green-100 text-green-800 border-green-200",
      pending: "bg-yellow-100 text-yellow-800 border-yellow-200",
      refunded: "bg-blue-100 text-blue-800 border-blue-200",
      cancelled: "bg-red-100 text-red-800 border-red-200",
    };

    return (
      <span
        className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${
          statusClasses[status as keyof typeof statusClasses] ||
          statusClasses.pending
        }`}
      >
        {status.toUpperCase()}
      </span>
    );
  };

  const formatCurrency = (amount: number, currency: string) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency || "USD",
    }).format(amount);
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    }).format(new Date(date));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Receipts</h1>
              <p className="text-gray-600 mt-1">
                Manage and download your receipts
              </p>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <PlusIcon className="w-5 h-5" />
              New Receipt
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Receipts List */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
              {/* Search and Filters */}
              <div className="space-y-4 mb-6">
                <div className="relative">
                  <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search receipts..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  >
                    <option value="all">All Status</option>
                    <option value="paid">Paid</option>
                    <option value="pending">Pending</option>
                    <option value="refunded">Refunded</option>
                    <option value="cancelled">Cancelled</option>
                  </select>

                  <select
                    value={typeFilter}
                    onChange={(e) => setTypeFilter(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  >
                    <option value="all">All Types</option>
                    <option value="booking">Booking</option>
                    <option value="payment">Payment</option>
                    <option value="refund">Refund</option>
                    <option value="invoice">Invoice</option>
                  </select>
                </div>
              </div>

              {/* Receipts List */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                  <span>{filteredReceipts.length} receipts found</span>
                  <FunnelIcon className="w-4 h-4" />
                </div>

                {filteredReceipts.map((receipt) => (
                  <div
                    key={receipt.id}
                    onClick={() => setSelectedReceipt(receipt)}
                    className={`p-4 rounded-lg border cursor-pointer transition-all duration-200 ${
                      selectedReceipt?.id === receipt.id
                        ? "border-blue-500 bg-blue-50 shadow-md ring-2 ring-blue-200"
                        : "border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <DocumentTextIcon className="w-5 h-5 text-gray-400" />
                        <span className="font-medium text-gray-900">
                          {receipt.receiptNumber}
                        </span>
                      </div>
                      {getStatusBadge(receipt.status)}
                    </div>

                    <div className="space-y-1 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <UserIcon className="w-4 h-4" />
                        <span>{receipt.customer.name}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CurrencyDollarIcon className="w-4 h-4" />
                        <span className="font-medium">
                          {formatCurrency(
                            receipt.totalAmount,
                            receipt.currency
                          )}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CalendarIcon className="w-4 h-4" />
                        <span>{formatDate(receipt.issueDate)}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 mt-3">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedReceipt(receipt);
                        }}
                        className="flex items-center gap-1 px-2 py-1 text-xs text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        <EyeIcon className="w-3 h-3" />
                        Preview
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDownloadPDF(receipt);
                        }}
                        className="flex items-center gap-1 px-2 py-1 text-xs text-green-600 hover:text-green-800 transition-colors"
                        disabled={isLoading}
                      >
                        <ArrowDownTrayIcon className="w-3 h-3" />
                        Download
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Receipt Preview */}
          <div className="lg:col-span-2">
            {selectedReceipt ? (
              <ReceiptPreview
                receipt={selectedReceipt}
                onDownload={handleDownloadPDF}
                onPrint={handlePrintReceipt}
                showActions={true}
              />
            ) : (
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-12 text-center">
                <DocumentTextIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  No Receipt Selected
                </h3>
                <p className="text-gray-600">
                  Select a receipt from the list to preview it here
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReceiptsPage;
