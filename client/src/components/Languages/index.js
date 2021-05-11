import React from 'react';
import './style.css';

function Languages() {
    return (
        <section id="languages">
        <div className="container wow fadeInUp">
          <div className="row">
            <div className="col-md-12">
              <h3 className="languages-main-title">Languages</h3>
              <h3 className="languages-main-title">& Libraries</h3>
              <div className="mt-2 section-title-divider"></div>
              <p className="mt-3 mb-5 languages-main-desc section-description">
                A wide assortment of Languages and Library knowledge at my disposal
              </p>
            </div>
          </div>

          <div className="row mt-5 mb-5">
            <div className="col-lg-4 col-md-6 languages-item">
              <div className="languages-icon"><i className="fab fa-js-square"></i></div>
              <h4 className="languages-title">Javascript</h4>
              <p className="languages-description">
                A very in demand language that handles the logic behind webpages, connecting front-end and back end.
              </p>
            </div>
            <div className="col-lg-4 col-md-6 languages-item">
              <div className="languages-icon">
                <i className="fab fa-python"></i>
              </div>
              <h4 className="languages-title">Python</h4>
              <p className="languages-description">
                Useful language for complex scientific and numeric applications, can be used for both web and desktop application development. 
              </p>
            </div>
            <div className="col-lg-4 col-md-6 languages-item">
              <div className="languages-icon"><i className="fas fa-hashtag"></i></div>
              <h4 className="languages-title">C#</h4>
              <p className="languages-description">
                C Sharp can be used for multiple applications such as websites through .net framework, it is even used for some game development. 
              </p>
            </div>
            <div className="col-lg-4 col-md-6 languages-item">
              <div className="languages-icon"><i className="fab fa-react"></i></div>
              <h4 className="languages-title">ReactJS</h4>
              <p className="languages-description">
                A framework with extensive libraries which is the industry standard for state-based web applications.
              </p>
            </div>
            <div className="col-lg-4 col-md-6 languages-item">
              <div className="languages-icon">
                <i className="fab fa-node"></i>
              </div>
              <h4 className="languages-title">NodeJS</h4>
              <p className="languages-description">
                This alongside node package manager (npm) is used for installing and running dependencies for most JS applications.
              </p>
            </div>

            <div className="col-lg-4 col-md-6 languages-item">
              <div className="languages-icon"><i className="fas fa-code"></i></div>
              <h4 className="languages-title">JQuery</h4>
              <p className="languages-description">
                A javascript library for Javascript, used mostly in legacy systems today.
              </p>
            </div>
            <div className="col-lg-4 col-md-6 languages-item">
              <div className="languages-icon">
                <i className="fas fa-bed"></i>
              </div>
              <h4 className="languages-title">Rest APIs</h4>
              <p className="languages-description">
                The industry standard for APIs, uses JSON as a format for the information sent to and from the server. 
              </p>
            </div>
            <div className="col-lg-4 col-md-6 languages-item">
              <div className="languages-icon">
                <i className="fab fa-git-square"></i>
              </div>
              <h4 className="languages-title">Git</h4>
              <p className="languages-description">
                Software used for tracking changes and working as a team with Git Bash terminal and storing repos on Github.
              </p>
            </div>
            <div className="col-lg-4 col-md-6 languages-item">
              <div className="languages-icon">
                <i className="fas fa-database"></i>
              </div>
              <h4 className="languages-title">SQL & NoSQL Databases</h4>
              <p className="languages-description">
                A Structured Query Language database (SQL), consists of a relational model with tables and keys to relate records. NoSQL databases such as MongoDB hold information in a JSON format and are identified by 2 keys, a Partition key and a Sort key with no tables.
              </p>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Languages