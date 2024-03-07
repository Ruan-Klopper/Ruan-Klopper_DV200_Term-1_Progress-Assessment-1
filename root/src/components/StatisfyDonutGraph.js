// StatisfyDonutGraph.js
import React from "react";

// CSS

// Chats.js
import "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

const StatisfyDonut = () => {
  const data = {
    labels: [
      "Highly Satisfied",
      "Satisfied",
      "Neutral",
      "Dissatisfied",
      "Highly Dissatisfied",
    ],
    datasets: [
      {
        label: "Customer Satisfaction",
        data: [25, 40, 20, 10, 5], // Example data for different satisfaction categories
        backgroundColor: [
          "rgba(75, 192, 192, 0.6)", // Light blue for highly satisfied
          "rgba(54, 162, 235, 0.6)", // Lighter blue for satisfied
          "rgba(255, 206, 86, 0.6)", // Light yellow for neutral
          "rgba(255, 159, 64, 0.6)", // Light orange for dissatisfied
          "rgba(255, 99, 132, 0.6)", // Light red for highly dissatisfied
        ],
        borderColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(255, 99, 132, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      title: {
        display: true,
        text: "Customer Satisfaction",
        color: "#fff", // White text color
        font: {
          size: 16,
          weight: "bold",
        },
      },
      legend: {
        display: true,
        position: "bottom",
        labels: {
          color: "#fff", // White text color for legend
        },
      },
    },
  };

  return (
    <div>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default StatisfyDonut;
