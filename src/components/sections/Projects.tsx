export default function Projects() {
  const projects = [
    {
      number: "01",
      title: "BiasharaIQ",
      description: "A bilingual bookkeeping and tax compliance app built for middle-sized businesses in Kenya. Auto-imports M-Pesa transactions via SMS, generates KRA eTIMS compliant invoices, tracks income, expenses and profit, and prepares tax reports for TOT, VAT and PAYE.",
      tech: ["React Native", "Expo", "Node.js", "Express", "Supabase", "PostgreSQL", "M-Pesa Daraja API", "KRA eTIMS API"],
      color: "#6366F1",
      github: "https://github.com/Bct3ch/biasharaiq",
      live: "https://expo.dev/accounts/cherono/projects/mobile/builds/6c067dc0-e45b-4564-824c-c4dafafc69d7",
    },
    {
      number: "02",
      title: "Real-Time Analytics Dashboard",
      description: "A modern real-time analytics dashboard that has a WebSocket straeming data, interactive D3.js line charts and gauge visualizations, live metrics grid with key performance indicators. Has system monitoring (CPU, Memory, Network). Connection status indicator with smooth animations and transitions.",
      tech: ["Node.js", "Python3.8+", "MongoDB"],
      color: "#06B6D4",
      github: "https://github.com",
      live: "https://example.com",
    },
    {
      number: "03",
      title: "KAM",
      description: "Reporting & remittance management system. It's still under construction",
      tech: ["Python", "Express", "REST API"],
      color: "#EC4899",
      github: "https://github.com",
      live: "https://example.com",
    },
    {
      number: "04",
      title: "Project Name",
      description: "A short description of what this project does and what problem it solves.",
      tech: ["React Native", "Node.js", "MongoDB"],
      color: "#6366F1",
      github: "https://github.com",
      live: "https://example.com",
    },
    {
      number: "05",
      title: "Project Name",
      description: "A short description of what this project does and what problem it solves.",
      tech: ["React", "Python", "PostgreSQL"],
      color: "#06B6D4",
      github: "https://github.com",
      live: "https://example.com",
    },
  ];

  return (
    <section id="projects" style={{ padding: "6rem 2rem" }}>
      <div style={{ maxWidth: "64rem", margin: "0 auto" }}>

        <div style={{ display: "inline-flex", alignItems: "center", padding: "0.25rem 0.75rem", borderRadius: "9999px", border: "1px solid rgba(99,102,241,0.3)", background: "rgba(99,102,241,0.05)", marginBottom: "1rem" }}>
          <span style={{ fontFamily: "var(--font-mono)", color: "#6366F1", fontSize: "0.75rem", letterSpacing: "0.1em" }}>projects.featured</span>
        </div>

        <h2 style={{ fontFamily: "var(--font-space)", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 700, color: "#F0F6FF", marginBottom: "3rem" }}>
          Things I've <span style={{ background: "linear-gradient(135deg, #6366F1, #06B6D4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Built</span>
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {projects.map((project) => (
            <div key={project.number} style={{ padding: "1.5rem", borderRadius: "0.75rem", background: "#0D1117", border: "1px solid rgba(240,246,255,0.05)", borderLeft: `3px solid ${project.color}`, position: "relative", overflow: "hidden" }}>
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "1rem", flexWrap: "wrap" }}>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.5rem" }}>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: project.color }}>{project.number}</span>
                    <h3 style={{ fontFamily: "var(--font-space)", fontSize: "1.25rem", fontWeight: 600, color: "#F0F6FF" }}>{project.title}</h3>
                  </div>
                  <p style={{ color: "#8B949E", fontSize: "0.875rem", lineHeight: 1.75, marginBottom: "1rem" }}>{project.description}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                    {project.tech.map((t) => (
                      <span key={t} style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", padding: "0.25rem 0.5rem", borderRadius: "0.25rem", background: "#030712", color: project.color, border: `1px solid ${project.color}30` }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div style={{ display: "flex", gap: "0.75rem", flexShrink: 0 }}>
                  <a href={project.github} target="_blank" style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", padding: "0.5rem 0.75rem", border: "1px solid rgba(240,246,255,0.1)", color: "#8B949E", borderRadius: "0.5rem", textDecoration: "none" }}>
                    GitHub ↗
                  </a>
                  <a href={project.live} target="_blank" style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", padding: "0.5rem 0.75rem", borderRadius: "0.5rem", color: "#030712", fontWeight: 600, textDecoration: "none", background: `linear-gradient(135deg, ${project.color}, #06B6D4)` }}>
                    Live ↗
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}