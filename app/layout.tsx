import "./globals.css";
import Header from "../components/Header";
import type { ReactNode } from "react";
export const metadata = { title: "Credentialing Elite — Enterprise", description: "Frontend for healthcare credentialing automation." };
export default function RootLayout({ children }:{ children:ReactNode }){
  return (
    <html lang="en"><body className="min-h-screen"><Header /><main className="mx-auto max-w-7xl px-4 py-6 space-y-6">{children}</main></body></html>
  )
}
