import "./Skills.css";

function Skills() {
   
  const skillGroups = [
    {
      title: "Frontend",
      skills: ["HTML5", "CSS3", "JavaScript", "React"],
    },
    {
      title: "Backend",
      skills: ["Python", "FastAPI"],
    },
    {
      title: "Database",
      skills: ["MongoDB"],
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "VS Code", "Clerk"],
    },
  ];

  return (
    <section
  className="skills"
  id="skills"
  data-aos="fade-up"
>
      <h2>Skills</h2>

      <p className="skills-text">
        I enjoy building full-stack applications with modern technologies,
        focusing on clean code, performance, and user experience.
      </p>

      <div className="skills-container">
        {skillGroups.map((group) => (
          <div key={group.title} className="skill-group">
            <h3>{group.title}</h3>

            <div className="skill-list">
              {group.skills.map((skill) => (
                <span key={skill} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;