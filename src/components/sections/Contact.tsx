"use client";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const links = [
    { label: "Email", value: "your@email.com", href: "mailto:your@email.com", color: "#6366F1" },
    { label: "GitHub", value: "github.com/blessing", href: "https://github.com", color: "#06B6D4" },
    { label: "LinkedIn", value: "linkedin.com/in/blessing", href: "https://linkedin.com", color: "#EC4899" },
  ];

  const inputStyle = {
    background: "#0D1117",
    border: "1px solid rgba(240,246,255,0.1)",
    borderRadius: "0.5rem",
    padding: "0.875rem 1rem",
    color: "#F0F6FF",
    fontFamily: "var(--font-mono)",
    fontSize: "0.875rem",
    outline: "none",
    width: "100%",
  };

  return (
    <section id="contact" style={{
      padding: "6rem 2rem",
      backgroundImage: `linear-gradient(rgba(99,102,241,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.03) 1px, transparent 1px)`,
      backgroundSize: "50px 50px",
    }}>
      <div style={{ maxWidth: "64rem", margin: "0 auto" }}>

        <div style={{ display: "inline-flex", alignItems: "center", padding: "0.25rem 0.75rem", borderRadius: "9999px", border: "1px solid rgba(99,102,241,0.3)", background: "rgba(99,102,241,0.05)", marginBottom: "1rem" }}>
          <span style={{ fontFamily: "var(--font-mono)", color: "#6366F1", fontSize: "0.75rem", letterSpacing: "0.1em" }}>contact.init</span>
        </div>

        <h2 style={{ fontFamily: "var(--font-space)", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 700, color: "#F0F6FF", marginBottom: "1rem" }}>
          Get In <span style={{ background: "linear-gradient(135deg, #6366F1, #06B6D4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Touch</span>
        </h2>
        <p style={{ color: "#8B949E", fontSize: "1.125rem", maxWidth: "36rem", lineHeight: 1.75, marginBottom: "3rem" }}>
          Whether you have a job opportunity, a project in mind, or just want to connect — my inbox is open.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "3rem" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {links.map((item) => (
              <div key={item.label} style={{ display: "flex", alignItems: "center", gap: "1rem", padding: "1rem", borderRadius: "0.75rem", background: "#0D1117", border: "1px solid rgba(240,246,255,0.05)" }}>
                <div style={{ width: "0.5rem", height: "0.5rem", borderRadius: "50%", background: item.color, flexShrink: 0 }} />
                <div>
                  <span style={{ fontFamily: "var(--font-mono)", color: item.color, fontSize: "0.7rem", letterSpacing: "0.08em", display: "block", marginBottom: "0.25rem" }}>{item.label}</span>
                  <a href={item.href} target="_blank" style={{ color: "#F0F6FF", fontSize: "0.875rem", textDecoration: "none" }}>{item.value}</a>
                </div>
              </div>
            ))}
          </div>

          {submitted ? (
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "0.75rem", padding: "2rem", border: "1px solid rgba(99,102,241,0.3)", background: "rgba(99,102,241,0.05)" }}>
              <div style={{ textAlign: "center" }}>
                <p style={{ fontFamily: "var(--font-space)", fontSize: "1.5rem", fontWeight: 700, background: "linear-gradient(135deg, #6366F1, #06B6D4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", marginBottom: "0.5rem" }}>Message Sent!</p>
                <p style={{ color: "#8B949E", fontSize: "0.875rem" }}>I will get back to you soon.</p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <input type="text" placeholder="Your Name" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} style={inputStyle} />
              <input type="email" placeholder="Your Email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} style={inputStyle} />
              <textarea placeholder="Your Message" required rows={5} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} style={{ ...inputStyle, resize: "none" }} />
              <button type="submit" style={{ padding: "0.875rem 1.5rem", borderRadius: "0.5rem", fontWeight: 600, color: "#F0F6FF", background: "linear-gradient(135deg, #6366F1, #06B6D4)", border: "none", cursor: "pointer", fontSize: "0.95rem", boxShadow: "0 0 20px rgba(99,102,241,0.3)" }}>
                Send Message →
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}