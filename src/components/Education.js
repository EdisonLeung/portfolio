import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

export default function Education(props) {
  let resumeData = props.resumeData;

  return (
    <section id="education">
      <h1 className="row">
        <span className="title">Education</span>
      </h1>
      <div className="row container">
        <ScrollAnimation
          animateIn="animate__fadeInUp"
          animateOnce={true}
          duration={0.5}
        >
          <div>
            {resumeData.education.map((item, index) => {
              return (
                <div key={index} className="description">
                  <div className="title">{item.UniversityName}</div>
                  <div>{item.date}</div>
                  <ul>
                    {item.info.map((data, inner_index) => {
                      return <li key={inner_index}>{data}</li>;
                    })}
                    <li>
                      <b className="title">
                        Relevant Coursework (click to learn more):
                      </b>
                      <ScrollAnimation
                        animateIn="animate__fadeInUp"
                        animateOnce={false}
                        duration={1}
                      >
                        <div className="course-list">
                          {item.courses.map((course, inner_index) => {
                            return (
                              <a
                                className="course-list-item"
                                key={inner_index}
                                href={course.link}
                                rel="noopener noreferrer"
                                target="_blank"
                              >
                                <div key={course.name} style={{ fontSize: 12 }}>
                                  {course.name}
                                </div>
                              </a>
                            );
                          })}
                        </div>
                      </ScrollAnimation>
                    </li>
                    <li key={item.clubs}>
                      <b className="title">
                        Clubs and Organizations (click to learn more):
                      </b>
                      <ul>
                        {item.clubs.map((club) => {
                          return (
                            <li key={club.link}>
                              <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href={club.link}
                                className="course-list-item"
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
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
