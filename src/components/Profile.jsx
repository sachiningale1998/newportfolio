import React from "react";
import "../styles/profile.css";
import profilepic from "../images/profile-pic.png";

// import Link from "react-router-dom"

const Profile = () => {
  return (
    <div id="profileDiv">
      <div id="profile-left">
        <div id="profile-left-1">
          <div id="greet-hi">Hi, My Name is</div>
          <div id="name">Sachin Ingale</div>
          <div className="typewriter">
            <p>Software Development Engineer</p>
          </div>
          <div id="view-resume">
            <div>
              <a
                style={{ textDecoration: "none", color: "rgb(201, 209, 231)" }}
                href="https://drive.google.com/file/d/1YnVA5zLRqaPHpADdPzMaUUO-CjL3Sfg3/view?usp=sharing"
              >
                View Resume
              </a>
            </div>
            <div>
              <i className="fas fa-file-download" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </div>

      <div id="dp-Div">
        <div id="dp">
          <img id="img-dp" src={profilepic} />
        </div>
      </div>

      <div id="links">
        <div id="linkedin">
          <a href="https://www.linkedin.com/in/sachin98i/">
            <span className="iconify" data-icon="feather:linkedin"></span>
          </a>
        </div>
        <div id="gitHub">
          <a href="https://github.com/sachiningale1998">
            <span className="iconify" data-icon="feather:github"></span>
          </a>
        </div>
        <div id="instagram">
          <a href="https://www.instagram.com/im_sachin_ingale/?hl=en">
            <span className="iconify" data-icon="feather:instagram"></span>
          </a>
        </div>
        <div id="twitter">
          <a href="https://twitter.com/Sachin_Ingale_">
            <span className="iconify" data-icon="feather:twitter"></span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
