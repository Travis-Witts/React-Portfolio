import React from "react";
import "./style.css";

function Contact() {
  return (
    <section id="contact">
      <div className="container wow fadeInUp">
        <div className="row">
          <div className="col-md-12">
            <h3 className="section-title">Contact Me</h3>
            <div className="section-title-divider"></div>
            <p className="section-description">
              If you have any questions, please feel free to contact me below:
            </p>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-5 col-md-8">
            <div>🚧 🚧 🚧 Contact form goes here WIP 🚧 🚧 🚧</div>
          </div>
          <div className="col-lg-3 col-md-4">
            <div className="info">
              <div>
                <i class="fas fa-globe"></i>
                <p>Adelaide, SA</p>
              </div>

              <div>
                <i class="fas fa-envelope-open-text"></i>
                <p>Travis.Witts@outlook.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
