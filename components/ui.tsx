import { ReactNode } from "react";
import clsx from "clsx";
export function Card({ children, className=""}:{ children:ReactNode; className?:string }){ return <div className={clsx("card", className)}>{children}</div>; }
export function Badge({ children }:{ children:ReactNode }){ return <span className="badge">{children}</span>; }
export function Pill({ tone="ok", children }:{ tone?: "ok"|"warn"|"bad"; children:ReactNode }){ const map={ok:"pill-ok",warn:"pill-warn",bad:"pill-bad"} as const; return <span className={clsx("pill", map[tone])}>{children}</span>;}
export function Progress({ value }:{ value:number }){ return <div className="h-2 rounded-full bg-slate-800 overflow-hidden"><div className="h-full bg-blue-500" style={{width:`${Math.max(0,Math.min(100,value))}%`}}/></div>; }
