"use client";
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
const supabaseUrl=process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey=process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase=(supabaseUrl&&supabaseAnonKey)?createClient(supabaseUrl,supabaseAnonKey):null;
export default function WaitlistCount(){
  const [count,setCount]=useState<number|null>(null);
  useEffect(()=>{(async()=>{ if(!supabase) return; const { count } = await supabase.from("waitlist").select("*",{count:"exact",head:true}); if(typeof count==="number") setCount(count); })();},[]);
  if(count==null) return <span className="text-white/70">Rejoignez la vibe ✨</span>;
  return <span className="text-white">Déjà {count} personnes ont rejoint la vibe ✨</span>;
}
