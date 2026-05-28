// export const MigrationMapSvg = () => (
//   <svg
//     viewBox="0 0 440 360"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//     // className={styles.mapSvg}
//     aria-hidden="true"
//   >
//     {/* ── Excel source node (left) ── */}
//     <rect
//       x="20"
//       y="140"
//       width="110"
//       height="80"
//       rx="6"
//       fill="#1a0e0e"
//       stroke="#922b21"
//       strokeWidth="1.5"
//     />
//     {/* X logo simplified */}
//     <rect x="34" y="152" width="28" height="28" rx="3" fill="#c0392b" />
//     <text
//       x="48"
//       y="172"
//       textAnchor="middle"
//       fontSize="16"
//       fill="white"
//       fontWeight="bold"
//       fontFamily="sans-serif"
//     >
//       X
//     </text>
//     <text x="75" y="164" fontSize="9" fill="#e74c3c" fontFamily="monospace">
//       workbook
//     </text>
//     <text x="75" y="176" fontSize="8" fill="#922b21" fontFamily="monospace">
//       .xlsx 87MB
//     </text>
//     <text x="75" y="188" fontSize="8" fill="#922b21" fontFamily="monospace">
//       3 users max
//     </text>
//     {/* Stress cracks */}
//     <path
//       d="M30 195 L35 210 M50 200 L46 218 M65 198 L60 214"
//       stroke="#922b21"
//       strokeWidth="1"
//       opacity="0.4"
//     />

//     {/* Problem labels */}
//     <text
//       x="75"
//       y="238"
//       fontSize="8"
//       fill="#c0392b"
//       fontFamily="monospace"
//       opacity="0.7"
//     >
//       slow
//     </text>
//     <text
//       x="38"
//       y="238"
//       fontSize="8"
//       fill="#c0392b"
//       fontFamily="monospace"
//       opacity="0.7"
//     >
//       fragile
//     </text>
//     <text
//       x="57"
//       y="250"
//       fontSize="8"
//       fill="#c0392b"
//       fontFamily="monospace"
//       opacity="0.7"
//     >
//       risky
//     </text>

//     {/* ── Centre diverging arrow trunk ── */}
//     <path
//       d="M130 180 L180 180"
//       stroke="#046999"
//       strokeWidth="2"
//       strokeDasharray="4 3"
//       opacity="0.5"
//     />
//     <circle cx="180" cy="180" r="4" fill="#046999" opacity="0.7" />

//     {/* ── Arrow to Power Apps (top) ── */}
//     <path
//       d="M180 180 Q200 100 240 80"
//       stroke="#046999"
//       strokeWidth="1.8"
//       strokeLinecap="round"
//       fill="none"
//     />
//     <polygon points="240,75 247,87 235,88" fill="#046999" opacity="0.8" />

//     {/* ── Arrow to SQL Server (middle top) ── */}
//     <path
//       d="M180 180 Q210 148 248 138"
//       stroke="#046999"
//       strokeWidth="1.8"
//       strokeLinecap="round"
//       fill="none"
//     />
//     <polygon points="248,133 256,143 244,145" fill="#046999" opacity="0.8" />

//     {/* ── Arrow to Azure (middle) ── */}
//     <path
//       d="M184 180 L252 180"
//       stroke="#046999"
//       strokeWidth="1.8"
//       strokeLinecap="round"
//     />
//     <polygon points="250,175 260,180 250,185" fill="#046999" opacity="0.8" />

//     {/* ── Arrow to Power Automate (middle bottom) ── */}
//     <path
//       d="M180 180 Q210 212 248 222"
//       stroke="#046999"
//       strokeWidth="1.8"
//       strokeLinecap="round"
//       fill="none"
//     />
//     <polygon points="248,217 256,227 244,229" fill="#046999" opacity="0.8" />

//     {/* ── Arrow to Power BI (bottom) ── */}
//     <path
//       d="M180 180 Q200 258 240 276"
//       stroke="#046999"
//       strokeWidth="1.8"
//       strokeLinecap="round"
//       fill="none"
//     />
//     <polygon points="240,271 247,283 235,283" fill="#046999" opacity="0.8" />

//     {/* ── Destination nodes ── */}

//     {/* Power Apps */}
//     <rect
//       x="258"
//       y="56"
//       width="130"
//       height="50"
//       rx="5"
//       fill="#e8f4fa"
//       stroke="#046999"
//       strokeWidth="1.2"
//     />
//     <rect x="268" y="65" width="18" height="18" rx="3" fill="#046999" />
//     <text
//       x="277"
//       y="78"
//       textAnchor="middle"
//       fontSize="10"
//       fill="white"
//       fontWeight="bold"
//     >
//       PA
//     </text>
//     <text
//       x="295"
//       y="74"
//       fontSize="9"
//       fill="#046999"
//       fontWeight="700"
//       fontFamily="sans-serif"
//     >
//       Power Apps
//     </text>
//     <text x="295" y="85" fontSize="8" fill="#4a5568" fontFamily="sans-serif">
//       Custom application
//     </text>
//     <text x="295" y="97" fontSize="8" fill="#4a5568" fontFamily="sans-serif">
//       unlimited users
//     </text>

