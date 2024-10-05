import React from "react";
import SalesDetails from "../components/sales-details";
import DashboardDetails from "../components/DashboardDetails";
import DealDetails from "../components/deals-details";
export default function Dashboard() {
  return (
    <div className="flex flex-col gap-4 h-screen overflow-y-auto scrollbar-hide">
      Dashboard
      <DashboardDetails/>
      <SalesDetails />

      <DealDetails 
        product="Apple Watch" 
        location="6096 Marjolaine Landing" 
        date="12.09.2019 - 12:53 PM" 
        pieces={423} 
        amount="$34,295" 
        status="Delivered" 
      />

    </div>
  );
}
