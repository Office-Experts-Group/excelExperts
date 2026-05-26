export const UpgradeSvg = () => (
  <svg
    viewBox="0 0 320 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    style={{
      width: "100%",
      // maxWidth: "320px",
      height: "auto",
    }}
  >
    {/* Old version — dimmed */}
    <rect
      x="10"
      y="40"
      width="120"
      height="80"
      rx="6"
      fill="#f2f3f5"
      stroke="#d0d4d8"
      strokeWidth="1.5"
      opacity="0.7"
    />
    <rect
      x="10"
      y="40"
      width="120"
      height="24"
      rx="6"
      fill="#888"
      opacity="0.5"
    />
    <rect x="10" y="56" width="120" height="8" fill="#888" opacity="0.5" />
    <text
      x="70"
      y="57"
      fill="white"
      fontSize="9"
      textAnchor="middle"
      fontWeight="600"
      opacity="0.8"
    >
      Excel 32-bit
    </text>
    <text x="70" y="85" fill="#888" fontSize="8.5" textAnchor="middle">
      Legacy VBA Macros
    </text>
    <path
      d="M28 100l16-10 16 6 16-8 16 4"
      stroke="#c0392b"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeDasharray="2 2"
      opacity="0.5"
    />
    {/* Error badge */}
    <circle cx="118" cy="42" r="10" fill="#c0392b" />
    <text
      x="118"
      y="46"
      fill="white"
      fontSize="9"
      textAnchor="middle"
      fontWeight="800"
    >
      !
    </text>

    {/* Arrow */}
    <path
      d="M140 80h30"
      stroke="#046999"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M163 74l7 6-7 6"
      stroke="#046999"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <text
      x="155"
      y="72"
      fill="#046999"
      fontSize="7.5"
      textAnchor="middle"
      fontWeight="700"
    >
      UPGRADE
    </text>

    {/* New version — bright */}
    <rect
      x="180"
      y="30"
      width="130"
      height="100"
      rx="6"
      fill="white"
      stroke="#046999"
      strokeWidth="1.8"
    />
    <rect x="180" y="30" width="130" height="26" rx="6" fill="#046999" />
    <rect x="180" y="46" width="130" height="10" fill="#046999" />
    <text
      x="245"
      y="47"
      fill="white"
      fontSize="9"
      textAnchor="middle"
      fontWeight="700"
    >
      Excel 64-bit / M365
    </text>
    <text
      x="245"
      y="75"
      fill="#0d1b2a"
      fontSize="8.5"
      textAnchor="middle"
      fontWeight="600"
    >
      Rebuilt VBA Macros
    </text>
    <path
      d="M194 90l16-8 16 5 16-7 16 3 16-5"
      stroke="#046999"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    {/* Tick badge */}
    <circle cx="298" cy="32" r="10" fill="#27ae60" />
    <path
      d="M294 32l3 3 6-6"
      stroke="white"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Caption */}
    <text x="160" y="160" fill="#4a5568" fontSize="9" textAnchor="middle">
      We review, fix, and future-proof your macros
    </text>
  </svg>
);
