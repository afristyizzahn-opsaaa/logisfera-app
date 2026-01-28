import React, { useState } from "react";

export default function Calculator() {
  const [unknown, setUnknown] = useState("a");
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [c, setC] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  function toNum(x) {
    const n = parseFloat(String(x).replace(",", "."));
    return Number.isFinite(n) ? n : NaN;
  }

  function compute(e) {
    e && e.preventDefault();
    setError("");
    setResult(null);

    const A = toNum(a);
    const B = toNum(b);
    const C = toNum(c);

    if (unknown === "a") {
      if (isNaN(B) || isNaN(C)) return setError("Isi b dan c dulu, ya!");
      if (C <= B) return setError("Nilai c harus lebih besar dari b.");
      const val = Math.sqrt(C * C - B * B);
      setResult({ label: "a", value: +val.toFixed(6) });
    }

    if (unknown === "b") {
      if (isNaN(A) || isNaN(C)) return setError("Isi a dan c dulu, ya!");
      if (C <= A) return setError("Nilai c harus lebih besar dari a.");
      const val = Math.sqrt(C * C - A * A);
      setResult({ label: "b", value: +val.toFixed(6) });
    }

    if (unknown === "c") {
      if (isNaN(A) || isNaN(B)) return setError("Isi a dan b dulu, ya!");
      const val = Math.sqrt(A * A + B * B);
      setResult({ label: "c", value: +val.toFixed(6) });
    }
  }

  function resetAll() {
    setA("");
    setB("");
    setC("");
    setResult(null);
    setError("");
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-3">Calculator</h1>
      <p className="text-sm opacity-80 mb-4">
        Pilih sisi yang ingin dicari, lalu isi nilai sisi lainnya.  
        Gunakan titik atau koma untuk angka desimal.
      </p>

      <form onSubmit={compute} className="space-y-4 bg-white p-4 rounded-lg shadow-sm">
        <div className="flex gap-3 flex-wrap">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="unknown"
              value="a"
              checked={unknown === "a"}
              onChange={() => setUnknown("a")}
            />
            Cari a
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="unknown"
              value="b"
              checked={unknown === "b"}
              onChange={() => setUnknown("b")}
            />
            Cari b
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="unknown"
              value="c"
              checked={unknown === "c"}
              onChange={() => setUnknown("c")}
            />
            Cari c
          </label>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <input
            value={a}
            onChange={(e) => setA(e.target.value)}
            placeholder="a"
            className="p-2 border rounded"
          />
          <input
            value={b}
            onChange={(e) => setB(e.target.value)}
            placeholder="b"
            className="p-2 border rounded"
          />
          <input
            value={c}
            onChange={(e) => setC(e.target.value)}
            placeholder="c"
            className="p-2 border rounded"
          />
        </div>

        <div className="flex gap-2 flex-wrap">
          <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
            Hitung
          </button>
          <button
            type="button"
            onClick={resetAll}
            className="px-4 py-2 rounded border"
          >
            Reset
          </button>
        </div>

        {error && <div className="text-sm text-red-600">{error}</div>}

        {result && (
          <div className="mt-3 p-3 bg-gray-50 rounded">
            <div className="text-sm">Hasil:</div>
            <div className="text-xl font-medium">
              {result.label} = {result.value}
            </div>
            <div className="text-xs opacity-70">(dibulatkan 6 desimal)</div>
          </div>
        )}
      </form>
    </div>
  );
}
