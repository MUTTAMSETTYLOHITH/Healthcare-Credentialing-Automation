'use client';
type P = { percent:number };
export default function Radial({ percent }:P){
  const p = Math.max(0, Math.min(100, percent));
  const r = 78, cx = 100, cy = 100;
  const c = 2*Math.PI*r;
  const dash = c*(p/100);
  return (
    <svg width="100%" viewBox="0 0 200 200" role="img">
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="rgba(148,163,184,0.2)" strokeWidth="14"/>
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="#60a5fa" strokeWidth="14" strokeDasharray={`${dash} ${c-dash}`} strokeLinecap="round" transform="rotate(-90 100 100)" />
      <text x="100" y="100" textAnchor="middle" dominantBaseline="central" fontSize="28" fill="#e2e8f0" fontWeight="800">{p.toFixed(0)}%</text>
      <text x="100" y="130" textAnchor="middle" fontSize="11" fill="#94a3b8">SLA Attainment (30d)</text>
    </svg>
  );
}
