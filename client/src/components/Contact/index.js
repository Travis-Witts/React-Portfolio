import React, { useState } from "react";
import "./style.css";
import API from "../../utils/API";
import Input from "../Input";
import TextArea from "../TextArea";
import FormBtn from "../FormBtn";

function Contact() {
  const [formObject, setFormObject] = useState({});

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log(formObject);
    API.newEmail({
      from: formObject.email,
      to: "travis.witts@outlook.com",
      subject: `${formObject.name} <${formObject.email}>`,
      text: formObject.query,
    })
      .then((res) => {
        setFormObject({ email: "", name: "", query: "", sent: true });
      })
      .catch((err) => console.log(err));
  }

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
            <form>
              {formObject.sent ? (
                <p>
                  SENT <i class="fas fa-check-circle"></i>
                </p>
              ) : (
                <div>
                  <Input
                    onChange={handleInputChange}
                    name="name"
                    placeholder="name (required)"
                  />
                  <Input
                    onChange={handleInputChange}
                    name="email"
                    placeholder="email (required)"
                  />
                  <TextArea
                    onChange={handleInputChange}
                    name="query"
                    placeholder="What would you like to contact me regarding?"
                  />
                </div>
              )}
              <FormBtn
                disabled={!(formObject.name && formObject.email)}
                onClick={handleFormSubmit}
              >
                Send Email
              </FormBtn>
            </form>
          </div>
          <div style={} className="col-lg-3 col-md-4">
            <div className="info">
              <div>
                <i className="fas fa-globe"></i>
                <p>Adelaide, SA</p>
              </div>

              <div>
                <i className="fas fa-envelope-open-text"></i>
                <a href="mailto:travis.witts@outlook.com"><p>Travis.Witts@outlook.com</p></a>
              </div>
              <div>
                <i className="fas fa-phone"></i>
                <a href="tel:+61431528153"><p>+61 431 528 153</p></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
