import React from "react";
import "./style.css"

function About() {
    return (
        <section id="about">
        <div className="container wow fadeInUp">
          <div className="row">
            <div className="col-md-12">
              <h3 className="section-title">About Me</h3>
              <div className="section-title-divider about-divider"></div>
            </div>
          </div>
        </div>
        <div className="container about-container wow fadeInUp">
          <div className="row">
            <div className="col-12 about-content">
              <p className="about-text">
                Versatile Full Stack Developer and Software Engineer with a passion for teamwork and problem solving, having worked in multiple different industries with people from all different backgrounds. Proficient in working alone or within large groups, exceeding expectations for work with overhanging deadlines.  

              </p>
              <p className="about-text">
                Recently earned a certificate of Full Stack Development at the University of Adelaide and currently undergoing a bachelor’s of Software Engineering at the University of South Australia. Constant learning has allowed for a thorough understanding of technologies such as NodeJS, ReactJS, JS, Python, C++, MongoDB and MySQL.
              </p>
              <p className="about-text">
                Along with a strong sense of empathy and charisma gained through the past 7 years of working in the Retail, Aviation and Hospitality industries.
              </p>
            </div>
          </div>
        </div>
      </section>
    )
}

export default About