import React, { useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

export default function Resume(props) {
  let resumeData = props.resumeData;
  const [selectedComp, setSelectedComp] = useState(resumeData.work[0]);
  const [animateExperience, setAnimateExperience] = useState("");

  return (
    <section id="resume">
      <div className="row skill">
        <ScrollAnimation
          animateIn="animate__fadeInUp"
          animateOnce={true}
          duration={0.5}
        >
          <h1>
            <span>My Resume</span>
          </h1>
          <div className="resume-container">
            <div className="title">Programming Languages / Skills: </div>
            <ScrollAnimation
              animateIn="animate__fadeInUp"
              animateOnce={false}
              duration={0.5}
            >
              <ul className="skills">
                {resumeData.skills &&
                  resumeData.skills.map((item) => {
                    return <li> {item.skillname} </li>;
                  })}
              </ul>
            </ScrollAnimation>
            <div className="title">Softwares / Technologies: </div>
            <ScrollAnimation
              animateIn="animate__fadeInUp"
              animateOnce={false}
              duration={0.5}
            >
              <ul className="skills">
                {resumeData.technologies &&
                  resumeData.technologies.map((tech) => {
                    return <li> {tech.skillname} </li>;
                  })}
              </ul>
            </ScrollAnimation>
            <div className="title">Education</div>
            {resumeData.education.map((item, index) => {
              return (
                <div className="description">
                  <div className="title">{item.UniversityName}</div>

                  <div>{item.date}</div>

                  <ul>
                    {item.info.map((data, index) => {
                      return <li key={index}>{data}</li>;
                    })}
                    <li key={index}>
                      <b>Relevant Coursework (click to learn more):</b>
                      <ul className="skills">
                        <ScrollAnimation
                          animateIn="animate__fadeInUp"
                          animateOnce={false}
                          duration={1}
                        >
                          {item.courses.map((course) => {
                            return (
                              <a
                                href={course.link}
                                rel="noopener noreferrer"
                                target="_blank"
                              >
                                <li key={course.name} style={{ fontSize: 12 }}>
                                  {" "}
                                  {course.name}{" "}
                                </li>
                              </a>
                            );
                          })}
                        </ScrollAnimation>
                      </ul>
                    </li>
                    <li key={item.clubs}>
                      <b>Clubs and Organizations (click to learn more):</b>
                      <ul>
                        {item.clubs.map((club) => {
                          return (
                            <li key={club.link}>
                              <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href={club.link}
                              >
                                {club.name} 
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                    </li>
                  </ul>
                </div>
              );
            })}

            <div className="title">Work Experience</div>
            <div className="work-section" style={{flexWrap: window.innerWidth < 720 ? "wrap" : "nowrap"}}>
              <div className="select">
                <ul>
                  {resumeData.work.map((item) => {
                    return (
                      <li
                        className="smoothscroll"
                        style={{
                          borderLeft: `4px solid ${
                            item.CompanyName === selectedComp.CompanyName
                              ? "#64ffda"
                              : ""
                          }`,
                        }}
                      >
                        <button
                          key={item.CompanyName}
                          onClick={() => {
                            setSelectedComp(item);
                            if (animateExperience === "") {
                              setAnimateExperience("animated animate__zoomIn");
                              setTimeout(() => {
                                setAnimateExperience("");
                              }, 750);
                            }
                          }}
                        >
                          {item.role}
                        </button>{" "}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className={`description ${animateExperience}`}>
                <ScrollAnimation
                  animateIn="animate__fadeInUp"
                  animateOnce={false}
                  duration={1}
                >
                  <div className="title">
                    {selectedComp.role} @ {selectedComp.CompanyName}
                    {window.innerWidth > 720 && <img
                      src={selectedComp.logo}
                      alt=""
                      style={{
                        position: "absolute",
                        paddingRight: "4rem",
                        right: 0,
                        width: "auto",
                        height: "5.5rem",
                      }}
                    />}
                  </div>

                  <div>{selectedComp.date}</div>

                  <ul>
                    {resumeData.work
                      .filter(
                        (item) => item.CompanyName === selectedComp.CompanyName
                      )[0]
                      .Achievements.map((achievement) => {
                        return <li>{achievement}</li>;
                      })}
                  </ul>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </ScrollAnimation>{" "}
      </div>
    </section>
  );
}
