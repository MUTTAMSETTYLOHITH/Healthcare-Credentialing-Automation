'use client';
type P = { data: { label:string; value:number }[] };
export default function Bar({ data }:P){
  const w = 680, h = 220, pad = 28;
  const max = Math.max(...data.map(d=>d.value), 1);
  const bw = (w-2*pad)/data.length - 10;
  return (
    <svg width="100%" viewBox={`0 0 ${w} ${h}`} role="img">
      <g stroke="rgba(148,163,184,0.15)">{Array.from({length:4}).map((_,i)=>{ const y = pad + i*((h-2*pad)/3); return <line key={i} x1={pad} x2={w-pad} y1={y} y2={y}/>; })}</g>
      {data.map((d,i)=>{ const x = pad + i*((w-2*pad)/data.length) + 5; const bh = (d.value/max)*(h-2*pad); const y = h-pad-bh; return <g key={d.label}><rect x={x} y={y} width={bw} height={bh} fill="#34d399" rx="6"/><text x={x + bw/2} y={h-8} textAnchor="middle" fontSize="11" fill="#94a3b8">{d.label}</text></g> })}
    </svg>
  );
}
