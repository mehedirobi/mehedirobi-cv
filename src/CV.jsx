import React from "react";

const profile = {
  name: "Mehedi Robi",
  role: "MERN Stack Developer",
  phone: "+8801336458100",
  email: "mehedirobidev@gmail.com",
  location: "Dhaka, Bangladesh",
  links: [
    {
      label: "Portfolio",
      url: "https://mehedirobi-portfolio.netlify.app/",
    },
    {
      label: "GitHub",
      url: "https://github.com/mehedirobi",
    },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/mehedirobii/",
    },
  ],
};

const skills = [
  {
    category: "Frontend Development",
    items: "HTML5, CSS3, JavaScript (ES6+), React.js, React Router, Tailwind CSS",
  },
  {
    category: "Backend Development",
    items: "Node.js, Express.js, RESTful API Development",
  },
  {
    category: "Database & Authentication",
    items: "MongoDB, Firebase Authentication, Protected Routes",
  },
  {
    category: "Tools & Development",
    items: "Git, GitHub, CRUD Operations, API Integration, Responsive Design",
  },
];

const projects = [
  {
    name: "Khelaro",
    subtitle: "Sports Turf Booking Platform",
    tech: "React.js, Tailwind CSS, Node.js, Express.js, MongoDB",
    live: "https://khelaro-project.netlify.app/",
    client: "https://github.com/mehedirobi/khelaro-client",
    server: "https://github.com/mehedirobi/khelaro-server",
    points: [
      "Developed a full-stack platform for discovering sports turfs, selecting booking dates and times, and managing bookings.",
      "Implemented customer and turf-owner workflows with RESTful API integration and backend data operations.",
      "Applied responsive UI development and reusable React components to support a consistent user experience across screen sizes.",
    ],
  },
  {
    name: "UrbanFix",
    subtitle: "Civic Infrastructure Issue Reporting Platform",
    tech: "React.js, Tailwind CSS, Node.js, Express.js, Firebase, MongoDB",
    live: "https://urbanfix-project-01.netlify.app/",
    client: "https://github.com/mehedirobi/urban-fix",
    server: "https://github.com/mehedirobi/urban-fix-server",
    points: [
      "Built a platform for reporting, tracking, and managing civic infrastructure issues such as damaged roads and streetlights.",
      "Integrated Firebase Authentication, protected routes, RESTful APIs, and MongoDB data operations.",
      "Structured issue-management workflows to support status tracking and role-based application experiences.",
    ],
  },
  {
    name: "PawMart",
    subtitle: "Pet Adoption & Supply Platform",
    tech: "React.js, Tailwind CSS, Node.js, Express.js, MongoDB, Firebase",
    live: "https://pawmart-project-01.netlify.app/",
    client: "https://github.com/mehedirobi/pawmart-project",
    server: "https://github.com/mehedirobi/pawmart-project-server",
    points: [
      "Developed a responsive platform for pet adoption and pet-supply shopping, including category-based browsing and filtering.",
      "Implemented email/password and Google authentication, listing CRUD operations, adoption workflows, and product ordering.",
      "Integrated listing and order dashboards, REST API operations, and PDF order-report functionality.",
    ],
  },
];

const education = {
  degree: "Diploma in Computer Science & Technology (CST)",
  institute:
    "Ahsanullah Institute of Technical & Vocational Education & Training (AITVET), Dhaka",
  status: "In Progress",
};

function ExternalLink({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="cv-link font-medium text-slate-700 underline decoration-slate-300 underline-offset-2 transition-colors hover:text-blue-700"
    >
      {children}
    </a>
  );
}

function Section({ title, children, className = "" }) {
  return (
    <section className={`cv-section mt-5 first:mt-0 ${className}`}>
      <h2 className="mb-2 border-b border-slate-200 pb-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-slate-900">
        {title}
      </h2>

      {children}
    </section>
  );
}

