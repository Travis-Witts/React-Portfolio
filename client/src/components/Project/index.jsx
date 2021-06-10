import React from 'react';

const Project = ({ name, img, desc, github, deploy }) => {

    return(
        <div style={{aspectRatio: "1.5/1"}} className=" img-fluid project-item position-relative d-flex h-100 w-100">
        {" "}
        <picture className="h-100 w-100 d-flex position-absolute top-0 bottom-0">
          <img
            style={{
              objectFit: "cover",
              objectPosition: "center",
              verticalAlign: "bottom",
            }}
            src={img}
            className="h-100 w-100"
            alt=""
          />
        </picture>
        <div className="w-100 h-100 top-0 bottom-0 left-0 position-absolute project-info">
          <h4>{name}</h4>
          <p>{desc}</p>
          <a
            href={github}
            data-gallery="projectGallery"
            className="preview-link"
            title="Github Repo"
          >
            <i className="fas fa-info-circle"></i>
          </a>
          <a
            href={deploy}
            className="details-link"
            title="Live Deployment"
          >
            <i className="fas fa-link"></i>
          </a>
        </div>
      </div>
    )
}

export default Project;