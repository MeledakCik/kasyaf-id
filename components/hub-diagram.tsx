"use client";

// Signature element: kasyaf.id is literally a DNS hub routing to two subdomains.
// This schematic makes that topology visible and legible instead of decorative —
// two lines from the root node carry animated pulses out to each service, colored
// by that service's live status (accent = LIVE console, warn = BETA vector lab).

export function HubDiagram() {
  return (
    <svg
      viewBox="0 0 640 260"
      fill="none"
      className="w-full h-auto max-w-2xl mx-auto"
      aria-hidden="true"
    >
      {/* base lines */}
      <path d="M320 60 C 320 110, 140 110, 140 200" stroke="#232326" strokeWidth="1.5" />
      <path d="M320 60 C 320 110, 500 110, 500 200" stroke="#232326" strokeWidth="1.5" />
      <line x1="320" y1="30" x2="320" y2="60" stroke="#232326" strokeWidth="1.5" />

      {/* animated pulses traveling from root to each leaf */}
      <circle r="3" fill="#00e095">
        <animateMotion
          dur="2.4s"
          repeatCount="indefinite"
          begin="0.2s"
          path="M320 60 C 320 110, 140 110, 140 200"
        />
        <animate attributeName="opacity" values="0;1;1;0" dur="2.4s" repeatCount="indefinite" begin="0.2s" />
      </circle>
      <circle r="3" fill="#f2c94c">
        <animateMotion
          dur="2.4s"
          repeatCount="indefinite"
          begin="1.1s"
          path="M320 60 C 320 110, 500 110, 500 200"
        />
        <animate attributeName="opacity" values="0;1;1;0" dur="2.4s" repeatCount="indefinite" begin="1.1s" />
      </circle>

      {/* root node: kasyaf.id */}
      <g transform="translate(320,20)">
        <circle r="10" fill="#00e095" opacity="0.12" />
        <circle r="5" fill="#00e095" />
        <text x="0" y="-18" textAnchor="middle" className="fill-zinc-300" fontSize="11" fontFamily="JetBrains Mono, monospace">
          kasyaf.id
        </text>
      </g>

      {/* leaf: console */}
      <g transform="translate(140,210)">
        <circle r="9" fill="#00e095" opacity="0.1" />
        <circle r="4" fill="#00e095" />
        <text x="0" y="26" textAnchor="middle" className="fill-zinc-500" fontSize="10" fontFamily="JetBrains Mono, monospace">
          console.kasyaf.id
        </text>
      </g>

      {/* leaf: vector */}
      <g transform="translate(500,210)">
        <circle r="9" fill="#f2c94c" opacity="0.1" />
        <circle r="4" fill="#f2c94c" />
        <text x="0" y="26" textAnchor="middle" className="fill-zinc-500" fontSize="10" fontFamily="JetBrains Mono, monospace">
          vector.kasyaf.id
        </text>
      </g>
    </svg>
  );
}
