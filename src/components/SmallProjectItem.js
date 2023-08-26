import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

export default function SmallProjectItem(props) {
  const item = props.item;
  return (
    <a
      href={item.gitLink}
      title="View Project"
      target="_blank"
      rel="noopener noreferrer"
      className="project-inner glass"
    >
      <ScrollAnimation animateIn="animate__fadeInLeft" animateOnce={false}>
        <li>
          <div style={{ display: "block" }}>
            <div className="project-top">
              <div className="folder">
                <i className="fa-regular fa-folder"></i>
              </div>
              {item.gitLink && (
                <div className="project-links">
                  <i className="fa fa-github"></i>
                </div>
              )}
            </div>
            <h3 className="project-title">{item.name}</h3>
            <div className="project-description">
              <p>{item.description}</p>
            </div>
          </div>
          <div>
            <ul className="project-tech-list">
              {item.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        </li>
      </ScrollAnimation>
    </a>
  );
}
