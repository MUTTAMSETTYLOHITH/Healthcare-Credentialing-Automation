'use client';
import { useMemo, useState } from "react";
import { verifications } from "../../lib/data";
import { Card, Pill } from "../../components/ui";
import Link from "next/link";

const types = ["All","License Primary Source","DEA Check","OIG Exclusion","Board Certification","Education Verification"];
const priorities = ["All","Low","Medium","High","Urgent"];
const states = ["All","Pending","In Progress","Complete"];

export default function VerificationsPage(){
  const [type, setType] = useState("All"); const [priority, setPriority] = useState("All"); const [state, setState] = useState("All");
  const list = useMemo(()=>verifications.filter(v => (type==="All" || v.type===type) && (priority==="All" || v.priority===priority) && (state==="All" || v.state===state)), [type, priority, state]);
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between flex-wrap gap-2"><h1 className="text-2xl font-bold">Verification Tasks</h1><div className="flex gap-2"><select className="select" value={type} onChange={e=>setType(e.target.value)}>{types.map(t=><option key={t}>{t}</option>)}</select><select className="select" value={priority} onChange={e=>setPriority(e.target.value)}>{priorities.map(t=><option key={t}>{t}</option>)}</select><select className="select" value={state} onChange={e=>setState(e.target.value)}>{states.map(t=><option key={t}>{t}</option>)}</select></div></div>
      <Card className="p-0 overflow-hidden"><table className="table"><thead><tr><th className="th">Task</th><th className="th">Provider</th><th className="th">Assignee</th><th className="th">SLA</th><th className="th">Priority</th><th className="th text-right"> </th></tr></thead>
        <tbody>{list.map(v=>{ const sla = v.slaHoursLeft>=0 ? <Pill tone="ok">{v.slaHoursLeft}h left</Pill> : <Pill tone="bad">{Math.abs(v.slaHoursLeft)}h over</Pill>; const prTone = v.priority==="Low"?"ok":v.priority==="Medium"?"warn":"bad"; return (<tr key={v.id}><td className="td">{v.type} <span className="text-slate-500">({v.id})</span></td><td className="td">{v.providerId}</td><td className="td">{v.assignee}</td><td className="td">{sla}</td><td className="td"><Pill tone={prTone as any}>{v.priority}</Pill></td><td className="td text-right"><Link href={`/verifications/${v.id}`} className="btn">Open</Link></td></tr>); })}</tbody></table></Card>
    </div>
  );
}
