import React from "react";
import "./style.css";
import Typical from "react-typical";

function Hero() {
  return (
    <section id="hero">
      <div className="wow fadeIn h-100">
        <div className="hero-container justify-content-center d-flex flex-direction-column justify-content-between pb-4">
          <div></div>
          <div>
            <div className="hero-logo"></div>
            <h2 className="social-icons">
                <a href="https://github.com/Travis-Witts">
                  <i class="fab fa-github-square"></i>
                </a>
                <a href="https://www.linkedin.com/in/travis-witts/">
                  <i class="fab fa-linkedin"></i>
                </a>
                <a href="#contact">
                  <i class="fas fa-envelope-square"></i>
                </a>
              </h2>
            <h1>Travis Witts</h1>
            <h2>
              <Typical
                loop={Infinity}
                steps={[
                  "Full Stack Developer",
                  2000,
                  "Software Engineer",
                  2000,
                  "Front-End Designer",
                  2000,
                ]}
              />
            </h2>
            <div className="actions">
              <a href="#project" className="btn-my-projects scrollto">
                My Projects
              </a>
            </div>
          </div>
          <a href="#about" className="scrollto">
            <i id="down-arrow2" className="fas fa-4x fa-angle-double-down"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
