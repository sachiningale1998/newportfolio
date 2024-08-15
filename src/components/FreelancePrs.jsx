import React, { useState } from "react";
import vishalfitness from "../images/vishalfitness.jpg";
import antimMoksh from "../images/antimMoksh.jpg";
import g1Bright from "../images/g1Bright.jpg";

const FreelancePrs = () => {
  const [links1, setLinks1] = useState(false);
  const [data, setData] = useState([
    {
      id: 1,
      prName: "Vishal's Fitness Studio",
      link: "https://www.getinshape.co.in",
      desc: "A Fitnes Studio website for the client who has fitness coach certificate and wants to be able to connect with more people through their official website. In this project I have mainly focused upon the UI & UX in order to increase the client retention. It also has forms to connect with the coach and more contact options",
      techStacks:
        "React.js | Node.js | Express.js | MongoDB | HTML | CSS | JavaScript | Bootstrap | EmailJS",
      imgSrc: `${vishalfitness}`,
    },
    {
      id: 2,
      prName: "Antim Moksh by Kripa Funerals",
      link: "https://www.antim-moksh-k.in",
      desc: "A busines website for Kripa Funeral Services, which comes with the static information about their business and services they are providing in the field of cremation and last rites as well as funeral and ambulance service. The website also has different options to contact the support team. Built with great color theme and css animations in order to create an outstanding user experience",
      techStacks: "React.js | HTML | CSS | JavaScript | Material-UI | EmailJS",
      imgSrc: `${antimMoksh}`,
    },
    {
      id: 3,
      prName: "Saijeevan Enterprises",
      link: "https://saijeevanenterprises.netlify.app/",
      desc: "An E-commerce web app for Saijeevan Enterprises which sells detergent powder and detergent cake all over Maharashtra. Developed as static as well as dynamic with User registration and Login/Signup functionality. Also has the product listing page along with cart functionality and state is managed using Redux store.",
      techStacks:
        "React.js | Node.js | Express.js | MongoDB | HTML | CSS | JavaScript | Redux |Bootstrap | EmailJS",
      imgSrc: `${g1Bright}`,
    },
  ]);
  return (
    <div id="myProjects_main">
      <h1
        className="myProjects_heading__phVYz"
        style={{ color: "rgb(204, 214, 246)" }}
      >
        Freelancing Work
      </h1>
      <div className="myProjects_borderBottom__RLbe1"></div>

      {data &&
        data.map((el, i) => {
          return (
            <div
              key={el.id}
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
                  <img src={el.imgSrc} alt="" />
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
                          <span
                            className="iconify"
                            data-icon="feather:github"
                          ></span>
                        </a>
                      </div>
                      <div id="gotoProject">
                        <a href={el.link}>
                          <span
                            class="iconify"
                            data-icon="bx:link-external"
                          ></span>
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
                    {el.prName}
                  </h2>
                  <div className="About_borderBottom__C8CzR"></div>
                  <p
                    className="About_aboutMe__Kx5NY"
                    style={{ color: "rgb(137, 147, 177)" }}
                  >
                    {el.desc}
                    <br />
                    <br />
                    Tech-Stacks we used to build the clone are
                    <span style={{ color: "rgb(0, 160, 160)" }}>
                      {" "}
                      {el.techStacks}
                    </span>
                    .
                  </p>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default FreelancePrs;
