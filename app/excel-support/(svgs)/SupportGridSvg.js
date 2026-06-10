// app/services/excel-support/(svgs)/SupportGridSvg.js

export const SupportGridSvg = () => (
  <svg
    viewBox="0 0 420 380"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    role="img"
  >
    {/* ── Outer card shell ── */}
    <rect x="20" y="20" width="380" height="340" rx="12" fill="#18232e" />
    <rect
      x="20"
      y="20"
      width="380"
      height="340"
      rx="12"
      stroke="rgba(4,105,153,0.25)"
      strokeWidth="1.5"
    />

    {/* ── Title bar ── */}
    <rect x="20" y="20" width="380" height="40" rx="12" fill="#1a2a3a" />
    <rect x="20" y="48" width="380" height="12" fill="#1a2a3a" />
    {/* Traffic-light dots */}
    <circle cx="46" cy="40" r="5" fill="#c0392b" opacity="0.7" />
    <circle cx="62" cy="40" r="5" fill="#e67e22" opacity="0.7" />
    <circle cx="78" cy="40" r="5" fill="#27ae60" opacity="0.7" />
    {/* Filename label */}
    <rect
      x="155"
      y="32"
      width="110"
      height="16"
      rx="4"
      fill="rgba(4,105,153,0.18)"
    />
    <rect
      x="163"
      y="38"
      width="70"
      height="5"
      rx="2"
      fill="rgba(255,255,255,0.25)"
    />

    {/* ── Column headers ── */}
    {["A", "B", "C", "D"].map((col, i) => (
      <g key={col}>
        <rect
          x={68 + i * 80}
          y="64"
          width="76"
          height="24"
          fill="rgba(4,105,153,0.12)"
        />
        <text
          x={68 + i * 80 + 38}
          y="80"
          textAnchor="middle"
          fill="rgba(255,255,255,0.5)"
          fontSize="11"
          fontFamily="monospace"
        >
          {col}
        </text>
      </g>
    ))}

    {/* ── Row numbers ── */}
    {[0, 1, 2, 3, 4, 5].map((row) => (
      <g key={row}>
        <rect
          x="20"
          y={88 + row * 40}
          width="48"
          height="36"
          fill="rgba(4,105,153,0.08)"
        />
        <text
          x="44"
          y={88 + row * 40 + 22}
          textAnchor="middle"
          fill="rgba(255,255,255,0.3)"
          fontSize="10"
          fontFamily="monospace"
        >
          {row + 1}
        </text>
      </g>
    ))}

    {/* ── Grid cells ── */}
    {[0, 1, 2, 3, 4, 5].map((row) =>
      [0, 1, 2, 3].map((col) => (
        <rect
          key={`${row}-${col}`}
          x={68 + col * 80}
          y={88 + row * 40}
          width="76"
          height="36"
          fill="rgba(255,255,255,0.02)"
          stroke="rgba(255,255,255,0.06)"
          strokeWidth="1"
        />
      )),
    )}

    {/* ── Cell text content (mock data) ── */}
    {/* Row 0 */}
    <rect
      x="76"
      y="100"
      width="48"
      height="5"
      rx="2"
      fill="rgba(255,255,255,0.35)"
    />
    <rect
      x="156"
      y="100"
      width="32"
      height="5"
      rx="2"
      fill="rgba(4,105,153,0.6)"
    />
    <rect
      x="236"
      y="100"
      width="40"
      height="5"
      rx="2"
      fill="rgba(255,255,255,0.2)"
    />
    <rect
      x="316"
      y="100"
      width="28"
      height="5"
      rx="2"
      fill="rgba(255,255,255,0.2)"
    />
    {/* Row 1 */}
    <rect
      x="76"
      y="118"
      width="56"
      height="5"
      rx="2"
      fill="rgba(255,255,255,0.2)"
    />
    <rect
      x="156"
      y="118"
      width="44"
      height="5"
      rx="2"
      fill="rgba(255,255,255,0.2)"
    />
    <rect
      x="236"
      y="118"
      width="36"
      height="5"
      rx="2"
      fill="rgba(39,174,96,0.6)"
    />
    <rect
      x="316"
      y="118"
      width="44"
      height="5"
      rx="2"
      fill="rgba(255,255,255,0.2)"
    />
    {/* Row 2 — highlighted active row */}
    <rect
      x="68"
      y="168"
      width="332"
      height="36"
      rx="0"
      fill="rgba(4,105,153,0.12)"
    />
    <rect
      x="76"
      y="180"
      width="52"
      height="5"
      rx="2"
      fill="rgba(4,105,153,0.9)"
    />
    <rect
      x="156"
      y="180"
      width="38"
      height="5"
      rx="2"
      fill="rgba(4,105,153,0.7)"
    />
    <rect
      x="236"
      y="180"
      width="50"
      height="5"
      rx="2"
      fill="rgba(4,105,153,0.7)"
    />
    <rect
      x="316"
      y="180"
      width="34"
      height="5"
      rx="2"
      fill="rgba(4,105,153,0.7)"
    />
    {/* Row 3 */}
    <rect
      x="76"
      y="218"
      width="42"
      height="5"
      rx="2"
      fill="rgba(255,255,255,0.2)"
    />
    <rect
      x="156"
      y="218"
      width="58"
      height="5"
      rx="2"
      fill="rgba(255,255,255,0.2)"
    />
    <rect
      x="236"
      y="218"
      width="30"
      height="5"
      rx="2"
      fill="rgba(192,57,43,0.55)"
    />
    <rect
      x="316"
      y="218"
      width="50"
      height="5"
      rx="2"
      fill="rgba(255,255,255,0.2)"
    />
    {/* Row 4 */}
    <rect
      x="76"
      y="258"
      width="60"
      height="5"
      rx="2"
      fill="rgba(255,255,255,0.18)"
    />
    <rect
      x="156"
      y="258"
      width="28"
      height="5"
      rx="2"
      fill="rgba(255,255,255,0.18)"
    />
    <rect
      x="236"
      y="258"
      width="46"
      height="5"
      rx="2"
      fill="rgba(39,174,96,0.5)"
    />
    <rect
      x="316"
      y="258"
      width="38"
      height="5"
      rx="2"
      fill="rgba(255,255,255,0.18)"
    />
    {/* Row 5 */}
    <rect
      x="76"
      y="298"
      width="36"
      height="5"
      rx="2"
      fill="rgba(255,255,255,0.15)"
    />
    <rect
      x="156"
      y="298"
      width="50"
      height="5"
      rx="2"
      fill="rgba(255,255,255,0.15)"
    />
    <rect
      x="236"
      y="298"
      width="34"
      height="5"
      rx="2"
      fill="rgba(255,255,255,0.15)"
    />
    <rect
      x="316"
      y="298"
      width="44"
      height="5"
      rx="2"
      fill="rgba(255,255,255,0.15)"
    />

    {/* ── Active cell border (B3) ── */}
    <rect
      x="148"
      y="168"
      width="76"
      height="36"
      fill="none"
      stroke="#046999"
      strokeWidth="2"
    />
    {/* Resize handle dot */}
    <rect x="220" y="200" width="5" height="5" fill="#046999" />

    {/* ── Formula bar ── */}
    <rect
      x="20"
      y="328"
      width="380"
      height="28"
      fill="rgba(255,255,255,0.04)"
    />
    <rect x="20" y="328" width="380" height="1.5" fill="rgba(4,105,153,0.2)" />
    <text
      x="34"
      y="346"
      fill="rgba(4,105,153,0.8)"
      fontSize="10"
      fontFamily="monospace"
    >
      fx
    </text>
    <rect
      x="56"
      y="334"
      width="200"
      height="5"
      rx="2"
      fill="rgba(255,255,255,0.2)"
    />

    {/* ── Pulse ring on error cell (C4) ── */}
    <circle
      cx="272"
      cy="218"
      r="14"
      stroke="#c0392b"
      strokeWidth="1"
      opacity="0.4"
    >
      <animate
        attributeName="r"
        from="10"
        to="20"
        dur="2s"
        repeatCount="indefinite"
      />
      <animate
        attributeName="opacity"
        from="0.6"
        to="0"
        dur="2s"
        repeatCount="indefinite"
      />
    </circle>
    <circle cx="272" cy="218" r="7" fill="#c0392b" opacity="0.3" />
  </svg>
);
