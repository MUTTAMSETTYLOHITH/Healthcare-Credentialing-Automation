import Link from "next/link";
import { Card } from "../../components/ui";
export default function Reports(){
  return (<div className="space-y-4"><h1 className="text-2xl font-bold">Reports</h1>
    <div className="grid gap-3 md:grid-cols-3">
      <Card className="p-4"><div className="text-sm font-semibold mb-2">Executive Summary</div><p className="text-sm text-slate-300">KPI snapshot for leadership.</p><Link href="/reports/executive-summary" className="mt-3 btn w-full justify-center inline-flex">Open</Link></Card>
      <Card className="p-4"><div className="text-sm font-semibold mb-2">Throughput</div><p className="text-sm text-slate-300">7-day onboarding trend.</p><Link href="/reports/throughput" className="mt-3 btn w-full justify-center inline-flex">Open</Link></Card>
      <Card className="p-4"><div className="text-sm font-semibold mb-2">Case Studies</div><p className="text-sm text-slate-300">Large health systems outcomes (demo).</p><Link href="/reports/case-studies" className="mt-3 btn w-full justify-center inline-flex">Open</Link></Card>
    </div></div>);
}
