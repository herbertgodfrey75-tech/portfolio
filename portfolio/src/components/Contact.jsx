import "./Contact.css";

function Contact() {
  
  return (
    <section
  className="contact"
  id="contact"
  data-aos="fade-up"
>
      <h2>Let's Connect</h2>

      <p className="contact-text">
        I'm always open to learning, collaborating on exciting projects,
        or discussing new opportunities. Feel free to reach out!
      </p>

      <div className="contact-links">
        <a href="mailto:herbertgodfrey75@gmail.com">
          📧 Email Me
        </a>

        <a
          href="https://github.com/herbertgodfrey75-tech"
          target="_blank"
          rel="noopener noreferrer"
        >
          💻 GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/herbert-godfrey-637251416/"
          target="_blank"
          rel="noopener noreferrer"
        >
          💼 LinkedIn
        </a>
      </div>
    </section>
  );
}

export default Contact;