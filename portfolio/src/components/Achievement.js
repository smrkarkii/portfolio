export default function Achievement() {
  return (
    <section id="achievements">
      <h2>
        <b>ACHIEVEMENT</b>
      </h2>
      <div className="gridAchievements">
        <a
          href="https://www.linkedin.com/feed/update/urn:li:activity:7013606279189262336?utm_source=share&utm_medium=member_desktop"
          target="_blank"
        >
          <div className="prastab">
            <div className="img-container">
              <img
                className="img-achievement"
                width="auto"
                height="250"
                src="./images/prastab.jpg"
                alt=""
              >
                {" "}
              </img>
              <img
                className="img-achievement"
                width="auto"
                height="250"
                src="./images/prastab2.jpg"
                alt=""
              />
            </div>

            <h2>WINNER</h2>
            <h5>Prastab: An ideation by Kathmandu Valley Leo Club</h5>
          </div>
        </a>
      </div>
    </section>
  );
}
