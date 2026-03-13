"use client";

import { useState } from "react";
import AdminSidebar from "@/components/AdminDashboard/AdminSidebar";
import AdminOverview from "@/components/AdminDashboard/AdminOverview";
import AdminBookings from "@/components/AdminDashboard/AdminBookings";
import AdminUsers from "@/components/AdminDashboard/AdminUsers";
import AdminPackages from "@/components/AdminDashboard/AdminPackages";
import AdminAnalytics from "@/components/AdminDashboard/AdminAnalytics";
import AdminSettings from "@/components/AdminDashboard/AdminSettings";

type AdminTab =
  | "overview"
  | "bookings"
  | "users"
  | "packages"
  | "analytics"
  | "settings";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState<AdminTab>("overview");

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return <AdminOverview />;
      case "bookings":
        return <AdminBookings />;
      case "users":
        return <AdminUsers />;
      case "packages":
        return <AdminPackages />;
      case "analytics":
        return <AdminAnalytics />;
      case "settings":
        return <AdminSettings />;
      default:
        return <AdminOverview />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex flex-col">
        {/* Sidebar */}
        <AdminSidebar
          activeTab={activeTab}
          onTabChange={(tab) => setActiveTab(tab as AdminTab)}
        />

        {/* Main Content */}
        <div className="flex-1 lg:ml-64">
          <div className="p-6">{renderContent()}</div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
