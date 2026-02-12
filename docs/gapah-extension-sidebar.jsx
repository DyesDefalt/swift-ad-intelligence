import { useState, useEffect } from "react";

// ─── Brand Tokens ─────────────────────────────────────────
const T = {
  bg: "#080C14",
  surface: "#0E1420",
  surfaceHover: "#141C2C",
  surfaceActive: "#1A2438",
  border: "#1C2840",
  borderAccent: "#10B98133",
  text: "#F1F5F9",
  textMuted: "#94A3B8",
  textDim: "#64748B",
  emerald: "#10B981",
  sky: "#0EA5E9",
  blue: "#2563EB",
  red: "#EF4444",
  tiktok: "#FE2C55",
  meta: "#0084FF",
  grad: "linear-gradient(135deg, #10B981, #0EA5E9, #2563EB)",
  gradSubtle: "linear-gradient(135deg, #10B98115, #0EA5E915)",
  font: "'Plus Jakarta Sans', system-ui, sans-serif",
};

// ─── Logo ────────────────────────────────────────────────
function Logo({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 88 88" fill="none">
      <defs>
        <linearGradient id="slg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10B981" />
          <stop offset="50%" stopColor="#0EA5E9" />
          <stop offset="100%" stopColor="#2563EB" />
        </linearGradient>
      </defs>
      <circle cx="44" cy="44" r="38" stroke="url(#slg)" strokeWidth="3.5" fill="none" opacity="0.3" />
      <path d="M30 28 L54 44 L30 60 L38 44 Z" fill="url(#slg)" />
      <circle cx="58" cy="30" r="5.5" fill="#10B981" opacity="0.6" />
    </svg>
  );
}

// ─── Icons (inline SVG) ──────────────────────────────────
const Icons = {
  copy: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <rect x="9" y="9" width="13" height="13" rx="2" />
      <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
    </svg>
  ),
  check: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  ),
  image: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <path d="M21 15l-5-5L5 21" />
    </svg>
  ),
  settings: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 1v2m0 18v2m-9-11h2m18 0h2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
    </svg>
  ),
  refresh: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M1 4v6h6M23 20v-6h-6" />
      <path d="M20.49 9A9 9 0 005.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 013.51 15" />
    </svg>
  ),
  star: (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14l-5-4.87 6.91-1.01z" />
    </svg>
  ),
};

// ─── Copy Button ─────────────────────────────────────────
function CopyBtn({ text }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard?.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  return (
    <button
      onClick={handleCopy}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 4,
        padding: "4px 10px",
        borderRadius: 6,
        border: `1px solid ${copied ? T.emerald + "55" : T.border}`,
        background: copied ? T.emerald + "15" : "transparent",
        color: copied ? T.emerald : T.textDim,
        fontSize: 11,
        fontWeight: 600,
        cursor: "pointer",
        transition: "all 0.2s",
        whiteSpace: "nowrap",
        flexShrink: 0,
      }}
    >
      {copied ? Icons.check : Icons.copy}
      {copied ? "Copied!" : "Copy"}
    </button>
  );
}

// ─── Tab Component ───────────────────────────────────────
function Tabs({ tabs, active, onChange }) {
  return (
    <div style={{ display: "flex", gap: 4, padding: "0 12px" }}>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onChange(tab.id)}
          style={{
            flex: 1,
            padding: "8px 0",
            borderRadius: 8,
            border: "none",
            background: active === tab.id ? T.surfaceHover : "transparent",
            color: active === tab.id ? T.text : T.textDim,
            fontSize: 12,
            fontWeight: 600,
            cursor: "pointer",
            transition: "all 0.2s",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 6,
          }}
        >
          {tab.icon}
          {tab.label}
        </button>
      ))}
    </div>
  );
}

