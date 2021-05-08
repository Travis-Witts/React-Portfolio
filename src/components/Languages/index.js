import React from 'react';
import './style.css';

function Languages() {
    return (
        <section id="languages">
        <div className="container wow fadeInUp">
          <div className="row">
            <div className="col-md-12">
              <h3 className="languages-main-title">Languages</h3>
              <div className="section-title-divider"></div>
              <p className="section-description">
                A wide assortment of Languages and Library knowledge at my disposal
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6 languages-item">
              <div className="languages-icon"><i className="fab fa-js-square"></i></div>
              <h4 className="languages-title">Javascript</h4>
              <p className="languages-description">
                Voluptatum deleniti atque corrupti quos dolores et quas
                molestias excepturi sint occaecati cupiditate non provident
              </p>
            </div>
            <div className="col-lg-4 col-md-6 languages-item">
              <div className="languages-icon">
                <i className="fab fa-python"></i>
              </div>
              <h4 className="languages-title">Python</h4>
              <p className="languages-description">
                Minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat tarad limino ata
              </p>
            </div>
            <div className="col-lg-4 col-md-6 languages-item">
              <div className="languages-icon"><i className="fas fa-hashtag"></i></div>
              <h4 className="languages-title">C#</h4>
              <p className="languages-description">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur
              </p>
            </div>
            <div className="col-lg-4 col-md-6 languages-item">
              <div className="languages-icon"><i className="fab fa-react"></i></div>
              <h4 className="languages-title">ReactJS</h4>
              <p className="languages-description">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum
              </p>
            </div>
            <div className="col-lg-4 col-md-6 languages-item">
              <div className="languages-icon">
                <i className="fab fa-node"></i>
              </div>
              <h4 className="languages-title">NodeJS</h4>
              <p className="languages-description">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque
              </p>
            </div>
            <div className="col-lg-4 col-md-6 languages-item">
              <div className="languages-icon">
                <i className="fas fa-database"></i>
              </div>
              <h4 className="languages-title">MySQL and NoSQL</h4>
              <p className="languages-description">
                Et harum quidem rerum facilis est et expedita distinctio. Nam
                libero tempore, cum soluta nobis est eligendi
              </p>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Languages