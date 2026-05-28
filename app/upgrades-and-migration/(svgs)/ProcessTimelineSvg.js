export const ProcessTimelineSvg = () => (
  <svg
    viewBox="0 0 400 300"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    // className={styles.timelineSvg}
    aria-hidden="true"
  >
    {/* ── Before state (left cluster) ── */}
    <g opacity="0.85">
      {/* Stacked files — messy */}
      <rect
        x="16"
        y="80"
        width="72"
        height="52"
        rx="3"
        fill="#1a0e0e"
        stroke="#922b21"
        strokeWidth="1"
        transform="rotate(-4, 52, 106)"
      />
      <rect
        x="20"
        y="76"
        width="72"
        height="52"
        rx="3"
        fill="#1e1212"
        stroke="#922b21"
        strokeWidth="1"
        transform="rotate(-2, 56, 102)"
      />
      <rect
        x="24"
        y="72"
        width="72"
        height="52"
        rx="3"
        fill="#220e0e"
        stroke="#c0392b"
        strokeWidth="1"
      />
      {/* File lines */}
      <rect
        x="30"
        y="82"
        width="40"
        height="4"
        rx="1"
        fill="#922b21"
        opacity="0.5"
      />
      <rect
        x="30"
        y="90"
        width="28"
        height="3"
        rx="1"
        fill="#922b21"
        opacity="0.35"
      />
      <rect
        x="30"
        y="97"
        width="50"
        height="3"
        rx="1"
        fill="#922b21"
        opacity="0.35"
      />
      <rect
        x="30"
        y="104"
        width="32"
        height="3"
        rx="1"
        fill="#922b21"
        opacity="0.3"
      />
      {/* X mark */}
      <path
        d="M76 76 L86 86 M86 76 L76 86"
        stroke="#e74c3c"
        strokeWidth="1.5"
        opacity="0.6"
      />
    </g>
    <text
      x="60"
      y="148"
      textAnchor="middle"
      fontSize="9"
      fill="#922b21"
      fontFamily="monospace"
    >
      before
    </text>

    {/* ── Arrow 1 ── */}
    <path
      d="M102 106 L148 106"
      stroke="#046999"
      strokeWidth="1.5"
      strokeDasharray="3 2"
      opacity="0.4"
    />
    <polygon points="146,102 154,106 146,110" fill="#046999" opacity="0.5" />

    {/* ── Analysis box ── */}
    <g>
      <rect
        x="158"
        y="74"
        width="84"
        height="66"
        rx="4"
        fill="#0d1b2a"
        stroke="#046999"
        strokeWidth="1.2"
      />
      {/* Magnifying glass */}
      <circle
        cx="190"
        cy="98"
        r="14"
        stroke="#046999"
        strokeWidth="2"
        fill="none"
      />
      <line
        x1="200"
        y1="108"
        x2="210"
        y2="118"
        stroke="#046999"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Scan lines inside glass */}
      <line
        x1="182"
        y1="95"
        x2="198"
        y2="95"
        stroke="#046999"
        strokeWidth="1"
        opacity="0.4"
      />
      <line
        x1="182"
        y1="100"
        x2="196"
        y2="100"
        stroke="#046999"
        strokeWidth="1"
        opacity="0.4"
      />
      <line
        x1="182"
        y1="105"
        x2="198"
        y2="105"
        stroke="#046999"
        strokeWidth="1"
        opacity="0.4"
      />
      {/* Checkmark finding */}
      <path
        d="M184 100 L188 104 L196 93"
        stroke="#27ae60"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <text
        x="200"
        y="134"
        textAnchor="middle"
        fontSize="8"
        fill="#046999"
        fontFamily="monospace"
      >
        analysis
      </text>
    </g>

    {/* ── Arrow 2 ── */}
    <path
      d="M244 107 L286 107"
      stroke="#046999"
      strokeWidth="1.5"
      strokeDasharray="3 2"
      opacity="0.4"
    />
    <polygon points="284,103 292,107 284,111" fill="#046999" opacity="0.5" />

    {/* ── Build box ── */}
    <g>
      <rect
        x="296"
        y="74"
        width="84"
        height="66"
        rx="4"
        fill="#0d1b2a"
        stroke="#27ae60"
        strokeWidth="1.2"
      />
      {/* Code lines */}
      <rect
        x="306"
        y="85"
        width="30"
        height="3"
        rx="1"
        fill="#046999"
        opacity="0.8"
      />
      <rect
        x="312"
        y="92"
        width="20"
        height="3"
        rx="1"
        fill="#27ae60"
        opacity="0.7"
      />
      <rect
        x="318"
        y="99"
        width="40"
        height="3"
        rx="1"
        fill="#046999"
        opacity="0.5"
      />
      <rect
        x="312"
        y="106"
        width="25"
        height="3"
        rx="1"
        fill="#27ae60"
        opacity="0.7"
      />
      <rect
        x="306"
        y="113"
        width="35"
        height="3"
        rx="1"
        fill="#046999"
        opacity="0.8"
      />
      {/* Tick */}
      <circle cx="358" cy="90" r="8" fill="#27ae60" opacity="0.15" />
      <path
        d="M354 90 L357 93 L363 86"
        stroke="#27ae60"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <text
        x="338"
        y="134"
        textAnchor="middle"
        fontSize="8"
        fill="#27ae60"
        fontFamily="monospace"
      >
        delivered
      </text>
    </g>

    {/* ── After state (bottom row) ── */}
    {/* New system — clean */}
    <g transform="translate(140, 176)">
      <rect
        x="0"
        y="0"
        width="120"
        height="76"
        rx="5"
        fill="#e8f4fa"
        stroke="#046999"
        strokeWidth="1.5"
      />
      {/* Header bar */}
      <rect x="0" y="0" width="120" height="20" rx="5" fill="#046999" />
      <rect x="0" y="14" width="120" height="6" fill="#046999" />
      <text
        x="60"
        y="14"
        textAnchor="middle"
        fontSize="9"
        fill="white"
        fontFamily="sans-serif"
        fontWeight="bold"
      >
        Your New System
      </text>
      {/* Clean rows */}
      {[28, 38, 48, 58].map((y, i) => (
        <g key={y}>
          <rect
            x="10"
            y={y}
            width={60 + i * 5}
            height="5"
            rx="1"
            fill="#046999"
            opacity={0.2 + i * 0.05}
          />
          <rect
            x="88"
            y={y}
            width="22"
            height="5"
            rx="1"
            fill="#27ae60"
            opacity="0.35"
          />
        </g>
      ))}
      {/* Check badge */}
      <circle cx="104" cy="8" r="6" fill="#27ae60" opacity="0.9" />
      <path
        d="M101 8 L103.5 10.5 L108 5.5"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>

    {/* Down arrows into after state */}
    <path
      d="M200 148 L200 172"
      stroke="#046999"
      strokeWidth="1.5"
      strokeDasharray="3 2"
      opacity="0.4"
    />
    <polygon points="196,170 200,178 204,170" fill="#046999" opacity="0.5" />
  </svg>
);
