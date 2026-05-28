export const DiagnosticSvg = () => (
  <svg
    viewBox="0 0 400 460"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    // className={styles.diagSvg}
    aria-hidden="true"
  >
    {/* Terminal window chrome */}
    <rect
      x="0"
      y="0"
      width="400"
      height="460"
      rx="6"
      fill="#0d1b2a"
      stroke="#1e3045"
      strokeWidth="1"
    />
    <rect x="0" y="0" width="400" height="36" rx="6" fill="#111820" />
    <rect x="0" y="24" width="400" height="12" fill="#111820" />
    <circle cx="20" cy="18" r="5" fill="#c0392b" opacity="0.7" />
    <circle cx="36" cy="18" r="5" fill="#e67e22" opacity="0.5" />
    <circle cx="52" cy="18" r="5" fill="#27ae60" opacity="0.4" />
    <text
      x="185"
      y="23"
      textAnchor="middle"
      fontSize="10"
      fill="#2a4a5e"
      fontFamily="monospace"
    >
      excel_diagnostics.sh
    </text>

    {/* Scan line */}
    <text
      x="16"
      y="62"
      fontSize="10"
      fill="#046999"
      fontFamily="monospace"
      opacity="0.8"
    >
      $ running compatibility scan...
    </text>

    {/* Check 1: PASS */}
    <text x="16" y="88" fontSize="10" fill="#2a4a5e" fontFamily="monospace">
      checking Office version...
    </text>
    <rect x="280" y="76" width="104" height="18" rx="2" fill="#0a2a1a" />
    <text
      x="332"
      y="89"
      textAnchor="middle"
      fontSize="10"
      fill="#27ae60"
      fontFamily="monospace"
      fontWeight="bold"
    >
      ✓ PASS
    </text>

    {/* Check 2: FAIL 32/64 bit */}
    <text x="16" y="116" fontSize="10" fill="#2a4a5e" fontFamily="monospace">
      checking bitness (32/64)...
    </text>
    <rect x="280" y="104" width="104" height="18" rx="2" fill="#2a0a0a" />
    <text
      x="332"
      y="117"
      textAnchor="middle"
      fontSize="10"
      fill="#e74c3c"
      fontFamily="monospace"
      fontWeight="bold"
    >
      ✗ FAIL
    </text>

    {/* Indented error detail */}
    <text
      x="28"
      y="136"
      fontSize="9"
      fill="#8e0000"
      fontFamily="monospace"
      opacity="0.9"
    >
      → AddIn conflict: 32-bit DLL loaded
    </text>
    <text
      x="28"
      y="150"
      fontSize="9"
      fill="#8e0000"
      fontFamily="monospace"
      opacity="0.9"
    >
      → Ptr type mismatch in Module1
    </text>

    {/* Check 3: WARN VBA */}
    <text x="16" y="176" fontSize="10" fill="#2a4a5e" fontFamily="monospace">
      scanning VBA modules...
    </text>
    <rect x="280" y="164" width="104" height="18" rx="2" fill="#2a1e00" />
    <text
      x="332"
      y="177"
      textAnchor="middle"
      fontSize="10"
      fill="#f39c12"
      fontFamily="monospace"
      fontWeight="bold"
    >
      ⚠ WARN
    </text>

    <text
      x="28"
      y="197"
      fontSize="9"
      fill="#7a5500"
      fontFamily="monospace"
      opacity="0.9"
    >
      → Deprecated: CreateObject("ADODB")
    </text>
    <text
      x="28"
      y="211"
      fontSize="9"
      fill="#7a5500"
      fontFamily="monospace"
      opacity="0.9"
    >
      → Windows API declare missing PtrSafe
    </text>

    {/* Check 4: FAIL shapes */}
    <text x="16" y="237" fontSize="10" fill="#2a4a5e" fontFamily="monospace">
      checking ActiveX controls...
    </text>
    <rect x="280" y="225" width="104" height="18" rx="2" fill="#2a0a0a" />
    <text
      x="332"
      y="238"
      textAnchor="middle"
      fontSize="10"
      fill="#e74c3c"
      fontFamily="monospace"
      fontWeight="bold"
    >
      ✗ FAIL
    </text>

    <text
      x="28"
      y="257"
      fontSize="9"
      fill="#8e0000"
      fontFamily="monospace"
      opacity="0.9"
    >
      → Button dimensions: 64px → 127px
    </text>
    <text
      x="28"
      y="271"
      fontSize="9"
      fill="#8e0000"
      fontFamily="monospace"
      opacity="0.9"
    >
      → Shape anchor mismatch on Sheet3
    </text>

    {/* Check 5: CRITICAL crash */}
    <text x="16" y="297" fontSize="10" fill="#2a4a5e" fontFamily="monospace">
      stability check...
    </text>
    <rect x="280" y="285" width="104" height="18" rx="2" fill="#2a0a0a" />
    <text
      x="332"
      y="298"
      textAnchor="middle"
      fontSize="9"
      fill="#e74c3c"
      fontFamily="monospace"
      fontWeight="bold"
    >
      ✗ CRITICAL
    </text>

    <text
      x="28"
      y="317"
      fontSize="9"
      fill="#8e0000"
      fontFamily="monospace"
      opacity="0.9"
    >
      → Last crash: Application.Calculate()
    </text>

    {/* Check 6: FAIL performance */}
    <text x="16" y="343" fontSize="10" fill="#2a4a5e" fontFamily="monospace">
      performance baseline...
    </text>
    <rect x="280" y="331" width="104" height="18" rx="2" fill="#2a1e00" />
    <text
      x="332"
      y="344"
      textAnchor="middle"
      fontSize="10"
      fill="#f39c12"
      fontFamily="monospace"
      fontWeight="bold"
    >
      ⚠ SLOW
    </text>

    <text
      x="28"
      y="363"
      fontSize="9"
      fill="#7a5500"
      fontFamily="monospace"
      opacity="0.9"
    >
      → Recalc time: 47s (threshold: 3s)
    </text>
    <text
      x="28"
      y="377"
      fontSize="9"
      fill="#7a5500"
      fontFamily="monospace"
      opacity="0.9"
    >
      → Volatile functions: 2,847
    </text>

    {/* Summary line */}
    <rect x="0" y="400" width="400" height="60" rx="0" fill="#0d1b2a" />
    <rect x="0" y="400" width="400" height="1" fill="#1e3045" />
    <text x="16" y="424" fontSize="10" fill="#2a4a5e" fontFamily="monospace">
      ─────────────────────────────────────────
    </text>
    <text
      x="16"
      y="444"
      fontSize="11"
      fill="#046999"
      fontFamily="monospace"
      fontWeight="bold"
    >
      2 CRITICAL 2 FAIL 2 WARN 1 PASS
    </text>
  </svg>
);
