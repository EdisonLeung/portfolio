import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";
export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
        <svg
          style={{ position: "absolute" }}
          width="100%"
          height="100%"
          id="svg"
          viewBox="0 0 1440 690"
          xmlns="http://www.w3.org/2000/svg"
          class="transition duration-300 ease-in-out delay-150"
        >
          <defs>
            <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="5%" stop-color="#f78da7"></stop>
              <stop offset="95%" stop-color="#8ED1FC"></stop>
            </linearGradient>
          </defs>
          <path
            d="M 0,700 C 0,700 0,233 0,233 C 114.7846889952153,230.30143540669857 229.5693779904306,227.60287081339715 333,212 C 436.4306220095694,196.39712918660285 528.5071770334928,167.88995215311002 622,189 C 715.4928229665072,210.11004784688998 810.401913875598,280.8373205741627 906,284 C 1001.598086124402,287.1626794258373 1097.885167464115,222.76076555023923 1187,203 C 1276.114832535885,183.23923444976077 1358.0574162679425,208.1196172248804 1440,233 C 1440,233 1440,700 1440,700 Z"
            stroke="none"
            stroke-width="0"
            fill="url(#gradient)"
            fill-opacity="0.53"
            class="transition-all duration-300 ease-in-out delay-150 path-0"
          ></path>
          <defs>
            <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="5%" stop-color="#f78da7"></stop>
              <stop offset="95%" stop-color="#8ED1FC"></stop>
            </linearGradient>
          </defs>
          <path
            d="M 0,700 C 0,700 0,466 0,466 C 115.26315789473685,484.51674641148327 230.5263157894737,503.03349282296654 328,515 C 425.4736842105263,526.9665071770335 505.1578947368421,532.3827751196172 586,519 C 666.8421052631579,505.6172248803827 748.8421052631578,473.4354066985646 838,465 C 927.1578947368422,456.5645933014354 1023.4736842105262,471.8755980861244 1125,476 C 1226.5263157894738,480.1244019138756 1333.2631578947369,473.0622009569378 1440,466 C 1440,466 1440,700 1440,700 Z"
            stroke="none"
            stroke-width="0"
            fill="url(#gradient)"
            fill-opacity="1"
            class="transition-all duration-300 ease-in-out delay-150 path-1"
          ></path>
        </svg>
        <header id="home">
          <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
              Show navigation
            </a>
            <a className="mobile-btn" href="#" title="Hide navigation">
              Hide navigation
            </a>
            <ul id="nav" className="nav">
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
              <h1 className="responsive-headline">
                Hi, I'm {resumeData.name}.
              </h1>
              <h3 style={{ color: "#fff", fontFamily: "sans-serif " }}>
                {resumeData.roleDescription}
              </h3>
              <hr />
              <ScrollAnimation
                animateIn="animate__fadeInLeft"
                animateOnce={false}
                duration={0.5}
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
}
