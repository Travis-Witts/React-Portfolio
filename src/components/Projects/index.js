import React from "react";
import "./style.css"

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
              <img
                src="./assets/img/searchify.png"
                className="w-100 img-fluid"
                alt=""
              />
              <div className="position-absolute project-info">
                <h4>Searchify</h4>
                <p>Find live music near you!</p>
                <a
                  href="./assets/img/searchify.png"
                  data-gallery="projectGallery"
                  className="project-lightbox preview-link"
                  title="More Details"
                  ><i className="fas fa-info-circle"></i></a>   
                <a
                  href="project-details.html"
                  className="details-link"
                  title="Live Deployment"
                  ><i className="fas fa-link"></i></a>
              </div>
            </div>
            <div className="position-relative col-lg-4 col-md-6 project-item">
              <img
                src="./assets/img/hendrix.png"
                className="w-100 img-fluid"
                alt=""
              />
              <div className="position-absolute project-info">
                <h4>Hendrix</h4>
                <p>Check out ratings on local businesses!</p>
                <a
                  href="./assets/img/hendrix.png"
                  data-gallery="projectGallery"
                  className="project-lightbox preview-link"
                  title="More Details"
                  ><i className="fas fa-info-circle"></i></a>   
                <a
                  href="project-details.html"
                  className="details-link"
                  title="Live Deployment"
                  ><i className="fas fa-link"></i></a>
              </div>
            </div>
            <div className="position-relative col-lg-4 col-md-6 project-item">
              <img
                src="./assets/img/searchify.png"
                className="w-100 img-fluid"
                alt=""
              />
              <div className="position-absolute project-info">
                <h4>Searchify</h4>
                <p>Find live music near you!</p>
                <a
                  href="./assets/img/searchify.png"
                  data-gallery="projectGallery"
                  className="project-lightbox preview-link"
                  title="More Details"
                  ><i className="fas fa-info-circle"></i></a>   
                <a
                  href="project-details.html"
                  className="details-link"
                  title="Live Deployment"
                  ><i className="fas fa-link"></i></a>
              </div>
            </div>
            
            


          </div>
        </div>
      </section>
    )
}

export default Projects