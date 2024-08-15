import React, { useState } from "react";

import "../styles/myprojects.css";
import mamaEarth from "../images/MamaEarth.jpg";
import sephora from "../images/Sephora.com.jpg";
import cricinfo from "../images/cricinfo.jpg";
const Myprojects = () => {
  const [links1, setLinks1] = useState(false);
  const [links2, setLinks2] = useState(false);
  const [links3, setLinks3] = useState(false);

  return (
    <div id="myProjects_main">
      <h1
        className="myProjects_heading__phVYz"
        style={{ color: "rgb(204, 214, 246)" }}
      >
        My Projects
      </h1>
      <div className="myProjects_borderBottom__RLbe1"></div>

      <div
        id="about"
        className="Home_experience__g58MS"
        style={{ background: "rgb(15, 22, 34)" }}
      >
        <div
          onMouseEnter={() => setLinks1(true)}
          onMouseLeave={() => {
            setLinks1(false);
          }}
          className="About_container__63eab"
          style={{ boxShadow: "rgb(36, 36, 58) 3px 3px 5px" }}
        >
          <div className="About_first__P-0xg">
            <img src={mamaEarth} alt="" />
          </div>

          {links1 && (
            <div
              id="projectLinks"
              style={{
                backgroundColor: "rgb(12, 20, 27)",
                boxShadow: "rgb(36, 36, 58) 3px 3px 5px",
                borderRadius: "15px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  margin: "auto",
                  width: "9rem",
                  height: "4.5rem",
                  padding: "0.5rem",
                  justifyContent: "center",
                }}
              >
                <div id="git">
                  <a href="https://github.com/saikiran003/Clone_MamaEarth">
                    <span className="iconify" data-icon="feather:github"></span>
                  </a>
                </div>
                <div id="gotoProject">
                  <a href="https://clone-mamaearth.netlify.app/">
                    <span class="iconify" data-icon="bx:link-external"></span>
                  </a>
                </div>
              </div>
            </div>
          )}

          <div className="About_second__g9Cy4">
            <h2
              className="About_heading__HT8z+"
              style={{ color: "rgb(204, 214, 246)" }}
            >
              MamaEarth.com Clone
            </h2>
            <div className="About_borderBottom__C8CzR"></div>
            <p
              className="About_aboutMe__Kx5NY"
              style={{ color: "rgb(137, 147, 177)" }}
            >
              MamaEarth is an E-commerce website. We were 6 members assigned to
              complete this project. We executed frontend, backend of this
              project in 6 days. My role in this project was building back-end
              as well as front-end part along with navigation bar.
              <br />
              <br />
              Tech-Stacks we used to build the clone are
              <span style={{ color: "rgb(0, 160, 160)" }}>
                {" "}
                React.js | Javascript | HTML5 | CSS3 | GitHub
              </span>
              .
            </p>
          </div>
        </div>
      </div>

      <div
        id="about"
        className="Home_experience__g58MS"
        style={{ background: "rgb(15, 22, 34)" }}
      >
        <div
          onMouseEnter={() => setLinks2(true)}
          onMouseLeave={() => {
            setLinks2(false);
          }}
          className="About_container__63eab"
          style={{ boxShadow: "rgb(36, 36, 58) 3px 3px 5px" }}
        >
          <div className="About_first__P-0xg">
            <img src={sephora} alt="" />
          </div>

          {links2 && (
            <div
              id="projectLinks"
              style={{
                backgroundColor: "rgb(12, 20, 27)",
                boxShadow: "rgb(36, 36, 58) 3px 3px 5px",
                borderRadius: "15px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  margin: "auto",
                  width: "9rem",
                  height: "4.5rem",
                  padding: "0.5rem",
                  justifyContent: "center",
                }}
              >
                <div id="git">
                  <a href="https://github.com/sachiningale1998/Clone-of-Sephora.com">
                    <span className="iconify" data-icon="feather:github"></span>
                  </a>
                </div>
                <div id="gotoProject">
                  <a href="https://peaceful-dodol-946a2a.netlify.app/index.html">
                    <span class="iconify" data-icon="bx:link-external"></span>
                  </a>
                </div>
              </div>
            </div>
          )}

          <div className="About_second__g9Cy4">
            <h2
              className="About_heading__HT8z+"
              style={{ color: "rgb(204, 214, 246)" }}
            >
              Sephora.com Clone
            </h2>
            <div className="About_borderBottom__C8CzR"></div>
            <p
              className="About_aboutMe__Kx5NY"
              style={{ color: "rgb(137, 147, 177)" }}
            >
              Sephora.com is leading E-Commerce website for all type of cosmetic
              products such as makeup, skin care, hair, fragrance's and tools
              and brushes. I was handelling the front-end part, created and
              mounted landing page, indian team info page and single player info
              page.
              <br />
              <br />
              Tech-Stacks we used to build the clone are
              <span style={{ color: "rgb(0, 160, 160)" }}>
                {" "}
                Javascript | HTML5 | CSS3 | GitHub
              </span>
              .
            </p>
          </div>
        </div>
      </div>

      <div
        id="about"
        className="Home_experience__g58MS"
        style={{ background: "rgb(15, 22, 34)" }}
      >
        <div
          onMouseEnter={() => setLinks3(true)}
          onMouseLeave={() => {
            setLinks3(false);
          }}
          className="About_container__63eab"
          style={{ boxShadow: "rgb(36, 36, 58) 3px 3px 5px" }}
        >
          <div className="About_first__P-0xg">
            <img src={cricinfo} alt="" />
          </div>

          {links3 && (
            <div
              id="projectLinks"
              style={{
                backgroundColor: "rgb(12, 20, 27)",
                boxShadow: "rgb(36, 36, 58) 3px 3px 5px",
                borderRadius: "15px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  margin: "auto",
                  width: "9rem",
                  height: "4.5rem",
                  padding: "0.5rem",
                  justifyContent: "center",
                }}
              >
                <div id="git">
                  <a href="https://github.com/sachiningale1998/CricInfoProject">
                    <span className="iconify" data-icon="feather:github"></span>
                  </a>
                </div>
                <div id="gotoProject">
                  <a href="https://teal-genie-630ecd.netlify.app/">
                    <span class="iconify" data-icon="bx:link-external"></span>
                  </a>
                </div>
              </div>
            </div>
          )}

          <div className="About_second__g9Cy4">
            <h2
              className="About_heading__HT8z+"
              style={{ color: "rgb(204, 214, 246)" }}
            >
              CrinInfo.com Clone
            </h2>
            <div className="About_borderBottom__C8CzR"></div>
            <p
              className="About_aboutMe__Kx5NY"
              style={{ color: "rgb(137, 147, 177)" }}
            >
              ESPNcricinfo - where you can find all the latest cricket news and
              updates . Ball-by-ball commentary, scorecard and stats, Fixtures &
              Coverage. Match Predictor. Statistics. Services: Scores, News &
              Updates, Teams. I was handelling the back-end as well as front-end
              part, created and mounted 7 category pages, 1 sub-category page
              and single-product details page.
              <br />
              <br />
              Tech-Stacks we used to build the clone are
              <span style={{ color: "rgb(0, 160, 160)" }}>
                {" "}
                Javascript | HTML5 | CSS3 | GitHub
              </span>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Myprojects;
