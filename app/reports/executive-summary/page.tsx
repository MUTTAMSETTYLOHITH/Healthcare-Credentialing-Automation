import { Card } from "../../../components/ui";
export default function Exec(){
  return (<div className="space-y-4"><h1 className="text-2xl font-bold">Executive Summary</h1>
    <div className="grid gap-3 md:grid-cols-4">
      <Card className="p-4"><div className="text-sm text-slate-400">Uptime (30d)</div><div className="text-2xl font-bold">99.95%</div></Card>
      <Card className="p-4"><div className="text-sm text-slate-400">Errors / 1k ops</div><div className="text-2xl font-bold">0.8</div></Card>
      <Card className="p-4"><div className="text-sm text-slate-400">Avg Queue Time</div><div className="text-2xl font-bold">38 min</div></Card>
      <Card className="p-4"><div className="text-sm text-slate-400">Annual Savings</div><div className="text-2xl font-bold">$1,240,000</div></Card>
    </div>
    <div className="card p-4 text-sm text-slate-300">Demo metrics for UI illustration.</div></div>);
}
