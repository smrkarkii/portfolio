import { useEffect, useState } from "react";

import pp from "../images/smritikarki.jpg";
export default function Intro() {
  // const [name, setName] = useState("Smriti Karki.");
  var text = "Smriti Karki.";
  const [displayText, setDisplayText] = useState("");
  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, 200);

    return () => clearInterval(intervalId);
  }, [text]);
  return (
    <div className="container-fluid " id="intro">
      <div className="introContainer">
        <div className="row title-row" id="second-content">
          <div className="image-col col col-md-6 col-xs-12">
            <img src={pp} style={{}} />
          </div>
          <div className="title-col col-md-6 col-xs-12">
            <div className="text-block">
              <p className="title-text" style={{ color: "white" }}>
                Hello, I am
              </p>
              <h5 className="head-10" style={{ color: "black" }}>
                <b>
                  <span className="head-1">{displayText}</span>
                </b>
              </h5>
              <p
                className="title-desc"
                style={{ fontSize: "1.5rem", color: "white" }}
              >
                A Computer Engineering Student and a Tech Enthusiast.
              </p>
            </div>
            <div className="cv-div">
              <button id="cv-download" className="btn btn-outline-success ">
                {" "}
                <i className="fa-solid fa-file-arrow-down"></i>
                <a href="../file/resume.pdf" download target="_blank">
                  Download CV
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
