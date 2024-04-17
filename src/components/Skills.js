import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faReact,
  faCss3Alt,
  faJs,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons";
import "../css/skills.css";
export default function Skills(props) {
  const arr = [faHtml5, faReact, faCss3Alt, faJs, faNodeJs];
  let skillsData = props.data;
  return (
    <section id="skills">
      <div className="gridSkill">
        <h2 id="skill">
          <b>SKILLS</b>
        </h2>
        {/* <div className="skill-illustrator">
          {skillsData.skills.map((skill) => (
            <>
              <h3>{skill.title}</h3>
              <div
                className="illustrator-bar bar skill-bar"
                style={{ width: skill.level, height: "20px" }}
              >
                <p>{skill.qual}</p>
              </div>
            </>
          ))}
        </div> */}
        <div className="skills-wrapper">
          {skillsData.skills.map((skill, i) => (
            <>
              <div className="indiv-skill">
                {/* <img src={logo} className="skill-logo" alt="" /> */}
                <FontAwesomeIcon className="logo-icon" icon={arr[i]} />{" "}
                {/* <FontAwesomeIcon className="logo-icon" icon={faReact} />{" "} */}
                {/* <FontAwesomeIcon icon="fa-brands fa-react" /> */}
                <p className="skill-title">{skill.title}</p>
              </div>
            </>
          ))}
        </div>
      </div>
    </section>
  );
}
