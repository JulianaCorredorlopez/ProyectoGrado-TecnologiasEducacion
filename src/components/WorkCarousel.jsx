import { useState, useEffect } from "react";
import { workItems } from "../data/portfolioData";
import { Icons } from "./Icons";

// ─── Helpers ───────────────────────────────────────────────────────
function toYouTubeEmbed(src) {
  try {
    const url = new URL(src);
    const id = url.searchParams.get("v") || url.pathname.split("/").pop();
    return `https://www.youtube.com/embed/${id}?rel=0&modestbranding=1&autoplay=1`;
  } catch { return src; }
}

function toDriveEmbed(id) {
  return `https://drive.google.com/file/d/${id}/preview`;
}

// ─── Modal ─────────────────────────────────────────────────────────
function Modal({ m, onClose }) {

  // Cerrar con Escape
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    // Fondo oscuro
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "rgba(0,0,0,0.88)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
        backdropFilter: "blur(6px)",
      }}
    >

      {/* Contenedor modal */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "relative",
          width: "100%",
          maxWidth: 1400,
          borderRadius: 24,
          border: "1px solid rgba(41,171,226,0.3)",
          background: "#0d2040",
          overflow: "hidden",
          boxShadow: "0 0 60px rgba(0,0,0,0.8)",
        }}
      >

        {/* Botón cerrar */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: 14,
            right: 14,
            zIndex: 20,
            width: 38,
            height: 38,
            borderRadius: "50%",
            border: "1px solid rgba(41,171,226,0.3)",
            background: "rgba(7,21,42,0.9)",
            color: "#29ABE2",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 22,
            fontWeight: 700,
            lineHeight: 1,
          }}
          aria-label="Cerrar"
        >
          ×
        </button>

        {/* Contenido */}
        <div
          style={{
            width: "100%",
            background: "#07152a",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            maxHeight: "90vh",
            overflow: "hidden",
            padding: 20,
          }}
        >

          {/* YouTube */}
          {m.type === "youtube" && (
            <iframe
              src={toYouTubeEmbed(m.src)}
              title={m.caption}
              style={{
                width: "100%",
                height: "80vh",
                border: "none",
                borderRadius: 16,
              }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}

          {/* Google Drive */}
          {m.type === "drive" && (
            <iframe
              src={toDriveEmbed(m.src)}
              title={m.caption}
              style={{
                width: "100%",
                height: "80vh",
                border: "none",
                borderRadius: 16,
              }}
              allow="autoplay"
              allowFullScreen
            />
          )}

          {/* Video local */}
          {m.type === "video" && (
            <video
              src={m.src}
              controls
              autoPlay
              playsInline
              style={{
                maxWidth: "100%",
                maxHeight: "85vh",
                width: "auto",
                height: "auto",
                borderRadius: 16,
                background: "#000",
              }}
            />
          )}

          {/* Imagen */}
          {(m.type === "image" || m.type === "poster") && (
            <img
              src={m.src}
              alt={m.caption}
              style={{
                maxWidth: "100%",
                maxHeight: "85vh",
                objectFit: "contain",
                borderRadius: 16,
              }}
            />
          )}

        </div>

        {/* Caption */}
        <div
          style={{
            padding: "14px 20px",
            borderTop: "1px solid rgba(41,171,226,0.15)",
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: 14,
              color: "#94a3b8",
            }}
          >
            {m.caption}
          </p>
        </div>

      </div>
    </div>
  );
}

