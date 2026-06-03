// app/custom-design-and-development/(svgs)/MacroIcon.js

export const MacroIcon = () => (
  <svg viewBox="0 0 44 44" fill="none" aria-hidden="true">
    {/* Terminal/editor window */}
    <rect
      x="4"
      y="7"
      width="36"
      height="28"
      rx="3"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    {/* Top bar */}
    <path d="M4 14h36" stroke="currentColor" strokeWidth="1.5" />
    {/* Traffic light dots */}
    <circle cx="9" cy="10.5" r="1.4" stroke="currentColor" strokeWidth="1.2" />
    <circle cx="14" cy="10.5" r="1.4" stroke="currentColor" strokeWidth="1.2" />
    <circle cx="19" cy="10.5" r="1.4" stroke="currentColor" strokeWidth="1.2" />
    {/* Chevron prompt */}
    <path
      d="M9 20l4 3-4 3"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Code lines of varying width */}
    <path
      d="M16 20h14"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
    <path
      d="M16 23.5h10"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
    <path
      d="M16 27h16"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
    <path
      d="M16 30.5h8"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
    {/* Cursor blink block */}
    <rect
      x="25"
      y="29"
      width="3"
      height="3"
      rx="0.5"
      fill="currentColor"
      opacity="0.5"
    />
  </svg>
);
