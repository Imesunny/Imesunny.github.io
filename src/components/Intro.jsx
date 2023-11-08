import React from "react";
import img1 from "../images/pictures/personal.jpeg";
import Typewriter from "typewriter-effect";

export default function Intro({ handleClick, boolean }) {
  return (
    <div
      id="home"
      className="hero"
      onClick={() => {
        if (boolean === false) handleClick();
      }}
    >
      <div className="home-img-cont">
        <div class="outer-circle circle circle-1">
          <span class="sq sq-1"></span>
          <div className="inner-circle circle">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "110%",
                height: "130%",
              }}
            >
              <img
                className="home-img"
                src={img1}
                alt="personal"
                style={{ maxWidth: "100%", maxHeight: "100%" }}
              />
            </div>
          </div>
          <span class="sq sq-2"></span>
        </div>
      </div>
      <div className="intro give-padding contain">
        <div className="txt-light-red twent">
          Namaste<span className="wave">🤙</span>, my name is
        </div>
        <div id="user-detail-name" className="newname">
          Sunny Anand
        </div>
        <div className="bio what-i-do">
          <Typewriter
            options={{
              loop: true,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString("I Do Frontend.")
                .pause(2000)
                .deleteAll()
                .typeString("I Do Backend.")
                .pause(2000)
                .deleteAll()
                .typeString("I am a Full Stack Developer.")
                .pause(2000)
                .deleteAll()
                .start();
            }}
          />
        </div>
        <div>
          <div className="info">
            Highly passionate and user-focused developer👨‍💻 from India, adept at
            collaborating with teams to plan the technical writing and execution
            of functional specifications for websites and applications.
          </div>
        </div>
        <div className="button-container">
          <a className="contact-button" href="#contact">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}
