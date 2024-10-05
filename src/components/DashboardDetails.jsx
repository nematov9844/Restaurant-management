// components/Dashboard/index.js
import React from 'react';

const Card = ({ title, value, icon, change, changeText }) => {
  return (
    <div className="bg-gray-800 text-white p-4 rounded-md shadow-md w h-40 flex flex-col justify-between">
      <div className="flex justify-between items-center">
        <div className="text-sm font-medium">{title}</div>
        <div className="text-2xl">{icon}</div>
      </div>
      <div className="text-3xl font-bold">{value}</div>
      <div className={`text-xs ${change > 0 ? 'text-green-500' : 'text-red-500'}`}>
        {change > 0 ? `↑` : `↓`} {Math.abs(change)}% {changeText}
      </div>
    </div>
  );
};

const DashboardDetails = () => {
  return (
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card 
          title="Total User" 
          value="40,689" 
          icon="👥" 
          change={8.5} 
          changeText="Up from yesterday" 
        />
        <Card 
          title="Total Order" 
          value="10,293" 
          icon="📦" 
          change={1.3} 
          changeText="Up from past week" 
        />
        <Card 
          title="Total Sales" 
          value="$89,000" 
          icon="📊" 
          change={-4.3} 
          changeText="Down from yesterday" 
        />
        <Card 
          title="Total Pending" 
          value="2,040" 
          icon="⏳" 
          change={1.8} 
          changeText="Up from yesterday" 
        />
      </div>
  );
};

export default DashboardDetails;