// ─── Platform Chip ───────────────────────────────────────
function PlatformChip({ label, active, color, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        flex: 1,
        padding: "7px 0",
        borderRadius: 8,
        border: `1px solid ${active ? color + "55" : T.border}`,
        background: active ? color + "12" : "transparent",
        color: active ? color : T.textDim,
        fontSize: 11,
        fontWeight: 700,
        cursor: "pointer",
        transition: "all 0.2s",
        letterSpacing: 0.3,
      }}
    >
      {label}
    </button>
  );
}

// ─── Tone Chip ───────────────────────────────────────────
function ToneChip({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "5px 12px",
        borderRadius: 20,
        border: `1px solid ${active ? T.emerald + "55" : T.border}`,
        background: active ? T.emerald + "12" : "transparent",
        color: active ? T.emerald : T.textDim,
        fontSize: 11,
        fontWeight: 600,
        cursor: "pointer",
        transition: "all 0.2s",
      }}
    >
      {label}
    </button>
  );
}

// ─── Generated Copy Card ─────────────────────────────────
function CopyCard({ platform, text, chars, maxChars, isFav }) {
  const [fav, setFav] = useState(isFav);
  const pctUsed = (chars / maxChars) * 100;
  const nearLimit = pctUsed > 85;

  return (
    <div
      style={{
        background: T.surface,
        border: `1px solid ${T.border}`,
        borderRadius: 10,
        padding: 12,
        transition: "all 0.2s",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
        <span
          style={{
            fontSize: 10,
            fontWeight: 700,
            color: platform === "TikTok" ? T.tiktok : T.meta,
            textTransform: "uppercase",
            letterSpacing: 0.5,
          }}
        >
          {platform}
        </span>
        <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
          <button
            onClick={() => setFav(!fav)}
            style={{
              background: "none",
              border: "none",
              color: fav ? "#FBBF24" : T.textDim,
              cursor: "pointer",
              padding: 2,
              display: "flex",
              transition: "color 0.2s",
            }}
          >
            {Icons.star}
          </button>
          <CopyBtn text={text} />
        </div>
      </div>

      <p style={{ fontSize: 13, color: T.text, lineHeight: 1.6, margin: "0 0 10px" }}>{text}</p>

      {/* Character Count Bar */}
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <div
          style={{
            flex: 1,
            height: 3,
            background: T.border,
            borderRadius: 99,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: `${Math.min(pctUsed, 100)}%`,
              height: "100%",
              background: nearLimit ? "#F59E0B" : T.emerald,
              borderRadius: 99,
              transition: "width 0.5s ease",
            }}
          />
        </div>
        <span
          style={{
            fontSize: 10,
            color: nearLimit ? "#F59E0B" : T.textDim,
            fontWeight: 600,
            whiteSpace: "nowrap",
            fontVariantNumeric: "tabular-nums",
          }}
        >
          {chars}/{maxChars}
        </span>
      </div>
    </div>
  );
}

// ─── Settings Panel ──────────────────────────────────────
function SettingsPanel({ onClose }) {
  return (
    <div style={{ padding: 12 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
        <h3 style={{ fontSize: 14, fontWeight: 700, color: T.text, margin: 0 }}>Settings</h3>
        <button
          onClick={onClose}
          style={{
            background: "none",
            border: "none",
            color: T.textDim,
            cursor: "pointer",
            fontSize: 18,
          }}
        >
          ×
        </button>
      </div>

      <div style={{ marginBottom: 16 }}>
        <label style={{ fontSize: 11, color: T.textMuted, fontWeight: 600, display: "block", marginBottom: 6 }}>
          OpenAI API Key
        </label>
        <input
          type="password"
          placeholder="sk-..."
          style={{
            width: "100%",
            padding: "8px 12px",
            borderRadius: 8,
            border: `1px solid ${T.border}`,
            background: T.surface,
            color: T.text,
            fontSize: 12,
            outline: "none",
            boxSizing: "border-box",
          }}
        />
        <div style={{ fontSize: 10, color: T.emerald, marginTop: 4 }}>✓ Key tersimpan & terenkripsi lokal</div>
      </div>

      <div style={{ marginBottom: 16 }}>
        <label style={{ fontSize: 11, color: T.textMuted, fontWeight: 600, display: "block", marginBottom: 6 }}>
          Model
        </label>
        <select
          style={{
            width: "100%",
            padding: "8px 12px",
            borderRadius: 8,
            border: `1px solid ${T.border}`,
            background: T.surface,
            color: T.text,
            fontSize: 12,
            outline: "none",
          }}
        >
          <option>GPT-4o-mini (Hemat)</option>
          <option>GPT-4o (Rekomendasi)</option>
          <option>Claude 3.5 Sonnet</option>
        </select>
      </div>

      <div style={{ marginBottom: 16 }}>
        <label style={{ fontSize: 11, color: T.textMuted, fontWeight: 600, display: "block", marginBottom: 6 }}>
          Default Language
        </label>
        <div style={{ display: "flex", gap: 6 }}>
          {["Bahasa Indonesia", "English"].map((lang, i) => (
            <button
              key={lang}
              style={{
                flex: 1,
                padding: "6px 0",
                borderRadius: 8,
                border: `1px solid ${i === 0 ? T.emerald + "55" : T.border}`,
                background: i === 0 ? T.emerald + "10" : "transparent",
                color: i === 0 ? T.emerald : T.textDim,
                fontSize: 11,
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              {lang}
            </button>
          ))}
        </div>
      </div>

      <div
        style={{
          padding: "10px 12px",
          background: T.gradSubtle,
          border: `1px solid ${T.borderAccent}`,
          borderRadius: 8,
          marginTop: 12,
        }}
      >
        <div style={{ fontSize: 11, fontWeight: 700, color: T.emerald, marginBottom: 4 }}>
          Paket: Pro (Lifetime)
        </div>
        <div style={{ fontSize: 10, color: T.textMuted }}>
          Hari ini: 23 generations • Est. cost: Rp 34.500
        </div>
      </div>
    </div>
  );
}

// ─── Data Lens Panel ─────────────────────────────────────
function DataLensPanel() {
  const [hasImage, setHasImage] = useState(false);
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState(null);
  const [question, setQuestion] = useState("");

  const startAnalysis = () => {
    setHasImage(true);
    setAnalyzing(true);
    setTimeout(() => {
      setAnalyzing(false);
      setResult({
        summary: "Dashboard menunjukkan 3 ad sets dengan CTR di bawah 0.5%, mengindikasikan masalah relevansi creative. Budget allocation tidak proporsional — ad set #2 mendapat 45% budget tapi hanya 12% conversions.",
        insights: [
          { label: "CTR Rata-rata", value: "0.73%", status: "warning" },
          { label: "CPA Tertinggi", value: "Ad Set #3: Rp 45K", status: "bad" },
          { label: "Best Performer", value: "Ad Set #1: 2.1% CTR", status: "good" },
        ],
        recommendation: "Matikan Ad Set #3, redistribusi budget ke Ad Set #1. Ganti creative di Ad Set #2 karena frequency sudah 4.2x.",
      });
    }, 2500);
  };

  if (!hasImage) {
    return (
      <div style={{ padding: 12 }}>
        <div
          onClick={startAnalysis}
          style={{
            border: `2px dashed ${T.border}`,
            borderRadius: 12,
            padding: "28px 16px",
            textAlign: "center",
            cursor: "pointer",
            transition: "all 0.2s",
          }}
        >
          <div style={{ fontSize: 32, marginBottom: 8 }}>📊</div>
          <div style={{ fontSize: 13, fontWeight: 600, color: T.textMuted }}>Drop screenshot Ads Manager</div>
          <div style={{ fontSize: 11, color: T.textDim, marginTop: 4 }}>Klik untuk demo →</div>
        </div>

        <div style={{ marginTop: 16, padding: "12px", background: T.surface, borderRadius: 10, border: `1px solid ${T.border}` }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: T.textMuted, marginBottom: 8 }}>Contoh pertanyaan:</div>
          {[
            "Kenapa CTR turun minggu ini?",
            "Mana ad set yang waste budget?",
            "Rekomendasi optimasi campaign ini?",
          ].map((q, i) => (
            <div
              key={i}
              style={{
                padding: "6px 10px",
                borderRadius: 6,
                background: T.bg,
                fontSize: 11,
                color: T.textDim,
                marginBottom: 4,
                cursor: "pointer",
              }}
            >
              💬 {q}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div style={{ padding: 12 }}>
      {/* Uploaded Image Preview */}
      <div
        style={{
          background: T.surface,
          borderRadius: 10,
          padding: 12,
          marginBottom: 12,
          border: `1px solid ${T.border}`,
        }}
      >
        <div
          style={{
            background: `linear-gradient(135deg, ${T.blue}15, ${T.emerald}10)`,
            borderRadius: 8,
            height: 80,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 12,
            color: T.textDim,
            marginBottom: 8,
          }}
        >
          📊 ads-manager-screenshot.png
        </div>
        <div style={{ fontSize: 10, color: T.textDim }}>
          Detected: TikTok Ads Manager • Campaign Performance View
        </div>
      </div>

      {analyzing ? (
        <div style={{ textAlign: "center", padding: "24px 0" }}>
          <div
            style={{
              width: 36,
              height: 36,
              border: `3px solid ${T.border}`,
              borderTopColor: T.emerald,
              borderRadius: "50%",
              margin: "0 auto 12px",
              animation: "spin 1s linear infinite",
            }}
          />
          <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
          <div style={{ fontSize: 13, fontWeight: 600, color: T.text }}>Menganalisis dashboard...</div>
          <div style={{ fontSize: 11, color: T.textDim, marginTop: 4 }}>Membaca metrik & mencari pola</div>
        </div>
      ) : result ? (
        <>
          {/* Summary */}
          <div
            style={{
              background: T.surface,
              border: `1px solid ${T.borderAccent}`,
              borderRadius: 10,
              padding: 12,
              marginBottom: 10,
            }}
          >
            <div style={{ fontSize: 11, fontWeight: 700, color: T.emerald, marginBottom: 6 }}>📋 Ringkasan</div>
            <p style={{ fontSize: 12, color: T.textMuted, lineHeight: 1.6, margin: 0 }}>{result.summary}</p>
          </div>

          {/* Key Metrics */}
          <div style={{ display: "flex", gap: 6, marginBottom: 10 }}>
            {result.insights.map((ins, i) => {
              const statusColor =
                ins.status === "good" ? T.emerald : ins.status === "warning" ? "#F59E0B" : T.red;
              return (
                <div
                  key={i}
                  style={{
                    flex: 1,
                    background: T.surface,
                    border: `1px solid ${T.border}`,
                    borderRadius: 8,
                    padding: "8px 6px",
                    textAlign: "center",
                  }}
                >
                  <div style={{ fontSize: 9, color: T.textDim, marginBottom: 3, fontWeight: 600 }}>{ins.label}</div>
                  <div style={{ fontSize: 11, color: statusColor, fontWeight: 700 }}>{ins.value}</div>
                </div>
              );
            })}
          </div>

          {/* Recommendation */}
          <div
            style={{
              background: `linear-gradient(135deg, ${T.emerald}08, ${T.blue}05)`,
              border: `1px solid ${T.emerald}25`,
              borderRadius: 10,
              padding: 12,
              marginBottom: 12,
            }}
          >
            <div style={{ fontSize: 11, fontWeight: 700, color: T.emerald, marginBottom: 6 }}>💡 Rekomendasi</div>
            <p style={{ fontSize: 12, color: T.text, lineHeight: 1.6, margin: 0 }}>{result.recommendation}</p>
          </div>

          {/* Follow-up Question */}
          <div style={{ display: "flex", gap: 6 }}>
            <input
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Tanya lebih lanjut..."
              style={{
                flex: 1,
                padding: "8px 12px",
                borderRadius: 8,
                border: `1px solid ${T.border}`,
                background: T.surface,
                color: T.text,
                fontSize: 12,
                outline: "none",
              }}
            />
            <button
              style={{
                padding: "8px 14px",
                borderRadius: 8,
                border: "none",
                background: T.grad,
                color: "#fff",
                fontSize: 12,
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              →
            </button>
          </div>
        </>
      ) : null}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
//  MAIN SIDEBAR APP
// ═══════════════════════════════════════════════════════════
export default function GapahSidebar() {
  const [activeTab, setActiveTab] = useState("adcopy");
  const [platform, setPlatform] = useState("tiktok");
  const [tone, setTone] = useState("casual");
  const [generating, setGenerating] = useState(false);
  const [results, setResults] = useState(null);
  const [showSettings, setShowSettings] = useState(false);
  const [hasImage, setHasImage] = useState(false);

  const tones = ["Casual", "Formal", "Urgency", "FOMO", "Humor"];

  const mockGenerate = () => {
    setGenerating(true);
    setResults(null);
    setTimeout(() => {
      setGenerating(false);
      setResults(
        platform === "tiktok"
          ? [
              { platform: "TikTok", text: "Serum ini bikin glowing tanpa drama! 🔥 Cek sekarang →", chars: 52, max: 100 },
              { platform: "TikTok", text: "POV: temen nanya skincare kamu apa 👀✨", chars: 38, max: 100 },
              { platform: "TikTok", text: "Udah capek coba skincare gagal? This is it bestie 💆‍♀️", chars: 52, max: 100 },
              { platform: "TikTok", text: "7 hari doang bisa segini? No filter no edit sis 🤯", chars: 50, max: 100 },
              { platform: "TikTok", text: "Skincare routine gue cuma 1 step ini. Worth it? 100%", chars: 52, max: 100 },
            ]
          : [
              { platform: "Meta", text: "Kulit glowing dalam 7 hari? Bukan mimpi lagi. Serum dengan vitamin C & niacinamide ini sudah dipercaya 50.000+ pengguna.", chars: 112, max: 125 },
              { platform: "Meta", text: "Capek pakai skincare yang nggak ada hasilnya? Coba serum ini — hasilnya terlihat dari hari pertama.", chars: 94, max: 125 },
              { platform: "Meta", text: "Rahasia kulit glass skin ala Korea ternyata sederhana. Serum lokal ini buktikan kualitas tanpa harga selangit.", chars: 108, max: 125 },
              { platform: "Meta", text: "Gratis ongkir hari ini! Serum best-seller yang viral di TikTok, sekarang dengan harga spesial.", chars: 91, max: 125 },
              { platform: "Meta", text: "Dari 2.847 review bintang 5 — serum ini jadi produk skincare #1 di kategorinya bulan ini.", chars: 89, max: 125 },
            ]
      );
    }, 2000);
  };

  return (
    <div
      style={{
        width: 360,
        height: 640,
        background: T.bg,
        fontFamily: T.font,
        color: T.text,
        display: "flex",
        flexDirection: "column",
        borderRadius: 16,
        border: `1px solid ${T.border}`,
        overflow: "hidden",
        boxShadow: "0 24px 80px rgba(0,0,0,0.5)",
        position: "relative",
      }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
        rel="stylesheet"
      />

      {/* ─── Header ─── */}
      <div
        style={{
          padding: "12px 14px",
          borderBottom: `1px solid ${T.border}`,
          display: "flex",
          alignItems: "center",
          gap: 10,
          flexShrink: 0,
        }}
      >
        <Logo size={26} />
        <span style={{ fontSize: 16, fontWeight: 800, letterSpacing: -0.3 }}>Gapah</span>
        <span
          style={{
            fontSize: 9,
            padding: "2px 8px",
            borderRadius: 999,
            background: T.emerald + "20",
            color: T.emerald,
            fontWeight: 700,
            letterSpacing: 0.5,
          }}
        >
          PRO
        </span>
        <div style={{ marginLeft: "auto", display: "flex", gap: 8 }}>
          <button
            onClick={() => setShowSettings(!showSettings)}
            style={{
              background: "none",
              border: "none",
              color: showSettings ? T.emerald : T.textDim,
              cursor: "pointer",
              padding: 4,
              display: "flex",
            }}
          >
            {Icons.settings}
          </button>
        </div>
      </div>

      {/* ─── Settings Overlay ─── */}
      {showSettings ? (
        <div style={{ flex: 1, overflowY: "auto" }}>
          <SettingsPanel onClose={() => setShowSettings(false)} />
        </div>
      ) : (
        <>
          {/* ─── Mode Tabs ─── */}
          <div style={{ paddingTop: 8, flexShrink: 0 }}>
            <Tabs
              tabs={[
                { id: "adcopy", label: "Ad Copy", icon: "🎯" },
                { id: "datalens", label: "Data Lens", icon: "🔍" },
              ]}
              active={activeTab}
              onChange={setActiveTab}
            />
          </div>

          {/* ─── Scrollable Content ─── */}
          <div style={{ flex: 1, overflowY: "auto", paddingBottom: 12 }}>
            {activeTab === "adcopy" ? (
              <>
                {/* Upload Area */}
                <div style={{ padding: "10px 12px 6px" }}>
                  <div
                    onClick={() => setHasImage(!hasImage)}
                    style={{
                      border: `2px dashed ${hasImage ? T.emerald + "55" : T.border}`,
                      borderRadius: 12,
                      padding: hasImage ? "12px 14px" : "22px 16px",
                      textAlign: "center",
                      cursor: "pointer",
                      transition: "all 0.3s",
                      background: hasImage ? T.emerald + "06" : "transparent",
                    }}
                  >
                    {hasImage ? (
                      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <div
                          style={{
                            width: 44,
                            height: 44,
                            borderRadius: 8,
                            background: `linear-gradient(135deg, #F472B6, #FB923C)`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: 20,
                            flexShrink: 0,
                          }}
                        >
                          🧴
                        </div>
                        <div style={{ textAlign: "left" }}>
                          <div style={{ fontSize: 12, fontWeight: 600, color: T.text }}>product-skincare.jpg</div>
                          <div style={{ fontSize: 10, color: T.textDim }}>
                            Beauty product • Serum bottle • Pastel bg
                          </div>
                        </div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setHasImage(false);
                            setResults(null);
                          }}
                          style={{
                            marginLeft: "auto",
                            background: "none",
                            border: "none",
                            color: T.textDim,
                            fontSize: 16,
                            cursor: "pointer",
                          }}
                        >
                          ×
                        </button>
                      </div>
                    ) : (
                      <>
                        <div style={{ color: T.textDim, marginBottom: 4 }}>{Icons.image}</div>
                        <div style={{ fontSize: 13, fontWeight: 600, color: T.textMuted }}>
                          Drop gambar / screenshot
                        </div>
                        <div style={{ fontSize: 10, color: T.textDim, marginTop: 4 }}>
                          PNG, JPG, WebP • Max 5MB — Klik untuk demo
                        </div>
                      </>
                    )}
                  </div>
                </div>

                {/* Platform Selector */}
                <div style={{ padding: "6px 12px" }}>
                  <div
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      color: T.textDim,
                      textTransform: "uppercase",
                      letterSpacing: 0.8,
                      marginBottom: 6,
                    }}
                  >
                    Platform
                  </div>
                  <div style={{ display: "flex", gap: 6 }}>
                    <PlatformChip
                      label="TikTok Ads"
                      active={platform === "tiktok"}
                      color={T.tiktok}
                      onClick={() => { setPlatform("tiktok"); setResults(null); }}
                    />
                    <PlatformChip
                      label="Meta Ads"
                      active={platform === "meta"}
                      color={T.meta}
                      onClick={() => { setPlatform("meta"); setResults(null); }}
                    />
                  </div>
                </div>

                {/* Tone Selector */}
                <div style={{ padding: "6px 12px" }}>
                  <div
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      color: T.textDim,
                      textTransform: "uppercase",
                      letterSpacing: 0.8,
                      marginBottom: 6,
                    }}
                  >
                    Tone
                  </div>
                  <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
                    {tones.map((t) => (
                      <ToneChip
                        key={t}
                        label={t}
                        active={tone === t.toLowerCase()}
                        onClick={() => setTone(t.toLowerCase())}
                      />
                    ))}
                  </div>
                </div>

                {/* Generate Button */}
                <div style={{ padding: "10px 12px" }}>
                  <button
                    onClick={mockGenerate}
                    disabled={!hasImage || generating}
                    style={{
                      width: "100%",
                      padding: "12px 0",
                      borderRadius: 10,
                      border: "none",
                      background: hasImage ? T.grad : T.surfaceHover,
                      color: hasImage ? "#fff" : T.textDim,
                      fontSize: 14,
                      fontWeight: 700,
                      cursor: hasImage ? "pointer" : "not-allowed",
                      transition: "all 0.3s",
                      boxShadow: hasImage ? `0 4px 20px ${T.emerald}25` : "none",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 8,
                    }}
                  >
                    {generating ? (
                      <>
                        <div
                          style={{
                            width: 16,
                            height: 16,
                            border: "2px solid #fff3",
                            borderTopColor: "#fff",
                            borderRadius: "50%",
                            animation: "spin 0.8s linear infinite",
                          }}
                        />
                        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
                        Generating...
                      </>
                    ) : (
                      <>⚡ Generate 5 Ad Copies</>
                    )}
                  </button>
                </div>

                {/* Results */}
                {results && (
                  <div style={{ padding: "0 12px" }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: 8,
                      }}
                    >
                      <span style={{ fontSize: 11, fontWeight: 700, color: T.textDim, textTransform: "uppercase", letterSpacing: 0.8 }}>
                        Hasil ({results.length} variasi)
                      </span>
                      <button
                        onClick={mockGenerate}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 4,
                          background: "none",
                          border: "none",
                          color: T.emerald,
                          fontSize: 11,
                          fontWeight: 600,
                          cursor: "pointer",
                        }}
                      >
                        {Icons.refresh} Regenerate
                      </button>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                      {results.map((r, i) => (
                        <CopyCard
                          key={i}
                          platform={r.platform}
                          text={r.text}
                          chars={r.chars}
                          maxChars={r.max}
                          isFav={i === 0}
                        />
                      ))}
                    </div>

                    {/* Cost Estimate */}
                    <div
                      style={{
                        marginTop: 10,
                        padding: "8px 10px",
                        borderRadius: 8,
                        background: T.surface,
                        border: `1px solid ${T.border}`,
                        display: "flex",
                        justifyContent: "space-between",
                        fontSize: 10,
                        color: T.textDim,
                      }}
                    >
                      <span>Est. cost batch ini</span>
                      <span style={{ color: T.emerald, fontWeight: 700 }}>~Rp 1.500</span>
                    </div>
                  </div>
                )}
              </>
            ) : (
              <DataLensPanel />
            )}
          </div>
        </>
      )}

      {/* ─── Bottom Bar ─── */}
      <div
        style={{
          padding: "8px 14px",
          borderTop: `1px solid ${T.border}`,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexShrink: 0,
          background: T.bg,
        }}
      >
        <span style={{ fontSize: 10, color: T.textDim }}>Hari ini: 23 gens</span>
        <span style={{ fontSize: 10, color: T.textDim }}>
          Powered by <span style={{ color: T.emerald, fontWeight: 700 }}>Gapah</span>
        </span>
      </div>
    </div>
  );
}
