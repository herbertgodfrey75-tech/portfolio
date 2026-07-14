import "./Footer.css";

function Footer() {
   
  const year = new Date().getFullYear();

  return (
    <footer
  className="footer"
  data-aos="fade"
>

      <h2>Herbert Godfrey</h2>

      <p>
        Student • Full-Stack Developer • Future Pilot
      </p>

      <div className="footer-links">

        <a
          href="mailto:herbertgodfrey75@gmail.com"
        >
          Email
        </a>

        <a
          href="https://github.com/herbertgodfrey75-tech"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/herbert-godfrey-637251416/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>

      </div>

      <p className="copyright">
        © {year} Herbert Godfrey. All rights reserved.
      </p>

    </footer>
  );
}

export default Footer;