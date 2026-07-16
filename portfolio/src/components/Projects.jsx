import "./Projects.css";

function Projects() {
  
  return (
   <section
  className="projects"
  id="projects"
  data-aos="zoom-in"
>
      <h2>Featured Projects</h2>

      <p className="projects-text">
        Here are some of the projects I've built while learning full-stack
        development and solving real-world problems.
      </p>

      <div className="project-card">

       <div className="project-image">

  <img
    src="/student-farm.png"
    alt="Student Farm"
  />

  <div className="image-overlay">

    <h3>
  🌱 Student Farm

  <span className="featured">
    Featured
  </span>

</h3>

  </div>

</div>

        <div className="project-content">

          <h3>🌱 Student Farm</h3>

          <p>
            Student Farm is a full-stack student management system built with
            React, FastAPI, MongoDB, and Clerk Authentication. It provides
            secure role-based access for administrators, students, and users,
            making student management simple and efficient.
          </p>

          <div className="project-tech">
            <span>React</span>
            <span>FastAPI</span>
            <span>MongoDB</span>
            <span>Clerk</span>
            <span>JavaScript</span>
          </div>

          <ul className="project-features">
            <li>✔ Role-Based Authentication</li>
            <li>✔ Student Management</li>
            <li>✔ Secure Login with Clerk</li>
            <li>✔ Responsive Design</li>
          </ul>

          <div className="project-buttons">

  <a
    href="https://github.com/herbertgodfrey75-tech/herbert-it"
    target="_blank"
    rel="noopener noreferrer"
    className="github-btn"
  >
    💻 View Code
  </a>

  <a
    href="https://herbert-it-1.onrender.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="demo-btn"
  >
    🚀 Live Demo
  </a>

</div>

<div className="project-stats">

  <div>
    🔐 Authentication
  </div>

  <div>
    👥 3 User Roles
  </div>

  <div>
    📱 Responsive
  </div>

  <div>
    ⚡ FastAPI Backend
  </div>

</div>

        </div>

      </div>
    </section>
  );
}

export default Projects;