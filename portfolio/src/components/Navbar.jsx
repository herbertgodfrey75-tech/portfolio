import { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <nav className="navbar">
     <a href="#home" className="logo">
  Herbert Godfrey
</a>
      <ul className="nav-links">
        <li>
          <a
            href="#about"
            className={active === "about" ? "active" : ""}
          >
            About
          </a>
        </li>

        <li>
          <a
            href="#skills"
            className={active === "skills" ? "active" : ""}
          >
            Skills
          </a>
        </li>

        <li>
          <a
            href="#projects"
            className={active === "projects" ? "active" : ""}
          >
            Projects
          </a>
        </li>

        <li>
          <a
            href="#contact"
            className={active === "contact" ? "active" : ""}
          >
            Contact
          </a>
        </li>
      </ul>

      <button className="resume-btn">
        Resume
      </button>
    </nav>
  );
}

export default Navbar;