import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

function SideNav(props) {
  const resumeData = props.resumeData;
  
  return (
    <div id="sidenav">
      <ScrollAnimation
        animateIn="animate__fadeInUp"
        animateOnce={true}
        duration={2}
      >
        <ul>
          {resumeData.socialLinks.map((item) => {
            return (
              <li key={item.name}>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={item.name}
                >
                  <i className={item.className}></i>
                </a>
              </li>
            );
          })}
        </ul>
      </ScrollAnimation>
    </div>
  );
}

export default SideNav;
