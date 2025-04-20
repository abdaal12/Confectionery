import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./footer.css";
function Footer() {
  return (
    <>
      <footer className="footer-container flex-column-center">
        <p className="footer-header">
          Made with <span className="keyword">{`</>`}</span> by Abdaal ALi
        </p>
        <ul>
          <li className="footer-item">
            <a
              href="https://github.com/abdaal12/"
              target="_blank"
              rel="noreferrer"
              aria-label="github"
            >
              <FontAwesomeIcon
                icon={["fab", "github"]}
                className="footer-icon-style"
              ></FontAwesomeIcon>
            </a>
          </li>
          <li className="footer-item">
            <a
              href="https://x.com/ali_abdaal18?t=AeZN7ByQD5_7QmmkA9KLDA&s=09"
              target="_blank"
              rel="noreferrer"
              aria-label="twitter"
            >
              <FontAwesomeIcon
                icon={["fab", "twitter"]}
                className="footer-icon-style"
              ></FontAwesomeIcon>
            </a>
          </li>
          <li className="footer-item">
            <a
              href="https://www.linkedin.com/in/abdaal-ali-61a064255?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noreferrer"
              aria-label="linkedin"
            >
              <FontAwesomeIcon
                icon={["fab", "linkedin-in"]}
                className="footer-icon-style"
              ></FontAwesomeIcon>
            </a>
          </li>
        </ul>
        <p className="copywright">© 2025 | US Confectionery</p>
      </footer>
    </>
  );
}

export { Footer };
