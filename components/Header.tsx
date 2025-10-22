import Link from "next/link";
import { Badge } from "./ui";
import { Stethoscope, Shield, Workflow, Server } from "lucide-react";
export default function Header(){
  return (
    <header className="sticky top-0 z-40 border-b border-slate-800 bg-slate-950/70 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="h-10 w-10 grid place-items-center rounded-xl bg-blue-500/20 border border-blue-400/30 shadow-glow">
            <Stethoscope className="h-5 w-5 text-blue-300" />
          </div>
          <div className="leading-tight">
            <div className="text-lg font-bold">Credentialing <span className="text-blue-300">Elite</span></div>
            <div className="text-[11px] text-slate-400">Healthcare Automation Suite</div>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-2">
          <Link className="btn" href="/workbench">Workbench</Link>
          <Link className="btn" href="/providers">Providers</Link>
          <Link className="btn" href="/verifications">Verifications</Link>
          <Link className="btn" href="/compliance">Compliance</Link>
          <Link className="btn" href="/reports">Reports</Link>
        </nav>
        <div className="hidden md:flex items-center gap-2">
          <Badge>Java 17</Badge><Badge>Spring Boot</Badge><Badge><Workflow className="h-3.5 w-3.5" /> Kafka</Badge><Badge><Server className="h-3.5 w-3.5" /> EKS</Badge><Badge><Shield className="h-3.5 w-3.5" /> OIDC</Badge>
        </div>
      </div>
    </header>
  )
}
