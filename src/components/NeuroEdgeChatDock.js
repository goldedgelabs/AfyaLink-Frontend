'use client';
import { useState } from 'react';
import { startListening, playSpeech } from '@/ai/voice';
export default function NeuroEdgeChatDock(){
  const [open,setOpen]=useState(false);
  const [messages,setMessages]=useState([]);
  const [q,setQ]=useState('');
  const ask = async (t)=>{ setMessages(m=>[...m,{from:'me',text:t}]); const r = await fetch('/api/neuroedge',{method:'POST', body: JSON.stringify({prompt:t})}); const d = await r.json(); setMessages(m=>[...m,{from:'ai',text:d.reply}]); playSpeech(d.reply); };
  return (<div style={{position:'fixed',right:18,bottom:18,width:340,zIndex:999}}><div className='card p-3'><div style={{display:'flex',justifyContent:'space-between'}}><strong>NeuroEdge</strong><button onClick={()=>setOpen(o=>!o)}>{open?'-':'+'}</button></div>{open && (<div><div style={{maxHeight:180,overflow:'auto',marginTop:8}}>{messages.map((m,i)=>(<div key={i} style={{margin:6,padding:6,background:m.from==='ai'?'rgba(2,6,23,0.06)':'rgba(255,255,255,0.02)',borderRadius:8}}>{m.text}</div>))}</div><div style={{display:'flex',gap:8,marginTop:8}}><input value={q} onChange={e=>setQ(e.target.value)} className='p-2 rounded border bg-transparent' /><button onClick={()=>{ if(q){ ask(q); setQ(''); } }} className='btn-primary p-2 rounded'>Ask</button><button onClick={()=>startListening(t=>{ setQ(t); })} className='p-2 rounded border'>🎤</button></div></div>)}</div></div>);
}
