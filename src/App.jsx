import { useState } from "react";

const projects = [
  {
    title: "Warframe Market Automation",
    image: "/warframe.png",
    summary:
      "A desktop automation tool that streamlines Warframe Market workflows with browser automation and command handling.",
    bullets: [
      "Python + Selenium automation",
      "Tauri desktop interface",
      "Dynamic pricing and item management",
    ],
    status: "Actively in development",
    details:
      "The tool helps automate repetitive marketplace tasks, manage inventory, and reduce manual interactions across platforms.",
    why:
      "I built this project to learn how to connect desktop apps with browser automation and create reliable workflows for real-world tasks.",
    snapshot: "/warframe-app.png",
    // video: "/warframe-demo.mp4",
    gitLink: "https://github.com/Rukinora/WarframeMarketAutomation",
  },
  {
    title: "LQTC Workflow Management System",
    image: "/LQTC.png",
    summary:
      "A web-based workflow platform built for a senior design project to improve task coordination and visibility.",
    bullets: [
      "Team leadership and system design",
      "Database modeling and UI development",
      "Git collaboration and deployment planning",
    ],
    status: "Completed",
    details:
      "Designed the app to track task progress, assign work, and simplify communication across project teams.",
    why:
      "This project reinforced how to combine user-focused design with backend data flow for practical software solutions.",
    snapshot: [
      {
        image: "/LQTC_Login.jpg",
        text: "Secure login system with role-based authentication."
      },
      {
        image: "/LQTC_Workflow.jpg",
        text: "Workflow dashboard for tracking active tasks and approvals."
      },
      {
        image: "/LQTC_ViewSteps.jpg",
        text: "Detailed workflow step viewer for monitoring process progress."
      }
    ],
    
    
    gitLink: "https://github.com/Rukinora/QTC-Admin-Application",
    
  },
  {
    title: "Portfolio Website",
    summary:
      "A personal website showcasing projects, skills, and professional experience, built with React and Vite.",
    bullets: [
      "React + Vite frontend",
      "Responsive layout and dark theme",
      "Fast, minimal, resume-focused presentation",
    ],
    status: "Live",
    details:
      "This site is designed to present my work clearly, highlight technical skills, and make it easy for employers to contact me.",
    why:
      "I made this portfolio to create a polished resume companion that reflects my development interests and growing experience.",
  },
  {
    title: "Android Workout App",
    summary:
      "A Kotlin-based Android app for tracking workout routines, building habits, and managing exercise sessions.",
    bullets: [
      "Android Studio + Kotlin",
      "Workout routines and timer support",
      "Local data storage and progress tracking",
    ],
    status: "In progress",
    details:
      "Building an Android workout app focused on creating custom routines, logging workouts, and delivering a smooth mobile experience.",
    why:
      `I’m developing this app to learn Android UI, lifecycle management, and practical fitness tracking features. 
      The following snapshots show the current state of the app, including workout tracking, exercise management, and stats visualization.`,
    snapshot: [
    {
      image: "/App_Workout-Screen.jpg",
      text: "Workout Tab View."
    },
    {
      image: "/App_Workout-ScreenAdd.jpg",
      text: "After starting a workout you can add a exercise."
    },
    {
      image: "/App_AddWorkout.jpg",
      text: "Add a new workout from a list of available exercises saved in each muscle group."
    },
    {
      image: "/App_WorkoutAfter.jpg",
      text: "Workout View after adding exercises."
    },
    {
      image: "/App_Activity.jpg",
      text: "Activity tracking view."
    },
    {
      image: "/App_Stats.jpg",
      text: "Stats Tracking View that organizes all data into a graph. With detailes Stats for each exercise beneath."
    }
  ],
  },
];

const programmingLanguages = [
  "Python",
  "JavaScript",
  "Java",
  "Rust",
  "C++",
  "HTML",
  "SQL",
];

const methodologies = [
  "Scrum",
  "Waterfall",
  "Agile",
  "MVC Architecture",
  "Git Workflow",
];

const frameworks = [
  "React",
  "Vite",
  "Tauri",
  "Selenium",
  "Android Studio",
  "Roboflow",
];

