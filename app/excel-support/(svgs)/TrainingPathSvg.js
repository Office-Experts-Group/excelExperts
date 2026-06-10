// app/services/excel-support/(svgs)/TrainingPathSvg.js

export const TrainingPathSvg = () => (
  <svg
    viewBox="0 0 400 360"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    role="img"
  >
    {/* ── Monitor shell ── */}
    <rect x="30" y="20" width="280" height="190" rx="10" fill="#1a2a3a" />
    <rect
      x="30"
      y="20"
      width="280"
      height="190"
      rx="10"
      stroke="rgba(4,105,153,0.4)"
      strokeWidth="1.5"
    />
    {/* Screen bezel top bar */}
    <rect x="30" y="20" width="280" height="32" rx="10" fill="#18232e" />
    <rect x="30" y="40" width="280" height="12" fill="#18232e" />
    <circle cx="50" cy="36" r="4" fill="rgba(255,255,255,0.12)" />
    <circle cx="64" cy="36" r="4" fill="rgba(255,255,255,0.12)" />
    <circle cx="78" cy="36" r="4" fill="rgba(255,255,255,0.12)" />
    {/* URL bar */}
    <rect
      x="110"
      y="28"
      width="140"
      height="16"
      rx="4"
      fill="rgba(255,255,255,0.06)"
    />
    <rect
      x="118"
      y="34"
      width="80"
      height="5"
      rx="2"
      fill="rgba(255,255,255,0.2)"
    />

    {/* ── Screen content: play button centred ── */}
    <rect
      x="38"
      y="56"
      width="264"
      height="146"
      rx="4"
      fill="rgba(4,105,153,0.07)"
    />
    {/* Play circle */}
    <circle
      cx="170"
      cy="129"
      r="36"
      fill="rgba(4,105,153,0.18)"
      stroke="#046999"
      strokeWidth="1.5"
    />
    <polygon points="160,114 160,144 190,129" fill="#046999" opacity="0.85" />

    {/* Stand */}
    <rect x="148" y="210" width="44" height="14" rx="2" fill="#18232e" />
    <rect x="115" y="224" width="110" height="8" rx="4" fill="#18232e" />
    <rect
      x="115"
      y="224"
      width="110"
      height="8"
      rx="4"
      stroke="rgba(4,105,153,0.3)"
      strokeWidth="1"
    />

    {/* ── Training path nodes below the screen ── */}
    {/* Connector line */}
    <line
      x1="60"
      y1="280"
      x2="340"
      y2="280"
      stroke="rgba(4,105,153,0.25)"
      strokeWidth="1.5"
      strokeDasharray="4 3"
    />

    {/* Node 1 — Foundations */}
    <circle cx="60" cy="280" r="16" fill="#046999" />
    <text
      x="60"
      y="285"
      textAnchor="middle"
      fill="white"
      fontSize="9"
      fontWeight="bold"
      fontFamily="sans-serif"
    >
      01
    </text>
    <text
      x="60"
      y="310"
      textAnchor="middle"
      fill="#046999"
      fontSize="9"
      fontFamily="sans-serif"
    >
      Foundations
    </text>

    {/* Node 2 — Formulas */}
    <circle cx="140" cy="280" r="16" fill="rgba(4,105,153,0.6)" />
    <text
      x="140"
      y="285"
      textAnchor="middle"
      fill="white"
      fontSize="9"
      fontWeight="bold"
      fontFamily="sans-serif"
    >
      02
    </text>
    <text
      x="140"
      y="310"
      textAnchor="middle"
      fill="rgba(4,105,153,0.8)"
      fontSize="9"
      fontFamily="sans-serif"
    >
      Formulas
    </text>

    {/* Node 3 — Data */}
    <circle cx="220" cy="280" r="16" fill="rgba(4,105,153,0.4)" />
    <text
      x="220"
      y="285"
      textAnchor="middle"
      fill="white"
      fontSize="9"
      fontWeight="bold"
      fontFamily="sans-serif"
    >
      03
    </text>
    <text
      x="220"
      y="310"
      textAnchor="middle"
      fill="rgba(4,105,153,0.65)"
      fontSize="9"
      fontFamily="sans-serif"
    >
      Data
    </text>

    {/* Node 4 — Automation */}
    <circle
      cx="300"
      cy="280"
      r="16"
      fill="rgba(4,105,153,0.2)"
      stroke="rgba(4,105,153,0.5)"
      strokeWidth="1.5"
    />
    <text
      x="300"
      y="285"
      textAnchor="middle"
      fill="rgba(4,105,153,0.9)"
      fontSize="9"
      fontWeight="bold"
      fontFamily="sans-serif"
    >
      04
    </text>
    <text
      x="300"
      y="310"
      textAnchor="middle"
      fill="rgba(4,105,153,0.5)"
      fontSize="9"
      fontFamily="sans-serif"
    >
      Automation
    </text>

    {/* ── Progress indicator under node 1 ── */}
    <rect
      x="34"
      y="320"
      width="52"
      height="4"
      rx="2"
      fill="rgba(4,105,153,0.15)"
    />
    <rect x="34" y="320" width="52" height="4" rx="2" fill="#046999" />

    {/* ── Floating badge: "How To" ── */}
    <rect
      x="290"
      y="50"
      width="96"
      height="36"
      rx="8"
      fill="rgba(4,105,153,0.12)"
      stroke="rgba(4,105,153,0.4)"
      strokeWidth="1"
    />
    <text
      x="338"
      y="67"
      textAnchor="middle"
      fill="#046999"
      fontSize="9"
      fontFamily="sans-serif"
      fontWeight="600"
    >
      How-To
    </text>
    <text
      x="338"
      y="80"
      textAnchor="middle"
      fill="rgba(4,105,153,0.7)"
      fontSize="8"
      fontFamily="sans-serif"
    >
      Video Guides
    </text>

    {/* ── Floating badge: "Remote" ── */}
    <rect
      x="290"
      y="100"
      width="96"
      height="36"
      rx="8"
      fill="rgba(39,174,96,0.08)"
      stroke="rgba(39,174,96,0.35)"
      strokeWidth="1"
    />
    <text
      x="338"
      y="117"
      textAnchor="middle"
      fill="#27ae60"
      fontSize="9"
      fontFamily="sans-serif"
      fontWeight="600"
    >
      Remote
    </text>
    <text
      x="338"
      y="130"
      textAnchor="middle"
      fill="rgba(39,174,96,0.7)"
      fontSize="8"
      fontFamily="sans-serif"
    >
      or Onsite
    </text>
  </svg>
);
