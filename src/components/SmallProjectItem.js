import React, { useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import ReactCardFlip from "react-card-flip";

export default function SmallProjectItem(props) {
  const item = props.item;
  const [isFlipped, setFlipped] = useState(false);
  return (
    <a href={item.link} title="View Project" target="_blank" rel="noopener noreferrer" onMouseEnter={()=> setFlipped(!isFlipped)}>
      <ScrollAnimation animateIn="animate__fadeInLeft" animateOnce={false}>
        <li>
          <div className="project-inner">
            <div style={{ display: "block" }}>
              <div className="project-top">
                <div className="folder">
                  <i class="fa-regular fa-folder"></i>
                </div>
                <div className="project-links">
                  <a
                    href={item.gitLink ? item.gitLink : ""}
                    title="View Github"
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
        </li>
      </ScrollAnimation>
    </a>
  );
}
