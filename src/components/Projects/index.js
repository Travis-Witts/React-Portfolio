import React from "react";
import "./style.css";
import Searchify from "../assets/searchify.png";
import Hendrix from "../assets/hendrix.png";
import Blog from "../assets/blog.png";
import Quiz from "../assets/quiz.png";
import Users from "../assets/users.png";
import Weather from "../assets/weather.png";

function Projects() {
  return (
    <section id="project">
      <div className="container wow fadeInUp">
        <div className="row">
          <div className="col-md-12">
            <h3 className="section-title">Projects</h3>
            <div className="section-title-divider"></div>
            <p className="section-description">
              Here are some of my current and past projects
            </p>
          </div>
        </div>

        <div className="row project-container">
          <div className="position-relative col-lg-4 col-md-6 project-item">
            <img src={Searchify} className="w-100 img-fluid" alt="" />
            <div className="position-absolute project-info">
              <h4>Searchify</h4>
              <p>Find live music near you!</p>
              <a
                href="https://github.com/Travis-Witts/Searchify"
                data-gallery="projectGallery"
                className="preview-link"
                title="Github Repo"
              >
                <i className="fas fa-info-circle"></i>
              </a>
              <a
                href="https://travis-witts.github.io/Searchify/"
                className="details-link"
                title="Live Deployment"
              >
                <i className="fas fa-link"></i>
              </a>
            </div>
          </div>
          <div className="position-relative col-lg-4 col-md-6 project-item">
            <img src={Hendrix} className="w-100 img-fluid" alt="" />
            <div className="position-absolute project-info">
              <h4>Hendrix</h4>
              <p>Check reviews on local venues!</p>
              <a
                href="https://github.com/silvia-taliana/hendrix"
                data-gallery="projectGallery"
                className="preview-link"
                title="Github Repo"
              >
                <i className="fas fa-info-circle"></i>
              </a>
              <a
                href="https://powerful-cliffs-81150.herokuapp.com/"
                className="details-link"
                title="Live Deployment"
              >
                <i className="fas fa-link"></i>
              </a>
            </div>
          </div>{" "}
          <div className="position-relative col-lg-4 col-md-6 project-item">
            <img src={Blog} className="w-100 img-fluid" alt="" />
            <div className="position-absolute project-info">
              <h4>Tech Blog</h4>
              <p>Share what's on your mind!</p>
              <a
                href="https://github.com/Travis-Witts/tech-blog"
                data-gallery="projectGallery"
                className="preview-link"
                title="Github Repo"
              >
                <i className="fas fa-info-circle"></i>
              </a>
              <a
                href="https://fierce-sands-72890.herokuapp.com/"
                className="details-link"
                title="Live Deployment"
              >
                <i className="fas fa-link"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="row project-container">
          <div className="position-relative col-lg-4 col-md-6 project-item">
            <img src={Users} className="w-100 img-fluid" alt="" />
            <div className="position-absolute project-info">
              <h4>User Directory</h4>
              <p>A simple react app to sort users or employees.</p>
              <a
                href="https://github.com/Travis-Witts/User-Directory"
                data-gallery="projectGallery"
                className="preview-link"
                title="Github Repo"
              >
                <i className="fas fa-info-circle"></i>
              </a>
              <a
                href="https://travis-witts.github.io/User-Directory/"
                className="details-link"
                title="Live Deployment"
              >
                <i className="fas fa-link"></i>
              </a>
            </div>
          </div>
          <div className="position-relative col-lg-4 col-md-6 project-item">
            <img src={Weather} className="w-100 img-fluid" alt="" />
            <div className="position-absolute project-info">
              <h4>Weather Dashboard</h4>
              <p>Find out the weather forecast in your city!</p>
              <a
                href="https://github.com/Travis-Witts/weather-dashboard"
                data-gallery="projectGallery"
                className="preview-link"
                title="Github Repo"
              >
                <i className="fas fa-info-circle"></i>
              </a>
              <a
                href="https://travis-witts.github.io/weather-dashboard/"
                className="details-link"
                title="Live Deployment"
              >
                <i className="fas fa-link"></i>
              </a>
            </div>
          </div>
          <div className="position-relative col-lg-4 col-md-6 project-item">
            <img src={Quiz} className="w-100 img-fluid" alt="" />
            <div className="position-absolute project-info">
              <h4>Code Quiz</h4>
              <p>A fun little Jquery and JS code quiz.</p>
              <a
                href="https://github.com/Travis-Witts/code-quiz"
                data-gallery="projectGallery"
                className="preview-link"
                title="Github Repo"
              >
                <i className="fas fa-info-circle"></i>
              </a>
              <a
                href="https://travis-witts.github.io/code-quiz/"
                className="details-link"
                title="Live Deployment"
              >
                <i className="fas fa-link"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
