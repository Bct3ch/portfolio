export default function Footer() {
  return (
    <footer style={{ padding: "2rem", borderTop: "1px solid rgba(240,246,255,0.05)" }}>
      <div style={{ maxWidth: "64rem", margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "1rem" }}>
        <span style={{ fontFamily: "var(--font-space)", fontSize: "1.125rem", fontWeight: 700, background: "linear-gradient(135deg, #6366F1, #06B6D4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
          Blessing.
        </span>
        <p style={{ fontFamily: "var(--font-mono)", color: "#8B949E", fontSize: "0.75rem" }}>
          &copy; {new Date().getFullYear()} Blessing. Building scalable, user-centric digital solutions and specialized software architecture.
        </p>
        <div style={{ display: "flex", gap: "1.5rem" }}>
          <a href="https://github.com" target="_blank" style={{ fontFamily: "var(--font-mono)", color: "#8B949E", fontSize: "0.75rem", textDecoration: "none" }}>GitHub</a>
          <a href="https://linkedin.com" target="_blank" style={{ fontFamily: "var(--font-mono)", color: "#8B949E", fontSize: "0.75rem", textDecoration: "none" }}>LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}