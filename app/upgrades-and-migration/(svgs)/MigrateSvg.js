export const MigrateSvg = () => (
  <svg
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <circle cx="40" cy="40" r="38" fill="#e8f4fa" />
    {/* Source box */}
    <rect
      x="12"
      y="32"
      width="22"
      height="18"
      rx="2"
      stroke="#046999"
      strokeWidth="2"
      fill="none"
    />
    <rect
      x="16"
      y="37"
      width="10"
      height="3"
      rx="1"
      fill="#046999"
      opacity="0.4"
    />
    <rect
      x="16"
      y="43"
      width="14"
      height="2"
      rx="1"
      fill="#046999"
      opacity="0.3"
    />
    {/* Arrow */}
    <path
      d="M36 41H52"
      stroke="#046999"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M48 37L53 41L48 45"
      stroke="#046999"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    {/* Destination — cloud/server */}
    <path
      d="M55 45C55 45 65 45 67 41C69 37 65 33 61 34C60 31 57 29 54 31C51 28 47 29 47 32C44 32 44 36 46 38L55 38Z"
      stroke="#046999"
      strokeWidth="2"
      fill="#e8f4fa"
      strokeLinejoin="round"
    />
    <path
      d="M51 41L51 48M55 40L55 48M59 41L59 48"
      stroke="#046999"
      strokeWidth="1.8"
      strokeLinecap="round"
      opacity="0.6"
    />
  </svg>
);
