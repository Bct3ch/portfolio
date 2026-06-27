export default function About() {
  const info = [
    { label: "Location", value: "Kenya" },
    { label: "Focus", value: "Full Stack + AI Integration" },
    { label: "Background", value: "Computer Science" },
    { label: "Interests", value: "Cognitive Science, UX Design" },
    { label: "Available for", value: "Jobs & Freelance" },
  ];

  return (
    <section id="about" style={{ padding: "6rem 2rem" }}>
      <div style={{ maxWidth: "64rem", margin: "0 auto" }}>

        <div style={{ display: "inline-flex", alignItems: "center", padding: "0.25rem 0.75rem", borderRadius: "9999px", border: "1px solid rgba(99,102,241,0.3)", background: "rgba(99,102,241,0.05)", marginBottom: "1rem" }}>
          <span style={{ fontFamily: "var(--font-mono)", color: "#6366F1", fontSize: "0.75rem", letterSpacing: "0.1em" }}>about.me</span>
        </div>

        <h2 style={{ fontFamily: "var(--font-space)", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 700, color: "#F0F6FF", marginBottom: "3rem" }}>
          Who I <span style={{ background: "linear-gradient(135deg, #6366F1, #06B6D4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Am</span>
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "3rem", alignItems: "start" }}>
          <div>
            <p style={{ color: "#8B949E", fontSize: "1.125rem", lineHeight: 1.75, marginBottom: "1.5rem" }}>
              I am a <span style={{ color: "#F0F6FF", fontWeight: 500 }}>Full-Stack Software Developer</span> passionate about building scalable, intelligent software.
            </p>
            <p style={{ color: "#8B949E", fontSize: "1.125rem", lineHeight: 1.75, marginBottom: "1.5rem" }}>
              Combining my <span style={{ color: "#F0F6FF", fontWeight: 500 }}>Computer Science background</span> with an active interest in <span style={{ color: "#6366F1", fontWeight: 500 }}>AI integration</span>, I aim to build products that optimize operations and automate complex processes.
            </p>
            <p style={{ color: "#8B949E", fontSize: "1.125rem", lineHeight: 1.75 }}>
              Outside of coding, I explore <span style={{ color: "#06B6D4", fontWeight: 500 }}>cognitive science</span> and <span style={{ color: "#EC4899", fontWeight: 500 }}>user-centric design</span> — because great software is as much about people as it is about code.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {info.map((item) => (
              <div key={item.label} style={{ display: "flex", alignItems: "center", gap: "1rem", padding: "0.875rem 1rem", borderRadius: "0.75rem", background: "#0D1117", border: "1px solid rgba(240,246,255,0.05)" }}>
                <span style={{ fontFamily: "var(--font-mono)", color: "#6366F1", fontSize: "0.75rem", width: "7rem", flexShrink: 0 }}>{item.label}</span>
                <span style={{ color: "#F0F6FF", fontSize: "0.875rem" }}>{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}