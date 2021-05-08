import React from "react";
import "./style.css"

function Contact() {
    return (
        <section id="contact">
        <div className="container wow fadeInUp">
          <div className="row">
            <div className="col-md-12">
              <h3 className="section-title">Contact Us</h3>
              <div className="section-title-divider"></div>
              <p className="section-description">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque
              </p>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-4">
              <div className="info">
                <div>
                  <i className="bi bi-geo-alt"></i>
                  <p>A108 Adam Street<br />New York, NY 535022</p>
                </div>

                <div>
                  <i className="bi bi-envelope"></i>
                  <p>info@example.com</p>
                </div>

                <div>
                  <i className="bi bi-phone"></i>
                  <p>+1 5589 55488 55s</p>
                </div>
              </div>
            </div>

            <div className="col-lg-5 col-md-8">
              <div className="form">
                <form
                  action="forms/contact.php"
                  method="post"
                  role="form"
                  className="php-email-form"
                >
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="form-group mt-3">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                  <div className="form-group mt-3">
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      id="subject"
                      placeholder="Subject"
                      required
                    />
                  </div>
                  <div className="form-group mt-3">
                    <textarea
                      className="form-control"
                      name="message"
                      rows="5"
                      placeholder="Message"
                      required
                    ></textarea>
                  </div>
                  <div className="my-3">
                    <div className="loading">Loading</div>
                    <div className="error-message"></div>
                    <div className="sent-message">
                      Your message has been sent. Thank you!
                    </div>
                  </div>
                  <div className="text-center">
                    <button type="submit">Send Message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Contact