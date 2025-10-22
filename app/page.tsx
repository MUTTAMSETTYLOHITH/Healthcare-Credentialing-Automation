"use client";
import Link from "next/link";
import AnimatedNumber from "../components/AnimatedNumber";
import HeroTiles from "../components/HeroTiles";
import Spark from "../components/charts/Spark";
import { Card } from "../components/ui";

export default function Home(){
  return (
    <div className="space-y-6">
      {/* Hero */}
      <Card className="p-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              Healthcare Credentialing, <span className="text-blue-300">Enterprise-grade</span>
            </h1>
            <p className="text-slate-300 mt-2 max-w-2xl">
              Command center, provider directory, verifications, and compliance dashboards
              built for large health systems.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link href="/workbench" className="btn bg-gradient-to-r from-blue-500 to-emerald-400 text-slate-900 border-0 shadow-glow">Open Workbench</Link>
              <Link href="/providers" className="btn">Browse Providers</Link>
            </div>
          </div>
          <div className="text-right text-slate-400">
            99.95% uptime · OIDC SSO · Kafka
          </div>
        </div>
      </Card>

      {/* KPIs */}
      <div className="grid gap-3 md:grid-cols-4">
        <Card className="p-4">
          <div className="text-slate-400 text-sm">Providers onboarded (7d)</div>
          <div className="text-3xl font-extrabold mt-1"><AnimatedNumber value={49} /></div>
          <div className="mt-2"><Spark values={[7,11,5,13,8,3,2]} /></div>
        </Card>
        <Card className="p-4">
          <div className="text-slate-400 text-sm">Tasks over SLA</div>
          <div className="text-3xl font-extrabold mt-1 text-rose-300"><AnimatedNumber value={4} /></div>
          <div className="mt-2"><Spark values={[0,1,1,2,3,4,4]} /></div>
        </Card>
        <Card className="p-4">
          <div className="text-slate-400 text-sm">Avg. dwell (days)</div>
          <div className="text-3xl font-extrabold mt-1"><AnimatedNumber value={3} /></div>
          <div className="mt-2"><Spark values={[2.4,3.0,2.1,3.6,3.1,2.8,3.0]} /></div>
        </Card>
        <Card className="p-4">
          <div className="text-slate-400 text-sm">SLA attainment</div>
          <div className="text-3xl font-extrabold mt-1"><AnimatedNumber value={96} suffix="%" /></div>
          <div className="mt-2"><Spark values={[92,93,95,97,96,96,96]} /></div>
        </Card>
      </div>

      {/* Quick entry tiles */}
      <HeroTiles />
    </div>
  );
}
