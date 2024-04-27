export default function Footer() {
  return (
    <div>
      <section id="footers" style={{}}>
        <div className=" footer-box">
          <p className="connect-head">Connect with me.</p>
          <div className="footer-head">
            {/* <h3 className="footer-name">Smriti Karki</h3> */}
          </div>
          <div className="footers">
            <a
              className="footers-link"
              href="https://www.linkedin.com/in/smriti-karki-/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa ffa-brands fa-linkedin faa fa-2xl"></i>
            </a>
            <a
              className="footers-link"
              href="https://instagram.com/_karki__/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa fa-brands fa-instagram faa fa-2xl"></i>
            </a>
            <a
              className="footers-link"
              href="https://github.com/smrkarkii"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa fa-brands fa-github faa fa-2xl"></i>
            </a>
            <a
              className="footers-link"
              href="https://www.facebook.com/smrity.kc.7547/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa fa-brands fa-facebook faa fa-2xl"></i>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
