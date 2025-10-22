"use client";
import { useEffect, useRef, useState } from "react";

export default function AnimatedNumber({ value, duration=900, prefix="", suffix="" }:{
  value: number; duration?: number; prefix?: string; suffix?: string;
}){
  const [n, setN] = useState(0);
  const startRef = useRef<number | null>(null);
  const fromRef = useRef(0);
  useEffect(()=>{
    const from = n; fromRef.current = from;
    const to = value;
    const d = Math.max(200, duration);
    let raf = 0;
    const step = (t:number)=>{
      if (startRef.current===null) startRef.current = t;
      const p = Math.min(1, (t - startRef.current)/d);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(from + (to - from) * eased);
      if (p < 1) raf = requestAnimationFrame(step);
      else startRef.current = null;
    };
    raf = requestAnimationFrame(step);
    return ()=> cancelAnimationFrame(raf);
  }, [value, duration]);

  const formatted = Math.round(n).toLocaleString();
  return <span>{prefix}{formatted}{suffix}</span>;
}
