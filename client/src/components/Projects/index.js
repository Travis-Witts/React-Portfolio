import React from "react";
import "./style.css";
import Searchify from "../assets/searchify.png";
import Anypos from "../assets/anypos.png";
import Blog from "../assets/blog.png";
import Quiz from "../assets/quiz.png";
import Users from "../assets/users.png";
import Weather from "../assets/weather.png";
import Project from "../Project";

function Projects() {
  return (
    <section id="project">
      <div className="container-md wow fadeInUp px-4">
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
          <div className=" py-3 col-lg-4 col-md-6 ">
            <Project deploy="https://travis-witts.github.io/Searchify/" github="https://github.com/Travis-Witts/Searchify" name="Searchify" desc="Find live music near you!" img={Searchify}/>
          </div>
          <div className="py-3 col-lg-4 col-md-6 ">
            <Project deploy="https://anypos.herokuapp.com/" github="https://github.com/Travis-Witts/AnyPOS" name="AnyPOS" desc="Sell your products on the go!" img={Anypos}/>
          </div>
          <div className="py-3 col-lg-4 col-md-6 ">
            <Project deploy="https://fierce-sands-72890.herokuapp.com/" github="https://github.com/Travis-Witts/tech-blog" name="Tech Blog" desc="Share what's on your mind!" img={Blog}/>
          </div>
          <div className="py-3 col-lg-4 col-md-6 ">
            <Project deploy="https://travis-witts.github.io/User-Directory/" github="https://github.com/Travis-Witts/User-Directory" name="User Directory" desc="A simple react app to sort users or employees." img={Users}/>
          </div>
          <div className="py-3 col-lg-4 col-md-6 ">
            <Project deploy="https://travis-witts.github.io/weather-dashboard/" github="https://github.com/Travis-Witts/weather-dashboard" name="Weather DashBoard" desc="Find out the forecast in your city!" img={Weather}/>
          </div>
          <div className="py-3 col-lg-4 col-md-6 ">
            <Project deploy="https://travis-witts.github.io/code-quiz/" github="https://github.com/Travis-Witts/code-quiz" name="Code Quiz" desc="A fun little Jquery and JS code quiz." img={Quiz}/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
