export const VbaCodeSvg = () => (
  <svg
    viewBox="0 0 420 300"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    style={{
      width: "100%",
      height: "auto",
      borderRadius: "10px",
      boxShadow: "0 32px 80px rgba(0, 0, 0, 0.22)",
    }}
  >
    {/* Editor window chrome */}
    <rect x="0" y="0" width="420" height="300" rx="10" fill="#111820" />
    {/* Title bar */}
    <rect x="0" y="0" width="420" height="36" rx="10" fill="#18232e" />
    <rect x="0" y="26" width="420" height="10" fill="#18232e" />
    {/* Traffic lights */}
    <circle cx="18" cy="18" r="5.5" fill="#c0392b" opacity="0.8" />
    <circle cx="34" cy="18" r="5.5" fill="#e6a817" opacity="0.8" />
    <circle cx="50" cy="18" r="5.5" fill="#27ae60" opacity="0.8" />
    {/* Tab label */}
    <rect x="70" y="8" width="110" height="20" rx="4" fill="#111820" />
    <text
      x="79"
      y="22"
      fill="rgba(255,255,255,0.45)"
      fontSize="10"
      fontFamily="monospace"
    >
      Module1.bas
    </text>

    {/* Line numbers gutter */}
    <rect
      x="0"
      y="36"
      width="36"
      height="264"
      rx="0"
      fill="rgba(255,255,255,0.025)"
    />

    {/* Line numbers */}
    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((n, i) => (
      <text
        key={n}
        x="12"
        y={64 + i * 20}
        fill="rgba(255,255,255,0.2)"
        fontSize="9.5"
        fontFamily="monospace"
      >
        {n}
      </text>
    ))}

    {/* ── Code lines ── */}
    {/* Sub declaration */}
    <text x="48" y="64" fontFamily="monospace" fontSize="11">
      <tspan fill="#0a85bf">Sub </tspan>
      <tspan fill="rgba(255,255,255,0.82)">AutomateReport</tspan>
      <tspan fill="rgba(255,255,255,0.45)">()</tspan>
    </text>

    {/* Dim statement */}
    <text x="48" y="84" fontFamily="monospace" fontSize="11">
      <tspan fill="rgba(255,255,255,0.35)"> </tspan>
      <tspan fill="#0a85bf">Dim </tspan>
      <tspan fill="rgba(255,255,255,0.72)">ws </tspan>
      <tspan fill="#0a85bf">As </tspan>
      <tspan fill="#2ecc71">Worksheet</tspan>
    </text>

    {/* Set statement */}
    <text x="48" y="104" fontFamily="monospace" fontSize="11">
      <tspan fill="rgba(255,255,255,0.35)"> </tspan>
      <tspan fill="rgba(255,255,255,0.72)">ws </tspan>
      <tspan fill="rgba(255,255,255,0.45)">= </tspan>
      <tspan fill="rgba(255,255,255,0.72)">ThisWorkbook</tspan>
      <tspan fill="rgba(255,255,255,0.45)">.</tspan>
      <tspan fill="rgba(255,255,255,0.72)">Sheets</tspan>
      <tspan fill="rgba(255,255,255,0.45)">(</tspan>
      <tspan fill="#e6a817">"Report"</tspan>
      <tspan fill="rgba(255,255,255,0.45)">)</tspan>
    </text>

    {/* With block */}
    <text x="48" y="124" fontFamily="monospace" fontSize="11">
      <tspan fill="rgba(255,255,255,0.35)"> </tspan>
      <tspan fill="#0a85bf">With </tspan>
      <tspan fill="rgba(255,255,255,0.72)">ws</tspan>
      <tspan fill="rgba(255,255,255,0.45)">.Range</tspan>
      <tspan fill="rgba(255,255,255,0.45)">(</tspan>
      <tspan fill="#e6a817">"A1"</tspan>
      <tspan fill="rgba(255,255,255,0.45)">)</tspan>
    </text>

    {/* Value line — highlighted */}
    <rect
      x="42"
      y="133"
      width="330"
      height="18"
      rx="2"
      fill="rgba(4,105,153,0.18)"
    />
    <text x="48" y="146" fontFamily="monospace" fontSize="11">
      <tspan fill="rgba(255,255,255,0.35)"> </tspan>
      <tspan fill="rgba(255,255,255,0.45)">.Value </tspan>
      <tspan fill="rgba(255,255,255,0.45)">= </tspan>
      <tspan fill="rgba(255,255,255,0.72)">GetLatestData</tspan>
      <tspan fill="rgba(255,255,255,0.45)">(</tspan>
      <tspan fill="#e6a817">"Q4"</tspan>
      <tspan fill="rgba(255,255,255,0.45)">, </tspan>
      <tspan fill="rgba(255,255,255,0.72)">Today</tspan>
      <tspan fill="rgba(255,255,255,0.45)">())</tspan>
    </text>

    {/* Font color line */}
    <text x="48" y="166" fontFamily="monospace" fontSize="11">
      <tspan fill="rgba(255,255,255,0.35)"> </tspan>
      <tspan fill="rgba(255,255,255,0.45)">.Font.Bold </tspan>
      <tspan fill="rgba(255,255,255,0.45)">= </tspan>
      <tspan fill="#0a85bf">True</tspan>
    </text>

    {/* End With */}
    <text x="48" y="186" fontFamily="monospace" fontSize="11">
      <tspan fill="rgba(255,255,255,0.35)"> </tspan>
      <tspan fill="#0a85bf">End With</tspan>
    </text>

    {/* Comment */}
    <text x="48" y="206" fontFamily="monospace" fontSize="11">
      <tspan fill="rgba(255,255,255,0.35)"> </tspan>
      <tspan fill="rgba(255,255,255,0.3)">
        ' Export to PDF and email stakeholders
      </tspan>
    </text>

    {/* Call line */}
    <text x="48" y="226" fontFamily="monospace" fontSize="11">
      <tspan fill="rgba(255,255,255,0.35)"> </tspan>
      <tspan fill="#0a85bf">Call </tspan>
      <tspan fill="rgba(255,255,255,0.72)">ExportAndSend</tspan>
      <tspan fill="rgba(255,255,255,0.45)">(ws, </tspan>
      <tspan fill="#e6a817">"stakeholders@co.au"</tspan>
      <tspan fill="rgba(255,255,255,0.45)">)</tspan>
    </text>

    {/* End Sub */}
    <text x="48" y="246" fontFamily="monospace" fontSize="11">
      <tspan fill="#0a85bf">End Sub</tspan>
    </text>

    {/* Cursor blink */}
    <rect x="107" y="235" width="2" height="13" fill="#046999" opacity="0.9">
      <animate
        attributeName="opacity"
        values="0.9;0;0.9"
        dur="1.1s"
        repeatCount="indefinite"
      />
    </rect>

    {/* Status bar */}
    <rect x="0" y="278" width="420" height="22" fill="#0d1520" />
    <text
      x="12"
      y="292"
      fill="rgba(255,255,255,0.3)"
      fontSize="9.5"
      fontFamily="monospace"
    >
      VBA · Module1 · Line 9, Col 5 · Ready
    </text>
    <circle cx="396" cy="289" r="4" fill="#27ae60" opacity="0.7" />
  </svg>
);
