// app/services/excel/upgrades-and-migration/(svgs)/BrokenWorkbookSvg.js
// Dark-themed workbook SVG showing error states.
// viewBox widened to 520x400 so all 5 columns + chrome fit with clean margins.
// Status bar is baked into the SVG — no external label needed.

export const BrokenWorkbookSvg = ({ className }) => (
  <svg
    viewBox="0 0 520 400"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <defs>
      <pattern
        id="bwb-stripes"
        x="0"
        y="0"
        width="10"
        height="10"
        patternUnits="userSpaceOnUse"
        patternTransform="rotate(45)"
      >
        <rect width="5" height="10" fill="#c0392b" opacity="0.09" />
      </pattern>
      {/* Clip to window chrome so nothing bleeds outside */}
      <clipPath id="bwb-inner-clip">
        <rect x="16" y="16" width="488" height="368" rx="6" />
      </clipPath>
    </defs>

    {/* ── Outer window chrome ── */}
    <rect
      x="16"
      y="16"
      width="488"
      height="368"
      rx="6"
      fill="#1a2a3a"
      stroke="#2a3f52"
      strokeWidth="1.5"
    />

    {/* ── Title bar ── */}
    <rect x="16" y="16" width="488" height="34" rx="6" fill="#0d1b2a" />
    <rect x="16" y="34" width="488" height="16" fill="#0d1b2a" />
    {/* Traffic lights */}
    <circle cx="40" cy="33" r="5.5" fill="#c0392b" opacity="0.85" />
    <circle cx="58" cy="33" r="5.5" fill="#e67e22" opacity="0.65" />
    <circle cx="76" cy="33" r="5.5" fill="#27ae60" opacity="0.5" />
    {/* Filename pill */}
    <rect x="192" y="25" width="136" height="16" rx="8" fill="#1e3045" />
    <rect x="200" y="31" width="80" height="4" rx="2" fill="#2a4a5e" />

    {/* ── Column headers ── */}
    {/* row-number header cell */}
    <rect
      x="16"
      y="50"
      width="68"
      height="22"
      fill="#111820"
      stroke="#1e3045"
      strokeWidth="0.5"
    />
    {/* 5 column headers — col width 84px, starting x=84 */}
    {[0, 1, 2, 3, 4].map((i) => (
      <g key={i}>
        <rect
          x={84 + i * 84}
          y="50"
          width="83"
          height="22"
          fill="#111820"
          stroke="#1e3045"
          strokeWidth="0.5"
        />
        <rect
          x={92 + i * 84}
          y="58"
          width={28 + (i % 3) * 10}
          height="7"
          rx="1"
          fill="#2a3f52"
          opacity="0.9"
        />
      </g>
    ))}

    {/* ── Row-number column (7 rows, row height 38px, starting y=72) ── */}
    {[0, 1, 2, 3, 4, 5, 6].map((i) => (
      <rect
        key={i}
        x="16"
        y={72 + i * 38}
        width="68"
        height="37"
        fill="#111820"
        stroke="#1e3045"
        strokeWidth="0.5"
      />
    ))}
    {[1, 2, 3, 4, 5, 6, 7].map((n, i) => (
      <text
        key={n}
        x="50"
        y={95 + i * 38}
        textAnchor="middle"
        fontSize="10"
        fill="#2a4a5e"
        fontFamily="monospace"
      >
        {n}
      </text>
    ))}

    {/* ── Rows 1–2: normal cells ── */}
    {[0, 1].map((row) =>
      [0, 1, 2, 3, 4].map((col) => (
        <g key={`${row}-${col}`}>
          <rect
            x={84 + col * 84}
            y={72 + row * 38}
            width="83"
            height="37"
            fill="#18232e"
            stroke="#1e3045"
            strokeWidth="0.5"
          />
          <rect
            x={92 + col * 84}
            y={85 + row * 38}
            width={22 + ((col * 7 + row * 11) % 36)}
            height="7"
            rx="1"
            fill="#2a4a5e"
            opacity="0.7"
          />
        </g>
      )),
    )}

    {/* ── Row 3: #REF! error on col C (index 2) ── */}
    {[0, 1, 2, 3, 4].map((col) => (
      <g key={`err-${col}`}>
        <rect
          x={84 + col * 84}
          y={148}
          width="83"
          height="37"
          fill={col === 2 ? "#2a1010" : "#18232e"}
          stroke={col === 2 ? "#c0392b" : "#1e3045"}
          strokeWidth={col === 2 ? "1" : "0.5"}
        />
        {col === 2 ? (
          <text
            x={125 + col * 84}
            y={171}
            textAnchor="middle"
            fontSize="11"
            fill="#e74c3c"
            fontFamily="monospace"
            fontWeight="bold"
          >
            #REF!
          </text>
        ) : (
          <rect
            x={92 + col * 84}
            y={161}
            width={20 + ((col * 9) % 32)}
            height="7"
            rx="1"
            fill="#2a4a5e"
            opacity="0.5"
          />
        )}
      </g>
    ))}

    {/* ── Row 4: circular ref on cols A & D ── */}
    {[0, 1, 2, 3, 4].map((col) => (
      <g key={`circ-${col}`}>
        <rect
          x={84 + col * 84}
          y={186}
          width="83"
          height="37"
          fill={col === 0 || col === 3 ? "#1e200a" : "#18232e"}
          stroke={col === 0 || col === 3 ? "#d4ac0d" : "#1e3045"}
          strokeWidth={col === 0 || col === 3 ? "1" : "0.5"}
        />
        {col === 0 || col === 3 ? (
          <text
            x={125 + col * 84}
            y={209}
            textAnchor="middle"
            fontSize="10"
            fill="#f0c040"
            fontFamily="monospace"
          >
            CIRC
          </text>
        ) : (
          <rect
            x={92 + col * 84}
            y={199}
            width={18 + ((col * 5) % 30)}
            height="7"
            rx="1"
            fill="#2a4a5e"
            opacity="0.5"
          />
        )}
      </g>
    ))}

    {/* ── Row 5: macro stopped on col E ── */}
    {[0, 1, 2, 3, 4].map((col) => (
      <g key={`macro-${col}`}>
        <rect
          x={84 + col * 84}
          y={224}
          width="83"
          height="37"
          fill={col === 4 ? "#1a1020" : "#18232e"}
          stroke={col === 4 ? "#8e44ad" : "#1e3045"}
          strokeWidth={col === 4 ? "1" : "0.5"}
        />
        {col === 4 ? (
          <text
            x={125 + col * 84}
            y={247}
            textAnchor="middle"
            fontSize="9"
            fill="#9b59b6"
            fontFamily="monospace"
          >
            STOPPED
          </text>
        ) : (
          <rect
            x={92 + col * 84}
            y={237}
            width={15 + ((col * 13) % 34)}
            height="7"
            rx="1"
            fill="#2a4a5e"
            opacity="0.4"
          />
        )}
      </g>
    ))}

    {/* ── Row 6: #VALUE! errors alternating ── */}
    {[0, 1, 2, 3, 4].map((col) => (
      <g key={`broken-${col}`}>
        <rect
          x={84 + col * 84}
          y={262}
          width="83"
          height="37"
          fill={col % 2 === 0 ? "#1a0e0e" : "#18232e"}
          stroke={col % 2 === 0 ? "#922b21" : "#1e3045"}
          strokeWidth={col % 2 === 0 ? "1" : "0.5"}
        />
        {col % 2 === 0 && (
          <text
            x={125 + col * 84}
            y={285}
            textAnchor="middle"
            fontSize="10"
            fill="#c0392b"
            fontFamily="monospace"
          >
            #VALUE!
          </text>
        )}
      </g>
    ))}

    {/* ── Row 7: empty / faded out ── */}
    {[0, 1, 2, 3, 4].map((col) => (
      <rect
        key={`empty-${col}`}
        x={84 + col * 84}
        y={300}
        width="83"
        height="30"
        fill="#111820"
        stroke="#1a2535"
        strokeWidth="0.5"
        opacity="0.4"
      />
    ))}

    {/* ── Diagonal stripe overlay on error rows ── */}
    <rect
      x="16"
      y="186"
      width="488"
      height="144"
      fill="url(#bwb-stripes)"
      clipPath="url(#bwb-inner-clip)"
    />

    {/* ── Warning triangle — inset from right edge ── */}
    <g transform="translate(452, 54)">
      <polygon points="22,2 43,40 1,40" fill="#c0392b" opacity="0.92" />
      <text
        x="22"
        y="32"
        textAnchor="middle"
        fontSize="18"
        fill="white"
        fontWeight="bold"
        fontFamily="sans-serif"
      >
        !
      </text>
    </g>

    {/* ── Spinning loader ── */}
    <g transform="translate(252, 140)">
      <circle
        cx="0"
        cy="0"
        r="13"
        stroke="#046999"
        strokeWidth="2"
        strokeDasharray="28 18"
        opacity="0.55"
      />
      <circle cx="0" cy="0" r="7" fill="#046999" opacity="0.12" />
    </g>

    {/* ── Status bar — baked into SVG bottom, no external label needed ── */}
    <rect
      x="16"
      y="332"
      width="488"
      height="32"
      fill="#0a1520"
      clipPath="url(#bwb-inner-clip)"
    />
    <rect x="16" y="332" width="488" height="1" fill="#1e3045" />
    {/* Pulsing error dot */}
    <circle cx="34" cy="348" r="4" fill="#e74c3c" opacity="0.9" />
    {/* Error label */}
    <text
      x="44"
      y="353"
      fontSize="9"
      fill="#e74c3c"
      fontFamily="monospace"
      fontWeight="700"
      letterSpacing="1"
    >
      WORKBOOK ERRORS DETECTED
    </text>
    {/* Right-side error count */}
    <rect x="414" y="339" width="78" height="18" rx="9" fill="#2a1010" />
    <text
      x="453"
      y="352"
      textAnchor="middle"
      fontSize="9"
      fill="#e74c3c"
      fontFamily="monospace"
      fontWeight="700"
    >
      3 ERRORS
    </text>
  </svg>
);

export default BrokenWorkbookSvg;
