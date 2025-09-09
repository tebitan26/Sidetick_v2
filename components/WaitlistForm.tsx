"use client";
import { useState, useRef, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
const supabaseUrl=process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey=process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase=(supabaseUrl&&supabaseAnonKey)?createClient(supabaseUrl,supabaseAnonKey):null;
export default function WaitlistForm(){
  const [email,setEmail]=useState("");const [consent,setConsent]=useState(false);
  const [loading,setLoading]=useState(false);const [message,setMessage]=useState<string|null>(null);const [error,setError]=useState<string|null>(null);
  const firstFocusAt=useRef<number|null>(null);const lastSubmitAt=useRef<number>(0);const honeypot=useRef<HTMLInputElement|null>(null);
  useEffect(()=>{ if(firstFocusAt.current===null&&email.length>0) firstFocusAt.current=Date.now(); },[email]);
  async function onSubmit(e:React.FormEvent){e.preventDefault();setMessage(null);setError(null);
    if(!email||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){setError("Email invalide.");return;}
    if(!consent){setError("Merci d'accepter de recevoir nos emails de lancement.");return;}
    if(honeypot.current&&honeypot.current.value){setError("Oups, une erreur est survenue.");return;}
    const now=Date.now();
    if(firstFocusAt.current&&now-firstFocusAt.current<2000){setError("Trop rapide 😉 Réessaie dans un instant.");return;}
    if(now-lastSubmitAt.current<10000){setError("Patiente quelques secondes avant une nouvelle tentative.");return;}
    lastSubmitAt.current=now;
    try{
      setLoading(true); if(!supabase) throw new Error("Supabase non configuré.");
      const normalized=email.trim().toLowerCase();
      const { error:insertErr } = await supabase.from("waitlist").insert({email:normalized,consent,source:"website",referer: typeof document!=='undefined'?document.referrer:null});
      if(insertErr){ if((insertErr as any).code==="23505") setMessage("Tu es déjà dans la liste 👋"); else throw insertErr; }
      else{ setMessage("Bienvenue ! Tu es sur la liste d’attente 🎉"); setEmail(""); setConsent(false); }
    }catch(err){ setError("Oups, ça a coupé. Réessaie dans un instant."); }
    finally{ setLoading(false); }
  }
  return(<form id="waitlist" onSubmit={onSubmit} className="card mt-12">
    <label htmlFor="email" className="block mb-2">Ton email</label>
    <input id="email" type="email" value={email} onChange={e=>setEmail(e.target.value)} className="w-full rounded-xl px-4 py-3 text-black" placeholder="ton.email@exemple.com"/>
    <input ref={honeypot} type="text" name="company" className="hidden" tabIndex={-1} autoComplete="off"/>
    <div className="mt-3 flex items-center gap-2">
      <input id="consent" type="checkbox" checked={consent} onChange={()=>setConsent(v=>!v)}/>
      <label htmlFor="consent" className="text-sm">J’accepte de recevoir des emails sur le lancement de Sidetick.</label>
    </div>
    <button disabled={loading} className="btn mt-4">{loading?"Envoi...":"Rejoindre la liste d’attente"}</button>
    <p className="mt-3 text-sm text-white/80">Nous n’envoyons pas de spam. Désinscription en 1 clic.</p>
    {message&&<p className="mt-3 text-green-300">{message}</p>}
    {error&&<p className="mt-3 text-red-300">{error}</p>}
  </form>);
}
