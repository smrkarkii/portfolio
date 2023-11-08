import pp from "../images/smritikarki.jpg";
export default function Intro() {
  return (
    <div className="container-fluid">
      <div className="row title-row" id="second-content">
        <div className="image-col col col-md-6 col-xs-12">
          <img src={pp} style={{ borderRadius: "50%" }} />
        </div>
        <div className="title-col col-md-6 col-xs-12">
          <div className="text-block">
            <p className="title-text">Hello,</p>
            <h5 className="head-10" style={{ color: "black" }}>
              <b>
                <span className="head-1">Smriti Karki.</span>
              </b>
            </h5>
            <p classNameName="title-desc" style={{ fontSize: "1.2rem" }}>
              A Computer Engineering Student and a Tech Enthusiast.
            </p>
            <div className="cv-div">
              <button id="cv-download" className="btn ">
                {" "}
                <i className="fa-solid fa-file-arrow-down"></i>
                <a href="file/resume.pdf" download target="_blank">
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
