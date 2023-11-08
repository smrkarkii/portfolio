export default function Skills() {
  return (
    <section id="skills">
      <div className="gridSkill">
        <h2 id="skill">
          <b>SKILLS</b>
        </h2>
        <div className="skill-html">
          <h3>HTML/CSS</h3>
          <div className="skill-bg">
            <div className="html-bar bar">
              <p>70%</p>
            </div>
          </div>
        </div>
        <div className="skill-cpp">
          <h3>C++</h3>
          <div className="skill-bg">
            <div className="cpp-bar bar">
              <p>60%</p>
            </div>
          </div>
        </div>
        <div className="skill-js">
          <h3>JS</h3>
          <div className="skill-bg">
            <div className="js-bar bar">
              <p>70%</p>
            </div>
          </div>
        </div>
        <div className="skill-express">
          <h3>Express JS</h3>
          <div className="skill-bg">
            <div className="express-bar bar">
              <p>30%</p>
            </div>
          </div>
        </div>
        <div className="skill-solidity">
          <h3>Solidity</h3>
          <div className="skill-bg">
            <div className="solidity-bar bar">
              <p>40%</p> {/* Fixed the typo here */}
            </div>
          </div>
        </div>
        <div className="skill-illustrator">
          <h3>Illustrator</h3>
          <div className="skill-bg">
            <div className="illustrator-bar bar">
              <p>50%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
