"use client";
import { Card, Pill } from "../../components/ui";
import Area from "../../components/charts/Area";
import Donut from "../../components/charts/Donut";
import Spark from "../../components/charts/Spark";
import AnimatedNumber from "../../components/AnimatedNumber";
import { throughput, providers } from "../../lib/data";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Workbench(){
  const areaData = throughput.map(d=>({ label: d.day, value: d.value }));
  const dwell = [{label:"Intake",value:2.1},{label:"Primary",value:5.3},{label:"Committee",value:1.8}];
  const readyForCommittee = providers.filter(p=>p.status === "Committee").slice(0,6);

  const backlog = [
    { label:"Intake",     value: 7, color:"#60a5fa" },
    { label:"Verification", value: 9, color:"#34d399" },
    { label:"Committee", value: 3, color:"#fbbf24" },
  ];

  const expiringByFacility = [
    { label:"North",   value: 2 },
    { label:"West",    value: 3 },
    { label:"Main ED", value: 1 },
    { label:"South",   value: 2 },
  ];

  return (
    <div className="space-y-4">

      {/* Live incident banner */}
      <motion.div
        initial={{opacity:0, y:6}} animate={{opacity:1, y:0}} transition={{duration:.35}}
        className="card p-3 border-blue-400/30 bg-gradient-to-r from-blue-500/10 to-emerald-500/10">
        <div className="text-sm">
          <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400 mr-2 animate-pulse" />
          All systems nominal. Last incident resolved 09:12 — DEA API timeout (auto-retries).
        </div>
      </motion.div>

      {/* KPI Row */}
      <div className="grid gap-3 md:grid-cols-4">
        <Card className="p-4">
          <div className="text-slate-400 text-sm">Uptime (30d)</div>
          <div className="text-3xl font-extrabold mt-1"><AnimatedNumber value={99.95} />%</div>
          <div className="mt-2"><Spark values={[99.8,99.9,99.95,99.9,99.95,99.95,99.95]} /></div>
        </Card>
        <Card className="p-4">
          <div className="text-slate-400 text-sm">Onboardings today</div>
          <div className="text-3xl font-extrabold mt-1"><AnimatedNumber value={12} /></div>
          <div className="mt-2"><Spark values={[1,2,2,4,2,1,0]} /></div>
        </Card>
        <Card className="p-4">
          <div className="text-slate-400 text-sm">Tasks over SLA</div>
          <div className="text-3xl font-extrabold mt-1 text-rose-300"><AnimatedNumber value={4} /></div>
          <div className="mt-2"><Spark values={[0,1,1,2,3,4,4]} /></div>
        </Card>
        <Card className="p-4">
          <div className="text-slate-400 text-sm">Queue backlog</div>
          <div className="text-3xl font-extrabold mt-1"><AnimatedNumber value={19} /></div>
          <div className="mt-2"><Spark values={[10,12,14,15,16,18,19]} /></div>
        </Card>
      </div>

      <div className="grid gap-3 lg:grid-cols-3">
        <Card className="p-4 lg:col-span-2">
          <div className="text-sm font-semibold">Onboarding Throughput (7d)</div>
          <div className="mt-2"><Area data={areaData} /></div>
        </Card>
        <Card className="p-4">
          <div className="text-sm font-semibold mb-2">Backlog Composition</div>
          <Donut segments={backlog} />
          <div className="mt-2 grid grid-cols-3 gap-2 text-xs">
            {backlog.map(b=>(
              <div key={b.label} className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-sm" style={{background:b.color}}></span>
                <span className="text-slate-300">{b.label}</span>
                <span className="text-slate-500">{b.value}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div className="grid gap-3 lg:grid-cols-3">
        <Card className="p-0 overflow-hidden lg:col-span-2">
          <div className="p-4 text-sm font-semibold">Ready for Committee (≤ 48h)</div>
          <table className="table">
            <thead><tr><th className="th">Provider</th><th className="th">Specialty</th><th className="th">Facility</th><th className="th">Risk</th></tr></thead>
            <tbody>
              {readyForCommittee.map(p=>{
                const tone = p.risk==="Low" ? "ok" : p.risk==="Medium" ? "warn" : "bad";
                return (
                  <tr key={p.id}>
                    <td className="td">{p.name} <span className="text-slate-500">({p.id})</span></td>
                    <td className="td">{p.specialty}</td>
                    <td className="td">{p.facility}</td>
                    <td className="td"><Pill tone={tone as any}>{p.risk}</Pill></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Card>
        <Card className="p-4">
          <div className="text-sm font-semibold">Licenses Expiring by Facility</div>
          <div className="mt-3 space-y-3">
            {expiringByFacility.map(r=>(
              <div key={r.label} className="flex items-center gap-3">
                <div className="w-24 text-slate-300 text-sm">{r.label}</div>
                <div className="flex-1 rounded-full bg-slate-800 h-2 overflow-hidden">
                  <div className="h-2 bg-amber-400" style={{ width: `${r.value*20}%` }} />
                </div>
                <div className="w-6 text-right text-slate-400 text-sm">{r.value}</div>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <Link href="/compliance" className="btn w-full justify-center">Open Compliance</Link>
          </div>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="p-4">
        <div className="text-sm font-semibold mb-2">Actions</div>
        <div className="grid gap-2 md:grid-cols-4">
          <Link href="/workbench/queues" className="btn">Review Queues</Link>
          <Link href="/workbench/kafka" className="btn">Kafka Health</Link>
          <Link href="/workbench/eks" className="btn">EKS Cluster</Link>
          <Link href="/reports/executive-summary" className="btn">Executive Summary</Link>
        </div>
      </Card>
    </div>
  );
}
