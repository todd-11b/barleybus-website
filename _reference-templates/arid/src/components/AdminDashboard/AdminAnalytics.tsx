"use client";

import {
  ChartBarIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  EyeIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
  CalendarIcon,
} from "@heroicons/react/24/outline";

const AdminAnalytics = () => {
  const analyticsData = {
    revenue: {
      current: 45231,
      previous: 38456,
      change: 17.6,
    },
    bookings: {
      current: 2847,
      previous: 2156,
      change: 32.1,
    },
    users: {
      current: 1234,
      previous: 1089,
      change: 13.3,
    },
    conversion: {
      current: 3.2,
      previous: 2.8,
      change: 14.3,
    },
  };

  const monthlyRevenue = [
    { month: "Jan", revenue: 32000 },
    { month: "Feb", revenue: 28000 },
    { month: "Mar", revenue: 35000 },
    { month: "Apr", revenue: 42000 },
    { month: "May", revenue: 38000 },
    { month: "Jun", revenue: 45231 },
  ];

  const topPackages = [
    {
      name: "Cox's Bazar Beach Adventure",
      bookings: 145,
      revenue: 65250,
      growth: 12.5,
    },
    {
      name: "St. Martin Island Tour",
      bookings: 98,
      revenue: 31360,
      growth: 8.2,
    },
    {
      name: "Sylhet Hill Station",
      bookings: 76,
      revenue: 21280,
      growth: 15.3,
    },
    {
      name: "Dhaka City Heritage",
      bookings: 67,
      revenue: 10050,
      growth: -2.1,
    },
  ];

  const recentActivity = [
    {
      type: "booking",
      description: "New booking for Cox's Bazar Adventure",
      time: "2 minutes ago",
      amount: 450,
    },
    {
      type: "payment",
      description: "Payment received for St. Martin Tour",
      time: "15 minutes ago",
      amount: 320,
    },
    {
      type: "user",
      description: "New user registration",
      time: "1 hour ago",
      amount: null,
    },
    {
      type: "booking",
      description: "Booking cancelled for Sylhet Tour",
      time: "2 hours ago",
      amount: -280,
    },
  ];

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "booking":
        return <CalendarIcon className="w-5 h-5 text-blue-500" />;
      case "payment":
        return <CurrencyDollarIcon className="w-5 h-5 text-green-500" />;
      case "user":
        return <UserGroupIcon className="w-5 h-5 text-purple-500" />;
      default:
        return <EyeIcon className="w-5 h-5 text-gray-500" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          Analytics Dashboard
        </h1>
        <p className="text-gray-600 mt-2">
          Track your business performance and insights
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Revenue</p>
              <p className="text-2xl font-bold text-gray-900">
                ${analyticsData.revenue.current.toLocaleString()}
              </p>
            </div>
            <div className="p-3 bg-green-500 rounded-lg">
              <CurrencyDollarIcon className="w-6 h-6 text-white" />
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <ArrowUpIcon className="w-4 h-4 text-green-500 mr-1" />
            <span className="text-sm font-medium text-green-600">
              +{analyticsData.revenue.change}%
            </span>
            <span className="text-sm text-gray-500 ml-1">from last month</span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">
                Total Bookings
              </p>
              <p className="text-2xl font-bold text-gray-900">
                {analyticsData.bookings.current.toLocaleString()}
              </p>
            </div>
            <div className="p-3 bg-blue-500 rounded-lg">
              <CalendarIcon className="w-6 h-6 text-white" />
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <ArrowUpIcon className="w-4 h-4 text-green-500 mr-1" />
            <span className="text-sm font-medium text-green-600">
              +{analyticsData.bookings.change}%
            </span>
            <span className="text-sm text-gray-500 ml-1">from last month</span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Active Users</p>
              <p className="text-2xl font-bold text-gray-900">
                {analyticsData.users.current.toLocaleString()}
              </p>
            </div>
            <div className="p-3 bg-purple-500 rounded-lg">
              <UserGroupIcon className="w-6 h-6 text-white" />
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <ArrowUpIcon className="w-4 h-4 text-green-500 mr-1" />
            <span className="text-sm font-medium text-green-600">
              +{analyticsData.users.change}%
            </span>
            <span className="text-sm text-gray-500 ml-1">from last month</span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">
                Conversion Rate
              </p>
              <p className="text-2xl font-bold text-gray-900">
                {analyticsData.conversion.current}%
              </p>
            </div>
            <div className="p-3 bg-orange-500 rounded-lg">
              <ChartBarIcon className="w-6 h-6 text-white" />
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <ArrowUpIcon className="w-4 h-4 text-green-500 mr-1" />
            <span className="text-sm font-medium text-green-600">
              +{analyticsData.conversion.change}%
            </span>
            <span className="text-sm text-gray-500 ml-1">from last month</span>
          </div>
        </div>
      </div>

      {/* Charts and Tables */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Chart */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Monthly Revenue
          </h3>
          <div className="space-y-4">
            {monthlyRevenue.map((item, index) => (
              <div key={item.month} className="flex items-center">
                <div className="w-12 text-sm text-gray-600">{item.month}</div>
                <div className="flex-1 mx-4">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-primary-1 h-2 rounded-full"
                      style={{ width: `${(item.revenue / 50000) * 100}%` }}
                    ></div>
                  </div>
                </div>
                <div className="w-20 text-sm font-medium text-gray-900">
                  ${item.revenue.toLocaleString()}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Packages */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Top Performing Packages
          </h3>
          <div className="space-y-4">
            {topPackages.map((pkg, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">
                    {pkg.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    {pkg.bookings} bookings
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">
                    ${pkg.revenue.toLocaleString()}
                  </p>
                  <p
                    className={`text-xs ${
                      pkg.growth > 0 ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {pkg.growth > 0 ? "+" : ""}
                    {pkg.growth}%
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Recent Activity
        </h3>
        <div className="space-y-4">
          {recentActivity.map((activity, index) => (
            <div key={index} className="flex items-center">
              <div className="flex-shrink-0">
                {getActivityIcon(activity.type)}
              </div>
              <div className="ml-4 flex-1">
                <p className="text-sm text-gray-900">{activity.description}</p>
                <p className="text-xs text-gray-500">{activity.time}</p>
              </div>
              {activity.amount && (
                <div
                  className={`text-sm font-medium ${
                    activity.amount > 0 ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {activity.amount > 0 ? "+" : ""}${activity.amount}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">
            Traffic Sources
          </h4>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Direct</span>
              <span className="text-sm font-medium text-gray-900">45%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Search</span>
              <span className="text-sm font-medium text-gray-900">32%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Social</span>
              <span className="text-sm font-medium text-gray-900">18%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Referral</span>
              <span className="text-sm font-medium text-gray-900">5%</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">
            Device Usage
          </h4>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Mobile</span>
              <span className="text-sm font-medium text-gray-900">68%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Desktop</span>
              <span className="text-sm font-medium text-gray-900">28%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Tablet</span>
              <span className="text-sm font-medium text-gray-900">4%</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">
            Geographic Distribution
          </h4>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Bangladesh</span>
              <span className="text-sm font-medium text-gray-900">65%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">India</span>
              <span className="text-sm font-medium text-gray-900">18%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">USA</span>
              <span className="text-sm font-medium text-gray-900">12%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Others</span>
              <span className="text-sm font-medium text-gray-900">5%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminAnalytics;