const highlights = [
  { label: "Projects", value: "4+ featured" },
  { label: "Experience", value: "Team leadership & automation" },
  { label: "Focus", value: "Full-stack development" },
];

function ProjectCard({ project }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="project-card">
      {project.image && (
        <div className="project-left">
          <img src={project.image} alt={project.title} className="project-pic" />
        </div>
      )}

      <div className="project-right">
        <div className="project-meta">
          <h3>{project.title}</h3>
          <p className="project-status">
            <strong>Status:</strong> {project.status}
          </p>
        </div>

        <p className="project-summary">{project.summary}</p>

        <div className="project-tags">
          {project.bullets.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>

        <div className={expanded ? "project-description expanded" : "project-description"}>
          <p>{project.details}</p>
          

          {expanded && (
          <>
            <h4>Project purpose</h4>
            <p>{project.why}</p>

            {project.gitLink && (
              <a
                href={project.gitLink}
                target="_blank"
                rel="noreferrer"
                className="github-link"
              >
                View GitHub Repository
              </a>
            )}

            {project.snapshot && (
              <div
                className={
                  project.title === "Android Workout App"
                    ? "phone-scroll-gallery"
                    : "snapshot-gallery"
                }
              >
                {(Array.isArray(project.snapshot)
                  ? project.snapshot
                  : [project.snapshot]
                ).map((item, index) => {
                  const img = typeof item === "string" ? item : item.image;
                  const text = typeof item === "string" ? null : item.text;

                  return (
                    <div key={index} className="snapshot-item">
                      <img
                        src={img}
                        alt={`${project.title} snapshot ${index + 1}`}
                        className="project-snapshot"
                      />

                      {text && (
                        <p className="snapshot-text">{text}</p>
                      )}
                    </div>
                  );
                })}
              </div>
            )}

            {project.video && (
              <video className="project-video" controls>
                <source src={project.video} type="video/mp4" />
              </video>
            )}
          </>
        )}
        </div>

        {!expanded && <div className="text-fade"></div>}

        <button className="read-more-btn" onClick={() => setExpanded(!expanded)}>
          {expanded ? "Show Less" : "Read More"}
        </button>
      </div>
    </article>
  );
}

