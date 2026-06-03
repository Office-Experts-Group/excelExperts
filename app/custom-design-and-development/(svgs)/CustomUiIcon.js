// app/custom-design-and-development/(svgs)/CustomUiIcon.js

export const CustomUiIcon = () => (
  <svg viewBox="0 0 44 44" fill="none" aria-hidden="true">
    {/* Monitor frame */}
    <rect
      x="4"
      y="6"
      width="36"
      height="24"
      rx="3"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    {/* Screen divider — top bar */}
    <path d="M4 13h36" stroke="currentColor" strokeWidth="1.5" />
    {/* Left nav panel */}
    <path
      d="M4 13v17h8V13"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    {/* Nav items */}
    <path
      d="M6.5 17h3M6.5 20h3M6.5 23h3"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
    {/* Content card top */}
    <rect
      x="14"
      y="16"
      width="10"
      height="6"
      rx="1"
      stroke="currentColor"
      strokeWidth="1.3"
    />
    {/* Content lines */}
    <path
      d="M14 25h10M14 27.5h7"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
    />
    {/* Small chart bars on right */}
    <rect
      x="27"
      y="21"
      width="3"
      height="5"
      rx="0.5"
      stroke="currentColor"
      strokeWidth="1.3"
    />
    <rect
      x="31.5"
      y="18"
      width="3"
      height="8"
      rx="0.5"
      stroke="currentColor"
      strokeWidth="1.3"
    />
    {/* Stand */}
    <path
      d="M18 30v4M26 30v4M15 34h14"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);
