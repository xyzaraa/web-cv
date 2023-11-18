import { Link, useNavigate } from "react-router-dom";
import Profile from "./img/3d-profile.png";
import Discord from "./img/Discord.png";
import LinkedIn from "./img/LinkedIn.png";
import Snapchat from "./img/Snapchat.png";
import Instagram from "./img/Instagram.png";

const Navbar = () => {
  const navigate = useNavigate();
  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/pdf/resume.pdf';
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.click();
};

  return (
    <><section id="cap" className="cap">
      <main>
        <nav className="navbar navbar-expand-md bg-transparent sticky-top mynavbar">
          <div className="container">
            <Link to="/" className="navbar-brand">
              いきがい<span className="bold-text">zara</span>
            </Link>
            <button
              className="navbar-toggler border-0"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="offcanvas offcanvas-end"
              tabIndex="-1"
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                  noturzara
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                <div className="navbar-nav ms-auto">
                  <Link to="/" className="nav-link" onClick={() => navigate("/")}>
                    Home
                  </Link>
                  <Link to="/Aboutme" className="nav-link" onClick={() => navigate("/Aboutme")}>
                    About Me
                  </Link>
                  <Link to="/Expertise" className="nav-link" onClick={() => navigate("/Expertise")}>
                    Expertise
                  </Link>
                  <Link to="/Hobbies" className="nav-link" onClick={() => navigate("/Hobbies")}>
                    Hobbies
                  </Link>
                  <Link to="/Contact" className="nav-link" onClick={() => navigate("/Contact")}>
                    Contact
                  </Link>
                </div>
                <ul className="dropdown-menu">
                  <li>
                    <Link to="#" className="dropdown-item">
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="dropdown-item">
                      Another action
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link to="#" className="dropdown-item">
                      Something else here
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </main>
    </section><section id="home" className="home">
        <div className="container">
          <div className="row">
            <div className="layout col-lg-6">
              <h1 className="intro">
                Hello There!<br /> I Go By The Name{" "}
                <span className="boldier">ZARA</span>
                <br />and I'm a <span className="boldier">Data Scientist</span>
              </h1>
              <div className="col-3">
                <button type="button" className="btn btn-light" onClick={downloadCV}>
                  Download CV
                </button>
              </div>
            </div>
            <div className=" col-lg-6">
              <img className="profile3d" src={Profile} alt="profile-icon-3d" />
              <div>
                <a
                  href="https://www.linkedin.com/in/kiara-azzahra-0410b3232/"
                  target="_blank"
                  onClick={() => navigate("https://www.linkedin.com/in/kiara-azzahra-0410b3232/")}
                >
                  <img
                    src={LinkedIn}
                    alt="LinkedIn"
                    className="icon-linkedin" />
                </a>
                <a
                  href="https://discord.com/users/893469955104845845"
                  target="_blank"
                  onClick={() => navigate("https://discord.com/users/893469955104845845")}
                >
                  <img src={Discord} alt="Discord" className="icon-discord" />
                </a>
                <a
                  href="https://www.instagram.com/kiarazzahraa/"
                  target="_blank"
                  onClick={() => navigate("https://www.instagram.com/kiarazzahraa/")}
                >
                  <img
                    src={Instagram}
                    alt="Instagram"
                    className="icon-instagram" />
                </a>
                <a
                  href="https://t.snapchat.com/vuwuV5OU"
                  target="_blank"
                  onClick={() => navigate("https://t.snapchat.com/vuwuV5OU")}
                >
                  <img
                    src={Snapchat}
                    alt="Snapchat"
                    className="icon-snapchat" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section></>

    
  );
};

export default Navbar;
