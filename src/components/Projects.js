import { projects } from "../Data/Projects";
export default function Project(props) {
  return (
    <section id="projects">
      <h2>
        <b>PROJECTS</b>
        <hr
          style={{
            color: "white",
            width: "22%",
            margin: 0,
          }}
        />
      </h2>

      <div className="gridContainer">
        {projects.map((project) => (
          <div className="gridItems project1">
            <div className="headeranddesc">
              <div className="header">
                <h3 style={{ marginTop: "60px", color: "white" }}>
                  {project.title}
                </h3>
              </div>

              <p className="project-desc">{project["project-desc"]}</p>
            </div>
            <div>{/* <h5>Languages Used</h5> */}</div>
            {/* 
            <span className="languages-used" style={{ color: "white" }}>
              Lang: {project.lang}
            </span> */}

            {/* <p style={{ color: "" }}>{project.contrib}</p> */}
            <div style={{ marginBottom: "1rem" }} className="demo">
              {project.demo ? (
                <a href={project.demo} target="_blank" rel="noreferrer">
                  <button className="btn  projectButton">
                    {" "}
                    <i
                      style={{ color: "white" }}
                      className="fa fa-brands fa-globe faa fa-2xl"
                    ></i>
                  </button>
                </a>
              ) : (
                <></>
              )}

              {project.source ? (
                <a href={project.source} target="_blank" rel="noreferrer">
                  <button className="btn projectButton">
                    {" "}
                    <i
                      style={{ color: "white" }}
                      className="fa fa-brands fa-github faa fa-2xl"
                    ></i>
                  </button>
                </a>
              ) : (
                <></>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
