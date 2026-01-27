import React, { useState } from "react";
import ARViewMock from "../components/ar-mock/ARViewMock";

export default function ARViewer() {
  const [shape, setShape] = useState("");
  const [showCalc, setShowCalc] = useState(false);
  const [notesOpen, setNotesOpen] = useState(false);

  const [input, setInput] = useState({
    s: "",
    p: "",
    l: "",
    t: "",
    r: "",
    h: "",
    A: "",
  });

  const [result, setResult] = useState(null);

  const formulas = {
    kubus: {
      title: "Kubus",
      luas: "L = 6 × s²",
      volume: "V = s³",
    },
    balok: {
      title: "Balok",
      luas: "L = 2(pl + pt + lt)",
      volume: "V = p × l × t",
    },
    tabung: {
      title: "Tabung",
      luas: "L = 2πr(r + t)",
      volume: "V = πr²t",
    },
    prisma: {
      title: "Prisma",
      luas: "L = 2 × luas alas + keliling alas × tinggi",
      volume: "V = luas alas × tinggi",
    },
    limas: {
      title: "Limas",
      luas: "L = luas alas + luas sisi tegak",
      volume: "V = ⅓ × luas alas × tinggi",
    },
  };

  function handleCalculate() {
    if (shape === "kubus") {
      const s = Number(input.s);
      if (!s) return;
      setResult({ luas: 6 * s * s, volume: s * s * s });
    }

    if (shape === "balok") {
      const p = Number(input.p);
      const l = Number(input.l);
      const t = Number(input.t);
      if (!p || !l || !t) return;
      setResult({
        luas: 2 * (p * l + p * t + l * t),
        volume: p * l * t,
      });
    }

    if (shape === "tabung") {
      const r = Number(input.r);
      const h = Number(input.h);
      if (!r || !h) return;
      setResult({
        luas: (2 * Math.PI * r * (r + h)).toFixed(2),
        volume: (Math.PI * r * r * h).toFixed(2),
      });
    }

    if (shape === "prisma") {
      const A = Number(input.A);
      const t = Number(input.t);
      if (!A || !t) return;
      setResult({ volume: A * t });
    }

    if (shape === "limas") {
      const A = Number(input.A);
      const t = Number(input.t);
      if (!A || !t) return;
      setResult({ volume: ((1 / 3) * A * t).toFixed(2) });
    }
  }

  return (
< >
    <div style={{ padding: "24px", maxWidth: "900px" }}>
      <h2 style={{ fontSize: "22px", fontWeight: "600" }}>
        AR Viewer (Demo)
      </h2>

      <p style={{ fontSize: "14px", color: "#555", marginBottom: "16px" }}>
        Fitur AR Viewer memungkinkan peserta didik mengeksplorasi bangun ruang
        secara interaktif melalui teknologi Augmented Reality berbasis marker.
      </p>

      {/* PILIH BANGUN */}
      <label>Pilih Bangun Ruang</label>
      <select
        value={shape}
        onChange={(e) => {
          setShape(e.target.value);
          setShowCalc(false);
          setResult(null);
          setInput({ s: "", p: "", l: "", t: "", r: "", h: "", A: "" });
        }}
        style={{ width: "100%", padding: "8px", marginBottom: "12px" }}
      >
        <option value="">-- Pilih --</option>
        <option value="kubus">Kubus</option>
        <option value="balok">Balok</option>
        <option value="tabung">Tabung</option>
        <option value="prisma">Prisma</option>
        <option value="limas">Limas</option>
      </select>

      {shape && (
        <>
          {/* RUMUS */}
          <div
            style={{
              padding: "12px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              marginBottom: "10px",
            }}
          >
            <b>Rumus {formulas[shape].title}</b>
            <p>• Luas: {formulas[shape].luas}</p>
            <p>• Volume: {formulas[shape].volume}</p>
          </div>

          <button onClick={() => setShowCalc(!showCalc)}>
            {showCalc ? "Tutup Kalkulator" : "Coba Hitung"}
          </button>

          {showCalc && (
            <div
              style={{
                padding: "12px",
                marginTop: "10px",
                border: "1px dashed #2563eb",
                borderRadius: "8px",
              }}
            >
              <b>Kalkulator {formulas[shape].title}</b>
              {shape === "kubus" && (
  <input
    type="number"
    placeholder="Sisi (s)"
    value={input.s}
    onChange={(e) => {
      setInput({ ...input, s: e.target.value });
      setResult(null);
    }}
  />
)}

{shape === "balok" && (
  <>
    <input
      type="number"
      placeholder="Panjang (p)"
      value={input.p}
      onChange={(e) => {
        setInput({ ...input, p: e.target.value });
        setResult(null);
      }}
    />
    <input
      type="number"
      placeholder="Lebar (l)"
      value={input.l}
      onChange={(e) => {
        setInput({ ...input, l: e.target.value });
        setResult(null);
      }}
    />
    <input
      type="number"
      placeholder="Tinggi (t)"
      value={input.t}
      onChange={(e) => {
        setInput({ ...input, t: e.target.value });
        setResult(null);
      }}
    />
  </>
)}

{shape === "tabung" && (
  <>
    <input
      type="number"
      placeholder="Jari-jari (r)"
      value={input.r}
      onChange={(e) => {
        setInput({ ...input, r: e.target.value });
        setResult(null);
      }}
    />
    <input
      type="number"
      placeholder="Tinggi (t)"
      value={input.h}
      onChange={(e) => {
        setInput({ ...input, h: e.target.value });
        setResult(null);
      }}
    />
  </>
)}


              {(shape === "prisma" || shape === "limas") && (
                <>
                  <input
                    placeholder="Luas alas (A)"
                    value={input.A}
                    onChange={(e) =>
                      setInput({ ...input, A: e.target.value })
                    }
                  />
                  <input
                    placeholder="Tinggi (t)"
                    value={input.t}
                    onChange={(e) =>
                      setInput({ ...input, t: e.target.value })
                    }
                  />
                </>
              )}

              <button onClick={handleCalculate}>Hitung</button>

              {result && (
                <div style={{ marginTop: "10px" }}>
                  {result.luas && <p>Luas: {result.luas} cm²</p>}
                  <p>Volume: {result.volume} cm³</p>
                </div>
              )}
            </div>
          )}
        </>
      )}

      {/* FAKE AR CAMERA */}
      <div
        style={{
          marginTop: "24px",
          width: "100%",
          height: "260px",
          border: "4px dashed #2563eb",
          borderRadius: "12px",
          position: "relative",
          backgroundColor: "#eff6ff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "120px",
            height: "120px",
            border: "3px dashed #1d4ed8",
            borderRadius: "8px",
            position: "absolute",
          }}
        />
        <p style={{ color: "#1d4ed8" }}>
          Arahkan kamera ke gambar bangun ruang
        </p>
      </div>

      {/* GAMBAR MOCKUP */}
      <img
        src="/ar-mockup.png"
        alt="AR Mockup"
        style={{
          width: "100%",
          maxWidth: "500px",
          marginTop: "16px",
          borderRadius: "8px",
        }}
      />

      <ARViewMock />

      {/* NOTES */}
      <button
        onClick={() => setNotesOpen(!notesOpen)}
        style={{ marginTop: "12px" }}
      >
        {notesOpen ? "Hide Notes" : "Integration Notes"}
      </button>

      {notesOpen && (
        <div
          style={{
            marginTop: "8px",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            fontSize: "13px",
          }}
        >
          <ol>
            <li>Gunakan MindAR / WebAR library.</li>
            <li>Gunakan gambar buku sebagai marker.</li>
            <li>Objek 3D muncul mengikuti marker.</li>
            <li>Prototype ditampilkan sebagai mockup.</li>
          </ol>
        </div>
      )}
    </div>

    <ARViewMock />

    </>
  );
}
