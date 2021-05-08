import React from "react";
import "./style.css"

function Footer() {
    return (
        <footer id="footer">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="copyright">
            © Copyright <strong>Travis Witts</strong>. All Rights Reserved
          </div>
          <div class="credits">
          <h2 className="footer-icons">
                <a href="https://github.com/Travis-Witts">
                  <i class="fab fa-github-square"></i>
                </a>
                <a href="https://www.linkedin.com/in/travis-witts/">
                  <i class="fab fa-linkedin"></i>
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