export default function Project() {
  return (
    <section id="projects">
      <h2>
        {" "}
        <b>MY PROJECTS</b>
      </h2>
      <div className="gridContainer">
        <div className="gridItems project1">
          <div className="header">
            <h3> Weather App</h3>
          </div>

          <p className="project-desc">
            Weather App shows the weather status of current location if location
            permission is enabled and also for the searched locations using Open
            Weather API. This is my solo project which I did in Reduct Bootcamp.
          </p>

          <div>
            <h5>Languages Used</h5>
          </div>

          <span className="languages-used">HTML, CSS, JS</span>

          <p>
            <b>Worked on both front end and backend</b>
          </p>
          <div className="demo">
            <a href="https://smrkarkii.github.io/weather/" target="_blank">
              <button className="btn btn-primary projectButton">
                {" "}
                Live Demo
              </button>
            </a>
            <a href="https://github.com/smrkarkii/weather/" target="_blank">
              <button className="btn btn-primary projectButton">
                {" "}
                Source Code
              </button>
            </a>
          </div>
        </div>
        <div className="gridItems project2">
          <div className="header">
            <h3> Football League Manager</h3>
          </div>

          <p className="project-desc">
            Football League Manager is an application which creates fixtures of
            the teams provided and point tables according to result. It also
            creates a points table according to result of matches. This is a
            group DSA project of 4th semester.
          </p>

          <div>
            <h5>Languages Used</h5>
          </div>

          <span className="languages-used">HTML, CSS, JS</span>
          {/* <!-- <div className="team">
               <h5>Team Members</h4> 
              <p>Sujata Chaudhary</p>
                <p>Samir Paudyal</p> 
                <p>Team Project</p>
            </div> --> */}
          <p style={{ fontWeight: "bold" }}>Worked on backend</p>

          <a
            href="https://smrkarkii.github.io/Football_League_Manager/"
            target="_blank"
          >
            <button className="btn btn-primary projectButton">Live Demo</button>
          </a>
          <a
            href="https://github.com/smrkarkii/Football_League_Manager"
            target="_blank"
          >
            <button className="btn btn-primary projectButton">
              Source Code
            </button>
          </a>
        </div>
        <div className="gridItems project2">
          <div className="header">
            <h3> Ask Out</h3>
          </div>

          <p className="project-desc">
            Ask Out is a web application, designed for a particular workspace
            that allows users to ask queries without revealing their identity.
            This is a group project done in WLiT Fellowship.
          </p>
          <div>
            <h5>Languages Used</h5>
          </div>

          <span className="languages-used">HTML, CSS, React Js, Node JS</span>

          {/* <!-- <div className="team">
               <h5>Team Members</h4> 
                <p>Tanisha Chaudhary</p>
                <p>Mahima Dhakal</p>
                <p>Shilpa Adhikari</p>
                <p>Worked on UI design and basic backend</p> 
              <p>Team Project</p>
            </div> --> */}
          <p style={{ fontWeight: "bold" }}>
            Worked on UI design and basic backend
          </p>

          <a href="https://github.com/smrkarkii/Ask-Out/" target="_blank">
            <button className="btn btn-primary projectButton">
              {" "}
              Source Code
            </button>
          </a>
        </div>

        <div className="gridItems project3">
          <div className="header">
            <h3> Mystic Squares</h3>
          </div>

          <p className="project-desc">
            Mystic Squares is a sliding puzzle game having 15 tiles. We need to
            place the tiles in numeric order by sliding. This is a group C++
            project which we did in 3rd semester.
          </p>

          <div>
            <h5>Languages Used</h5>
          </div>

          <span className="languages-used">HTML, CSS, JS</span>
          {/* <!-- <div className="team">
             <h5>Team Members</h4>
                <p>Sujata Chaudhary</p>
                <p>Reeya Vaidhya</p> 
                <p>Team Project</p> 
            </div> --> */}
          <p style={{ fontWeight: "bold" }}>
            Worked on algorithm implementation
          </p>
          <a href="https://github.com/smrkarkii/Mystic-Squares" target="_blank">
            <button className="btn btn-primary projectButton">
              Source Code
            </button>
          </a>
        </div>

        {/* <!-- <div className="gridItems project4">
          <div className="header">
            <h3> ⚽Football League Manager</h3>
          </div>
        
          <p className="project-desc">Football League Manager is an application
            which creates fixtures of the teams provided.
            It also creates a points table according to result of matches.
          </p>
          
            <div><h5>Languages Used</h5></div>
            <span><i className="fa fa-brands fa-html5 fa-2x"></i></span>
            <span><i className="fa fa-brands fa-css3-alt"></i></span>
            <span><i className="fa fa-brands fa-js"></i></span>
            
          <div className="team">
            <h5>Team Members</h4>
              <p>Sujata Chaudhary</p>
              <p>Samir Paudyal</p>
          </div>
                
           
            
             
        </div> --> */}
      </div>
    </section>
  );
}
