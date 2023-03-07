import React, { Component, useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import ProjectItem from "./ProjectItem";

function Porfolio(props) {
  let resumeData = props.resumeData;
  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>
            <span>Some of My Projects</span>
          </h1>
          <ul>
            {resumeData.portfolio &&
              resumeData.portfolio.map((item, index) => {
                return <ProjectItem item={item} index={index} key={index} />;
              })}
          </ul>
          <h1 style={{ marginTop: "10%", textAlign: "center" }}>
            Other Noteworthy Projects
          </h1>
          <ul className="gg">
            {resumeData.noteworthy_projects.map((item) => (
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <ScrollAnimation
                  animateIn="animate__fadeInLeft"
                  animateOnce={false}
                >
                  <li>
                    <div className="project-inner">
                      <div style={{ display: "block" }}>
                        <div className="project-top">
                          <div className="folder">
                            <i class="fa-regular fa-folder"></i>
                          </div>
                          <div className="project-links">
                            <a
                              href={item.gitLink}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i class="fa fa-github"></i>
                            </a>
                          </div>
                        </div>
                        <h3 className="project-title">{item.name}</h3>
                        <div className="project-description">
                          <p>{item.description}</p>
                        </div>
                      </div>
                      <div>
                        <ul className="project-tech-list">
                          {item.skills.map((skill) => (
                            <li>{skill}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>{item.name}</h5>
                        <p>View Project</p>
                      </div>
                    </div>
                  </li>
                </ScrollAnimation>
              </a>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Porfolio;
