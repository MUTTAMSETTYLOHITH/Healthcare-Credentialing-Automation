"use client";
type Seg = { label:string; value:number; color:string };
export default function Donut({ segments, size=160 }:{ segments:Seg[]; size?:number }){
  const r = size/2 - 10, cx = size/2, cy = size/2;
  const total = Math.max(1, segments.reduce((a,s)=>a+s.value,0));
  let start= -Math.PI/2;
  const arcs = segments.map((s,i)=>{
    const angle = (s.value/total) * Math.PI*2;
    const end = start + angle;
    const large = angle > Math.PI ? 1 : 0;
    const x1 = cx + r*Math.cos(start), y1 = cy + r*Math.sin(start);
    const x2 = cx + r*Math.cos(end),   y2 = cy + r*Math.sin(end);
    const d = `M ${cx} ${cy} L ${x1} ${y1} A ${r} ${r} 0 ${large} 1 ${x2} ${y2} Z`;
    const out = { d, color:s.color, key:i }; start = end; return out;
  });
  return (
    <svg viewBox={`0 0 ${size} ${size}`} width="100%" height={size}>
      {arcs.map(a=><path key={a.key} d={a.d} fill={a.color} opacity={.85}/>)}
      <circle cx={cx} cy={cy} r={r*0.55} fill="#0b1220"/>
    </svg>
  );
}
