import React, { Component } from 'react';

class Projects extends Component {
  constructor(props) {
    super(props);

    this.project = props.project;
  }

  render() {
    return(
      <section className="resume-section p-3 p-lg-5 d-flex justify-content-center" id="project">
        <div className="w-100">
          <h2 className="mb-5">My Projects</h2>
          {
            this.project.map((proj, index) => (
              <div key={index} className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="resume-content">
                  <h3 className="mb-0">{proj.name}</h3>
                  <div className="subheading mb-3">{proj.organization}</div>
                  <p>{proj.aboutWork}</p>
                </div>
                <div className="resume-date text-md-right">
                  <span className="text-primary">{proj.fromDate} - {proj.toDate}</span>
                </div>
              </div>
            ))
          }
        </div>
      </section>
    );
  }
}

export default Projects;