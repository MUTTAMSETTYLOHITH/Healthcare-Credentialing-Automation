'use client';
import { throughput } from "../../../lib/data";
import Area from "../../../components/charts/Area";
import { Card } from "../../../components/ui";
export default function ThroughputReport(){
  const data = throughput.map(d=>({ label:d.day, value:d.value }));
  return (<div className="space-y-4"><h1 className="text-2xl font-bold">Throughput</h1><Card className="p-4"><div className="text-sm font-semibold">Onboarding (last 7 days)</div><div className="mt-2"><Area data={data}/></div></Card></div>);
}
