import { useState, useEffect, useRef } from "react";

// ─── Brand Tokens ─────────────────────────────────────────
const T = {
  bg: "#080C14",
  surface: "#0E1420",
  surfaceHover: "#141C2C",
  border: "#1C2840",
  borderAccent: "#10B98133",
  text: "#F1F5F9",
  textMuted: "#94A3B8",
  textDim: "#64748B",
  emerald: "#10B981",
  emeraldDark: "#059669",
  sky: "#0EA5E9",
  blue: "#2563EB",
  grad: "linear-gradient(135deg, #10B981, #0EA5E9, #2563EB)",
  gradSubtle: "linear-gradient(135deg, #10B98115, #0EA5E915)",
  font: "'Plus Jakarta Sans', system-ui, -apple-system, sans-serif",
};

// ─── Utility: Intersection Observer Hook ─────────────────
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

// ─── Animated Counter ────────────────────────────────────
function Counter({ end, suffix = "", duration = 2000 }) {
  const [val, setVal] = useState(0);
  const [ref, inView] = useInView();
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = end / (duration / 16);
    const id = setInterval(() => {
      start += step;
      if (start >= end) { setVal(end); clearInterval(id); }
      else setVal(Math.floor(start));
    }, 16);
    return () => clearInterval(id);
  }, [inView, end, duration]);
  return <span ref={ref}>{val}{suffix}</span>;
}

// ─── Gapah Logo SVG ──────────────────────────────────────
function Logo({ size = 36 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 88 88" fill="none">
      <defs>
        <linearGradient id="lg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10B981" />
          <stop offset="50%" stopColor="#0EA5E9" />
          <stop offset="100%" stopColor="#2563EB" />
        </linearGradient>
      </defs>
      <circle cx="44" cy="44" r="38" stroke="url(#lg)" strokeWidth="3.5" fill="none" opacity="0.3" />
      <path d="M30 28 L54 44 L30 60 L38 44 Z" fill="url(#lg)" />
      <circle cx="58" cy="30" r="5.5" fill="#10B981" opacity="0.6" />
      <circle cx="62" cy="26" r="2.5" fill="#10B981" opacity="0.35" />
    </svg>
  );
}

// ─── Section Wrapper ─────────────────────────────────────
function Section({ children, id, style }) {
  const [ref, inView] = useInView();
  return (
    <section
      ref={ref}
      id={id}
      style={{
        padding: "100px 24px",
        maxWidth: 1200,
        margin: "0 auto",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(32px)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
        ...style,
      }}
    >
      {children}
    </section>
  );
}

// ─── Pill Badge ──────────────────────────────────────────
function Pill({ children }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        padding: "6px 14px",
        borderRadius: 999,
        fontSize: 12,
        fontWeight: 600,
        letterSpacing: 0.5,
        color: T.emerald,
        background: T.gradSubtle,
        border: `1px solid ${T.borderAccent}`,
      }}
    >
      {children}
    </span>
  );
}

