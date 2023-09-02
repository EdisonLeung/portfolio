import React, { useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

export default function Resume(props) {
  let resumeData = props.resumeData;
  const [selectedComp, setSelectedComp] = useState(resumeData.work[0]);
  const [animateExperience, setAnimateExperience] = useState("");

  const animateChange = () => {
    if (animateExperience === "") {
      setAnimateExperience("animated animate__zoomIn");
      setTimeout(() => {
        setAnimateExperience("");
      }, 750);
    }
  };
  return (
    <section id="resume">
      <h1 className="row">
        <span className="title">Work Experience</span>
      </h1>
      <div
        className="row resume-container"
        style={{
          backgroundImage:
            window.innerWidth < 767 ? `url(${selectedComp.logo})` : "",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        }}
      >
        <ScrollAnimation
          animateIn="animate__fadeInUp"
          animateOnce={true}
          duration={0.5}
        >
          <div
            className="work-section"
            style={{ flexWrap: window.innerWidth < 767 ? "wrap" : "nowrap" }}
          >
            {window.innerWidth < 767 ? (
              <select
                className="mobile-select"
                onChange={(e) => {
                  setSelectedComp(JSON.parse(e.target.value));
                  animateChange();
                }}
              >
                {resumeData.work.map((item, index) => {
                  return (
                    <option
                      key={index}
                      value={JSON.stringify(item)}
                      className="smoothscroll"
                      style={{
                        borderLeft: `4px solid ${
                          item.CompanyName === selectedComp.CompanyName
                            ? "#64ffda"
                            : ""
                        }`,
                      }}
                    >
                      {item.role}
                    </option>
                  );
                })}
              </select>
            ) : (
              <div className="select">
                <ul>
                  {resumeData.work.map((item, index) => {
                    return (
                      <li
                        key={index}
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
                            animateChange();
                          }}
                        >
                          {item.role}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
            <div className={`description ${animateExperience}`}>
              <ScrollAnimation
                animateIn="animate__fadeInUp"
                animateOnce={false}
                duration={1}
              >
                <div className="title">
                  {selectedComp.role} @ {selectedComp.CompanyName}
                  {window.innerWidth > 720 && (
                    <img
                      src={selectedComp.logo}
                      alt=""
                      style={{
                        position: "absolute",
                        paddingRight: "4rem",
                        right: 0,
                        width: "auto",
                        height: "5.5rem",
                      }}
                    />
                  )}
                </div>

                <div>{selectedComp.date}</div>

                <ul>
                  {resumeData.work
                    .filter(
                      (item) => item.CompanyName === selectedComp.CompanyName
                    )[0]
                    .Achievements.map((achievement, index) => {
                      return <li key={index}>{achievement}</li>;
                    })}
                </ul>
              </ScrollAnimation>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
