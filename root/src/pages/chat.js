// Home.js
import React from "react";

// CSS
import "./global.css";

// Custom compoments
import NavBar from "../components/navbar";

// Chart.js
import SalesBar from "../components/SalesBarGraph";
import ImpressionLine from "../components/ImpressionLineGraph";
import StatisfyDonut from "../components/StatisfyDonutGraph";
import ServicesBubble from "../components/ServicesBubbleGraph";
import FeedbackRadar from "../components/FeedbackRadarGraph";

const Chat = () => {
  return (
    <div class="website">
      <NavBar webPage={"Chat"} />
      <div className="container">
        {/* Header */}
        <div className="row">
          <div className="col-12">
            <div className="homeTitle">
              <h1>
                What is our <strong>statistics</strong>
              </h1>
            </div>
          </div>
        </div>

        <div className="row salesBox">
          <h1 style={{ marginBottom: "50px", textAlign: "center" }}>
            Our sales
          </h1>
          <div className="col-6">
            <SalesBar />
          </div>
          <div className="col-6">
            <ImpressionLine />
          </div>
        </div>

        <div className="row salesBox">
          {/* Customer statisfication DONUT GRAPH*/}
          <h1 style={{ marginBottom: "50px", textAlign: "center" }}>
            Customer statisfication
          </h1>
          <div className="col-6 d-flex flex-column justify-content-center">
            <h3>From our customers</h3>
            <p>
              Customer satisfaction data represents the distribution of
              satisfaction levels among clients. Categories include 'Highly
              Satisfied', 'Satisfied', 'Neutral', 'Dissatisfied', and 'Highly
              Dissatisfied'. The graph illustrates the percentage of customers
              falling into each satisfaction category, providing insights into
              overall satisfaction levels.
            </p>
          </div>
          <div className="col-6">
            <StatisfyDonut />
          </div>
        </div>

        <div className="row salesBox">
          {/* Services our customers chose to use BUBBLE GRAPH*/}
          {/* Customer feedback RADAR GRAPH */}
          <h1 style={{ marginBottom: "50px", textAlign: "center" }}>
            Feedback from out customers
          </h1>
          <div className="col-6 graphBox">
            <ServicesBubble />
          </div>
          <div className="col-6 graphBox">
            <FeedbackRadar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
