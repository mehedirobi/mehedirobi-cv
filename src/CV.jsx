
import React from "react";

const profile = {
  name: "Mehedi Robi",
  role: "MERN Stack Developer",
  phone: "+8801336458100",
  email: "mehedirobidev@gmail.com",
  location: "Dhaka, Bangladesh",
  portfolio: "https://mehedirobi-portfolio.netlify.app/",
  github: "https://github.com/mehedirobi",
  linkedin: "https://www.linkedin.com/in/mehedirobii/",
  // Replace this placeholder with your photo later.
  photo: "",
};

const skills = [
  {
    category: "Frontend Development",
    items: "HTML5, CSS3, JavaScript (ES6+), React.js, React Router, Tailwind CSS",
  },
  {
    category: "Backend Development",
    items: "Node.js, Express.js, RESTful API Development, Server-side Logic",
  },
  {
    category: "Database & Authentication",
    items: "MongoDB, Firebase Authentication, Protected Routes, User Authentication",
  },
  {
    category: "Development Practices",
    items:
      "Reusable Components, CRUD Operations, API Integration, Responsive Design, Form Validation",
  },
  {
    category: "Tools & Platforms",
    items: "Git, GitHub, Netlify, Vercel, npm, Browser Developer Tools",
  },
];

const projects = [
  {
    name: "Khelaro",
    subtitle: "Sports Turf Booking Platform",
    overview:
      "A sports turf discovery and booking platform designed to help users find turfs, explore available options, and manage booking-related activities.",
    tech: "React.js, Tailwind CSS, Node.js, Express.js, MongoDB",
    live: "https://khelaro-project.netlify.app/",
    client: "https://github.com/mehedirobi/khelaro-client",
    server: "https://github.com/mehedirobi/khelaro-server",
    points: [
      "Developed responsive interfaces for turf discovery, turf details, and booking-related user workflows.",
      "Structured customer and turf-owner workflows with role-oriented dashboard planning and navigation.",
      "Integrated frontend workflows with RESTful API and backend data operations.",
      "Used reusable React components and responsive styling to maintain UI consistency across screen sizes.",
    ],
  },
  {
    name: "UrbanFix",
    subtitle: "Civic Infrastructure Issue Reporting Platform",
    overview:
      "A civic issue reporting platform that enables citizens to report public infrastructure problems and follow their progress.",
    tech: "React.js, Tailwind CSS, Node.js, Express.js, Firebase, MongoDB",
    live: "https://urbanfix-project-01.netlify.app/",
    client: "https://github.com/mehedirobi/urban-fix",
    server: "https://github.com/mehedirobi/urban-fix-server",
    points: [
      "Developed reporting workflows for issues such as potholes, damaged streetlights, and public infrastructure problems.",
      "Integrated Firebase Authentication, protected routes, REST API requests, and MongoDB data operations.",
      "Designed issue status tracking and role-oriented experiences for citizen, staff, and admin workflows.",
      "Organized report management interfaces to support issue tracking and community participation.",
    ],
  },
  {
    name: "PawMart",
    subtitle: "Pet Adoption & Supplies Platform",
    overview:
      "A pet-focused marketplace for browsing adoption listings and pet supplies, with listing management and order-related workflows.",
    tech: "React.js, Tailwind CSS, Node.js, Express.js, MongoDB, Firebase",
    live: "https://pawmart-project-01.netlify.app/",
    client: "https://github.com/mehedirobi/pawmart-project",
    server: "https://github.com/mehedirobi/pawmart-project-server",
    points: [
      "Built responsive interfaces for pet listings, supply browsing, listing details, and ordering workflows.",
      "Implemented email/password and Google sign-in integration using Firebase Authentication.",
      "Developed listing CRUD workflows and dashboard views for managing listings and orders.",
      "Connected frontend features to REST APIs and implemented order-related reporting functionality.",
    ],
  },
];

