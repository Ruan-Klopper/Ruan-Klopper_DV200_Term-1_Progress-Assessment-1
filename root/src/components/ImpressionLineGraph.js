// lineChart.js
import React from "react";

// CSS

// Chats.js
import "chart.js/auto";
import { Line } from "react-chartjs-2";

const ImpressionLine = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Monthly Impressions",
        data: [1500, 1600, 1550, 1700, 1650, 1800], // Example data for monthly impressions
        fill: false,
        borderColor: "rgba(255,255,255,1)", // White line color
        lineTension: 0.1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: false,
        grid: {
          color: "rgba(255,255,255,0.2)", // White grid lines with opacity
        },
        ticks: {
          color: "rgba(255,255,255,1)", // White tick marks
        },
      },
      x: {
        grid: {
          color: "rgba(255,255,255,0.2)", // White grid lines with opacity
        },
        ticks: {
          color: "rgba(255,255,255,1)", // White tick marks
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: "rgba(255,255,255,1)", // White legend text
        },
      },
    },
  };

  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
};

export default ImpressionLine;
