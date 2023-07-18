import React from "react";
import ProjectItem from "./ProjectItem";
import SmallProjectItem from "./SmallProjectItem";

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
              <SmallProjectItem item={item}/>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Porfolio;
