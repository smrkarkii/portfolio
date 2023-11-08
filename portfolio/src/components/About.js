export default function About() {
  return (
    <section id="about-me">
      <div className="header-about">
        <h2>
          <b>ABOUT ME</b>{" "}
        </h2>
        <p>
          I am a 5th-semester Computer Engineering student at Pulchowk Campus. I
          am interested in <b>Web Development.</b> I love playing Football,
          Basketball, and Table Tennis. My other hobbies are dancing, traveling,
          trekking, and hiking.
        </p>
      </div>

      <div className="edu-exp">
        <div id="educations">
          <div className="ed-row">
            <div className="education-title">
              <h3>
                <b>Educations</b>
              </h3>
            </div>
            <div className="edu-box-main">
              <div className="edu-box">
                <h5>
                  <b>Pulchowk Campus</b>
                </h5>
                <p>
                  <b>2020-Present</b>
                </p>
                <p>Bachelors in Computer Engineering</p>
              </div>
              <div className="edu-box">
                <h5>
                  <b>St. Xavier's College</b>
                </h5>
                <p>
                  <b>2017-2019</b>
                </p>
                <p>+2 Science</p>
              </div>
              <div className="edu-box">
                <h5>
                  <b>Shrijanshil Secondary English School</b>
                </h5>
                <p>
                  <b>2008-2017</b>
                </p>
                <p>School Level</p>
              </div>
            </div>
          </div>
        </div>
        <div id="experiences">
          <div className="ex-row">
            <div className="experience-title">
              <h3>
                <b>Experiences</b>
              </h3>
            </div>
            <div className="ex-box-main">
              <div className="ex-box">
                <h5>
                  <b>Web-Dev Fellow</b>
                </h5>
                <p>
                  <b>Reduct Nepal</b> | July 2022 - Present
                </p>
                <p>3 months long boot camp on Web Development</p>
              </div>

              <div className="ex-box">
                <h5>
                  <b>WLiT Fellow</b>
                </h5>
                <p>
                  <b>Women Leaders in Technology</b> | 2021-Present
                </p>
                <p>9-month long fellowship on technical and leadership</p>
              </div>
              <div className="ex-box">
                <h5>
                  <b>Event Manager</b>
                </h5>
                <p>
                  <b>Pulchowk Girls</b> | 2022 June - Present
                </p>
                <p>Plan and host events.</p>
              </div>
              <div className="ex-box">
                <h5>
                  <b>Volunteer Graphic Designer</b>
                </h5>
                <p>
                  <b>LOCUS, Pulchowk Campus</b> | 2021-2022
                </p>
                <p>IT Club, Pulchowk Campus</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
