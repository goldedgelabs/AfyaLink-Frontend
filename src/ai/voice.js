export function startListening(cb){ const SR = window.SpeechRecognition || window.webkitSpeechRecognition; if(!SR) return; const r = new SR(); r.onresult = e=>cb(e.results[0][0].transcript); r.start(); return r; }
export function playSpeech(t){ const s = window.speechSynthesis; if(!s) return; s.speak(new SpeechSynthesisUtterance(t)); }