// ─── Celda de media ────────────────────────────────────────────────
function MediaCell({ m, onClick }) {
  const canOpen = !!m.src;

  const cellBase = {
    position: "relative",
    height: 200,
    borderRadius: 18,
    overflow: "hidden",
    border: canOpen
      ? "1px solid rgba(41,171,226,0.25)"
      : "1px dashed rgba(41,171,226,0.2)",
    background: "#07152a",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    gap: 8,
    cursor: canOpen ? "pointer" : "default",
    transition: "transform 0.2s, border-color 0.2s",
  };

  const badge = (label) => (
    <span style={{
      position: "absolute", top: 10, left: 10, zIndex: 2,
      padding: "3px 10px", borderRadius: 99, fontSize: 11, fontWeight: 600,
      border: "1px solid rgba(41,171,226,0.3)",
      background: "rgba(26,78,159,0.75)", color: "#29ABE2",
      textTransform: "uppercase", letterSpacing: "0.05em",
    }}>{label}</span>
  );

  // Icono de "abrir" en la esquina superior derecha
  const expandIcon = (
    <span style={{
      position: "absolute", top: 10, right: 10, zIndex: 2,
      width: 28, height: 28, borderRadius: "50%",
      background: "rgba(41,171,226,0.15)",
      border: "1px solid rgba(41,171,226,0.3)",
      display: "flex", alignItems: "center", justifyContent: "center",
      color: "#29ABE2", fontSize: 14,
    }}>
      ⤢
    </span>
  );

  // — Placeholder sin src —
  if (!m.src) {
    return (
      <div style={cellBase}>
        {badge(m.type)}
        {["video", "youtube", "drive"].includes(m.type)
          ? <Icons.Play style={{ width: 38, height: 38, opacity: 0.2, color: "#29ABE2" }} />
          : <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 6 }}>
            {[1, 2, 3, 4, 5, 6].map(n => (
              <div key={n} style={{ width: 30, height: 30, borderRadius: 8, background: "rgba(41,171,226,0.08)", border: "1px solid rgba(41,171,226,0.12)" }} />
            ))}
          </div>
        }
        <p style={{ fontSize: 11, color: "#334155", padding: "0 16px", textAlign: "center" }}>
          {m.caption} — pendiente
        </p>
      </div>
    );
  }

  // — YouTube: thumbnail de preview —
  if (m.type === "youtube") {
    let videoId = "";
    try {
      const url = new URL(m.src);
      videoId = url.searchParams.get("v") || url.pathname.split("/").pop();
    } catch { }
    return (
      <div style={cellBase} onClick={onClick}
        onMouseEnter={e => e.currentTarget.style.transform = "scale(1.02)"}
        onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
      >
        {badge("YouTube")}
        {expandIcon}
        <img
          src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
          alt={m.caption}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
        {/* Overlay con ícono de play */}
        <div style={{
          position: "absolute", inset: 0,
          background: "rgba(0,0,0,0.35)",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <div style={{
            width: 52, height: 52, borderRadius: "50%",
            background: "rgba(41,171,226,0.2)",
            border: "2px solid rgba(41,171,226,0.6)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <Icons.Play style={{ width: 28, height: 28, color: "#29ABE2" }} />
          </div>
        </div>
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(to top,rgba(0,0,0,0.7),transparent)", padding: "10px 12px 8px" }}>
          <p style={{ fontSize: 11, color: "#fff", margin: 0 }}>{m.caption}</p>
        </div>
      </div>
    );
  }

  // — Drive: preview con play overlay —
  // — Video local —
  if (m.type === "video") {
    return (
      <div style={cellBase}
        onMouseEnter={e => e.currentTarget.style.transform = "scale(1.02)"}
        onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
      >
        {badge("Video")}
        {expandIcon}
        <video
          src={m.src}
          muted
          playsInline
          autoPlay
          loop
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.5,
            pointerEvents: "none",
          }}
        />
        <div style={{ position: "relative", zIndex: 2, display: "flex", flexDirection: "column", alignItems: "center", gap: 8, pointerEvents: "none" }}>
          <div style={{
            width: 52, height: 52, borderRadius: "50%",
            background: "rgba(41,171,226,0.2)",
            border: "2px solid rgba(41,171,226,0.5)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <Icons.Play style={{ width: 28, height: 28, color: "#29ABE2" }} />
          </div>
          <p style={{ fontSize: 12, color: "#fff", margin: 0 }}>{m.caption}</p>
        </div>

        {/* Capa invisible que captura el clic */}
        <div
          onClick={onClick}
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 10,
            cursor: "pointer",
          }}
        />
      </div>
    );
  }

  // — Video local —
if (m.type === "video") {
  return (
    <div
      style={{ ...cellBase, cursor: "pointer" }}
      onClick={onClick}
      onMouseEnter={e => e.currentTarget.style.transform = "scale(1.02)"}
      onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
    >
      {badge("Video")}
      {expandIcon}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(135deg, #07152a 0%, #0d2040 100%)",
      }} />
      <div style={{
        position: "relative", zIndex: 2,
        display: "flex", flexDirection: "column",
        alignItems: "center", gap: 8,
      }}>
        <div style={{
          width: 52, height: 52, borderRadius: "50%",
          background: "rgba(41,171,226,0.2)",
          border: "2px solid rgba(41,171,226,0.5)",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <Icons.Play style={{ width: 28, height: 28, color: "#29ABE2" }} />
        </div>
        <p style={{ fontSize: 12, color: "#fff", margin: 0 }}>{m.caption}</p>
      </div>
    </div>
  );
}

  // — Imagen / Póster —
  return (
    <div style={cellBase} onClick={onClick}
      onMouseEnter={e => e.currentTarget.style.transform = "scale(1.02)"}
      onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
    >
      {badge(m.type === "poster" ? "Póster" : "Foto")}
      {expandIcon}
      <img
        src={m.src}
        alt={m.caption}
        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
      />
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0,
        background: "linear-gradient(to top,rgba(0,0,0,0.7),transparent)",
        padding: "10px 12px 8px",
      }}>
        <p style={{ fontSize: 11, color: "#fff", margin: 0 }}>{m.caption}</p>
      </div>
    </div>
  );
}

