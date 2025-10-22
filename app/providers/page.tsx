'use client';
import { useMemo, useState } from "react";
import { providers } from "../../lib/data";
import { Card, Pill } from "../../components/ui";
import Link from "next/link";

export default function ProvidersPage(){
  const [q, setQ] = useState(""); const [facility,setFacility]=useState("All"); const [risk,setRisk]=useState("All");
  const facilities = ["All", ...Array.from(new Set(providers.map(p=>p.facility)))];
  const risks = ["All","Low","Medium","High"];
  const list = useMemo(()=>providers.filter(p=>{
    const txt = [p.name,p.specialty,p.facility,p.id].join(" ").toLowerCase();
    return txt.includes(q.toLowerCase()) && (facility==="All"||p.facility===facility) && (risk==="All"||p.risk===risk);
  }),[q, facility, risk]);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-2 flex-wrap">
        <h1 className="text-2xl font-bold">Providers</h1>
        <div className="flex gap-2"><input className="input" value={q} onChange={e=>setQ(e.target.value)} placeholder="Search providers..." /><select className="select" value={facility} onChange={e=>setFacility(e.target.value)}>{facilities.map(f=><option key={f}>{f}</option>)}</select><select className="select" value={risk} onChange={e=>setRisk(e.target.value)}>{risks.map(r=><option key={r}>{r}</option>)}</select></div>
      </div>
      <Card className="p-0 overflow-hidden">
        <table className="table">
          <thead><tr><th className="th">Provider</th><th className="th">Specialty</th><th className="th">Facility</th><th className="th">Status</th><th className="th">Risk</th><th className="th text-right"></th></tr></thead>
          <tbody>{list.map(p=>{ const tone = p.risk==="Low"?"ok":p.risk==="Medium"?"warn":"bad"; return (<tr key={p.id}><td className="td">{p.name} <span className="text-slate-500">({p.id})</span></td><td className="td">{p.specialty}</td><td className="td">{p.facility}</td><td className="td">{p.status}</td><td className="td"><Pill tone={tone as any}>{p.risk}</Pill></td><td className="td text-right"><Link href={`/providers/${p.id}`} className="btn">Open</Link></td></tr>); })}</tbody>
        </table>
      </Card>
    </div>
  );
}