// ─── Feature Card ────────────────────────────────────────
function FeatureCard({ icon, title, desc, delay = 0 }) {
  const [ref, inView] = useInView();
  const [hover, setHover] = useState(false);
  return (
    <div
      ref={ref}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: hover ? T.surfaceHover : T.surface,
        border: `1px solid ${hover ? T.emerald + "44" : T.border}`,
        borderRadius: 16,
        padding: 32,
        transition: "all 0.4s ease",
        transitionDelay: `${delay}ms`,
        opacity: inView ? 1 : 0,
        transform: inView ? (hover ? "translateY(-4px)" : "translateY(0)") : "translateY(24px)",
        cursor: "default",
      }}
    >
      <div
        style={{
          width: 48,
          height: 48,
          borderRadius: 12,
          background: T.gradSubtle,
          border: `1px solid ${T.borderAccent}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 22,
          marginBottom: 20,
        }}
      >
        {icon}
      </div>
      <h3 style={{ fontSize: 18, fontWeight: 700, color: T.text, marginBottom: 8 }}>{title}</h3>
      <p style={{ fontSize: 14, lineHeight: 1.7, color: T.textMuted, margin: 0 }}>{desc}</p>
    </div>
  );
}

// ─── Pricing Card ────────────────────────────────────────
function PricingCard({ tier, price, period, features, popular, ctaLabel }) {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: popular ? "linear-gradient(180deg, #0E1420 0%, #10B98108 100%)" : T.surface,
        border: `1px solid ${popular ? T.emerald + "55" : T.border}`,
        borderRadius: 20,
        padding: "36px 28px",
        position: "relative",
        transition: "all 0.3s ease",
        transform: hover ? "translateY(-6px)" : "translateY(0)",
        boxShadow: popular ? `0 0 60px ${T.emerald}15` : "none",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {popular && (
        <div
          style={{
            position: "absolute",
            top: -12,
            left: "50%",
            transform: "translateX(-50%)",
            background: T.grad,
            color: "#fff",
            fontSize: 11,
            fontWeight: 700,
            padding: "4px 16px",
            borderRadius: 999,
            letterSpacing: 0.8,
            textTransform: "uppercase",
          }}
        >
          Paling Populer
        </div>
      )}
      <h3 style={{ fontSize: 16, fontWeight: 600, color: T.textMuted, marginBottom: 4 }}>{tier}</h3>
      <div style={{ marginBottom: 20 }}>
        <span style={{ fontSize: 36, fontWeight: 800, color: T.text }}>{price}</span>
        {period && <span style={{ fontSize: 14, color: T.textDim, marginLeft: 4 }}>{period}</span>}
      </div>
      <div style={{ flex: 1, marginBottom: 24 }}>
        {features.map((f, i) => (
          <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 12 }}>
            <span style={{ color: T.emerald, fontSize: 15, marginTop: 2 }}>✓</span>
            <span style={{ fontSize: 14, color: T.textMuted, lineHeight: 1.5 }}>{f}</span>
          </div>
        ))}
      </div>
      <button
        style={{
          width: "100%",
          padding: "12px 0",
          borderRadius: 10,
          border: popular ? "none" : `1px solid ${T.border}`,
          background: popular ? T.grad : "transparent",
          color: popular ? "#fff" : T.textMuted,
          fontSize: 14,
          fontWeight: 700,
          cursor: "pointer",
          transition: "all 0.2s ease",
          opacity: hover ? 1 : 0.9,
        }}
      >
        {ctaLabel}
      </button>
    </div>
  );
}

// ─── Extension Sidebar Preview (Mini) ────────────────────
function SidebarPreview() {
  const [step, setStep] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setStep((s) => (s + 1) % 4), 2200);
    return () => clearInterval(id);
  }, []);

  const steps = [
    { label: "Upload gambar iklan...", color: T.sky },
    { label: "Menganalisis visual...", color: T.emerald },
    { label: "Generate 5 variasi copy...", color: T.blue },
    { label: "✓ Siap paste ke TikTok Ads", color: T.emerald },
  ];

  return (
    <div
      style={{
        width: 300,
        background: "#0A0F18",
        borderRadius: 16,
        border: `1px solid ${T.border}`,
        overflow: "hidden",
        boxShadow: `0 24px 80px rgba(0,0,0,0.5), 0 0 40px ${T.emerald}08`,
      }}
    >
      {/* Sidebar Header */}
      <div
        style={{
          padding: "14px 16px",
          borderBottom: `1px solid ${T.border}`,
          display: "flex",
          alignItems: "center",
          gap: 10,
        }}
      >
        <Logo size={24} />
        <span style={{ fontSize: 14, fontWeight: 700, color: T.text }}>Gapah</span>
        <span
          style={{
            marginLeft: "auto",
            fontSize: 10,
            padding: "2px 8px",
            borderRadius: 999,
            background: T.emerald + "20",
            color: T.emerald,
            fontWeight: 600,
          }}
        >
          PRO
        </span>
      </div>

      {/* Mode Tabs */}
      <div style={{ display: "flex", padding: "8px 12px", gap: 4 }}>
        {["Ad Copy", "Data Lens"].map((tab, i) => (
          <div
            key={tab}
            style={{
              flex: 1,
              padding: "8px 0",
              textAlign: "center",
              fontSize: 12,
              fontWeight: 600,
              borderRadius: 8,
              color: i === 0 ? T.text : T.textDim,
              background: i === 0 ? T.surfaceHover : "transparent",
              transition: "all 0.2s",
            }}
          >
            {tab}
          </div>
        ))}
      </div>

      {/* Upload Area */}
      <div style={{ padding: "8px 12px" }}>
        <div
          style={{
            border: `2px dashed ${T.border}`,
            borderRadius: 10,
            padding: "20px 16px",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: 28, marginBottom: 6 }}>📸</div>
          <div style={{ fontSize: 12, color: T.textMuted }}>Drop gambar / screenshot iklan</div>
          <div style={{ fontSize: 10, color: T.textDim, marginTop: 4 }}>PNG, JPG • Max 5MB</div>
        </div>
      </div>

      {/* Platform Selector */}
      <div style={{ padding: "8px 12px", display: "flex", gap: 6 }}>
        {["TikTok", "Meta"].map((p, i) => (
          <div
            key={p}
            style={{
              flex: 1,
              padding: "6px 0",
              textAlign: "center",
              fontSize: 11,
              fontWeight: 600,
              borderRadius: 8,
              border: `1px solid ${i === 0 ? T.emerald + "55" : T.border}`,
              color: i === 0 ? T.emerald : T.textDim,
              background: i === 0 ? T.emerald + "10" : "transparent",
            }}
          >
            {p}
          </div>
        ))}
      </div>

      {/* Animated Status */}
      <div style={{ padding: "12px 12px 16px" }}>
        {steps.map((s, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "6px 10px",
              borderRadius: 8,
              marginBottom: 4,
              background: step === i ? s.color + "10" : "transparent",
              transition: "all 0.4s ease",
              opacity: step >= i ? 1 : 0.3,
            }}
          >
            <div
              style={{
                width: 6,
                height: 6,
                borderRadius: 99,
                background: step >= i ? s.color : T.textDim,
                transition: "all 0.3s",
                boxShadow: step === i ? `0 0 8px ${s.color}` : "none",
              }}
            />
            <span style={{ fontSize: 12, color: step >= i ? T.text : T.textDim, transition: "all 0.3s" }}>
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── How It Works Step ───────────────────────────────────
function StepItem({ num, title, desc, delay = 0 }) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      style={{
        display: "flex",
        gap: 20,
        opacity: inView ? 1 : 0,
        transform: inView ? "translateX(0)" : "translateX(-20px)",
        transition: `all 0.6s ease ${delay}ms`,
      }}
    >
      <div
        style={{
          width: 44,
          height: 44,
          borderRadius: 12,
          background: T.grad,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 16,
          fontWeight: 800,
          color: "#fff",
          flexShrink: 0,
        }}
      >
        {num}
      </div>
      <div>
        <h4 style={{ fontSize: 16, fontWeight: 700, color: T.text, marginBottom: 4 }}>{title}</h4>
        <p style={{ fontSize: 14, color: T.textMuted, lineHeight: 1.6, margin: 0 }}>{desc}</p>
      </div>
    </div>
  );
}

// ─── FAQ Item ────────────────────────────────────────────
function FAQ({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      style={{
        borderBottom: `1px solid ${T.border}`,
        padding: "20px 0",
        cursor: "pointer",
      }}
      onClick={() => setOpen(!open)}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontSize: 15, fontWeight: 600, color: T.text }}>{q}</span>
        <span
          style={{
            color: T.emerald,
            fontSize: 20,
            transition: "transform 0.3s",
            transform: open ? "rotate(45deg)" : "rotate(0)",
          }}
        >
          +
        </span>
      </div>
      <div
        style={{
          maxHeight: open ? 200 : 0,
          overflow: "hidden",
          transition: "max-height 0.4s ease",
        }}
      >
        <p style={{ fontSize: 14, color: T.textMuted, lineHeight: 1.7, marginTop: 12 }}>{a}</p>
      </div>
    </div>
  );
}

// ═════════════════════════════════════════════════════════
//  MAIN APP
// ═════════════════════════════════════════════════════════
export default function GapahLanding() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handle);
    return () => window.removeEventListener("scroll", handle);
  }, []);

  return (
    <div
      style={{
        fontFamily: T.font,
        background: T.bg,
        color: T.text,
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      {/* Google Font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
        rel="stylesheet"
      />

      {/* ─── Ambient Background ─── */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -200,
            right: -200,
            width: 700,
            height: 700,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${T.emerald}06 0%, transparent 70%)`,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -300,
            left: -200,
            width: 800,
            height: 800,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${T.blue}05 0%, transparent 70%)`,
          }}
        />
      </div>

      {/* ─── Navigation ─── */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: "0 24px",
          transition: "all 0.3s",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          background: scrolled ? T.bg + "DD" : "transparent",
          borderBottom: scrolled ? `1px solid ${T.border}` : "1px solid transparent",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 64,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <Logo size={30} />
            <span style={{ fontSize: 20, fontWeight: 800, letterSpacing: -0.5 }}>Gapah</span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
            {["Fitur", "Cara Kerja", "Harga", "Docs", "FAQ"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                style={{
                  fontSize: 13,
                  fontWeight: 500,
                  color: T.textMuted,
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.target.style.color = T.text)}
                onMouseLeave={(e) => (e.target.style.color = T.textMuted)}
              >
                {item}
              </a>
            ))}
            <button
              style={{
                padding: "8px 20px",
                borderRadius: 8,
                border: "none",
                background: T.grad,
                color: "#fff",
                fontSize: 13,
                fontWeight: 700,
                cursor: "pointer",
                transition: "opacity 0.2s",
              }}
            >
              Install Gratis
            </button>
          </div>
        </div>
      </nav>

      {/* ─── HERO ─── */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <Section
          id="hero"
          style={{
            paddingTop: 160,
            paddingBottom: 60,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 60,
            flexWrap: "wrap",
          }}
        >
          <div style={{ flex: "1 1 500px", minWidth: 320 }}>
            <Pill>
              <span style={{ fontSize: 14 }}>⚡</span> Bahasa Indonesia dari KBBI — artinya "cekatan, tangkas"
            </Pill>

            <h1
              style={{
                fontSize: "clamp(36px, 5vw, 56px)",
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: -1.5,
                marginTop: 24,
                marginBottom: 20,
              }}
            >
              Dari gambar ke copy.{" "}
              <span
                style={{
                  background: T.grad,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                10 detik.
              </span>
            </h1>

            <p
              style={{
                fontSize: 18,
                lineHeight: 1.7,
                color: T.textMuted,
                maxWidth: 480,
                marginBottom: 32,
              }}
            >
              Chrome extension untuk digital marketer Indonesia. Upload screenshot iklan, langsung dapat 5 variasi
              ad copy yang siap paste ke TikTok & Meta Ads.
            </p>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 40 }}>
              <button
                style={{
                  padding: "14px 32px",
                  borderRadius: 10,
                  border: "none",
                  background: T.grad,
                  color: "#fff",
                  fontSize: 15,
                  fontWeight: 700,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  boxShadow: `0 4px 24px ${T.emerald}30`,
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C8.21 0 8.21 0 8.21 0 3.58 1.83 0 6.5 0 12s3.58 10.17 8.21 12c0 0 0 0 3.79 0V14.4H9V11h3V8.34c0-3.1 1.89-4.79 4.64-4.79 1.32 0 2.7.24 2.7.24v3.04h-1.52c-1.5 0-1.97.93-1.97 1.89V11h3.43l-.55 3.4H16.85V24c0 0 0 0 3.79 0C24.42 22.17 28 17.5 28 12S24.42 1.83 19.79 0C15.79 0 12 0 12 0z" />
                </svg>
                Install ke Chrome — Gratis
              </button>
              <button
                style={{
                  padding: "14px 24px",
                  borderRadius: 10,
                  border: `1px solid ${T.border}`,
                  background: "transparent",
                  color: T.textMuted,
                  fontSize: 15,
                  fontWeight: 600,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                ▶ Lihat Demo
              </button>
            </div>

            {/* Social Proof */}
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <div style={{ display: "flex" }}>
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: 99,
                      background: `hsl(${i * 60 + 120}, 50%, 40%)`,
                      border: `2px solid ${T.bg}`,
                      marginLeft: i > 1 ? -10 : 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 12,
                      fontWeight: 700,
                    }}
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 600, color: T.text }}>
                  <Counter end={312} suffix="+" /> early access users
                </div>
                <div style={{ fontSize: 11, color: T.textDim }}>dari 47 agency di Indonesia</div>
              </div>
            </div>
          </div>

          {/* Sidebar Preview */}
          <div style={{ flex: "0 0 auto" }}>
            <SidebarPreview />
          </div>
        </Section>

        {/* ─── STATS BAR ─── */}
        <Section style={{ paddingTop: 0, paddingBottom: 60 }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: 24,
              background: T.surface,
              borderRadius: 16,
              border: `1px solid ${T.border}`,
              padding: "32px 40px",
            }}
          >
            {[
              { val: 10, suffix: " detik", label: "Rata-rata generate" },
              { val: 5, suffix: " variasi", label: "Per sekali generate" },
              { val: 40, suffix: "x", label: "Lebih cepat dari manual" },
              { val: 100, suffix: "%", label: "Siap paste ke platform" },
            ].map((s, i) => (
              <div key={i} style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontSize: 32,
                    fontWeight: 800,
                    background: T.grad,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    marginBottom: 4,
                  }}
                >
                  <Counter end={s.val} suffix={s.suffix} />
                </div>
                <div style={{ fontSize: 13, color: T.textMuted }}>{s.label}</div>
              </div>
            ))}
          </div>
        </Section>

        {/* ─── FEATURES ─── */}
        <Section id="fitur">
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <Pill>Fitur Utama</Pill>
            <h2
              style={{
                fontSize: "clamp(28px, 4vw, 42px)",
                fontWeight: 800,
                letterSpacing: -1,
                marginTop: 16,
                marginBottom: 12,
              }}
            >
              Dua senjata dalam satu extension
            </h2>
            <p style={{ fontSize: 16, color: T.textMuted, maxWidth: 520, margin: "0 auto" }}>
              Vision AI yang paham konteks marketing Indonesia. Bukan chatbot generik.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            <FeatureCard
              icon="🎯"
              title="Vision Ad Copy Generator"
              desc="Upload gambar produk atau screenshot iklan, langsung dapat 5 variasi copy yang sesuai format TikTok & Meta. Dengan character count dan CTA recommendations."
              delay={0}
            />
            <FeatureCard
              icon="🔍"
              title="Data Lens Analyzer"
              desc="Screenshot dashboard Ads Manager kamu, lalu tanya AI: 'Kenapa CTR turun minggu ini?' atau 'Mana ad set yang paling waste budget?' — jawaban instant."
              delay={100}
            />
            <FeatureCard
              icon="📐"
              title="Platform Specs Library"
              desc="Format copy otomatis sesuai platform. TikTok (max 100 char), Meta Primary Text (125 char recommended), headline (27 char). Tidak perlu hafal lagi."
              delay={200}
            />
            <FeatureCard
              icon="🔑"
              title="BYOK — Bring Your Own Key"
              desc="Pakai API key OpenAI/Anthropic kamu sendiri. Bayar sesuai pemakaian ke provider langsung. Zero markup dari Gapah. Transparan, tanpa hidden cost."
              delay={300}
            />
            <FeatureCard
              icon="🇮🇩"
              title="Bahasa Indonesia First"
              desc="Prompt engineering yang dioptimasi untuk nuansa bahasa Indonesia. Bukan terjemahan. Copy yang dihasilkan terasa natural, bukan 'AI banget'."
              delay={400}
            />
            <FeatureCard
              icon="⚡"
              title="One-Click Copy & Paste"
              desc="Setiap variasi copy punya tombol copy. Langsung paste ke Ads Manager tanpa keluar tab. Workflow yang benar-benar frictionless."
              delay={500}
            />
          </div>
        </Section>

        {/* ─── HOW IT WORKS ─── */}
        <Section id="cara-kerja">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 80,
              alignItems: "center",
            }}
          >
            <div>
              <Pill>Cara Kerja</Pill>
              <h2
                style={{
                  fontSize: "clamp(28px, 4vw, 38px)",
                  fontWeight: 800,
                  letterSpacing: -1,
                  marginTop: 16,
                  marginBottom: 40,
                }}
              >
                Tiga langkah. Sepuluh detik.
              </h2>

              <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
                <StepItem
                  num="1"
                  title="Upload atau Screenshot"
                  desc="Drag & drop gambar produk, atau screenshot langsung dari Ads Manager. Gapah mengenali konteks visual secara otomatis."
                  delay={0}
                />
                <StepItem
                  num="2"
                  title="Pilih Platform & Tone"
                  desc="Pilih TikTok atau Meta, lalu set tone: formal, casual, urgency, FOMO. Gapah generate 5 variasi copy yang sudah sesuai format."
                  delay={150}
                />
                <StepItem
                  num="3"
                  title="Copy, Paste, Done"
                  desc="Klik copy pada variasi yang kamu suka. Langsung paste ke Ads Manager. Tidak perlu switch tab atau prompt engineering."
                  delay={300}
                />
              </div>
            </div>

            {/* Visual Demo */}
            <div
              style={{
                background: T.surface,
                borderRadius: 20,
                border: `1px solid ${T.border}`,
                padding: 24,
                position: "relative",
              }}
            >
              <div
                style={{
                  background: "#0A0F18",
                  borderRadius: 12,
                  padding: 20,
                  marginBottom: 16,
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: 48, marginBottom: 8 }}>🖼️</div>
                <div style={{ fontSize: 13, color: T.textMuted }}>product-skincare.jpg</div>
                <div style={{ fontSize: 11, color: T.textDim }}>Detected: Beauty product, serum bottle, pastel bg</div>
              </div>

              {/* Generated Copies */}
              {[
                { platform: "TikTok", text: "Serum ini bikin glowing tanpa drama! 🔥 Cek sekarang →", chars: "52/100" },
                { platform: "Meta", text: "Kulit glowing dalam 7 hari? Bukan mimpi lagi. Serum dengan...", chars: "60/125" },
                { platform: "TikTok", text: "POV: temen nanya skincare kamu apa 👀✨", chars: "38/100" },
              ].map((copy, i) => (
                <div
                  key={i}
                  style={{
                    background: "#0A0F18",
                    borderRadius: 10,
                    padding: "12px 14px",
                    marginBottom: 8,
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    gap: 12,
                  }}
                >
                  <div>
                    <span
                      style={{
                        fontSize: 10,
                        fontWeight: 700,
                        color: copy.platform === "TikTok" ? "#FE2C55" : T.sky,
                        textTransform: "uppercase",
                        letterSpacing: 0.5,
                      }}
                    >
                      {copy.platform}
                    </span>
                    <div style={{ fontSize: 13, color: T.text, marginTop: 4, lineHeight: 1.5 }}>{copy.text}</div>
                    <span style={{ fontSize: 10, color: T.textDim }}>{copy.chars} chars</span>
                  </div>
                  <button
                    style={{
                      padding: "4px 10px",
                      borderRadius: 6,
                      border: `1px solid ${T.border}`,
                      background: "transparent",
                      color: T.textMuted,
                      fontSize: 11,
                      cursor: "pointer",
                      whiteSpace: "nowrap",
                      flexShrink: 0,
                    }}
                  >
                    📋 Copy
                  </button>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* ─── PRICING ─── */}
        <Section id="harga">
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <Pill>Harga</Pill>
            <h2
              style={{
                fontSize: "clamp(28px, 4vw, 42px)",
                fontWeight: 800,
                letterSpacing: -1,
                marginTop: 16,
                marginBottom: 12,
              }}
            >
              Bayar sekali. Pakai selamanya.
            </h2>
            <p style={{ fontSize: 16, color: T.textMuted, maxWidth: 480, margin: "0 auto" }}>
              Semua paket BYOK — bawa API key sendiri, zero markup. Harga dalam Rupiah, untuk marketer Indonesia.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
            <PricingCard
              tier="Starter"
              price="Rp 299K"
              period="lifetime"
              features={[
                "Ad Copy Generator (TikTok)",
                "50 gen/hari limit",
                "1 API key slot",
                "Basic prompt templates",
                "Community support",
              ]}
              ctaLabel="Mulai Sekarang"
            />
            <PricingCard
              tier="Pro"
              price="Rp 599K"
              period="lifetime"
              popular
              features={[
                "Ad Copy + Data Lens",
                "TikTok & Meta support",
                "Unlimited generations",
                "Custom prompt templates",
                "Priority support via WA",
                "Platform specs auto-format",
              ]}
              ctaLabel="Pilih Pro"
            />
            <PricingCard
              tier="Agency"
              price="Rp 999K"
              period="lifetime"
              features={[
                "Semua fitur Pro",
                "5 API key slots",
                "Team workspace (soon)",
                "White-label export (soon)",
                "1-on-1 onboarding call",
                "Early access fitur baru",
              ]}
              ctaLabel="Hubungi Kami"
            />
          </div>
        </Section>

        {/* ─── DOCS PREVIEW ─── */}
        <Section id="docs">
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <Pill>📖 Documentation</Pill>
            <h2
              style={{
                fontSize: "clamp(28px, 4vw, 38px)",
                fontWeight: 800,
                letterSpacing: -1,
                marginTop: 16,
              }}
            >
              Setup dalam 2 menit
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 16 }}>
            {[
              { icon: "🚀", title: "Quick Start", desc: "Install, setup API key, generate copy pertama kamu" },
              { icon: "🔑", title: "API Key Setup", desc: "Cara dapat & pasang OpenAI atau Anthropic API key" },
              { icon: "📸", title: "Vision Features", desc: "Panduan upload gambar & screenshot analysis" },
              { icon: "🎨", title: "Custom Prompts", desc: "Buat template prompt sesuai brand voice kamu" },
              { icon: "📊", title: "Data Lens Guide", desc: "Analisis screenshot dashboard Ads Manager" },
              { icon: "❓", title: "Troubleshooting", desc: "Solusi untuk masalah umum & error codes" },
            ].map((doc, i) => (
              <div
                key={i}
                style={{
                  background: T.surface,
                  border: `1px solid ${T.border}`,
                  borderRadius: 12,
                  padding: "20px 16px",
                  cursor: "pointer",
                  transition: "all 0.2s",
                  display: "flex",
                  gap: 14,
                  alignItems: "flex-start",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = T.emerald + "44";
                  e.currentTarget.style.background = T.surfaceHover;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = T.border;
                  e.currentTarget.style.background = T.surface;
                }}
              >
                <span style={{ fontSize: 24 }}>{doc.icon}</span>
                <div>
                  <h4 style={{ fontSize: 14, fontWeight: 700, color: T.text, marginBottom: 4 }}>{doc.title}</h4>
                  <p style={{ fontSize: 12, color: T.textMuted, margin: 0, lineHeight: 1.5 }}>{doc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* ─── FAQ ─── */}
        <Section id="faq">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <Pill>FAQ</Pill>
            <h2
              style={{
                fontSize: "clamp(28px, 4vw, 38px)",
                fontWeight: 800,
                letterSpacing: -1,
                marginTop: 16,
              }}
            >
              Pertanyaan yang sering muncul
            </h2>
          </div>

          <div style={{ maxWidth: 680, margin: "0 auto" }}>
            <FAQ
              q="Apa itu BYOK (Bring Your Own Key)?"
              a="Kamu pakai API key milikmu sendiri dari OpenAI atau Anthropic. Biaya ditagih langsung oleh provider, Gapah tidak markup sama sekali. Rata-rata biaya per generate sekitar Rp 500-2.000 tergantung panjang output."
            />
            <FAQ
              q='Apa artinya "Gapah"?'
              a="Gapah adalah kata dalam Kamus Besar Bahasa Indonesia (KBBI) yang berarti 'cekatan, tangkas'. Kata ini sangat jarang digunakan sehingga terdengar seperti bahasa asing, tapi 100% bahasa Indonesia asli!"
            />
            <FAQ
              q="Platform apa saja yang didukung?"
              a="Saat ini Gapah mendukung TikTok Ads dan Meta Ads (Facebook/Instagram). Setiap copy yang di-generate sudah otomatis disesuaikan dengan format dan character limit masing-masing platform."
            />
            <FAQ
              q="Apakah Data Lens bisa baca screenshot Ads Manager?"
              a="Ya! Upload screenshot dari TikTok Ads Manager atau Meta Ads Manager, lalu tanya apa saja: analisis performa, identifikasi waste budget, rekomendasi optimasi. AI akan menganalisis data visual dari screenshot."
            />
            <FAQ
              q="Apakah lifetime benar-benar selamanya?"
              a="Ya. Bayar sekali, pakai selamanya selama extension masih aktif di Chrome Web Store. Tidak ada biaya berlangganan. Update fitur baru termasuk dalam paket."
            />
            <FAQ
              q="Data saya aman?"
              a="API key disimpan terenkripsi di browser lokal kamu, tidak pernah dikirim ke server Gapah. Screenshot dan gambar hanya dikirim langsung ke API provider (OpenAI/Anthropic), tidak melewati server kami."
            />
          </div>
        </Section>

        {/* ─── CTA FOOTER ─── */}
        <Section>
          <div
            style={{
              textAlign: "center",
              background: `linear-gradient(180deg, ${T.emerald}08, ${T.blue}06)`,
              border: `1px solid ${T.borderAccent}`,
              borderRadius: 24,
              padding: "60px 40px",
            }}
          >
            <h2
              style={{
                fontSize: "clamp(28px, 4vw, 40px)",
                fontWeight: 800,
                letterSpacing: -1,
                marginBottom: 16,
              }}
            >
              Mulai bikin ad copy{" "}
              <span
                style={{
                  background: T.grad,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                10x lebih cepat
              </span>
            </h2>
            <p style={{ fontSize: 16, color: T.textMuted, maxWidth: 480, margin: "0 auto 32px" }}>
              Join 300+ marketer Indonesia yang sudah pakai Gapah untuk generate ad copy dari gambar.
            </p>
            <button
              style={{
                padding: "16px 40px",
                borderRadius: 12,
                border: "none",
                background: T.grad,
                color: "#fff",
                fontSize: 16,
                fontWeight: 700,
                cursor: "pointer",
                boxShadow: `0 4px 32px ${T.emerald}30`,
              }}
            >
              Install Gapah — Gratis
            </button>
          </div>
        </Section>

        {/* ─── FOOTER ─── */}
        <footer
          style={{
            borderTop: `1px solid ${T.border}`,
            padding: "40px 24px",
            maxWidth: 1200,
            margin: "0 auto",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 20,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <Logo size={24} />
              <span style={{ fontSize: 16, fontWeight: 700 }}>Gapah</span>
              <span style={{ fontSize: 12, color: T.textDim, marginLeft: 8 }}>
                Swift Ad Intelligence
              </span>
            </div>
            <div style={{ display: "flex", gap: 24 }}>
              {["Privacy", "Terms", "Contact", "Twitter"].map((link) => (
                <a
                  key={link}
                  href="#"
                  style={{ fontSize: 13, color: T.textDim, textDecoration: "none" }}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
          <div
            style={{
              marginTop: 24,
              paddingTop: 20,
              borderTop: `1px solid ${T.border}`,
              display: "flex",
              justifyContent: "space-between",
              fontSize: 12,
              color: T.textDim,
            }}
          >
            <span>© 2026 Gapah. Made with 🇮🇩 in Jakarta.</span>
            <span>
              <em>"Gapah"</em> — KBBI: cekatan, tangkas.
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
}
