import "./About.css";

function About() {

  return (
    <section
  className="about"
  id="about"
  data-aos="fade-up"
>

      <div className="about-text">

        <h2>About Me</h2>

        <p>
  Hi! I'm Herbert Godfrey, a student and aspiring full-stack developer from
  Nigeria. I studied at <strong>St. Stephen of Hungary College, Gombi</strong>,
  where I developed my interest in technology and problem-solving. I'm also
  training in Full-Stack Development at <strong>Mentors Innovation Hub</strong>,
  where I'm building practical skills in modern web development.
</p>

        <p>
          My current tech stack includes React, FastAPI, JavaScript,
          Python, and MongoDB. I'm always learning new technologies
          and challenging myself with bigger projects.
        </p>

        <p>
          Outside programming, I enjoy gaming, creating content,
          and working toward my dream of becoming a professional pilot.
        </p>

      </div>

    </section>
  );
}

export default About;