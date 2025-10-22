'use client';
type P = { data: { label:string; value:number }[] };
export default function Area({ data }:P){
  const w = 680, h = 220, pad = 28;
  const xs = (i:number)=> pad + i*( (w-2*pad) / Math.max(1, data.length-1) );
  const min = 0, max = Math.max(...data.map(d=>d.value), 1);
  const ys = (v:number)=> h-pad - (v-min)/(max-min) * (h-2*pad);
  const path = data.map((d,i)=> `${i?'L':'M'}${xs(i)},${ys(d.value)}`).join(' ');
  const area = `M${pad},${h-pad} ${path} L${xs(data.length-1)},${h-pad} Z`;
  return (
    <svg width="100%" viewBox={`0 0 ${w} ${h}`} role="img">
      <defs>
        <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#60a5fa" stopOpacity="0.6"/><stop offset="100%" stopColor="#60a5fa" stopOpacity="0"/></linearGradient>
      </defs>
      <g stroke="rgba(148,163,184,0.15)">{Array.from({length:4}).map((_,i)=>{ const y = pad + i*((h-2*pad)/3); return <line key={i} x1={pad} x2={w-pad} y1={y} y2={y}/>; })}</g>
      <path d={area} fill="url(#grad)"/><path d={path} fill="none" stroke="#60a5fa" strokeWidth="2"/>
      {data.map((d,i)=>(<text key={d.label} x={xs(i)} y={h-8} textAnchor="middle" fontSize="11" fill="#94a3b8">{d.label}</text>))}
    </svg>
  );
}
