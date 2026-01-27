import "./ARViewMock.css";

export default function ARViewMock() {
  return (
    <div className="ar-mock-wrapper">
      {/* LEFT PANEL */}
      <div className="ar-mock-left">
        <h3>Pilih Bangun Ruang</h3>

        <div className="ar-mock-select">
          <span className="icon">⬜</span>
          <span>Kubus</span>
        </div>

        <div className="ar-mock-card">
          <h4>Rumus Kubus</h4>
          <p>Luas: 6 × s²</p>
          <p>Volume: s³</p>
        </div>

        <div className="ar-mock-card">
          <h4>Kalkulator Kubus</h4>
          <input type="number" value="10" readOnly />
          <button className="primary-btn">Hitung Sekarang</button>
          <p className="result">Hasil: <b>1000 cm³</b></p>
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="ar-mock-right">
        <span className="camera-status">Camera Ready ●</span>

        <div className="ar-visual">
          <div className="cube"></div>
        </div>

        <p className="hint">
          Arahkan kamera ke marker <br />
          untuk memunculkan objek 3D
        </p>

        <button className="secondary-btn">
          📷 Aktifkan Kamera Fullscreen
        </button>
      </div>
    </div>
  );
}