// ─── Componente principal ──────────────────────────────────────────
export default function WorkCarousel() {
  const [active, setActive] = useState(0);
  const [modalItem, setModalItem] = useState(null);
  const item = workItems[active];

  return (
    <section id="evidencias" style={{ maxWidth: 1280, margin: "0 auto", padding: "64px 24px" }}>

      {/* Modal */}
      {modalItem && <Modal m={modalItem} onClose={() => setModalItem(null)} />}

      {/* Título */}
      <div style={{ marginBottom: 32 }}>
        <span style={{
          display: "inline-block", padding: "4px 14px", borderRadius: 99, fontSize: 12, fontWeight: 600,
          border: "1px solid rgba(41,171,226,0.3)", background: "rgba(41,171,226,0.1)",
          color: "#29ABE2", marginBottom: 12,
        }}>
          Capacitaciones, proyectos y productos
        </span>
        <h2 style={{ fontSize: "clamp(26px,4vw,48px)", fontWeight: 900, color: "#fff", margin: "0 0 10px", textShadow: "0 0 18px rgba(41,171,226,0.4)" }}>
          Carruseles multimedia
        </h2>
        <p style={{ fontSize: 15, color: "#94a3b8", margin: 0 }}>
          Haz clic en cualquier imagen o video para verlo en grande.
        </p>
      </div>

      {/* Tabs */}
      <div style={{ display: "flex", gap: 12, overflowX: "auto", paddingBottom: 8, marginBottom: 24 }}>
        {workItems.map((w, index) => (
          <button
            key={w.title}
            onClick={() => setActive(index)}
            style={{
              minWidth: 210, padding: "12px 18px", borderRadius: 16, textAlign: "left",
              cursor: "pointer", flexShrink: 0,
              border: active === index ? "1px solid #29ABE2" : "1px solid rgba(26,78,159,0.4)",
              background: active === index ? "rgba(41,171,226,0.12)" : "rgba(26,78,159,0.1)",
              transition: "all 0.2s",
            }}
          >
            <p style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.15em", color: "#29ABE2", margin: "0 0 4px", opacity: 0.8 }}>
              {w.category}
            </p>
            <p style={{ fontSize: 14, fontWeight: 800, color: "#fff", margin: 0 }}>{w.title}</p>
          </button>
        ))}
      </div>

      {/* Tarjeta principal */}
      <div style={{ borderRadius: 28, border: "1px solid rgba(41,171,226,0.2)", background: "#0d2040", overflow: "hidden" }}>
        <style>{`
          @media (min-width: 1024px) { .wc-inner { grid-template-columns: 1.2fr 0.8fr !important; } }
        `}</style>

        <div className="wc-inner" style={{ display: "grid", gridTemplateColumns: "1fr" }}>

          {/* Grid de media */}
          <div style={{ padding: 24, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {item.media.map((m, index) => (
              <MediaCell
                key={`${item.title}-${index}`}
                m={m}
                onClick={m.src ? () => setModalItem(m) : undefined}
              />
            ))}
          </div>

          {/* Panel lateral */}
          <div style={{ padding: 32, borderLeft: "1px solid rgba(26,78,159,0.3)", background: "rgba(26,78,159,0.1)" }}>
            <span style={{
              display: "inline-block", padding: "4px 14px", borderRadius: 99, fontSize: 12, fontWeight: 600,
              border: "1px solid rgba(41,171,226,0.3)", background: "rgba(41,171,226,0.1)",
              color: "#29ABE2", marginBottom: 16,
            }}>
              {item.category}
            </span>
            <h3 style={{ fontSize: 24, fontWeight: 900, color: "#fff", margin: "0 0 10px" }}>{item.title}</h3>
            <p style={{ fontSize: 15, color: "#29ABE2", margin: "0 0 14px" }}>{item.place}</p>
            <p style={{ fontSize: 14, color: "#94a3b8", lineHeight: 1.7, margin: 0 }}>{item.result}</p>

            {/* Estado de archivos */}
            <div style={{ marginTop: 28, paddingTop: 20, borderTop: "1px solid rgba(41,171,226,0.15)" }}>
              <p style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.15em", color: "#475569", marginBottom: 12 }}>
                Archivos cargados
              </p>
              {item.media.map((m, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                  <span style={{ width: 7, height: 7, borderRadius: "50%", flexShrink: 0, background: m.src ? "#39B54A" : "#334155" }} />
                  <span style={{ fontSize: 13, color: m.src ? "#e2e8f0" : "#475569" }}>{m.caption}</span>
                  {!m.src && <span style={{ fontSize: 11, color: "#334155", marginLeft: "auto" }}>pendiente</span>}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}