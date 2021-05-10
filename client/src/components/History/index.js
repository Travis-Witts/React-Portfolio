import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./style.css";
import { ReactComponent as UnisaIcon } from "../assets/unisa.svg";
import { ReactComponent as AdelaideIcon } from "../assets/adelaide.svg";

function History() {
  return (
    <section id="history">
    <div className="container container wow fadeInUp">
      <div className="row">
        <div className="col-md-12">
          <h3 className="history-title section-title">History</h3>
          <div className="section-title-divider"></div>
          <p className="section-description history-title">
            Past and present Work and Education
          </p>
        </div>
      </div>
      <VerticalTimeline
        className="vertical-timeline-custom-line"
        layout="1-column-left"
      >
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(46, 46, 46)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(46, 46, 46)" }}
          date="2019 - present"
          iconStyle={{ background: "rgb(46, 46, 46)", color: "#fff" }}
          icon={<UnisaIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Bachelor of Software Engineering
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            University of South Australia
          </h4>
          <p></p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(173, 173, 173)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(173, 173, 173)" }}
          date="2020 - 2021"
          iconStyle={{ background: "rgb(173, 173, 173)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">
            Full Stack Development Certificate
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            University of Adelaide
          </h4>
          <p></p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(46, 46, 46)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(46, 46, 46)" }}
          date="2012-2014"
          iconStyle={{ background: "rgb(46, 46, 46)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">
            Completed Year 12
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Sacred Heart College
          </h4>
          <p></p>
        </VerticalTimelineElement>


        <VerticalTimelineElement
          iconStyle={{ background: "#eeff05", color: "#fff" }}
        />
      </VerticalTimeline>
    </div>
    </section>
  );
}

export default History;
