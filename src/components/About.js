import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
        <ScrollAnimation
          animateIn="animate__fadeInUp"
          animateOnce={false}
          duration={0.5}
        >
          <div className="row">
            <div className="three columns">
              <img className="profile-pic" src="images/profilepic.jpg" alt="" />
            </div>

            <div className="nine columns main-col">
              <h2>About Me</h2>
              <p>{resumeData.aboutme}</p>
              
              <ScrollAnimation
                animateIn="animate__fadeInUp"
                animateOnce={false}
                duration={0.5}
              >
                <h2>Programming Languages: </h2>
                <ul className="skills">
                  {resumeData.skills &&
                    resumeData.skills.map((item, index) => {
                      return <li key={index}> {item.skillname} </li>;
                    })}
                </ul>
              </ScrollAnimation>

              <ScrollAnimation
                animateIn="animate__fadeInUp"
                animateOnce={false}
                duration={0.5}
              >
                <h2>Softwares / Technologies: </h2>
                <ul className="skills">
                  {resumeData.technologies &&
                    resumeData.technologies.map((tech, index) => {
                      return <li key={index}> {tech.skillname} </li>;
                    })}
                </ul>
              </ScrollAnimation>
            </div>
          </div>
        </ScrollAnimation>
      </section>
    );
  }
}
