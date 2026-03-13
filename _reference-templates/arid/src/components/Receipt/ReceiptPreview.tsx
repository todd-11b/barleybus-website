"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Receipt } from "@/types/receipt";
import { QRCodeService } from "@/services/qrCodeService";
import {
  PrinterIcon,
  ArrowDownTrayIcon,
  EyeIcon,
  ShareIcon,
  CheckCircleIcon,
  ClockIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";

interface ReceiptPreviewProps {
  receipt: Receipt;
  onDownload?: (receipt: Receipt) => void;
  onPrint?: (receipt: Receipt) => void;
  showActions?: boolean;
  className?: string;
}

const ReceiptPreview: React.FC<ReceiptPreviewProps> = ({
  receipt,
  onDownload,
  onPrint,
  showActions = true,
  className = "",
}) => {
  const [qrCodeDataUrl, setQrCodeDataUrl] = useState<string>("");
  const [isLoadingQR, setIsLoadingQR] = useState(false);

  useEffect(() => {
    const generateQRCode = async () => {
      if (!receipt.qrCode) {
        setIsLoadingQR(true);
        try {
          const qrData = await QRCodeService.generateReceiptQR(
            receipt.id,
            receipt.receiptNumber,
            receipt.company.website
          );
          setQrCodeDataUrl(qrData);
        } catch (error) {
          console.error("Failed to generate QR code:", error);
        } finally {
          setIsLoadingQR(false);
        }
      } else {
        setQrCodeDataUrl(receipt.qrCode);
      }
    };

    generateQRCode();
  }, [
    receipt.id,
    receipt.receiptNumber,
    receipt.company.website,
    receipt.qrCode,
  ]);

  const formatCurrency = (amount: number, currency: string) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency || "USD",
    }).format(amount);
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(new Date(date));
  };

  const formatDateTime = (date: Date) => {
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date(date));
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "paid":
        return "bg-green-100 text-green-800 border-green-200";
      case "pending":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "refunded":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "cancelled":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status.toLowerCase()) {
      case "paid":
        return <CheckCircleIcon className="w-4 h-4" />;
      case "pending":
        return <ClockIcon className="w-4 h-4" />;
      case "refunded":
        return <ArrowDownTrayIcon className="w-4 h-4" />;
      case "cancelled":
        return <XCircleIcon className="w-4 h-4" />;
      default:
        return <ClockIcon className="w-4 h-4" />;
    }
  };

  const handleDownload = () => {
    if (onDownload) {
      onDownload(receipt);
    }
  };

  const handlePrint = () => {
    if (onPrint) {
      onPrint(receipt);
    } else {
      window.print();
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Receipt ${receipt.receiptNumber}`,
          text: `Receipt for ${receipt.customer.name}`,
          url: window.location.href,
        });
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <div
      className={`bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden ${className}`}
    >
      {/* Header Actions */}
      {showActions && (
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-6 py-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center">
                <EyeIcon className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  Receipt Preview
                </h2>
                <p className="text-sm text-gray-600">
                  {receipt.receiptNumber} • {formatDate(receipt.issueDate)}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handleShare}
                className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <ShareIcon className="w-4 h-4" />
                Share
              </button>
              <button
                onClick={handleDownload}
                className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <ArrowDownTrayIcon className="w-4 h-4" />
                Download PDF
              </button>
              <button
                onClick={handlePrint}
                className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <PrinterIcon className="w-4 h-4" />
                Print
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Receipt Content */}
      <div className="p-8 print:p-6" id="receipt-content">
        {/* Company Header */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
            {receipt.company.logo ? (
              <Image
                src={receipt.company.logo}
                alt={receipt.company.name}
                width={60}
                height={60}
                className="rounded-xl"
              />
            ) : (
              <span className="text-2xl font-bold text-white">
                {receipt.company.name.charAt(0)}
              </span>
            )}
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {receipt.company.name}
          </h1>
          <div className="text-gray-600 space-y-1">
            <p>{receipt.company.address.street}</p>
            <p>
              {receipt.company.address.city}, {receipt.company.address.state}{" "}
              {receipt.company.address.zipCode}
            </p>
            <p>{receipt.company.address.country}</p>
            <p>Phone: {receipt.company.phone}</p>
            <p>Email: {receipt.company.email}</p>
            <p>Website: {receipt.company.website}</p>
            {receipt.company.taxId && <p>Tax ID: {receipt.company.taxId}</p>}
          </div>
        </div>

        {/* Receipt Info */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">RECEIPT</h2>
            <div className="space-y-1 text-gray-600">
              <p>
                <span className="font-medium">Receipt #:</span>{" "}
                {receipt.receiptNumber}
              </p>
              <p>
                <span className="font-medium">Date:</span>{" "}
                {formatDate(receipt.issueDate)}
              </p>
              {receipt.dueDate && (
                <p>
                  <span className="font-medium">Due Date:</span>{" "}
                  {formatDate(receipt.dueDate)}
                </p>
              )}
              <div className="flex items-center gap-2 mt-2">
                <span className="font-medium">Status:</span>
                <span
                  className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(
                    receipt.status
                  )}`}
                >
                  {getStatusIcon(receipt.status)}
                  {receipt.status.toUpperCase()}
                </span>
              </div>
            </div>
          </div>

          {/* QR Code */}
          {qrCodeDataUrl && (
            <div className="text-center">
              <div className="w-24 h-24 bg-white border-2 border-gray-200 rounded-lg p-2">
                <Image
                  src={qrCodeDataUrl}
                  alt="Receipt QR Code"
                  width={80}
                  height={80}
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-xs text-gray-500 mt-1">Scan to verify</p>
            </div>
          )}
        </div>

        {/* Customer Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Bill To:
            </h3>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="font-medium text-gray-900">
                {receipt.customer.name}
              </p>
              <p className="text-gray-600">{receipt.customer.email}</p>
              {receipt.customer.phone && (
                <p className="text-gray-600">{receipt.customer.phone}</p>
              )}
              {receipt.customer.address && (
                <div className="mt-2 text-gray-600">
                  <p>{receipt.customer.address.street}</p>
                  <p>
                    {receipt.customer.address.city},{" "}
                    {receipt.customer.address.state}{" "}
                    {receipt.customer.address.zipCode}
                  </p>
                  <p>{receipt.customer.address.country}</p>
                </div>
              )}
            </div>
          </div>

          {/* Service Details */}
          {receipt.serviceDetails && (
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Service Details:
              </h3>
              <div className="bg-gray-50 rounded-lg p-4">
                {receipt.serviceDetails.bookingReference && (
                  <p>
                    <span className="font-medium">Booking Reference:</span>{" "}
                    {receipt.serviceDetails.bookingReference}
                  </p>
                )}
                {receipt.serviceDetails.checkIn && (
                  <p>
                    <span className="font-medium">Check-in:</span>{" "}
                    {formatDate(receipt.serviceDetails.checkIn)}
                  </p>
                )}
                {receipt.serviceDetails.checkOut && (
                  <p>
                    <span className="font-medium">Check-out:</span>{" "}
                    {formatDate(receipt.serviceDetails.checkOut)}
                  </p>
                )}
                {receipt.serviceDetails.passengers && (
                  <p>
                    <span className="font-medium">Passengers:</span>{" "}
                    {receipt.serviceDetails.passengers}
                  </p>
                )}
                {receipt.serviceDetails.rooms && (
                  <p>
                    <span className="font-medium">Rooms:</span>{" "}
                    {receipt.serviceDetails.rooms}
                  </p>
                )}
                {receipt.serviceDetails.flightDetails && (
                  <div className="mt-2">
                    <p>
                      <span className="font-medium">Flight:</span>{" "}
                      {receipt.serviceDetails.flightDetails.flightNumber}
                    </p>
                    <p>
                      <span className="font-medium">Route:</span>{" "}
                      {receipt.serviceDetails.flightDetails.departure} →{" "}
                      {receipt.serviceDetails.flightDetails.arrival}
                    </p>
                    <p>
                      <span className="font-medium">Date:</span>{" "}
                      {formatDate(receipt.serviceDetails.flightDetails.date)}
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Items Table */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Items & Services:
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left p-3 border-b border-gray-200 font-medium text-gray-900">
                    Description
                  </th>
                  <th className="text-center p-3 border-b border-gray-200 font-medium text-gray-900">
                    Qty
                  </th>
                  <th className="text-right p-3 border-b border-gray-200 font-medium text-gray-900">
                    Unit Price
                  </th>
                  <th className="text-right p-3 border-b border-gray-200 font-medium text-gray-900">
                    Total
                  </th>
                </tr>
              </thead>
              <tbody>
                {receipt.items.map((item, index) => (
                  <tr
                    key={item.id}
                    className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="p-3 border-b border-gray-200">
                      <div>
                        <p className="font-medium text-gray-900">
                          {item.description}
                        </p>
                        {item.category && (
                          <p className="text-xs text-gray-500 capitalize">
                            {item.category}
                          </p>
                        )}
                      </div>
                    </td>
                    <td className="p-3 border-b border-gray-200 text-center text-gray-700">
                      {item.quantity}
                    </td>
                    <td className="p-3 border-b border-gray-200 text-right text-gray-700">
                      {formatCurrency(item.unitPrice, receipt.currency)}
                    </td>
                    <td className="p-3 border-b border-gray-200 text-right font-medium text-gray-900">
                      {formatCurrency(item.totalPrice, receipt.currency)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Totals */}
        <div className="flex justify-end mb-8">
          <div className="w-80">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal:</span>
                <span className="font-medium">
                  {formatCurrency(receipt.subtotal, receipt.currency)}
                </span>
              </div>

              {receipt.taxes.map((tax, index) => (
                <div key={index} className="flex justify-between">
                  <span className="text-gray-600">{tax.name}:</span>
                  <span className="font-medium">
                    {formatCurrency(tax.amount, receipt.currency)}
                  </span>
                </div>
              ))}

              {receipt.discounts.map((discount, index) => (
                <div
                  key={index}
                  className="flex justify-between text-green-600"
                >
                  <span>{discount.name}:</span>
                  <span className="font-medium">
                    -{formatCurrency(discount.amount, receipt.currency)}
                  </span>
                </div>
              ))}

              <div className="border-t border-gray-200 pt-2">
                <div className="flex justify-between">
                  <span className="text-lg font-semibold text-gray-900">
                    Total:
                  </span>
                  <span className="text-lg font-bold text-gray-900">
                    {formatCurrency(receipt.totalAmount, receipt.currency)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Amount Paid:</span>
                  <span className="font-medium">
                    {formatCurrency(receipt.amountPaid, receipt.currency)}
                  </span>
                </div>
                {receipt.balanceDue > 0 && (
                  <div className="flex justify-between text-red-600">
                    <span className="font-medium">Balance Due:</span>
                    <span className="font-bold">
                      {formatCurrency(receipt.balanceDue, receipt.currency)}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Payment Information */}
        {receipt.payment && (
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Payment Information:
            </h3>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p>
                    <span className="font-medium">Payment Method:</span>{" "}
                    {receipt.payment.method.replace("_", " ").toUpperCase()}
                  </p>
                  {receipt.payment.cardLast4 && (
                    <p>
                      <span className="font-medium">Card:</span> **** **** ****{" "}
                      {receipt.payment.cardLast4}
                    </p>
                  )}
                </div>
                <div>
                  <p>
                    <span className="font-medium">Transaction ID:</span>{" "}
                    {receipt.payment.transactionId}
                  </p>
                  <p>
                    <span className="font-medium">Processed:</span>{" "}
                    {formatDateTime(receipt.payment.processedAt)}
                  </p>
                  {receipt.payment.authorizationCode && (
                    <p>
                      <span className="font-medium">Auth Code:</span>{" "}
                      {receipt.payment.authorizationCode}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Notes and Terms */}
        {(receipt.notes || receipt.terms) && (
          <div className="border-t border-gray-200 pt-6">
            {receipt.notes && (
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Notes:
                </h3>
                <p className="text-gray-700 leading-relaxed">{receipt.notes}</p>
              </div>
            )}

            {receipt.terms && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Terms & Conditions:
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm">
                  {receipt.terms}
                </p>
              </div>
            )}
          </div>
        )}

        {/* Footer */}
        <div className="border-t border-gray-200 pt-6 mt-8 text-center">
          <p className="text-gray-600">Thank you for your business!</p>
          <p className="text-xs text-gray-500 mt-2">
            This receipt was generated on {formatDateTime(new Date())}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReceiptPreview;
