// app/custom-design-and-development/(svgs)/AddinIcon.js

export const AddinIcon = () => (
  <svg viewBox="0 0 44 44" fill="none" aria-hidden="true">
    {/* Base app window */}
    <rect
      x="5"
      y="8"
      width="34"
      height="28"
      rx="3"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    {/* Ribbon/toolbar strip */}
    <path d="M5 15h34" stroke="currentColor" strokeWidth="1.5" />
    {/* Standard ribbon buttons */}
    <rect
      x="8"
      y="10"
      width="5"
      height="3"
      rx="0.8"
      stroke="currentColor"
      strokeWidth="1.2"
    />
    <rect
      x="15"
      y="10"
      width="5"
      height="3"
      rx="0.8"
      stroke="currentColor"
      strokeWidth="1.2"
    />
    <rect
      x="22"
      y="10"
      width="5"
      height="3"
      rx="0.8"
      stroke="currentColor"
      strokeWidth="1.2"
    />
    {/* Divider before add-in */}
    <path
      d="M30 9v5"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      opacity="0.5"
    />
    {/* Add-in button — highlighted, special */}
    <rect
      x="32"
      y="10"
      width="5"
      height="3"
      rx="0.8"
      stroke="currentColor"
      strokeWidth="1.2"
      fill="currentColor"
      fillOpacity="0.12"
    />
    {/* Plus symbol in add-in button */}
    <path
      d="M34.5 10.7v1.6M33.7 11.5h1.6"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
    />
    {/* Puzzle piece body in content area */}
    <path
      d="M16 21h4v-2.5a1.5 1.5 0 0 1 3 0V21h4v4h-2.5a1.5 1.5 0 0 0 0 3H27v4H16V21z"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
  </svg>
);
