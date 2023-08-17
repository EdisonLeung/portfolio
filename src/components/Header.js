import React, { Component, useEffect } from "react";
import ScrollAnimation from "react-animate-on-scroll";
export default function Header(props) {
  let resumeData = props.resumeData;

  return (
    <React.Fragment>
      <header id="home">
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#" title="Hide navigation">
            Hide navigation
          </a>
          <ul id="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#resume">
                Resume
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#portfolio">
                Projects
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <div className="row banner">
          <div className="banner-text">
            <ScrollAnimation
              animateIn="animate__zoomIn"
              animateOnce={true}
              duration={2}
            >
              <h1 className="responsive-headline">
                Hi, I'm {resumeData.name}.
              </h1>
              <h3>{resumeData.roleDescription}</h3>
            </ScrollAnimation>
            <hr />
            <ScrollAnimation
              animateIn="animate__fadeInLeft"
              animateOnce={true}
              duration={2}
            >
              <ul className="social">
                {resumeData.socialLinks &&
                  resumeData.socialLinks.map((item) => {
                    return (
                      <li key={item.name}>
                        <a
                          href={item.url}
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <i className={item.className}></i>
                          <h6>{item.name}</h6>
                        </a>
                      </li>
                    );
                  })}
              </ul>
            </ScrollAnimation>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    </React.Fragment>
  );
}
