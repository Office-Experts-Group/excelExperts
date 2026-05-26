export const AddinSvg = () => (
  <svg
    viewBox="0 0 480 280"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    style={{
      width: "100%",
      // maxWidth: "380px",
      height: "auto",
      filter: "drop-shadow(0 16px 40px rgba(0, 0, 0, 0.1))",
    }}
  >
    {/* Central workbook */}
    <rect
      x="110"
      y="60"
      width="160"
      height="140"
      rx="6"
      fill="#f7f8f9"
      stroke="#e0e4e8"
      strokeWidth="1.5"
    />
    {/* Workbook title bar */}
    <rect x="110" y="60" width="160" height="28" rx="6" fill="#046999" />
    <rect x="110" y="76" width="160" height="12" fill="#046999" />
    <text
      x="190"
      y="80"
      fill="white"
      fontSize="10"
      fontFamily="monospace"
      textAnchor="middle"
      fontWeight="bold"
    >
      MyWorkbook.xlsm
    </text>

    {/* Spreadsheet rows */}
    {[0, 1, 2, 3, 4].map((r) => (
      <g key={r}>
        <rect
          x="118"
          y={96 + r * 18}
          width="60"
          height="14"
          rx="2"
          fill={r === 0 ? "#e8f4fa" : "white"}
          stroke="#e8eaed"
          strokeWidth="0.8"
        />
        <rect
          x="182"
          y={96 + r * 18}
          width="40"
          height="14"
          rx="2"
          fill="white"
          stroke="#e8eaed"
          strokeWidth="0.8"
        />
        <rect
          x="226"
          y={96 + r * 18}
          width="36"
          height="14"
          rx="2"
          fill="white"
          stroke="#e8eaed"
          strokeWidth="0.8"
        />
        {r > 0 && (
          <rect
            x="182"
            y={96 + r * 18}
            width={r * 28}
            height="14"
            rx="2"
            fill="rgba(4,105,153,0.12)"
          />
        )}
      </g>
    ))}

    {/* Add-in plugin blocks floating around the workbook */}

    {/* Left add-in — Custom Ribbon */}
    <rect
      x="10"
      y="80"
      width="88"
      height="60"
      rx="6"
      fill="white"
      stroke="#046999"
      strokeWidth="1.5"
      filter="url(#addinShadow)"
    />
    <rect x="10" y="80" width="88" height="20" rx="6" fill="#046999" />
    <rect x="10" y="92" width="88" height="8" fill="#046999" />
    <text
      x="54"
      y="94"
      fill="white"
      fontSize="8"
      textAnchor="middle"
      fontWeight="700"
    >
      Custom Ribbon
    </text>
    <rect x="17" y="107" width="16" height="10" rx="2" fill="#e8f4fa" />
    <rect x="36" y="107" width="16" height="10" rx="2" fill="#e8f4fa" />
    <rect
      x="55"
      y="107"
      width="16"
      height="10"
      rx="2"
      fill="#046999"
      opacity="0.7"
    />
    <rect x="74" y="107" width="16" height="10" rx="2" fill="#e8f4fa" />
    {/* Connecting line */}
    <path
      d="M98 110 L110 110"
      stroke="#046999"
      strokeWidth="1.5"
      strokeDasharray="3 2"
      opacity="0.6"
    />

    {/* Right add-in — Global Macros */}
    <rect
      x="282"
      y="80"
      width="88"
      height="60"
      rx="6"
      fill="white"
      stroke="#046999"
      strokeWidth="1.5"
    />
    <rect x="282" y="80" width="88" height="20" rx="6" fill="#046999" />
    <rect x="282" y="92" width="88" height="8" fill="#046999" />
    <text
      x="326"
      y="94"
      fill="white"
      fontSize="8"
      textAnchor="middle"
      fontWeight="700"
    >
      Global Macros
    </text>
    <text
      x="291"
      y="112"
      fill="#046999"
      fontSize="9"
      fontFamily="monospace"
      opacity="0.8"
    >
      Sub Run()
    </text>
    <text
      x="291"
      y="124"
      fill="#4a5568"
      fontSize="8.5"
      fontFamily="monospace"
      opacity="0.7"
    >
      {" "}
      DoTask()
    </text>
    <text
      x="291"
      y="136"
      fill="#046999"
      fontSize="9"
      fontFamily="monospace"
      opacity="0.8"
    >
      End Sub
    </text>
    {/* Connecting line */}
    <path
      d="M270 110 L282 110"
      stroke="#046999"
      strokeWidth="1.5"
      strokeDasharray="3 2"
      opacity="0.6"
    />

    {/* Bottom add-in — Data Validator */}
    <rect
      x="135"
      y="216"
      width="110"
      height="36"
      rx="6"
      fill="white"
      stroke="#046999"
      strokeWidth="1.5"
    />
    <text
      x="190"
      y="234"
      fill="#046999"
      fontSize="9"
      textAnchor="middle"
      fontWeight="700"
    >
      Data Validator
    </text>
    <circle cx="170" cy="244" r="5" fill="#27ae60" opacity="0.7" />
    <circle cx="185" cy="244" r="5" fill="#27ae60" opacity="0.7" />
    <circle cx="200" cy="244" r="5" fill="#e6a817" opacity="0.7" />
    <circle cx="215" cy="244" r="5" fill="#27ae60" opacity="0.7" />
    {/* Connecting line */}
    <path
      d="M190 200 L190 216"
      stroke="#046999"
      strokeWidth="1.5"
      strokeDasharray="3 2"
      opacity="0.6"
    />

    {/* Plug icon on central workbook */}
    <circle
      cx="190"
      cy="130"
      r="12"
      fill="rgba(4,105,153,0.1)"
      stroke="#046999"
      strokeWidth="1.2"
    />
    <path
      d="M186 127v-4M194 127v-4"
      stroke="#046999"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M184 127h12v4a6 6 0 01-12 0v-4z"
      stroke="#046999"
      strokeWidth="1.4"
      fill="none"
    />

    <defs>
      <filter id="addinShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="4" stdDeviation="6" floodOpacity="0.1" />
      </filter>
    </defs>
  </svg>
);
