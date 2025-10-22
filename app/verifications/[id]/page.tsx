'use client';
import { useParams } from "next/navigation";
import { verifications } from "../../../lib/data";
import { Card, Pill } from "../../../components/ui";
import Link from "next/link";
export default function TaskDetail(){
  const { id } = useParams<{id:string}>();
  const v = verifications.find(x=>x.id===id);
  if(!v) return <div className="text-slate-400">Task not found.</div>;
  const sla = v.slaHoursLeft>=0 ? <Pill tone="ok">{v.slaHoursLeft}h left</Pill> : <Pill tone="bad">{Math.abs(v.slaHoursLeft)}h over</Pill>;
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between"><h1 className="text-2xl font-bold">{v.type} <span className="text-slate-500 font-normal">({v.id})</span></h1><Link href="/verifications" className="btn">Back</Link></div>
      <div className="grid gap-3 md:grid-cols-3">
        <Card className="p-4 md:col-span-2"><div className="text-sm font-semibold">Process</div><ol className="mt-2 text-sm text-slate-300 space-y-2 list-decimal list-inside"><li>Gather primary documents</li><li>Perform primary source lookup</li><li>Attach proof & audit details</li><li>Mark complete and notify committee</li></ol></Card>
        <Card className="p-4"><div className="text-sm font-semibold">Task Meta</div><div className="text-sm text-slate-300 space-y-1 mt-2"><div><span className="text-slate-400">Provider:</span> {v.providerId}</div><div><span className="text-slate-400">Assignee:</span> {v.assignee}</div><div><span className="text-slate-400">Priority:</span> {v.priority}</div><div><span className="text-slate-400">SLA:</span> {sla}</div></div></Card>
      </div>
    </div>
  )
}
