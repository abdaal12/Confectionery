import {
  faGithub,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./footer.css";
function Footer() {
  return (
    <>
      <footer className="footer-container flex-column-center">
        <p className="footer-header">
          Made with <span className="keyword">{`</>`}</span> by Roma Bulani
        </p>
        <ul>
          <li className="footer-item">
            <a
              href="https://github.com/romabulani"
              target="_blank"
              rel="noreferrer"
              aria-label="github"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className="footer-icon-style"
              ></FontAwesomeIcon>
            </a>
          </li>
          <li className="footer-item">
            <a
              href="https://twitter.com/romabulani"
              target="_blank"
              rel="noreferrer"
              aria-label="twitter"
            >
              <FontAwesomeIcon
                icon={faTwitter}
                className="footer-icon-style"
              ></FontAwesomeIcon>
            </a>
          </li>
          <li className="footer-item">
            <a
              href="https://www.linkedin.com/in/romabulani/"
              target="_blank"
              rel="noreferrer"
              aria-label="linkedin"
            >
              <FontAwesomeIcon
                icon={faLinkedinIn}
                className="footer-icon-style"
              ></FontAwesomeIcon>
            </a>
          </li>
        </ul>
        <p className="copywright">© 2022 | Bakin Lane</p>
      </footer>
    </>
  );
}

export { Footer };
