// app/services/excel/excel-formulas-and-custom-formulas/(svgs)/CustomSVG.jsx

const CustomSVG = () => (
  <svg
    viewBox="0 0 80 80"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    fill="none"
  >
    {/* Outer gear ring */}
    <circle cx="40" cy="40" r="18" stroke="rgba(4,105,153,0.25)" strokeWidth="1.5" />
    <circle cx="40" cy="40" r="10" stroke="#046999" strokeWidth="2" opacity="0.7" />
    <circle cx="40" cy="40" r="4" fill="#046999" opacity="0.6" />

    {/* Gear teeth — 8 evenly spaced rectangles rotated around centre */}
    {Array.from({ length: 8 }).map((_, i) => {
      const angle = (i * 45 * Math.PI) / 180;
      const x = 40 + 19 * Math.cos(angle) - 2.5;
      const y = 40 + 19 * Math.sin(angle) - 4;
      return (
        <rect
          key={i}
          x={x}
          y={y}
          width="5"
          height="8"
          rx="1.5"
          fill="rgba(4,105,153,0.35)"
          transform={`rotate(${i * 45} 40 40)`}
          style={{ transformOrigin: "40px 40px" }}
        />
      );
    })}

    {/* Wrench handle */}
    <path
      d="M 54 26 L 62 18"
      stroke="#046999"
      strokeWidth="2.5"
      strokeLinecap="round"
      opacity="0.7"
    />
    <circle cx="56" cy="24" r="5" stroke="#046999" strokeWidth="2" opacity="0.5" />

    {/* Decorative dots */}
    <circle cx="14" cy="20" r="2" fill="rgba(4,105,153,0.2)" />
    <circle cx="20" cy="14" r="1.5" fill="rgba(4,105,153,0.15)" />
    <circle cx="66" cy="60" r="2" fill="rgba(4,105,153,0.2)" />
    <circle cx="60" cy="66" r="1.5" fill="rgba(4,105,153,0.15)" />
  </svg>
);

export default CustomSVG;
