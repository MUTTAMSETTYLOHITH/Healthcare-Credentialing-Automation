import { Card } from "../../../components/ui";
export default function CaseStudies(){
  return (<div className="space-y-4"><h1 className="text-2xl font-bold">Case Studies (Demo)</h1>
    <div className="grid gap-3 md:grid-cols-3">
      <Card className="p-4"><div className="text-sm font-semibold">Tampa General Hospital</div><p className="text-sm text-slate-300 mt-1">ROI & faster onboarding after automated credentialing.</p><a href="https://www.medallion.co" target="_blank" className="mt-3 btn w-full justify-center inline-flex">Vendor</a></Card>
      <Card className="p-4"><div className="text-sm font-semibold">St. Clair Health (PA)</div><p className="text-sm text-slate-300 mt-1">From Cactus to modern cloud; better efficiency & accuracy.</p><a href="https://www.symplr.com" target="_blank" className="mt-3 btn w-full justify-center inline-flex">Vendor</a></Card>
      <Card className="p-4"><div className="text-sm font-semibold">North Kansas City (MO)</div><p className="text-sm text-slate-300 mt-1">Time savings & improved provider perception.</p><a href="https://www.symplr.com" target="_blank" className="mt-3 btn w-full justify-center inline-flex">Vendor</a></Card>
    </div></div>);
}
