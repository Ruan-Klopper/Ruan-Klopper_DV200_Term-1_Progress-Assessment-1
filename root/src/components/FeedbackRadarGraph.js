// feedbackRadar.js
import React from "react";

// CSS

// Chats.js
import "chart.js/auto";
import { Radar } from "react-chartjs-2";

const FeedbackRadar = () => {
  const data = {
    labels: [
      "Professionalism",
      "Quality of Work",
      "Communication",
      "Creativity",
      "Timeliness",
    ],
    datasets: [
      {
        label: "Customer Feedback",
        data: [4.5, 4.2, 4.6, 4.4, 4.3], // Example data for customer feedback ratings (out of 5)
        backgroundColor: "rgba(255, 99, 132, 0.6)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      r: {
        beginAtZero: true,
        max: 5, // Maximum value for the radar scale
        ticks: {
          color: "black", // Set tick color to white
        },
        angleLines: {
          color: "white", // Set angle line color to white
        },
        grid: {
          color: "lightgrey", // Set grid line color to white
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: "white", // Set legend label color to white
        },
      },
    },
  };

  return (
    <div>
      <Radar data={data} options={options} />
    </div>
  );
};

export default FeedbackRadar;
