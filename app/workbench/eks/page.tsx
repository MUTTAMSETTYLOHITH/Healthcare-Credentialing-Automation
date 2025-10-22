import { Card, Pill } from "../../../components/ui";
export default function EKS(){
  const pods = [{ name:"api-0", ns:"cred-core", cpu:"210m", mem:"380Mi", status:"Running" },{ name:"verifier-2", ns:"cred-jobs", cpu:"120m", mem:"190Mi", status:"Running" },{ name:"ui-1", ns:"cred-ui", cpu:"40m", mem:"110Mi", status:"Running" }];
  return (
    <div className="space-y-4"><h1 className="text-2xl font-bold">EKS Cluster (Demo)</h1>
      <Card className="p-0 overflow-hidden"><table className="table"><thead><tr><th className="th">Pod</th><th className="th">Namespace</th><th className="th">CPU</th><th className="th">Mem</th><th className="th">Status</th></tr></thead>
        <tbody>{pods.map(p=>(<tr key={p.name}><td className="td">{p.name}</td><td className="td">{p.ns}</td><td className="td">{p.cpu}</td><td className="td">{p.mem}</td><td className="td">{p.status==="Running"?<Pill tone="ok">Running</Pill>:<Pill tone="bad">{p.status}</Pill>}</td></tr>))}</tbody></table></Card>
    </div>
  )
}
