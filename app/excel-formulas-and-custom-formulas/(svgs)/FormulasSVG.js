export const FormulasSVG = () => (
  <svg
    viewBox="0 0 520 420"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="fi-cellGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#e8f4fa" />
        <stop offset="100%" stopColor="#d0eaf6" />
      </linearGradient>
      <linearGradient id="fi-accentGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#046999" />
        <stop offset="100%" stopColor="#0a85bf" />
      </linearGradient>
      <filter id="fi-shadow" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow
          dx="0"
          dy="4"
          stdDeviation="6"
          floodColor="#046999"
          floodOpacity="0.12"
        />
      </filter>
    </defs>

    {/* ── Grid background lines ── */}
    {[60, 120, 180, 240, 300, 360].map((y) => (
      <line
        key={`h${y}`}
        x1="20"
        y1={y}
        x2="500"
        y2={y}
        stroke="#e2edf4"
        strokeWidth="1"
      />
    ))}
    {[80, 160, 240, 320, 400, 480].map((x) => (
      <line
        key={`v${x}`}
        x1={x}
        y1="20"
        x2={x}
        y2="400"
        stroke="#e2edf4"
        strokeWidth="1"
      />
    ))}

    {/* ── Spreadsheet cells — top block ── */}
    {/* Header row */}
    <rect
      x="80"
      y="40"
      width="80"
      height="32"
      rx="3"
      fill="#046999"
      opacity="0.9"
    />
    <rect
      x="164"
      y="40"
      width="80"
      height="32"
      rx="3"
      fill="#046999"
      opacity="0.75"
    />
    <rect
      x="248"
      y="40"
      width="80"
      height="32"
      rx="3"
      fill="#046999"
      opacity="0.6"
    />
    <rect
      x="332"
      y="40"
      width="80"
      height="32"
      rx="3"
      fill="#046999"
      opacity="0.45"
    />
    <text
      x="120"
      y="61"
      textAnchor="middle"
      fill="#fff"
      fontSize="10"
      fontWeight="700"
      letterSpacing="1"
    >
      A
    </text>
    <text
      x="204"
      y="61"
      textAnchor="middle"
      fill="#fff"
      fontSize="10"
      fontWeight="700"
      letterSpacing="1"
    >
      B
    </text>
    <text
      x="288"
      y="61"
      textAnchor="middle"
      fill="#fff"
      fontSize="10"
      fontWeight="700"
      letterSpacing="1"
    >
      C
    </text>
    <text
      x="372"
      y="61"
      textAnchor="middle"
      fill="#fff"
      fontSize="10"
      fontWeight="700"
      letterSpacing="1"
    >
      D
    </text>

    {/* Data rows */}
    {[82, 122, 162, 202].map((y, ri) => (
      <g key={`row${ri}`}>
        <rect
          x="80"
          y={y}
          width="80"
          height="32"
          rx="2"
          fill="url(#fi-cellGrad)"
        />
        <rect
          x="164"
          y={y}
          width="80"
          height="32"
          rx="2"
          fill="url(#fi-cellGrad)"
          opacity="0.7"
        />
        <rect
          x="248"
          y={y}
          width="80"
          height="32"
          rx="2"
          fill="url(#fi-cellGrad)"
          opacity="0.5"
        />
        <rect
          x="332"
          y={y}
          width="80"
          height="32"
          rx="2"
          fill="url(#fi-cellGrad)"
          opacity="0.4"
        />
        <text
          x="120"
          y={y + 20}
          textAnchor="middle"
          fill="#4a5568"
          fontSize="9"
        >
          {["1,240", "3,810", "2,090", "4,550"][ri]}
        </text>
        <text
          x="204"
          y={y + 20}
          textAnchor="middle"
          fill="#4a5568"
          fontSize="9"
        >
          {["0.18", "0.22", "0.15", "0.27"][ri]}
        </text>
        <text
          x="288"
          y={y + 20}
          textAnchor="middle"
          fill="#046999"
          fontSize="9"
          fontWeight="600"
        >
          {["=A2*B2", "=A3*B3", "=A4*B4", "=A5*B5"][ri]}
        </text>
        <text
          x="372"
          y={y + 20}
          textAnchor="middle"
          fill="#4a5568"
          fontSize="9"
        >
          {["223.20", "838.20", "313.50", "1228.50"][ri]}
        </text>
      </g>
    ))}

    {/* ── Active / highlighted formula bar ── */}
    <rect
      x="80"
      y="252"
      width="332"
      height="38"
      rx="4"
      fill="#fff"
      stroke="#046999"
      strokeWidth="1.5"
      filter="url(#fi-shadow)"
    />
    <rect x="80" y="252" width="40" height="38" rx="4" fill="#046999" />
    <text
      x="100"
      y="276"
      textAnchor="middle"
      fill="#fff"
      fontSize="10"
      fontWeight="700"
    >
      fx
    </text>
    <text
      x="260"
      y="276"
      textAnchor="middle"
      fill="#046999"
      fontSize="11"
      fontWeight="600"
      fontFamily="monospace"
    >
      =SUMIF(A2:A5,"&gt;2000",D2:D5)
    </text>

    {/* ── Result callout ── */}
    <rect
      x="300"
      y="310"
      width="112"
      height="48"
      rx="6"
      fill="url(#fi-accentGrad)"
      filter="url(#fi-shadow)"
    />
    <text
      x="356"
      y="329"
      textAnchor="middle"
      fill="rgba(255,255,255,0.75)"
      fontSize="8"
      fontWeight="700"
      letterSpacing="2"
      textTransform="uppercase"
    >
      RESULT
    </text>
    <text
      x="356"
      y="350"
      textAnchor="middle"
      fill="#fff"
      fontSize="18"
      fontWeight="800"
    >
      2,066.70
    </text>

    {/* ── Connector line from formula bar to result ── */}
    <path
      d="M 356 290 L 356 310"
      stroke="#046999"
      strokeWidth="1.5"
      strokeDasharray="4 3"
      opacity="0.5"
    />

    {/* ── Small decorative function tags ── */}
    {[
      { x: 82, y: 320, label: "VLOOKUP" },
      { x: 82, y: 355, label: "INDEX/MATCH" },
      { x: 82, y: 390, label: "SUMPRODUCT" },
    ].map(({ x, y, label }) => (
      <g key={label}>
        <rect
          x={x}
          y={y - 14}
          width={label.length * 6.8 + 16}
          height="20"
          rx="10"
          fill="#e8f4fa"
        />
        <text x={x + 8} y={y} fill="#046999" fontSize="8.5" fontWeight="700">
          {label}
        </text>
      </g>
    ))}

    {/* ── Accent dot cluster top-right ── */}
    {[
      { cx: 460, cy: 50, r: 5, op: 0.35 },
      { cx: 475, cy: 68, r: 3, op: 0.2 },
      { cx: 490, cy: 42, r: 4, op: 0.25 },
    ].map(({ cx, cy, r, op }, i) => (
      <circle key={i} cx={cx} cy={cy} r={r} fill="#046999" opacity={op} />
    ))}
  </svg>
);
