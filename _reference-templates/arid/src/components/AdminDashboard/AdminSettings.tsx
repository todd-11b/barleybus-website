"use client";

import { useState } from "react";
import {
  CogIcon,
  BellIcon,
  ShieldCheckIcon,
  GlobeAltIcon,
  CreditCardIcon,
  UserIcon,
  KeyIcon,
  PhotoIcon,
} from "@heroicons/react/24/outline";

const AdminSettings = () => {
  const [activeTab, setActiveTab] = useState("general");

  const settingsTabs = [
    { id: "general", name: "General", icon: CogIcon },
    { id: "notifications", name: "Notifications", icon: BellIcon },
    { id: "security", name: "Security", icon: ShieldCheckIcon },
    { id: "appearance", name: "Appearance", icon: PhotoIcon },
    { id: "billing", name: "Billing", icon: CreditCardIcon },
  ];

  const renderGeneralSettings = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Site Information
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Site Name
            </label>
            <input
              type="text"
              defaultValue="Arid Travel & Tourism"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-1 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Site URL
            </label>
            <input
              type="url"
              defaultValue="https://arid-travel.com"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-1 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Contact Information
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              defaultValue="admin@arid-travel.com"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-1 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone
            </label>
            <input
              type="tel"
              defaultValue="+880 1234 567890"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-1 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Business Hours
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Opening Time
            </label>
            <input
              type="time"
              defaultValue="09:00"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-1 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Closing Time
            </label>
            <input
              type="time"
              defaultValue="18:00"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-1 focus:border-transparent"
            />
          </div>
        </div>
      </div>
    </div>
  );

  const renderNotificationSettings = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Email Notifications
        </h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-900">New Bookings</p>
              <p className="text-sm text-gray-500">
                Get notified when new bookings are made
              </p>
            </div>
            <input
              type="checkbox"
              defaultChecked
              className="rounded border-gray-300 text-primary-1 focus:ring-primary-1"
            />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-900">
                Payment Confirmations
              </p>
              <p className="text-sm text-gray-500">
                Receive payment confirmation emails
              </p>
            </div>
            <input
              type="checkbox"
              defaultChecked
              className="rounded border-gray-300 text-primary-1 focus:ring-primary-1"
            />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-900">Cancellations</p>
              <p className="text-sm text-gray-500">
                Get notified about booking cancellations
              </p>
            </div>
            <input
              type="checkbox"
              defaultChecked
              className="rounded border-gray-300 text-primary-1 focus:ring-primary-1"
            />
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          System Alerts
        </h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-900">Low Inventory</p>
              <p className="text-sm text-gray-500">
                Alert when package availability is low
              </p>
            </div>
            <input
              type="checkbox"
              defaultChecked
              className="rounded border-gray-300 text-primary-1 focus:ring-primary-1"
            />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-900">
                System Maintenance
              </p>
              <p className="text-sm text-gray-500">
                Notifications about scheduled maintenance
              </p>
            </div>
            <input
              type="checkbox"
              defaultChecked
              className="rounded border-gray-300 text-primary-1 focus:ring-primary-1"
            />
          </div>
        </div>
      </div>
    </div>
  );

  const renderSecuritySettings = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Password Security
        </h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Current Password
            </label>
            <input
              type="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-1 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              New Password
            </label>
            <input
              type="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-1 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Confirm New Password
            </label>
            <input
              type="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-1 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Two-Factor Authentication
        </h3>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-900">Enable 2FA</p>
            <p className="text-sm text-gray-500">
              Add an extra layer of security to your account
            </p>
          </div>
          <input
            type="checkbox"
            className="rounded border-gray-300 text-primary-1 focus:ring-primary-1"
          />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Login Sessions
        </h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div>
              <p className="text-sm font-medium text-gray-900">
                Current Session
              </p>
              <p className="text-sm text-gray-500">
                Chrome on Windows • Dhaka, Bangladesh
              </p>
            </div>
            <span className="text-sm text-green-600 font-medium">Active</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div>
              <p className="text-sm font-medium text-gray-900">
                Previous Session
              </p>
              <p className="text-sm text-gray-500">
                Safari on iPhone • Dhaka, Bangladesh
              </p>
            </div>
            <span className="text-sm text-gray-500">2 hours ago</span>
          </div>
        </div>
      </div>
    </div>
  );

  const renderAppearanceSettings = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Theme Settings
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border-2 border-primary-1 rounded-lg p-4 cursor-pointer">
            <div className="w-full h-20 bg-gray-900 rounded mb-2"></div>
            <p className="text-sm font-medium text-gray-900">Dark Theme</p>
            <p className="text-xs text-gray-500">Currently active</p>
          </div>
          <div className="border border-gray-300 rounded-lg p-4 cursor-pointer hover:border-gray-400">
            <div className="w-full h-20 bg-white border rounded mb-2"></div>
            <p className="text-sm font-medium text-gray-900">Light Theme</p>
            <p className="text-xs text-gray-500">Switch to light mode</p>
          </div>
          <div className="border border-gray-300 rounded-lg p-4 cursor-pointer hover:border-gray-400">
            <div className="w-full h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded mb-2"></div>
            <p className="text-sm font-medium text-gray-900">Auto Theme</p>
            <p className="text-xs text-gray-500">Follow system preference</p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Language & Region
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Language
            </label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-1 focus:border-transparent">
              <option>English</option>
              <option>বাংলা</option>
              <option>हिन्दी</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Timezone
            </label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-1 focus:border-transparent">
              <option>Asia/Dhaka (GMT+6)</option>
              <option>UTC (GMT+0)</option>
              <option>America/New_York (GMT-5)</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );

  const renderBillingSettings = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Current Plan
        </h3>
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-lg font-semibold text-gray-900">
                Professional Plan
              </h4>
              <p className="text-sm text-gray-500">
                $99/month • Billed annually
              </p>
            </div>
            <button className="bg-primary-1 text-white px-4 py-2 rounded-lg hover:bg-primary-2 transition-colors">
              Upgrade Plan
            </button>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Payment Method
        </h3>
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <CreditCardIcon className="w-8 h-8 text-gray-400 mr-3" />
              <div>
                <p className="text-sm font-medium text-gray-900">
                  •••• •••• •••• 4242
                </p>
                <p className="text-sm text-gray-500">Expires 12/25</p>
              </div>
            </div>
            <button className="text-primary-1 hover:text-primary-2">
              Update
            </button>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Billing History
        </h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div>
              <p className="text-sm font-medium text-gray-900">January 2024</p>
              <p className="text-sm text-gray-500">Professional Plan</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-gray-900">$99.00</p>
              <p className="text-sm text-green-600">Paid</p>
            </div>
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div>
              <p className="text-sm font-medium text-gray-900">December 2023</p>
              <p className="text-sm text-gray-500">Professional Plan</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-gray-900">$99.00</p>
              <p className="text-sm text-green-600">Paid</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case "general":
        return renderGeneralSettings();
      case "notifications":
        return renderNotificationSettings();
      case "security":
        return renderSecuritySettings();
      case "appearance":
        return renderAppearanceSettings();
      case "billing":
        return renderBillingSettings();
      default:
        return renderGeneralSettings();
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-600 mt-2">
          Manage your account settings and preferences
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Settings Navigation */}
        <div className="lg:w-64">
          <nav className="space-y-1">
            {settingsTabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center px-4 py-3 text-left rounded-lg transition-colors ${
                    activeTab === tab.id
                      ? "bg-primary-1 text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <Icon className="w-5 h-5 mr-3" />
                  <span className="font-medium">{tab.name}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Settings Content */}
        <div className="flex-1">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            {renderContent()}

            {/* Save Button */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex justify-end">
                <button className="bg-primary-1 text-white px-6 py-2 rounded-lg hover:bg-primary-2 transition-colors">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSettings;
