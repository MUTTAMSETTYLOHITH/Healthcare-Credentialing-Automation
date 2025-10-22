import { Card } from "../../../components/ui";
import { providers, verifications } from "../../../lib/data";
export default function Queues(){
  const prov = providers.filter(p=>p.status!=="Complete");
  const ver = verifications;
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Queues</h1>
      <div className="grid gap-3 md:grid-cols-2">
        <Card className="p-0 overflow-hidden">
          <div className="p-4 text-sm font-semibold">Onboarding</div>
          <table className="table"><thead><tr><th className="th">Provider</th><th className="th">Facility</th><th className="th">Status</th><th className="th">Progress</th></tr></thead>
          <tbody>{prov.map(p=>(<tr key={p.id}><td className="td">{p.name} <span className="text-slate-500">({p.id})</span></td><td className="td">{p.facility}</td><td className="td">{p.status}</td><td className="td">{p.progress}%</td></tr>))}</tbody></table>
        </Card>
        <Card className="p-0 overflow-hidden">
          <div className="p-4 text-sm font-semibold">Verifications</div>
          <table className="table"><thead><tr><th className="th">Task</th><th className="th">Provider</th><th className="th">Assignee</th><th className="th">SLA</th></tr></thead>
          <tbody>{ver.map(v=>(<tr key={v.id}><td className="td">{v.type}</td><td className="td">{v.providerId}</td><td className="td">{v.assignee}</td><td className="td">{v.slaHoursLeft} h</td></tr>))}</tbody></table>
        </Card>
      </div>
    </div>
  )
}
