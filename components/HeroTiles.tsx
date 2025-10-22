"use client";
import { ShieldCheck, Workflow, LineChart } from "lucide-react";
import { motion } from "framer-motion";

const tiles = [
  { icon: LineChart,  title: "Command Center", sub:"Live ops KPIs & trends", href: "/workbench" },
  { icon: Workflow,   title: "Automation Pipelines", sub:"Event-driven Kafka jobs", href: "/verifications" },
  { icon: ShieldCheck,title: "Compliance", sub:"Expirations, policies, audits", href: "/compliance" },
];

export default function HeroTiles(){
  return (
    <div className="grid gap-3 md:grid-cols-3">
      {tiles.map(t=>{
        const Icon=t.icon;
        return (
          <motion.a key={t.title} href={t.href}
            initial={{ y: 12, opacity: 0 }} animate={{ y:0, opacity: 1 }}
            whileHover={{ scale: 1.02, translateY:-3 }} whileTap={{ scale: .99 }}
            transition={{ duration:.35 }}
            className="card p-5 no-underline">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-2xl grid place-items-center bg-blue-500/20 border border-blue-400/30">
                <Icon className="h-5 w-5 text-blue-300" />
              </div>
              <div>
                <div className="font-semibold">{t.title}</div>
                <div className="text-xs text-slate-400">{t.sub}</div>
              </div>
            </div>
          </motion.a>
        );
      })}
    </div>
  );
}
