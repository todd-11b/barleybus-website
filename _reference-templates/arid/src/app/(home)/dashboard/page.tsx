"use client";

import BookingTab from "@/components/Dashboard/BookingTab";
import DashboardTab from "@/components/Dashboard/DashboardTab";
import ProfileTab from "@/components/Dashboard/ProfileTab";
import ReceiptsTab from "@/components/Dashboard/ReceiptsTab";
import SettingsTab from "@/components/Dashboard/SettingsTab";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

const tabs = [
  {
    id: "1",
    tabName: "Dashboard",
    LinkString: "dashboard",
  },
  {
    id: "2",
    tabName: "My Booking",
    LinkString: "booking",
  },
  {
    id: "3",
    tabName: "My Receipts",
    LinkString: "receipts",
  },
  {
    id: "4",
    tabName: "My Profile",
    LinkString: "profile",
  },
  {
    id: "5",
    tabName: "Settings",
    LinkString: "settings",
  },
];


function DashboardContent() {
  const searchParams = useSearchParams();
  const selectedTab = searchParams.get('tab') || 'dashboard';

  const renderTabContent = () => {
    switch (selectedTab) {
      case 'booking':
        return <BookingTab />;
      case 'receipts':
        return <ReceiptsTab />;
      case 'profile':
        return <ProfileTab />;
      case 'settings':
        return <SettingsTab />;
      default:
        return <DashboardTab />;
    }
  };
  return (
    <div className="lg:pt-20 pt-14 lg:pb-[10px] max-w-[1570px] mx-auto px-3">
      <div className="lg:grid lg:grid-cols-12 gap-[30px]">
        <div className="col-span-2 pb-4">
          <ul className="border border-primary-1 border-opacity-20 lg:block flex flex-wrap">
            {tabs?.map((item) => (
              <li key={item.id}>
                <Link
                  href={`?${new URLSearchParams({
                    tab: item.LinkString,
                  })}`}
                  className={
                    selectedTab === item.LinkString
                      ? "ds__link active__ds"
                      : "ds__link"
                  }
                >
                  {item.tabName}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/login" className="ds__link">
                Logout
              </Link>
            </li>
          </ul>
        </div>

        <div className="col-span-10">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
}

function Dashboard() {
  return (
    <Suspense fallback={<div className="lg:pt-20 pt-14 lg:pb-[10px] max-w-[1570px] mx-auto px-3">Loading...</div>}>
      <DashboardContent />
    </Suspense>
  );
}

export default Dashboard;