function App() {
  return (
    <div>
      <nav className="navbar">
        <a href="#" className="logo">Ruben Flores-Hernandez</a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <a href="/ruben_flores_hernandez-resume.pdf"  download="/ruben_flores_hernandez-resume.pdf" rel="noreferrer">Resume</a>
        </div>
      </nav>

      <section id="about" className="headshot">
        <div className="headshot-content">
          <div className="headshot-text">
            <p className="eyebrow">Hi, I’m Ruben</p>
            <h1>Building automation and full-stack tools that solve real workflows.</h1>
            <p className="hero-copy">
              I am a Computer Science Graduate from California State University, Los Angeles,
              focused on software development, automation, and polished user experiences.
              I enjoy turning ideas into projects that help teams move faster and reduce manual work.
            </p>

            <div className="cta-links">
              <a className="primary-btn" href="#projects">See projects</a>
              <a className="secondary-btn" href="/ruben_flores_hernandez-resume.pdf"  download="/ruben_flores_hernandez-resume.pdf" rel="noreferrer">
                Download resume
              </a>
              <a className="secondary-btn" href="https://github.com/Rukinora" target="_blank" rel="noreferrer">
                View my Github
              </a>
            </div>
            

            <div className="highlight-grid">
              {highlights.map((item) => (
                <div key={item.label} className="highlight-card">
                  <p className="highlight-value">{item.value}</p>
                  <p className="highlight-label">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <img src="/headshot.png" alt="Ruben Flores" className="profile-pic" />
        </div>
      </section>

      <section id="education" className="section">
        <div className="section-intro">
          <h2>Education</h2>
        </div>

        <div className="education-section-grid">
          <div className="education-card">
            <p className="education-subtitle">California State University, Los Angeles</p>
            <p>
              Bachelor of Science in Computer Science — Graduation: May 2026
            </p>
            <p>
              Focused on software engineering, systems design, and applying classroom knowledge to real projects.
            </p>
          </div>
        </div>
      </section>

      <section id="skills" className="section">
        <div className="section-intro">
          <h2>Skills</h2>
          <p>Technologies, tools, and team methodologies I use to build automation, interfaces, and systems.</p>
        </div>

        <div className="skill-section-row">

          <div className="skill-subsection">
            <h3>Programming Languages</h3>

            <div className="skill-grid">
              {programmingLanguages.map((skill) => (
                <span key={skill} className="skill-badge">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="skill-subsection">
            <h3>Methodologies</h3>

            <div className="skill-grid">
              {methodologies.map((method) => (
                <span key={method} className="skill-badge">
                  {method}
                </span>
              ))}
            </div>
          </div>

          <div className="skill-subsection">
            <h3>Frameworks & Tools</h3>

            <div className="skill-grid">
              {frameworks.map((framework) => (
                <span key={framework} className="skill-badge">
                  {framework}
                </span>
              ))}
            </div>
          </div>

        </div>
      </section>

      <section id="experience" className="section">
        <div className="section-intro">
          <h2>Experience</h2>
        </div>

        <div className="experience-container">
          <div className="experience-card">
            <h3>Team Lead</h3>
            <p className="experience-subtitle">Senior Design - Workflow Management System (LQTC) | Los Angeles, CA — 2025 - 2026</p>
            <p>
              Drove full-stack development and team coordination for a workflow management system, spanning architecture
              design, database modeling, authentication, and code integration.
            </p>
            <ul>
              <li>Addressed communication gaps by establishing regular stand-ups and progress tracking, improving team coordination and reducing missed deadlines</li>
              <li>Coordinated task delegation, code integration, and version control using Git, maintaining consistent collaboration across contributors</li>
              <li>Acted as primary liaison between team members, resolving technical misunderstandings and ensuring clear requirement interpretation</li>
              <li>Reviewed and debugged team code, providing constructive feedback that improved code quality and reduced integration issues</li>
              <li>Architected an MVC-based system to improve maintainability and streamline team development across multiple components</li>
              <li>Designed and implemented a relational database schema and SQL queries to support efficient workflow tracking</li>
              <li>Delivered a functional system with role-based access control (Admin/User), contributing to a stable and user-oriented final product</li>
            </ul>
          </div>

          <div className="experience-card">
            <h3>Crew Member</h3>
            <p className="experience-subtitle">Chipotle | Los Angeles, CA — Apr 2022 - Present</p>
            <ul>
              <li>Cross-trained across all front-of-house and back-of-house stations, supporting team operations and maintaining efficient workflow during high-volume shifts</li>
              <li>Assisted with training and onboarding new employees, improving team coordination and consistency in daily operations</li>
              <li>Collaborated with team members and shift leaders to keep tasks organized, ensure smooth service, and meet performance goals</li>
            </ul>
          </div>
        </div>

        <div className="organizations-row">
          <div className="organizations-card">
            <h3>Organizations</h3>
            <p className="organization-role">Team Member (Computer Vision)</p>
            <p className="organization-subtitle">ASME · Spring 2025 – Fall 2025</p>
            <ul>
              <li>Worked on a computer vision system for an autonomous drone competition</li>
              <li>Annotated training datasets using Roboflow for object detection models</li>
              <li>Ran and validated object detection pipelines locally and exported processed data for algorithm integration
                for team review
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <div className="section-intro">
          <h2>Projects</h2>
          <p>Featured work that highlights automation, full-stack development, and practical problem solving.</p>
        </div>

        <div className="project-list">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      <section id="contact" className="last-section">
        <h2 className="contact-title">Contact</h2>
        <p>Open to software development internships and full-time roles.</p>
        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:cs.rubenfloreshernandez@gmail.com">cs.rubenfloreshernandez@gmail.com</a>
        </p>
        <p>
          <strong>GitHub:</strong>{" "}
          <a href="https://github.com/Rukinora" target="_blank" rel="noreferrer">
            github.com/Rukinora
          </a>
        </p>
        <p>
          <strong>LinkedIn:</strong>{" "}
          <a href="https://www.linkedin.com/in/ruben-flores-hernandez-2b4029263" target="_blank" rel="noreferrer">
            linkedin.com/in/ruben-flores-hernandez-2b4029263
          </a>
        </p>
        <p>Los Angeles, CA</p>
      </section>
    </div>
  );
}


export default App;
