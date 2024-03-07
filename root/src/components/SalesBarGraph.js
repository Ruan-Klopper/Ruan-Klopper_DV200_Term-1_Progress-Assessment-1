// lineChart.js
import React from "react";

// CSS

// Chats.js
import "chart.js/auto";
import { Bar } from "react-chartjs-2";

const SalesBar = () => {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Sales",
        data: [
          10000, 12000, 14000, 16000, 18000, 20000, 22000, 24000, 26000, 28000,
          30000, 32000,
        ],
        backgroundColor: "rgba(255, 255, 255, 0.6)", // White color for bars
        borderColor: "rgba(255, 255, 255, 1)", // White color for border
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: "rgba(255, 255, 255, 1)", // White color for ticks
        },
      },
      x: {
        ticks: {
          color: "rgba(255, 255, 255, 1)", // White color for ticks
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: "rgba(255, 255, 255, 1)", // White color for legend text
        },
      },
    },
  };

  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  );
};

export default SalesBar;