function Project({ project }) {
  return (
    <article className="cv-project py-3 first:pt-0 last:pb-0">
      <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
        <div className="min-w-0">
          <h3 className="text-[13px] font-bold text-slate-950">
            {project.name}
          </h3>

          <p className="mt-0.5 text-[10.5px] font-medium text-slate-600">
            {project.subtitle}
          </p>
        </div>

        <nav
          aria-label={`${project.name} project links`}
          className="flex flex-wrap gap-x-3 gap-y-1 text-[9.5px] sm:justify-end"
        >
          <ExternalLink href={project.live}>Live Demo</ExternalLink>
          <ExternalLink href={project.client}>Client</ExternalLink>
          <ExternalLink href={project.server}>Server</ExternalLink>
        </nav>
      </div>

      <p className="mt-2 text-[10px] leading-relaxed text-slate-600">
        <span className="font-semibold text-slate-800">Tech Stack: </span>
        {project.tech}
      </p>

      <ul className="mt-2 list-disc space-y-1 pl-4 text-[10.5px] leading-[1.55] text-slate-700 marker:text-slate-400">
        {project.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </article>
  );
}

function CompactHeader() {
  return (
    <header className="mb-5 border-b border-slate-200 pb-3">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h2 className="text-[18px] font-bold tracking-tight text-slate-950">
          {profile.name}
        </h2>

        <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-500">
          {profile.role}
        </p>
      </div>

      <p className="mt-1 text-[9.5px] text-slate-500">
        Continued — Selected Projects, Education & Training
      </p>
    </header>
  );
}

export default function CV() {
  const handlePrint = () => window.print();

  return (
    <main className="min-h-screen bg-slate-100 px-3 py-6 font-sans text-slate-800 sm:px-6 sm:py-8 print:bg-white print:p-0">
      {/* Preview toolbar: excluded from PDF */}

      {/* PAGE 1 */}
      <div className="cv-page mx-auto w-full max-w-[210mm] bg-white px-5 py-7 shadow-lg shadow-slate-200/60 sm:px-10 sm:py-9 print:shadow-none">
        <header className="border-b-2 border-slate-900 pb-5 text-center">
          <h1 className="text-[30px] font-bold leading-tight tracking-tight text-slate-950 sm:text-[34px]">
            {profile.name}
          </h1>

          <p className="mt-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-slate-600">
            {profile.role}
          </p>

          <div className="mt-3 flex flex-wrap items-center justify-center gap-x-2 gap-y-1.5 text-[10px] text-slate-600">
            <a
              href={`mailto:${profile.email}`}
              className="break-all hover:underline"
            >
              {profile.email}
            </a>

            <span aria-hidden="true">•</span>

            <a href={`tel:${profile.phone}`}>{profile.phone}</a>

            <span aria-hidden="true">•</span>

            <span>{profile.location}</span>
          </div>

          <nav
            aria-label="Professional profiles"
            className="mt-2.5 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-[10px]"
          >
            {profile.links.map((link) => (
              <ExternalLink key={link.label} href={link.url}>
                {link.label}
              </ExternalLink>
            ))}
          </nav>
        </header>

        <Section title="Professional Summary">
          <p className="text-[10.5px] leading-[1.7] text-slate-700">
            MERN Stack Developer and Diploma student in Computer Science &
            Technology with hands-on project experience building responsive
            full-stack web applications using React.js, Node.js, Express.js,
            and MongoDB. Familiar with RESTful API integration, authentication,
            CRUD operations, and database-driven application workflows.
            Focused on reusable components, maintainable code, responsive
            interfaces, and practical problem-solving. Seeking an entry-level
            developer opportunity to contribute to real-world software
            projects and continue developing as a software engineer.
          </p>
        </Section>

        <Section title="Technical Skills">
          <div className="space-y-2">
            {skills.map(({ category, items }) => (
              <div
                key={category}
                className="grid grid-cols-1 gap-1 sm:grid-cols-[145px_1fr] sm:gap-3"
              >
                <h3 className="text-[10px] font-semibold text-slate-900">
                  {category}
                </h3>

                <p className="text-[10px] leading-[1.6] text-slate-700">
                  {items}
                </p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Selected Projects">
          <div className="divide-y divide-slate-200">
            <Project project={projects[0]} />
            <Project project={projects[1]} />
          </div>
        </Section>

        <footer className="mt-5 border-t border-slate-200 pt-2 text-center text-[8.5px] text-slate-400">
          {profile.name} · {profile.role}
        </footer>
      </div>

      {/* PAGE 2 */}
      <div className="cv-page cv-page-two mx-auto mt-6 w-full max-w-[210mm] bg-white px-5 py-7 shadow-lg shadow-slate-200/60 sm:px-10 sm:py-9 print:mt-0 print:shadow-none">
        <CompactHeader />

        <Section title="Selected Projects — Continued">
          <Project project={projects[2]} />
        </Section>

        <Section title="Education">
          <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
            <div className="min-w-0">
              <h3 className="text-[11px] font-bold leading-relaxed text-slate-900">
                {education.degree}
              </h3>

              <p className="mt-1 text-[10.5px] leading-[1.65] text-slate-600">
                {education.institute}
              </p>
            </div>

            <span className="w-fit shrink-0 rounded-full bg-slate-100 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-wide text-slate-600">
              {education.status}
            </span>
          </div>
        </Section>

        <Section title="Training">
          <div>
            <h3 className="text-[11px] font-semibold text-slate-900">
              Complete Web Development Course
            </h3>

            <p className="mt-1 text-[10.5px] text-slate-600">
              Programming Hero
            </p>
          </div>
        </Section>

        <Section title="Languages">
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            <div>
              <h3 className="text-[10.5px] font-semibold text-slate-900">
                Bangla
              </h3>
              <p className="mt-0.5 text-[10px] text-slate-600">Native</p>
            </div>

            <div>
              <h3 className="text-[10.5px] font-semibold text-slate-900">
                English
              </h3>
              <p className="mt-0.5 text-[10px] text-slate-600">
                Intermediate
              </p>
            </div>
          </div>
        </Section>

        <Section title="Development Focus">
          <p className="text-[10.5px] leading-[1.7] text-slate-700">
            Building responsive user interfaces, integrating frontend
            applications with RESTful APIs, implementing authentication and
            protected routes, managing CRUD workflows, and developing
            maintainable React components. Interested in entry-level
            frontend, MERN stack, and junior software development roles.
          </p>
        </Section>

        <footer className="mt-8 border-t border-slate-200 pt-3 text-center text-[8.5px] text-slate-400">
          {profile.email} · {profile.location}
        </footer>
      </div>

      <style>{`
        @page {
          size: A4;
          margin: 12mm 15mm;
        }

        @media screen {
          .cv-page {
            min-height: 273mm;
          }
        }

        @media print {
          html,
          body,
          #root {
            width: 100% !important;
            min-height: 0 !important;
            margin: 0 !important;
            padding: 0 !important;
            background: #fff !important;
          }

          body {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }

          .cv-page {
            width: 100% !important;
            max-width: none !important;
            min-height: 0 !important;
            margin: 0 !important;
            padding: 0 !important;
            box-shadow: none !important;
            background: #fff !important;
          }

          .cv-page-two {
            break-before: page;
            page-break-before: always;
          }

          .cv-section,
          .cv-project {
            break-inside: avoid;
            page-break-inside: avoid;
          }

          h1,
          h2,
          h3 {
            break-after: avoid;
            page-break-after: avoid;
          }

          a {
            color: #334155 !important;
            text-decoration: none !important;
          }

          .cv-link {
            font-size: 9px !important;
          }

          button {
            display: none !important;
          }
        }
      `}</style>
    </main>
  );
}