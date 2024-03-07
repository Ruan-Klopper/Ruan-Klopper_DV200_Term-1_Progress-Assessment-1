// barChart.js
import React from "react";

// CSS

// Chats.js
import "chart.js/auto";
import { Bubble } from "react-chartjs-2";

const ServicesBubble = () => {
  const data = {
    datasets: [
      {
        label: "Services Customers Chose",
        data: [
          { x: "Weddings", y: 20, r: 10 }, // Example data for weddings
          { x: "Corporate Events", y: 15, r: 8 }, // Example data for corporate events
          { x: "Music Videos", y: 25, r: 12 }, // Example data for music videos
          { x: "Promotional Videos", y: 18, r: 9 }, // Example data for promotional videos
          { x: "Other", y: 12, r: 6 }, // Example data for other services
          // Add more examples for different services
          { x: "Documentaries", y: 22, r: 11 }, // Example data for documentaries
          { x: "Live Events Coverage", y: 17, r: 7 }, // Example data for live events coverage
          { x: "Product Launch Videos", y: 23, r: 10 }, // Example data for product launch videos
        ],
        backgroundColor: "rgba(255, 255, 255, 0.6)", // White with opacity
        borderColor: "rgba(255, 255, 255, 1)", // White
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: "rgba(255, 255, 255, 1)", // White text color for y-axis
        },
      },
      x: {
        ticks: {
          color: "rgba(255, 255, 255, 1)", // White text color for x-axis
        },
      },
    },
    redraw: false,
    datasetIdKey: "label",
    fallbackContent: null,
    updateMode: "resize",
    ref: null,
  };

  return (
    <div>
      <Bubble data={data} options={options} />
    </div>
  );
};

export default ServicesBubble;
