"use client";
import { useEffect, useState } from "react";

export default function Hero() {
  const [displayText, setDisplayText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = ["Full Stack Developer", "AI Integration Engineer", "System Architect"];

  useEffect(() => {
    let i = 0;
    setDisplayText("");
    const timer = setInterval(() => {
      setDisplayText(roles[roleIndex].slice(0, i + 1));
      i++;
      if (i === roles[roleIndex].length) {
        clearInterval(timer);
        setTimeout(() => {
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 2000);
      }
    }, 60);
    return () => clearInterval(timer);
  }, [roleIndex]);

  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "6rem 1.25rem 2rem",
        position: "relative",
        overflow: "hidden",
        backgroundImage: `
          linear-gradient(rgba(99,102,241,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(99,102,241,0.03) 1px, transparent 1px)
        `,
        backgroundSize: "50px 50px",
      }}
    >
      <div style={{ position: "absolute", top: "25%", left: "25%", width: "24rem", height: "24rem", background: "rgba(99,102,241,0.08)", borderRadius: "50%", filter: "blur(80px)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "25%", right: "25%", width: "20rem", height: "20rem", background: "rgba(6,182,212,0.08)", borderRadius: "50%", filter: "blur(80px)", pointerEvents: "none" }} />

      <div style={{ maxWidth: "64rem", width: "100%", position: "relative" }}>

        <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.375rem 0.75rem", borderRadius: "9999px", border: "1px solid rgba(99,102,241,0.3)", background: "rgba(99,102,241,0.05)", marginBottom: "1.5rem" }}>
          <div style={{ width: "0.5rem", height: "0.5rem", borderRadius: "50%", background: "#06B6D4", animation: "pulse 2s infinite" }} />
          <span style={{ fontFamily: "var(--font-mono)", color: "#06B6D4", fontSize: "0.75rem", letterSpacing: "0.1em" }}>Available for work</span>
        </div>

        <h1 style={{ fontFamily: "var(--font-space)", fontSize: "clamp(3rem, 8vw, 6rem)", fontWeight: 700, color: "#F0F6FF", lineHeight: 1, marginBottom: "0.5rem" }}>
          Hi, I'm
        </h1>
        <h1 style={{ fontFamily: "var(--font-space)", fontSize: "clamp(3rem, 8vw, 6rem)", fontWeight: 700, lineHeight: 1, marginBottom: "1.5rem", background: "linear-gradient(135deg, #6366F1 0%, #06B6D4 50%, #EC4899 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
          Blessing Kiptangus.
        </h1>

        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem", minHeight: "2.5rem" }}>
          <span style={{ fontFamily: "var(--font-mono)", color: "#8B949E", fontSize: "1.125rem" }}>&gt;</span>
          <h2 style={{ fontFamily: "var(--font-mono)", fontSize: "clamp(1rem, 2.5vw, 1.5rem)", color: "#06B6D4" }}>
            {displayText}<span style={{ color: "#6366F1", animation: "pulse 1s infinite" }}>_</span>
          </h2>
        </div>

        <p style={{ color: "#8B949E", fontSize: "1.125rem", maxWidth: "42rem", lineHeight: 1.75, marginBottom: "2.5rem" }}>
          Combining a <span style={{ color: "#F0F6FF", fontWeight: 500 }}>Computer Science background</span> with
          an active interest in <span style={{ color: "#6366F1", fontWeight: 500 }}>AI integration</span> to build
          products that <span style={{ color: "#06B6D4", fontWeight: 500 }}>optimize operations</span> and automate complex processes.
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "4rem" }}>
          <a href="#projects" style={{ padding: "0.75rem 1.5rem", borderRadius: "0.5rem", fontWeight: 500, color: "#F0F6FF", background: "linear-gradient(135deg, #6366F1, #06B6D4)", textDecoration: "none", boxShadow: "0 0 20px rgba(99,102,241,0.3)" }}>
            View My Work →
          </a>
          <a href="#contact" style={{ padding: "0.75rem 1.5rem", borderRadius: "0.5rem", fontWeight: 500, color: "#F0F6FF", textDecoration: "none", border: "1px solid rgba(99,102,241,0.5)", background: "transparent" }}>
            Get In Touch
          </a>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
          <a href="https://github.com" target="_blank" style={{ fontFamily: "var(--font-mono)", fontSize: "0.875rem", color: "#8B949E", textDecoration: "none" }}>GitHub</a>
          <span style={{ color: "#6366F1" }}>/</span>
          <a href="https://linkedin.com" target="_blank" style={{ fontFamily: "var(--font-mono)", fontSize: "0.875rem", color: "#8B949E", textDecoration: "none" }}>LinkedIn</a>
          <span style={{ color: "#6366F1" }}>/</span>
          <a href="mailto:your@email.com" style={{ fontFamily: "var(--font-mono)", fontSize: "0.875rem", color: "#8B949E", textDecoration: "none" }}>Email</a>
        </div>

      </div>
    </section>
  );
}