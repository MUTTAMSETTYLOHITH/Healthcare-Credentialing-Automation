'use client';
import { useParams } from "next/navigation";
import { providers } from "../../../lib/data";
import { Card, Pill, Progress } from "../../../components/ui";
import Link from "next/link";

export default function Detail(){
  const { id } = useParams<{id:string}>();
  const p = providers.find(x=>x.id===id);
  if(!p) return <div className="text-slate-400">Provider not found.</div>;
  const tone = p.risk==="Low"?"ok":p.risk==="Medium"?"warn":"bad";
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between"><h1 className="text-2xl font-bold">{p.name} <span className="text-slate-500 font-normal">({p.id})</span></h1><div className="flex gap-2 items-center"><Pill tone={tone as any}>{p.risk}</Pill><Link href="/providers" className="btn">Back</Link></div></div>
      <div className="grid gap-3 lg:grid-cols-3">
        <Card className="p-4 lg:col-span-2"><div className="text-sm font-semibold mb-2">Checklist Progress</div><Progress value={p.progress} /><ul className="text-sm space-y-2 mt-3"><li>✔ Identity & Background</li><li>✔ Education & Training</li><li>✔ Board Certification</li><li>⏳ License Primary Source</li><li>⏳ DEA Check</li><li>⏳ OIG Exclusion</li></ul></Card>
        <Card className="p-4"><div className="text-sm font-semibold">Profile</div><div className="text-sm text-slate-300 space-y-1 mt-2"><div><span className="text-slate-400">Specialty:</span> {p.specialty}</div><div><span className="text-slate-400">Facility:</span> {p.facility}</div><div><span className="text-slate-400">Status:</span> {p.status}</div><div><span className="text-slate-400">Risk:</span> {p.risk}</div></div></Card>
      </div>
      <div className="grid gap-3 md:grid-cols-2"><Card className="p-4"><div className="text-sm font-semibold">Documents</div><p className="text-sm text-slate-300 mt-2">CV.pdf, License.pdf, BoardCert.pdf — demo only.</p></Card><Card className="p-4"><div className="text-sm font-semibold">Notes</div><p className="text-sm text-slate-300 mt-2">Committee comments and follow-ups.</p></Card></div>
    </div>
  )
}