const education = {
  degree: "Diploma in Computer Science & Technology (CST)",
  institute:
    "Ahsanullah Institute of Technical & Vocational Education & Training (AITVET), Dhaka",
  status: "In Progress",
};

function ExternalLink({ href, children, className = "" }) {
  if (!href) return null;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`cv-link ${className}`}
    >
      {children}
    </a>
  );
}

function Section({ title, children, className = "" }) {
  return (
    <section className={`cv-section ${className}`}>
      <h2 className="section-heading">{title}</h2>
      {children}
    </section>
  );
}

function PhotoPlaceholder() {
  return (
    <div className="photo-frame" aria-label="Profile photo placeholder">
      {profile.photo ? (
        <img
          src={profile.photo}
          alt={`${profile.name} profile`}
          className="profile-photo"
        />
      ) : (
        <>
          <span className="photo-initials">MR</span>
          <span className="photo-caption">PROFILE PHOTO</span>
        </>
      )}
    </div>
  );
}

function ContactLink({ href, children }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="contact-link"
    >
      {children}
    </a>
  );
}

function ProjectLinks({ project }) {
  return (
    <nav
      aria-label={`${project.name} project links`}
      className="project-links"
    >
      <ExternalLink href={project.live}>Live Demo</ExternalLink>
      <ExternalLink href={project.client}>Client Repo</ExternalLink>
      <ExternalLink href={project.server}>Server Repo</ExternalLink>
    </nav>
  );
}

