import { Card, Pill } from "../../components/ui";
export default function Compliance(){
  const expiring = [{ id:"P-104", doc:"State License", due:"2025-11-05", risk:"High" },{ id:"P-102", doc:"DEA", due:"2025-12-01", risk:"Medium" }];
  const policies = [{ name:"Credentialing Policy v3.2", updated:"2025-10-01", ack:"98%" },{ name:"Delegation & Re-credentialing SOP v2.0", updated:"2025-08-15", ack:"96%" }];
  const audits = [{ id:"AUD-8821", when:"2025-10-28", by:"QA-Bot", note:"Primary-source proof attached for P-103" },{ id:"AUD-8799", when:"2025-10-21", by:"Ops", note:"Committee minutes archived (Sept)" }];
  const tone = (r:string)=> r==="High" ? "bad" : r==="Medium" ? "warn" : "ok";
  return (<div className="space-y-4"><h1 className="text-2xl font-bold">Compliance Dashboard</h1>
      <div className="grid gap-3 md:grid-cols-2">
        <Card className="p-0 overflow-hidden"><div className="p-4 text-sm font-semibold">Expiring Credentials (≤ 30d)</div>
          <table className="table"><thead><tr><th className="th">Provider</th><th className="th">Document</th><th className="th">Due</th><th className="th">Risk</th></tr></thead>
            <tbody>{expiring.map(e=>(<tr key={e.id}><td className="td">{e.id}</td><td className="td">{e.doc}</td><td className="td">{e.due}</td><td className="td"><Pill tone={tone(e.risk) as any}>{e.risk}</Pill></td></tr>))}</tbody></table></Card>
        <Card className="p-0 overflow-hidden"><div className="p-4 text-sm font-semibold">Policies</div>
          <table className="table"><thead><tr><th className="th">Policy</th><th className="th">Updated</th><th className="th">Acknowledged</th></tr></thead>
            <tbody>{policies.map(p=>(<tr key={p.name}><td className="td">{p.name}</td><td className="td">{p.updated}</td><td className="td">{p.ack}</td></tr>))}</tbody></table></Card>
      </div>
      <Card className="p-0 overflow-hidden"><div className="p-4 text-sm font-semibold">Audit Log (last 30d)</div>
        <table className="table"><thead><tr><th className="th">ID</th><th className="th">When</th><th className="th">By</th><th className="th">Note</th></tr></thead>
          <tbody>{audits.map(a=>(<tr key={a.id}><td className="td">{a.id}</td><td className="td">{a.when}</td><td className="td">{a.by}</td><td className="td">{a.note}</td></tr>))}</tbody></table></Card>
    </div>);
}
