import { Card, Pill } from "../../../components/ui";
export default function Kafka(){
  const topics = [{ name:"cred.intake", lag:12, status:"OK" },{ name:"cred.verify", lag:0, status:"OK" },{ name:"cred.audit", lag:3, status:"OK" }];
  return (
    <div className="space-y-4"><h1 className="text-2xl font-bold">Kafka Health (Demo)</h1>
      <Card className="p-0 overflow-hidden"><table className="table"><thead><tr><th className="th">Topic</th><th className="th">Lag</th><th className="th">Status</th></tr></thead>
        <tbody>{topics.map(t=>(<tr key={t.name}><td className="td">{t.name}</td><td className="td">{t.lag}</td><td className="td">{t.status==="OK"?<Pill tone="ok">OK</Pill>:<Pill tone="bad">Issue</Pill>}</td></tr>))}</tbody></table></Card>
    </div>
  )
}
