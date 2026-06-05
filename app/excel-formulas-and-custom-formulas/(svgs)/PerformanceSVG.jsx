// app/services/excel/excel-formulas-and-custom-formulas/(svgs)/PerformanceSVG.jsx

const PerformanceSVG = () => (
  <svg
    viewBox="0 0 80 80"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    fill="none"
  >
    {/* Outer ring — degraded arc */}
    <circle cx="40" cy="40" r="30" stroke="rgba(4,105,153,0.18)" strokeWidth="1.5" />
    <circle
      cx="40"
      cy="40"
      r="30"
      stroke="#046999"
      strokeWidth="2"
      strokeDasharray="94 94"
      strokeDashoffset="47"
      strokeLinecap="round"
      transform="rotate(-90 40 40)"
      opacity="0.6"
    />

    {/* Gauge needle */}
    <line
      x1="40" y1="40"
      x2="56" y2="26"
      stroke="#046999"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle cx="40" cy="40" r="3" fill="#046999" />

    {/* Warning mark at low end of gauge */}
    <circle cx="18" cy="52" r="3.5" fill="none" stroke="rgba(4,105,153,0.4)" strokeWidth="1.5" />
    <line x1="18" y1="49.5" x2="18" y2="51.5" stroke="rgba(4,105,153,0.4)" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="18" cy="53.5" r="0.6" fill="rgba(4,105,153,0.4)" />

    {/* Tick marks */}
    {[0, 30, 60, 90, 120, 150, 180].map((deg, i) => {
      const rad = ((deg - 90) * Math.PI) / 180;
      const x1 = 40 + 26 * Math.cos(rad);
      const y1 = 40 + 26 * Math.sin(rad);
      const x2 = 40 + 30 * Math.cos(rad);
      const y2 = 40 + 30 * Math.sin(rad);
      return (
        <line
          key={i}
          x1={x1} y1={y1} x2={x2} y2={y2}
          stroke="rgba(4,105,153,0.3)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      );
    })}
  </svg>
);

export default PerformanceSVG;
