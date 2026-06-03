// app/custom-design-and-development/(svgs)/WorkbookIcon.js

export const WorkbookIcon = () => (
  <svg viewBox="0 0 44 44" fill="none" aria-hidden="true">
    {/* Back document (shadow) */}
    <rect
      x="10"
      y="8"
      width="26"
      height="32"
      rx="2.5"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeDasharray="3 2"
      opacity="0.4"
    />
    {/* Front document */}
    <rect
      x="7"
      y="5"
      width="26"
      height="32"
      rx="2.5"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    {/* Header bar — branded area */}
    <rect
      x="7"
      y="5"
      width="26"
      height="7"
      rx="2.5"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="currentColor"
      fillOpacity="0.1"
    />
    {/* Column headers — locked/protected feel */}
    <path
      d="M10 17h6M19 17h6M28 17h3"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
    />
    {/* Row separator */}
    <path d="M7 20h26" stroke="currentColor" strokeWidth="1" opacity="0.3" />
    {/* Data rows */}
    <path
      d="M10 23.5h4M19 23.5h7M28 23.5h3"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
    />
    <path d="M7 26.5h26" stroke="currentColor" strokeWidth="1" opacity="0.3" />
    <path
      d="M10 30h6M19 30h4M28 30h3"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
    />
    {/* Lock icon bottom-right — protected structure */}
    <rect
      x="26"
      y="30"
      width="6"
      height="5"
      rx="1"
      stroke="currentColor"
      strokeWidth="1.3"
    />
    <path
      d="M27.5 30v-1.5a1.5 1.5 0 0 1 3 0V30"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
    />
    <circle cx="29" cy="33" r="0.7" fill="currentColor" />
  </svg>
);
