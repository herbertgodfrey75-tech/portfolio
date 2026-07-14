import "./Hero.css";

function Hero() {
  return (
    <section className="hero">

      <div
  className="hero-left"
  data-aos="fade-right"
>

        <p className="hero-intro">
          Hello, I'm
        </p>

        <h1>
  Herbert <span>Godfrey</span>
</h1>

        <h2>
          Student • Full-Stack Developer • Future Pilot
        </h2>

        <p className="hero-description">
          I enjoy building fast, modern web applications and turning ideas
          into real products. I'm currently learning React, FastAPI,
          MongoDB, and software engineering while pursuing my dream of
          becoming a professional pilot.
        </p>

        <div className="hero-buttons">

          <a href="#projects" className="primary-btn">
            View Projects
          </a>

          <a href="#contact" className="secondary-btn">
            Contact Me
          </a>

        </div>

      </div>

      <div
  className="hero-right"
  data-aos="fade-left"
>

        <div className="hero-image-card">

          <img
            src="/profile.png"
            alt="Herbert Godfrey"
          />

        </div>

      </div>

    </section>
  );
}

export default Hero;