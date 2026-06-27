"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const sections = ["about", "skills", "projects", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.5 }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, width: "100%", zIndex: 50,
      transition: "all 0.4s ease",
      background: scrolled ? "rgba(3,7,18,0.85)" : "transparent",
      backdropFilter: scrolled ? "blur(20px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(99,102,241,0.15)" : "1px solid transparent",
    }}>
      <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 2rem", height: "4.5rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>

        {/* Logo */}
        <a href="#" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "0.25rem" }}>
          <span style={{ fontFamily: "var(--font-space)", fontSize: "1.25rem", fontWeight: 700, background: "linear-gradient(135deg, #6366F1, #06B6D4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            Blessing
          </span>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "1.5rem", color: "#EC4899", fontWeight: 700, lineHeight: 1 }}>.</span>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "#6366F1", border: "1px solid rgba(99,102,241,0.4)", borderRadius: "0.25rem", padding: "0.1rem 0.35rem", marginLeft: "0.25rem", letterSpacing: "0.05em" }}>
            dev
          </span>
        </a>

        {/* Desktop Links */}
        {!isMobile && (
          <ul style={{ display: "flex", alignItems: "center", gap: "0.25rem", listStyle: "none", margin: 0, padding: 0 }}>
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <li key={link.label}>
                  <a href={link.href} style={{
                    textDecoration: "none", fontFamily: "var(--font-mono)", fontSize: "0.8rem",
                    padding: "0.5rem 1rem", borderRadius: "0.5rem", transition: "all 0.2s ease",
                    color: isActive ? "#F0F6FF" : "#8B949E",
                    background: isActive ? "rgba(99,102,241,0.1)" : "transparent",
                    border: isActive ? "1px solid rgba(99,102,241,0.3)" : "1px solid transparent",
                    display: "block",
                  }}>
                    {isActive && <span style={{ color: "#6366F1", marginRight: "0.25rem" }}>/</span>}
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        )}

        {/* Right Side */}
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          {!isMobile && (
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", padding: "0.375rem 0.75rem", borderRadius: "9999px", background: "rgba(6,182,212,0.05)", border: "1px solid rgba(6,182,212,0.2)" }}>
              <div style={{ width: "0.4rem", height: "0.4rem", borderRadius: "50%", background: "#06B6D4", boxShadow: "0 0 6px #06B6D4" }} />
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "#06B6D4", letterSpacing: "0.05em" }}>Open to work</span>
            </div>
          )}
          {!isMobile && (
            <a href="/resume.pdf" target="_blank" style={{
              textDecoration: "none", fontFamily: "var(--font-mono)", fontSize: "0.8rem",
              padding: "0.5rem 1.25rem", borderRadius: "0.5rem", color: "#F0F6FF",
              background: "linear-gradient(135deg, #6366F1, #06B6D4)", fontWeight: 600,
              boxShadow: "0 0 16px rgba(99,102,241,0.3)",
            }}>
              Resume ↗
            </a>
          )}

          {/* Hamburger */}
          {isMobile && (
            <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: "none", border: "none", cursor: "pointer", padding: "0.5rem", display: "flex", flexDirection: "column", gap: "5px" }}>
              <div style={{ width: "22px", height: "2px", background: "#F0F6FF", transition: "all 0.3s", transform: menuOpen ? "rotate(45deg) translateY(7px)" : "none" }} />
              <div style={{ width: "22px", height: "2px", background: "#F0F6FF", transition: "all 0.3s", opacity: menuOpen ? 0 : 1 }} />
              <div style={{ width: "22px", height: "2px", background: "#F0F6FF", transition: "all 0.3s", transform: menuOpen ? "rotate(-45deg) translateY(-7px)" : "none" }} />
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobile && menuOpen && (
        <div style={{ background: "rgba(3,7,18,0.97)", backdropFilter: "blur(20px)", borderTop: "1px solid rgba(99,102,241,0.15)", padding: "1.5rem 2rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} onClick={() => setMenuOpen(false)} style={{
              textDecoration: "none", fontFamily: "var(--font-mono)", fontSize: "0.9rem",
              padding: "0.75rem 1rem", borderRadius: "0.5rem", color: "#8B949E",
              border: "1px solid rgba(240,246,255,0.05)", display: "block",
            }}>
              {link.label}
            </a>
          ))}
          <a href="/resume.pdf" target="_blank" style={{
            textDecoration: "none", fontFamily: "var(--font-mono)", fontSize: "0.9rem",
            padding: "0.75rem 1rem", borderRadius: "0.5rem", color: "#F0F6FF", marginTop: "0.5rem",
            background: "linear-gradient(135deg, #6366F1, #06B6D4)", fontWeight: 600, textAlign: "center",
          }}>
            Resume ↗
          </a>
        </div>
      )}
    </nav>
  );
}