function Project({ project }) {
  return (
    <article className="project">
      <div className="project-top">
        <div className="project-title-group">
          <h3 className="project-title">{project.name}</h3>
          <p className="project-subtitle">{project.subtitle}</p>
        </div>

        <ProjectLinks project={project} />
      </div>

      <p className="project-overview">{project.overview}</p>

      <p className="project-tech">
        <strong>Tech Stack:</strong> {project.tech}
      </p>

      <ul className="project-list">
        {project.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </article>
  );
}

function PageHeader({ continued = false }) {
  return (
    <header className="continued-header">
      <div>
        <h2>{profile.name}</h2>
        <p>{profile.role}</p>
      </div>
      <span>
        {continued ? "PROJECTS & EDUCATION" : "PROFESSIONAL CV"}
      </span>
    </header>
  );
}

export default function CV() {
  return (
    <main className="cv-background">
      <div className="cv-document">
        {/* PAGE 1 */}
        <article className="cv-page">
          <header className="profile-header">
            <div className="profile-content">
              <p className="eyebrow">PROFESSIONAL CV</p>
              <h1>{profile.name}</h1>
              <p className="profile-role">{profile.role}</p>

              <div className="contact-details">
                <ContactLink href={`tel:${profile.phone}`}>
                  {profile.phone}
                </ContactLink>
                <ContactLink href={`mailto:${profile.email}`}>
                  {profile.email}
                </ContactLink>
                <span>{profile.location}</span>
              </div>

              <nav className="social-links" aria-label="Professional links">
                <ExternalLink href={profile.portfolio}>Portfolio</ExternalLink>
                <ExternalLink href={profile.github}>GitHub</ExternalLink>
                <ExternalLink href={profile.linkedin}>LinkedIn</ExternalLink>
              </nav>
            </div>

            <PhotoPlaceholder />
          </header>

          <Section title="Career Objective">
            <p>
              Seeking an entry-level developer position where I can apply my
              React.js and MERN stack skills to build reliable web applications,
              contribute to real-world software projects, and grow as a
              software engineer through practical experience and collaboration.
            </p>
          </Section>

          <Section title="Professional Summary">
            <p>
              MERN Stack Developer and Diploma student in Computer Science
              &amp; Technology with hands-on project experience building
              responsive web applications using React.js, Node.js, Express.js,
              and MongoDB. Familiar with RESTful APIs, Firebase Authentication,
              protected routes, CRUD operations, and database integration.
              Focused on reusable components, maintainable code, responsive UI,
              and practical problem-solving. Seeking an opportunity to
              contribute to a development team and strengthen full-stack
              engineering skills.
            </p>
          </Section>

          <Section title="Technical Skills">
            <div className="skills-list">
              {skills.map((skill) => (
                <div className="skill-row" key={skill.category}>
                  <h3>{skill.category}</h3>
                  <p>{skill.items}</p>
                </div>
              ))}
            </div>
          </Section>

          <Section title="Core Competencies">
            <div className="competencies">
              <span>Responsive UI Development</span>
              <span>REST API Integration</span>
              <span>Authentication &amp; Authorization</span>
              <span>CRUD Workflows</span>
              <span>Component Reusability</span>
              <span>Debugging &amp; Problem-Solving</span>
              <span>Git-Based Version Control</span>
              <span>Cross-Device Compatibility</span>
            </div>
          </Section>

          <Section title="Selected Projects">
            <Project project={projects[0]} />
            <Project project={projects[1]} />
          </Section>

          <footer className="page-footer">
            <span>{profile.name}</span>
            <span>Page 1 of 2</span>
          </footer>
        </article>

        {/* PAGE 2 */}
        <article className="cv-page cv-page-two">
          <PageHeader continued />

          <Section title="Selected Projects — Continued">
            <Project project={projects[2]} />
          </Section>

          <Section title="Education">
            <div className="education-entry">
              <div>
                <h3>{education.degree}</h3>
                <p className="institution">{education.institute}</p>
                <p className="education-status">{education.status}</p>
              </div>
              <span className="status-tag">ONGOING</span>
            </div>
          </Section>

          <Section title="Professional Training">
            <div className="training-entry">
              <h3>Complete Web Development Course</h3>
              <p>Programming Hero</p>
              <p className="muted-note">
                Web development training covering frontend and backend
                fundamentals through practical projects.
              </p>
            </div>
          </Section>

          <Section title="Languages">
            <div className="language-grid">
              <div>
                <h3>Bangla</h3>
                <p>Native</p>
              </div>
              <div>
                <h3>English</h3>
                <p>Intermediate</p>
              </div>
            </div>
          </Section>

          <Section title="Development Focus">
            <p>
              Building accessible and responsive interfaces, integrating
              frontend applications with RESTful APIs, implementing
              authentication and protected routes, managing CRUD operations,
              and writing reusable React components. Interested in junior
              frontend, MERN stack, and entry-level software development roles.
            </p>
          </Section>

          <Section title="Additional Information">
            <ul className="additional-list">
              <li>
                <strong>Primary stack:</strong> React.js, Node.js, Express.js,
                and MongoDB.
              </li>
              <li>
                <strong>Development approach:</strong> Component-based
                architecture, maintainability, usability, and responsive design.
              </li>
              <li>
                <strong>Portfolio:</strong>{" "}
                <ExternalLink href={profile.portfolio}>
                  View selected projects
                </ExternalLink>
              </li>
            </ul>
          </Section>

          <footer className="page-footer">
            <span>{profile.email}</span>
            <span>Page 2 of 2</span>
          </footer>
        </article>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

        .cv-background {
          min-height: 100vh;
          padding: 28px 16px;
          background: #edf1f5;
          color: #334155;
          font-family: Inter, Arial, sans-serif;
          font-size: 10.5px;
          line-height: 1.55;
          -webkit-font-smoothing: antialiased;
        }

        .cv-document {
          width: 100%;
          max-width: 210mm;
          margin: 0 auto;
        }

        .cv-page {
          position: relative;
          display: flex;
          flex-direction: column;
          min-height: 273mm;
          margin-bottom: 24px;
          padding: 13mm 14mm 12mm;
          background: #fff;
          box-shadow: 0 8px 30px rgb(15 23 42 / 8%);
        }

        .profile-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          padding-bottom: 16px;
          border-bottom: 2px solid #172b4d;
        }

        .profile-content {
          min-width: 0;
          flex: 1;
        }

        .eyebrow {
          margin: 0 0 5px;
          color: #476b9a;
          font-size: 8px;
          font-weight: 700;
          letter-spacing: 2px;
        }

        .profile-header h1 {
          margin: 0;
          color: #14243b;
          font-size: 30px;
          font-weight: 800;
          line-height: 1.2;
          letter-spacing: -0.9px;
        }

        .profile-role {
          margin: 5px 0 10px;
          color: #42638b;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.6px;
        }

        .contact-details {
          display: flex;
          flex-wrap: wrap;
          gap: 4px 12px;
          color: #475569;
          font-size: 9px;
          overflow-wrap: anywhere;
        }

        .contact-link {
          color: inherit;
          text-decoration: none;
        }

        .contact-link:hover {
          color: #1d4ed8;
        }

        .social-links {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 10px;
        }

        .cv-link {
          color: #315c91;
          font-size: 9px;
          font-weight: 600;
          text-decoration: underline;
          text-decoration-color: #b7c7da;
          text-underline-offset: 3px;
          overflow-wrap: anywhere;
        }

        .photo-frame {
          display: flex;
          flex: 0 0 90px;
          width: 90px;
          height: 108px;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 7px;
          overflow: hidden;
          border: 1px dashed #9aaac0;
          background: #f8fafc;
          color: #718096;
        }

        .photo-initials {
          color: #536b8b;
          font-size: 25px;
          font-weight: 700;
        }

        .photo-caption {
          font-size: 7px;
          font-weight: 700;
          letter-spacing: 0.7px;
        }

        .profile-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .cv-section {
          margin-top: 13px;
        }

        .section-heading {
          margin: 0 0 7px;
          padding-bottom: 4px;
          border-bottom: 1px solid #d9e1eb;
          color: #172b4d;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1.15px;
          text-transform: uppercase;
        }

        .cv-section > p {
          margin: 0;
          color: #475569;
          font-size: 9.5px;
          line-height: 1.7;
          overflow-wrap: anywhere;
        }

        .skills-list {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .skill-row {
          display: grid;
          grid-template-columns: 132px minmax(0, 1fr);
          gap: 12px;
        }

        .skill-row h3,
        .skill-row p {
          margin: 0;
          font-size: 9px;
          line-height: 1.65;
        }

        .skill-row h3 {
          color: #263b58;
          font-weight: 700;
        }

        .skill-row p {
          color: #475569;
        }

        .competencies {
          display: flex;
          flex-wrap: wrap;
          gap: 5px;
        }

        .competencies span {
          padding: 3px 7px;
          border: 1px solid #dce4ed;
          border-radius: 3px;
          background: #f8fafc;
          color: #334155;
          font-size: 8px;
          font-weight: 500;
        }

        .project {
          padding: 9px 0;
          border-bottom: 1px solid #e8edf3;
          break-inside: avoid;
          page-break-inside: avoid;
        }

        .project:first-child {
          padding-top: 0;
        }

        .project:last-child {
          padding-bottom: 0;
          border-bottom: 0;
        }

        .project-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 8px 12px;
        }

        .project-title-group {
          min-width: 0;
        }

        .project-title {
          margin: 0;
          color: #172b4d;
          font-size: 11px;
          font-weight: 800;
        }

        .project-subtitle {
          margin: 2px 0 0;
          color: #64748b;
          font-size: 8.5px;
          font-weight: 600;
        }

        .project-links {
          display: flex;
          flex-wrap: wrap;
          justify-content: flex-end;
          gap: 4px 9px;
        }

        .project-links .cv-link {
          font-size: 8px;
          white-space: nowrap;
        }

        .project-overview {
          margin: 6px 0 0;
          color: #475569;
          font-size: 9px;
          line-height: 1.6;
        }

        .project-tech {
          margin: 5px 0 0;
          color: #475569;
          font-size: 8.5px;
          line-height: 1.6;
        }

        .project-tech strong {
          color: #263b58;
        }

        .project-list {
          display: flex;
          flex-direction: column;
          gap: 3px;
          margin: 5px 0 0;
          padding-left: 14px;
          color: #475569;
          font-size: 8.8px;
          line-height: 1.55;
        }

        .education-entry {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 12px;
        }

        .education-entry h3,
        .training-entry h3 {
          margin: 0;
          color: #263b58;
          font-size: 10px;
          font-weight: 700;
        }

        .institution {
          margin: 4px 0 0;
          color: #475569;
          font-size: 9px;
        }

        .education-status,
        .training-entry > p {
          margin: 4px 0 0;
          color: #64748b;
          font-size: 9px;
        }

        .status-tag {
          flex-shrink: 0;
          padding: 3px 7px;
          border-radius: 3px;
          background: #eef4fa;
          color: #315c91;
          font-size: 7px;
          font-weight: 800;
          letter-spacing: 0.6px;
        }

        .muted-note {
          line-height: 1.6;
        }

        .language-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .language-grid h3 {
          margin: 0;
          color: #263b58;
          font-size: 9.5px;
          font-weight: 700;
        }

        .language-grid p {
          margin: 3px 0 0;
          color: #64748b;
          font-size: 9px;
        }

        .additional-list {
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin: 0;
          padding-left: 15px;
          color: #475569;
          font-size: 9px;
          line-height: 1.6;
        }

        .continued-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding-bottom: 12px;
          border-bottom: 2px solid #172b4d;
        }

        .continued-header h2 {
          margin: 0;
          color: #172b4d;
          font-size: 18px;
          font-weight: 800;
        }

        .continued-header p {
          margin: 3px 0 0;
          color: #42638b;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.7px;
        }

        .continued-header > span {
          color: #64748b;
          font-size: 7px;
          font-weight: 700;
          letter-spacing: 1px;
          text-align: right;
        }

        .page-footer {
          display: flex;
          justify-content: space-between;
          gap: 10px;
          margin-top: auto;
          padding-top: 10px;
          border-top: 1px solid #e2e8f0;
          color: #94a3b8;
          font-size: 7.5px;
        }

        @media (max-width: 600px) {
          .cv-background {
            padding: 12px 8px;
          }

          .cv-page {
            min-height: 0;
            margin-bottom: 14px;
            padding: 24px 18px;
          }

          .profile-header {
            align-items: flex-start;
            gap: 10px;
          }

          .profile-header h1 {
            font-size: 25px;
          }

          .photo-frame {
            flex-basis: 70px;
            width: 70px;
            height: 86px;
          }

          .skill-row {
            grid-template-columns: 1fr;
            gap: 1px;
          }

          .project-top {
            flex-direction: column;
          }

          .project-links {
            justify-content: flex-start;
          }

          .continued-header h2 {
            font-size: 16px;
          }
        }

        @page {
          size: A4;
          margin: 0;
        }

        @media print {
          html,
          body,
          #root {
            width: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
            background: #fff !important;
          }

          .cv-background {
            min-height: 0;
            margin: 0;
            padding: 0;
            background: #fff !important;
            font-size: 9.5px;
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
          }

          .cv-document {
            width: 100%;
            max-width: none;
            margin: 0;
          }

          .cv-page {
            width: 210mm;
            height: 297mm;
            min-height: 0;
            margin: 0;
            padding: 12mm 14mm 11mm;
            overflow: hidden;
            box-shadow: none;
            background: #fff;
            break-after: page;
            page-break-after: always;
          }

          .cv-page:last-child {
            break-after: auto;
            page-break-after: auto;
          }

          .cv-section,
          .project {
            break-inside: avoid;
            page-break-inside: avoid;
          }

          .cv-link {
            color: #315c91 !important;
            text-decoration: none;
          }

          a {
            overflow-wrap: anywhere;
          }
        }
      `}</style>
    </main>
  );
}
