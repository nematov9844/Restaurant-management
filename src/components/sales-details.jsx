import React from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

const SalesDetails = () => {
  const data = {
    labels: [
      "5k",
      "10k",
      "15k",
      "20k",
      "25k",
      "30k",
      "35k",
      "40k",
      "45k",
      "50k",
      "55k",
      "60k",
    ],
    datasets: [
      {
        label: "Sales Performance",
        data: [20, 40, 20,90, 64.366477, 30, 50, 30, 60, 40, 45, 50, 30],
        fill: false,
        backgroundColor: "rgba(75, 192, 192, 1)",
        borderColor: "rgba(75, 192, 192, 1)",
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: "white",
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "gray",
        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
        },
      },
      y: {
        ticks: {
          color: "gray",
        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
        },
      },
    },
  };

  return (
    <div className="bg-gray-800 rounded-lg shadow-lg w-full">
      <div className="p-6 rounded-lg w-full">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-white text-3xl font-bold">Sales Details</h1>
          <select className="bg-gray-700 text-white rounded-lg p-1 text-sm w-32 focus:outline-none focus:ring-2 focus:ring-teal-400">
            <option className="text-sm">October</option>
            <option className="text-sm">November</option>
            <option className="text-sm">December</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 p-4">
          <Line data={data} options={options} width={100} height={25} />
      </div>
    </div>
  );
};

export default SalesDetails;
