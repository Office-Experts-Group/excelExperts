// app/services/excel/excel-formulas-and-custom-formulas/(svgs)/FormulaSVG.jsx

const FormulaSVG = () => (
  <svg
    viewBox="0 0 80 80"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    fill="none"
  >
    {/* Cell border grid */}
    <rect x="10" y="10" width="60" height="60" rx="4" stroke="rgba(4,105,153,0.2)" strokeWidth="1.5" />
    <line x1="10" y1="30" x2="70" y2="30" stroke="rgba(4,105,153,0.15)" strokeWidth="1" />
    <line x1="10" y1="50" x2="70" y2="50" stroke="rgba(4,105,153,0.15)" strokeWidth="1" />
    <line x1="35" y1="10" x2="35" y2="70" stroke="rgba(4,105,153,0.15)" strokeWidth="1" />

    {/* Active cell highlight */}
    <rect x="35" y="50" width="35" height="20" rx="0" fill="rgba(4,105,153,0.12)" />
    <rect x="35" y="50" width="35" height="20" rx="0" stroke="#046999" strokeWidth="1.5" />

    {/* = sign in active cell */}
    <line x1="46" y1="57" x2="59" y2="57" stroke="#046999" strokeWidth="2" strokeLinecap="round" />
    <line x1="46" y1="63" x2="59" y2="63" stroke="#046999" strokeWidth="2" strokeLinecap="round" />

    {/* fx label top-left */}
    <rect x="10" y="10" width="25" height="20" rx="0" fill="rgba(4,105,153,0.08)" />
    <text x="22.5" y="24" textAnchor="middle" fill="rgba(4,105,153,0.7)" fontSize="9" fontWeight="700" fontFamily="monospace">fx</text>

    {/* Sample data dots in other cells */}
    {[
      [52, 20], [52, 40], [17, 40], [17, 60],
    ].map(([cx, cy], i) => (
      <rect key={i} x={cx - 6} y={cy - 4} width="18" height="8" rx="2" fill="rgba(4,105,153,0.1)" />
    ))}
  </svg>
);

export default FormulaSVG;
