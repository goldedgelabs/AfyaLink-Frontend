'use client';
import { motion } from 'framer-motion';
export default function AnimatedModal({children,open,onClose}){ if(!open) return null; return (<div style={{position:'fixed',inset:0,display:'grid',placeItems:'center'}}><motion.div initial={{scale:0.9,opacity:0}} animate={{scale:1,opacity:1}} className='card p-4'>{children}<button onClick={onClose}>Close</button></motion.div></div>); }
