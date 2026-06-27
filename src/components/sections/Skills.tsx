export default function Skills() {
  const skillCategories = [
    { title: "Frontend & Mobile", color: "#6366F1", skills: ["React", "React Native", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"] },
    { title: "Backend & Databases", color: "#06B6D4", skills: ["Node.js", "Express", "Python", "RESTful APIs", "PostgreSQL", "MongoDB"] },
    { title: "Systems & Architecture", color: "#EC4899", skills: ["Monolithic Architecture", "Clean Architecture", "Microservices", "System Design"] },
    { title: "Tools & DevOps", color: "#6366F1", skills: ["Git", "GitHub", "Postman", "Agile Methodology"] },
  ];

  return (
    <section id="skills" style={{
      padding: "6rem 2rem",
      backgroundImage: `linear-gradient(rgba(99,102,241,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.03) 1px, transparent 1px)`,
      backgroundSize: "50px 50px",
    }}>
      <div style={{ maxWidth: "64rem", margin: "0 auto" }}>

        <div style={{ display: "inline-flex", alignItems: "center", padding: "0.25rem 0.75rem", borderRadius: "9999px", border: "1px solid rgba(99,102,241,0.3)", background: "rgba(99,102,241,0.05)", marginBottom: "1rem" }}>
          <span style={{ fontFamily: "var(--font-mono)", color: "#6366F1", fontSize: "0.75rem", letterSpacing: "0.1em" }}>skills.list</span>
        </div>

        <h2 style={{ fontFamily: "var(--font-space)", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 700, color: "#F0F6FF", marginBottom: "3rem" }}>
          What I Work <span style={{ background: "linear-gradient(135deg, #6366F1, #06B6D4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>With</span>
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
          {skillCategories.map((category) => (
            <div key={category.title} style={{ padding: "1.5rem", borderRadius: "0.75rem", background: "#0D1117", border: "1px solid rgba(240,246,255,0.05)", position: "relative", overflow: "hidden" }}>
              <h3 style={{ fontFamily: "var(--font-space)", fontSize: "1rem", fontWeight: 600, color: category.color, marginBottom: "1rem" }}>
                {category.title}
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {category.skills.map((skill) => (
                  <span key={skill} style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", padding: "0.375rem 0.75rem", borderRadius: "0.375rem", background: "#030712", color: "#8B949E", border: "1px solid rgba(240,246,255,0.05)" }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}