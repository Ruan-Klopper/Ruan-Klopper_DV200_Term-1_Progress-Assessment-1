// Home.js
import React from "react";

// CSS
import "./global.css";

// Custom compoments
import NavBar from "../components/navbar";

const Home = () => {
  return (
    <div class="website">
      <NavBar webPage={"Home"} />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="homeTitle">
              <h1 className="homeTitleText">
                Welcome to <strong>Comrobi media</strong>
              </h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6 homeDesc">
            <h1>
              What is <strong>Comrobi media</strong>
            </h1>
            <p>
              <strong>Comrobi Media</strong> specializes in capturing life's
              precious moments with cinematic expertise. From weddings to
              corporate events, music videos, and promotional content, we pride
              ourselves on delivering exceptional quality and professionalism.
              With a talented team and state-of-the-art equipment, we bring our
              clients' visions to life, ensuring every story is told
              authentically and creatively. Let us be your storytellers,
              crafting memories that will be cherished for a lifetime.
            </p>
          </div>
          <div className="col-6">
            <div className="homeHeaderRight"></div>
          </div>
        </div>
        <div className="row services">
          <div className="col-4">
            <div className="homeServicesLeftPhoto"></div>
          </div>
          <div className="col-8 servicesBox">
            <h1 style={{ marginBottom: "30px", marginLeft: "15px" }}>
              What <strong>services</strong> do we offer
            </h1>
            {/* Cards with services */}
            <div className="container">
              <div className="row">
                <div className="col">
                  <div class="card">
                    <div class="card-body">
                      <div className="cardPhoto1"></div>
                      <h5 class="card-title" style={{ color: "white" }}>
                        Weddings
                      </h5>
                      <p class="card-text" style={{ color: "white" }}>
                        We specialize in capturing the magic of your special
                        day, ensuring every moment is beautifully preserved for
                        eternity.
                      </p>
                      <a href="#" class="btn btn-primary">
                        Contact me
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col">
                  <div class="card">
                    <div class="card-body">
                      <div className="cardPhoto2"></div>
                      <h5 class="card-title" style={{ color: "white" }}>
                        Corporate Events
                      </h5>
                      <p class="card-text" style={{ color: "white" }}>
                        Elevate your corporate events with our professional
                        videography services, capturing every detail with
                        precision and sophistication.
                      </p>
                      <a href="#" class="btn btn-primary">
                        Contact me
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col">
                  <div class="card">
                    <div class="card-body">
                      <div className="cardPhoto3"></div>
                      <h5 class="card-title" style={{ color: "white" }}>
                        Music Videos
                      </h5>
                      <p class="card-text" style={{ color: "white" }}>
                        Transform your music into stunning visuals with our
                        creative videography techniques, bringing your songs to
                        life on screen.
                      </p>
                      <a href="#" class="btn btn-primary">
                        Contact me
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
