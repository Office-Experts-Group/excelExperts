export const TransformSvg = () => (
  <svg
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <circle cx="40" cy="40" r="38" fill="#e8f4fa" />
    {/* Broken old box at bottom */}
    <path
      d="M22 60L30 55L38 58L32 63Z"
      stroke="#046999"
      strokeWidth="1.5"
      strokeLinejoin="round"
      fill="none"
      opacity="0.35"
    />
    <path
      d="M22 60L24 54L30 55"
      stroke="#046999"
      strokeWidth="1.5"
      strokeLinejoin="round"
      fill="none"
      opacity="0.35"
    />
    {/* Rocket body */}
    <path d="M40 50L35 58L40 55L45 58Z" fill="#046999" opacity="0.5" />
    <rect x="36" y="28" width="8" height="26" rx="4" fill="#046999" />
    {/* Nose */}
    <path d="M36 32C36 32 38 22 40 20C42 22 44 32 44 32" fill="#034e72" />
    {/* Fins */}
    <path d="M36 50L30 56L34 50Z" fill="#046999" opacity="0.7" />
    <path d="M44 50L50 56L46 50Z" fill="#046999" opacity="0.7" />
    {/* Window */}
    <circle
      cx="40"
      cy="38"
      r="3"
      stroke="white"
      strokeWidth="1.8"
      fill="none"
    />
    {/* Stars */}
    <circle cx="24" cy="26" r="1.5" fill="#046999" opacity="0.5" />
    <circle cx="58" cy="32" r="1" fill="#046999" opacity="0.4" />
    <circle cx="55" cy="22" r="1.5" fill="#046999" opacity="0.6" />
  </svg>
);
