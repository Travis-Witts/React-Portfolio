import React from "react";
import "./style.css"

function Footer() {
    return (
        <footer id="footer">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="copyright">
            © Copyright <strong>Travis Witts</strong>. All Rights Reserved
          </div>
          <div className="credits">
          <h2 className="footer-icons">
                <a href="https://github.com/Travis-Witts">
                  <i className="fab fa-github-square"></i>
                </a>
                <a href="https://www.linkedin.com/in/travis-witts/">
                  <i className="fab fa-linkedin"></i>
                </a>
              </h2>
          </div>
        </div>
      </div>
    </div>
  </footer>
    )
}

export default Footer