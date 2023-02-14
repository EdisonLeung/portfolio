import React, { useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";

export default function ProjectItem(props) {
  let index = props.index;
  let item = props.item;
  const [readMore, setReadMore] = useState(false);
  return (
    <div className="projects-grid ">
      <div className="project-content">
        <ScrollAnimation
          animateIn="animate__fadeInUp"
          animateOnce={true}
          style={{ position: "relative", zIndex: 2 }}
        >
          <p className="project-overline">Featured Project</p>
          <h3 className="project-title">{item.name}</h3>
          <div className="description">
          <div
            className="project-description"
            style={{ maxHeight: readMore ? "1000px" : "300px" }}
          >
            <ScrollAnimation
              animateIn={
                index % 2 === 0 ? "animate__fadeInLeft" : "animate__fadeInRight"
              }
              animateOnce={true}
              delay={250}
              duration={0.5}
            >
              {item.description
                // .slice(0, readMore ? item.description.length : 2)
                .map((paragraph) => (
                  <p>{paragraph}</p>
                ))}
            </ScrollAnimation>
          </div>
          {item.description.length > 2 && (
            <div className="read-more" onClick={() => setReadMore(!readMore)}>
              <button>{readMore ? "read less" : "read more"}</button>
            </div>
          )}
          </div>
          <ul className="project-tech-list">
            {item.skills.map((skill) => (
              <li>{skill}</li>
            ))}
          </ul>
          <div className="project-links">
            {item.gitLink !== undefined && (
              <a href={item.gitLink} target="_blank" rel="noopener noreferrer">
                <i className="fa fa-github"></i>
              </a>
            )}

            {item.textLinks.map((link) => (
              <a href={link.link}>
                <div style={{ fontSize: 15 }}>{link.text} &nbsp;</div>
                <i class="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            ))}
          </div>
        </ScrollAnimation>
      </div>
      <div className="project-image portfolio-item">
        <div className="gatsby-image-wrapper gatsby-image-wrapper-constrained img">
          <div style={{ maxWidth: 700, display: "block" }}>
            <a href={item.link}>
              <div className="item-wrap">
                <img src={item.imgurl} alt="" />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>{item.name}</h5>
                    <p>View Project</p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