//     {/* SQL Server */}
//     <rect
//       x="258"
//       y="118"
//       width="130"
//       height="50"
//       rx="5"
//       fill="#e8f4fa"
//       stroke="#046999"
//       strokeWidth="1.2"
//     />
//     <rect x="268" y="127" width="18" height="18" rx="3" fill="#035878" />
//     <text
//       x="277"
//       y="140"
//       textAnchor="middle"
//       fontSize="8"
//       fill="white"
//       fontWeight="bold"
//       fontFamily="monospace"
//     >
//       SQL
//     </text>
//     <text
//       x="295"
//       y="136"
//       fontSize="9"
//       fill="#046999"
//       fontWeight="700"
//       fontFamily="sans-serif"
//     >
//       SQL Server
//     </text>
//     <text x="295" y="147" fontSize="8" fill="#4a5568" fontFamily="sans-serif">
//       Proper database backend
//     </text>
//     <text x="295" y="159" fontSize="8" fill="#4a5568" fontFamily="sans-serif">
//       millions of rows
//     </text>

//     {/* Azure */}
//     <rect
//       x="262"
//       y="156"
//       width="130"
//       height="50"
//       rx="5"
//       fill="#e8f4fa"
//       stroke="#046999"
//       strokeWidth="1.2"
//     />
//     <rect x="272" y="165" width="18" height="18" rx="3" fill="#0a85bf" />
//     <text
//       x="281"
//       y="178"
//       textAnchor="middle"
//       fontSize="8"
//       fill="white"
//       fontWeight="bold"
//     >
//       Az
//     </text>
//     <text
//       x="299"
//       y="174"
//       fontSize="9"
//       fill="#046999"
//       fontWeight="700"
//       fontFamily="sans-serif"
//     >
//       Azure Cloud
//     </text>
//     <text x="299" y="185" fontSize="8" fill="#4a5568" fontFamily="sans-serif">
//       Scalable &amp; secure
//     </text>
//     <text x="299" y="197" fontSize="8" fill="#4a5568" fontFamily="sans-serif">
//       anywhere access
//     </text>

//     {/* Power Automate */}
//     <rect
//       x="258"
//       y="202"
//       width="130"
//       height="50"
//       rx="5"
//       fill="#e8f4fa"
//       stroke="#046999"
//       strokeWidth="1.2"
//     />
//     <rect x="268" y="211" width="18" height="18" rx="3" fill="#046999" />
//     <path d="M272 215 L282 220 L272 225 Z" fill="white" />
//     <text
//       x="295"
//       y="220"
//       fontSize="9"
//       fill="#046999"
//       fontWeight="700"
//       fontFamily="sans-serif"
//     >
//       Power Automate
//     </text>
//     <text x="295" y="231" fontSize="8" fill="#4a5568" fontFamily="sans-serif">
//       Automated workflows
//     </text>
//     <text x="295" y="243" fontSize="8" fill="#4a5568" fontFamily="sans-serif">
//       zero manual steps
//     </text>

//     {/* Power BI */}
//     <rect
//       x="258"
//       y="258"
//       width="130"
//       height="50"
//       rx="5"
//       fill="#e8f4fa"
//       stroke="#046999"
//       strokeWidth="1.2"
//     />
//     <rect x="268" y="267" width="18" height="18" rx="3" fill="#034e72" />
//     <text
//       x="277"
//       y="280"
//       textAnchor="middle"
//       fontSize="9"
//       fill="#f0c040"
//       fontWeight="bold"
//     >
//       BI
//     </text>
//     <text
//       x="295"
//       y="276"
//       fontSize="9"
//       fill="#046999"
//       fontWeight="700"
//       fontFamily="sans-serif"
//     >
//       Power BI
//     </text>
//     <text x="295" y="287" fontSize="8" fill="#4a5568" fontFamily="sans-serif">
//       Real-time dashboards
//     </text>
//     <text x="295" y="299" fontSize="8" fill="#4a5568" fontFamily="sans-serif">
//       live data reporting
//     </text>

//     {/* We help arrow label */}
//     <text
//       x="148"
//       y="172"
//       fontSize="8"
//       fill="#046999"
//       fontFamily="monospace"
//       opacity="0.7"
//     >
//       we guide
//     </text>
//     <text
//       x="148"
//       y="183"
//       fontSize="8"
//       fill="#046999"
//       fontFamily="monospace"
//       opacity="0.7"
//     >
//       you here
//     </text>
//   </svg>
// );

