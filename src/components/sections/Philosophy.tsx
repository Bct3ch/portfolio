export default function Philosophy() {
  const beliefs = [
    {
      number: "01",
      color: "#6366F1",
      title: "Cognitive Science meets Software",
      body: "Human cognition shapes how we interact with systems. Understanding mental models, attention, and memory directly informs how I architect UX flows and data structures — software that feels intuitive is software designed with the brain in mind.",
    },
    {
      number: "02",
      color: "#06B6D4",
      title: "AI as a Force Multiplier",
      body: "I don't see AI as a replacement — I see it as leverage. Integrating intelligent automation into software means one developer can build what used to require a team. My goal is to build systems that get smarter the more they're used.",
    },
    {
      number: "03",
      color: "#EC4899",
      title: "Systems Thinking over Feature Thinking",
      body: "Great software isn't a collection of features — it's a coherent system with clear boundaries and intentional design. Clean Architecture and Microservices aren't buzzwords to me; they're how I keep codebases maintainable at scale.",
    },
    {
      number: "04",
      color: "#6366F1",
      title: "Design is a Technical Skill",
      body: "The gap between a good developer and a great one is often visual communication. User-centric design isn't just for designers — understanding contrast, hierarchy, and flow makes my frontends not just functional, but compelling.",
    },
  ];

  return (
    <section id="philosophy" style={{ padding: "6rem 2rem", background: "#0D1117" }}>
      <div style={{ maxWidth: "64rem", margin: "0 auto" }}>

        <div style={{ display: "inline-flex", alignItems: "center", padding: "0.25rem 0.75rem", borderRadius: "9999px", border: "1px solid rgba(99,102,241,0.3)", background: "rgba(99,102,241,0.05)", marginBottom: "1rem" }}>
          <span style={{ fontFamily: "var(--font-mono)", color: "#6366F1", fontSize: "0.75rem", letterSpacing: "0.1em" }}>how.i.think</span>
        </div>

        <h2 style={{ fontFamily: "var(--font-space)", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 700, color: "#F0F6FF", marginBottom: "1rem" }}>
          My <span style={{ background: "linear-gradient(135deg, #6366F1, #06B6D4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Philosophy</span>
        </h2>
        <p style={{ color: "#8B949E", fontSize: "1.125rem", maxWidth: "42rem", lineHeight: 1.75, marginBottom: "3rem" }}>
          The intersection of cognitive science, AI, and software engineering is where I operate. Here's how I think about building.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
          {beliefs.map((b) => (
            <div key={b.number} style={{ padding: "1.75rem", borderRadius: "0.75rem", background: "#030712", border: "1px solid rgba(240,246,255,0.05)", borderTop: `2px solid ${b.color}`, position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: "-2rem", right: "-1rem", fontFamily: "var(--font-space)", fontSize: "5rem", fontWeight: 900, color: b.color, opacity: 0.04, pointerEvents: "none", userSelect: "none" }}>
                {b.number}
              </div>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: b.color, letterSpacing: "0.1em", display: "block", marginBottom: "0.75rem" }}>{b.number}</span>
              <h3 style={{ fontFamily: "var(--font-space)", fontSize: "1rem", fontWeight: 600, color: "#F0F6FF", marginBottom: "0.75rem", lineHeight: 1.4 }}>{b.title}</h3>
              <p style={{ color: "#8B949E", fontSize: "0.875rem", lineHeight: 1.75 }}>{b.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}