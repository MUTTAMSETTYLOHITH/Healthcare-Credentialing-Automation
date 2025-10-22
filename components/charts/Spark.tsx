"use client";
export default function Spark({ values }:{ values:number[] }){
  const w=160, h=44, pad=6;
  const max = Math.max(1, ...values), min = 0;
  const xs = (i:number)=> pad + i*((w-2*pad)/Math.max(1,values.length-1));
  const ys = (v:number)=> h-pad - (v-min)/(max-min)*(h-2*pad);
  const path = values.map((v,i)=>`${i?"L":"M"}${xs(i)},${ys(v)}`).join(" ");
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" height="44">
      <path d={path} fill="none" stroke="#60a5fa" strokeWidth="2"/>
      <path d={`M${pad},${h-pad} ${path} L${xs(values.length-1)},${h-pad} Z`} fill="rgba(96,165,250,.15)"/>
    </svg>
  );
}
