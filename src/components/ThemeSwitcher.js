'use client';
import { useContext } from 'react';
import { ThemeContext } from '@/context/ThemeContext';
export default function ThemeSwitcher(){ const { dark, setDark } = useContext(ThemeContext); return (<div><label className='mr-2'>Dark</label><input type='checkbox' checked={dark} onChange={()=>setDark(!dark)} /></div>); }