export const MigrationMapSvg = () => {
  // Box layout: [cy, label, sub1, sub2, iconFill, iconLabel, iconColor]
  const destinations = [
    {
      cy: 46,
      label: "Power Apps",
      sub1: "Custom application",
      sub2: "unlimited users",
      iconBg: "#046999",
      iconText: "PA",
      iconColor: "white",
    },
    {
      cy: 110,
      label: "SQL Server",
      sub1: "Proper database",
      sub2: "millions of rows",
      iconBg: "#035878",
      iconText: "SQL",
      iconColor: "white",
    },
    {
      cy: 174,
      label: "Azure Cloud",
      sub1: "Scalable & secure",
      sub2: "anywhere access",
      iconBg: "#0a85bf",
      iconText: "Az",
      iconColor: "white",
    },
    {
      cy: 238,
      label: "Power Automate",
      sub1: "Automated workflows",
      sub2: "zero manual steps",
      iconBg: "#046999",
      iconText: "▶",
      iconColor: "white",
    },
    {
      cy: 302,
      label: "Power BI",
      sub1: "Real-time dashboards",
      sub2: "live data reporting",
      iconBg: "#034e72",
      iconText: "BI",
      iconColor: "#f0c040",
    },
  ];

  const srcCy = 174; // source node vertical centre (aligns with Azure = middle box)
  const srcX = 130; // right edge of source node
  const hubX = 185; // fan-out origin x
  const boxX = 250; // left edge of destination boxes
  const boxW = 160;
  const boxH = 52;

  return (
    <svg
      viewBox="0 0 440 348"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* ── Excel source node ── */}
      <rect
        x="20"
        y={srcCy - 44}
        width="110"
        height="88"
        rx="6"
        fill="#1a0e0e"
        stroke="#922b21"
        strokeWidth="1.5"
      />
      <rect
        x="34"
        y={srcCy - 34}
        width="28"
        height="28"
        rx="3"
        fill="#c0392b"
      />
      <text
        x="48"
        y={srcCy - 14}
        textAnchor="middle"
        fontSize="16"
        fill="white"
        fontWeight="bold"
        fontFamily="sans-serif"
      >
        X
      </text>
      <text
        x="72"
        y={srcCy - 24}
        fontSize="9"
        fill="#e74c3c"
        fontFamily="monospace"
      >
        workbook
      </text>
      <text
        x="72"
        y={srcCy - 12}
        fontSize="8"
        fill="#922b21"
        fontFamily="monospace"
      >
        .xlsx 87MB
      </text>
      <text x="72" y={srcCy} fontSize="8" fill="#922b21" fontFamily="monospace">
        3 users max
      </text>

      {/* ── Trunk: source right edge → hub ── */}
      <path
        d={`M${srcX} ${srcCy} L${hubX} ${srcCy}`}
        stroke="#046999"
        strokeWidth="2"
        strokeDasharray="4 3"
        opacity="0.5"
      />
      <circle cx={hubX} cy={srcCy} r="4" fill="#046999" opacity="0.75" />

      {/* ── One curved path + chevron per destination ── */}
      {destinations.map(({ cy, label }) => {
        const tipX = boxX - 2; // path ends 2px before box edge
        const arrowX = boxX - 1; // chevron tip sits exactly at box edge

        // Straight line for the middle (Azure), curves for others
        const d =
          cy === srcCy
            ? `M${hubX} ${srcCy} L${tipX} ${cy}`
            : `M${hubX} ${srcCy} C${hubX + 30} ${srcCy} ${tipX - 30} ${cy} ${tipX} ${cy}`;

        return (
          <g key={label}>
            <path
              d={d}
              stroke="#046999"
              strokeWidth="1.8"
              strokeLinecap="round"
              fill="none"
            />
            {/* Right-pointing chevron: tip at (arrowX, cy) */}
            <polygon
              points={`${arrowX},${cy} ${arrowX - 9},${cy - 5} ${arrowX - 9},${cy + 5}`}
              fill="#046999"
              opacity="0.85"
            />
          </g>
        );
      })}

      {/* ── Destination boxes ── */}
      {destinations.map(
        ({ cy, label, sub1, sub2, iconBg, iconText, iconColor }) => {
          const bx = boxX;
          const by = cy - boxH / 2;
          const iconX = bx + 10;
          const iconY = by + (boxH - 20) / 2;
          const textX = iconX + 26;

          return (
            <g key={label}>
              <rect
                x={bx}
                y={by}
                width={boxW}
                height={boxH}
                rx="5"
                fill="#e8f4fa"
                stroke="#046999"
                strokeWidth="1.2"
              />
              {/* Icon badge */}
              <rect
                x={iconX}
                y={iconY}
                width="20"
                height="20"
                rx="3"
                fill={iconBg}
              />
              <text
                x={iconX + 10}
                y={iconY + 14}
                textAnchor="middle"
                fontSize="8"
                fill={iconColor}
                fontWeight="bold"
                fontFamily="monospace"
              >
                {iconText}
              </text>
              {/* Label + sub-lines */}
              <text
                x={textX}
                y={by + 18}
                fontSize="9"
                fill="#046999"
                fontWeight="700"
                fontFamily="sans-serif"
              >
                {label}
              </text>
              <text
                x={textX}
                y={by + 30}
                fontSize="8"
                fill="#4a5568"
                fontFamily="sans-serif"
              >
                {sub1}
              </text>
              <text
                x={textX}
                y={by + 42}
                fontSize="8"
                fill="#4a5568"
                fontFamily="sans-serif"
              >
                {sub2}
              </text>
            </g>
          );
        },
      )}
    </svg>
  );
};
