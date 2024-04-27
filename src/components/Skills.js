import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faReact,
  faCss3Alt,
  faJs,
  faNodeJs,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

import {
  skillsDataDevTools,
  skillsDataFrameworks,
  skillsDataLanguages,
} from "../Data/Skill";
import "../css/skills.css";
import "../Data/Skill";

export default function Skills(props) {
  const arr = [faHtml5, faCss3Alt, faJs];
  const arr1 = [faNodeJs, faReact];
  const arr2 = [faGithub, faReact];

  return (
    <section id="skills">
      <div className="gridSkill">
        <h2 id="skill">
          <b>SKILLS</b>
        </h2>
        <h6 className="skill-type" style={{ color: "white" }}>
          Languages
        </h6>
        <hr
          style={{
            color: "white",
          }}
        />

        <div className="skills-wrapper skills-languages">
          {skillsDataLanguages.map((skill, i) => (
            <>
              {console.log(skill.image)}
              <div
                className="indiv-skill"
                style={{ backgroundColor: skill.bg }}
              >
                {/* <img src={logo} className="skill-logo" alt="" /> */}

                {skill.icon ? (
                  <FontAwesomeIcon
                    style={{ color: skill.color, backgroundColor: skill.bgcol }}
                    className="logo-icon"
                    icon={arr[i]}
                  />
                ) : (
                  <img
                    style={{
                      width: skill.size,

                      marginTop: "8px",
                    }}
                    src={skill.image}
                    alt="no file"
                  />
                )}
                <p style={{ textAlign: "center" }} className="skill-title">
                  {skill.title}
                </p>
              </div>
            </>
          ))}
        </div>

        <h6 className="skill-type" style={{ color: "white" }}>
          Frameworks
        </h6>
        <hr
          style={{
            color: "white",
          }}
        />
        <div className="skills-wrapper skills-frameworks">
          {skillsDataFrameworks.map((skill, i) => (
            <>
              <div
                className="indiv-skill"
                style={{ backgroundColor: skill.bg }}
              >
                {/* <img src={logo} className="skill-logo" alt="" /> */}
                {skill.icon ? (
                  <FontAwesomeIcon
                    style={{ color: skill.color }}
                    className="logo-icon"
                    icon={arr1[i]}
                  />
                ) : (
                  <img
                    src={skill.image}
                    alt="no file"
                    style={{
                      width: "90%",

                      marginTop: "30px",
                    }}
                  />
                )}
                <p style={{ textAlign: "center" }} className="skill-title">
                  {skill.title}
                </p>
              </div>
            </>
          ))}
        </div>
        <h6 className="skill-type" style={{ color: "white" }}>
          Developer Tools
        </h6>
        <hr
          style={{
            color: "white",
          }}
        />
        <div className="skills-wrapper skills-dev-tools">
          {skillsDataDevTools.map((skill, i) => (
            <>
              <div
                className="indiv-skill"
                style={{ backgroundColor: skill.bg }}
              >
                {/* <img src={logo} className="skill-logo" alt="" /> */}
                {skill.icon ? (
                  <FontAwesomeIcon
                    style={{ color: skill.color }}
                    className="logo-icon"
                    icon={arr2[i]}
                  />
                ) : (
                  <img
                    src={skill.image}
                    alt="no file"
                    style={{
                      width: "90%",
                      height: "1 px",
                      marginTop: "8px",
                    }}
                  />
                )}
                <p style={{ textAlign: "center" }} className="skill-title">
                  {skill.title}
                </p>
              </div>
            </>
          ))}
        </div>
      </div>
    </section>
  );
}
