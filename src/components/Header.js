import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
      
      <header id="home">
         <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
            <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav">
               <li className="current"><a href="https://main.d3uqk9wtm98zyo.amplifyapp.com/#home">Home</a></li>
               <li><a href="https://main.d3uqk9wtm98zyo.amplifyapp.com/#about">About</a></li>
               <li><a href="https://main.d3uqk9wtm98zyo.amplifyapp.com/#resume">Resume</a></li>
               <li><a href="https://main.d3uqk9wtm98zyo.amplifyapp.com/#portfolio">Projects</a></li>
               {/* <li><a className="smoothscroll" href="#contact">Contact</a></li> */}
            </ul>
         </nav>

         <div className="row banner">
            <div className="banner-text">
               <h1 className="responsive-headline">I'm {resumeData.name}.</h1>
               <h3 style={{color:'#fff', fontFamily:'sans-serif '}}>{resumeData.roleDescription}
               </h3>
               <hr/>
               <ul className="social">
                  {
                    resumeData.socialLinks && resumeData.socialLinks.map(item =>{
                      return(
                              <li key={item.name}>
                                <a href={item.url} target="_blank"><i className={item.className}></i></a>
                                <h6 style={{color: "#fff"}}>{item.name}</h6>
                              </li> 
                            )
                          }
                    )
                  }
               </ul>
               
               <a href="https://main.d3uqk9wtm98zyo.amplifyapp.com/#portfolio"><button className="navigate">View Projects</button></a>
            </div>
         </div>

      </header>
      </React.Fragment>
    );
  }
}