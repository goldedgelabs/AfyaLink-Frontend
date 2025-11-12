'use client';
import Link from 'next/link';
export default function AdminSidebar(){ return (<aside style={{width:220,padding:12}}><nav style={{display:'flex',flexDirection:'column',gap:8}}><Link href='/dashboard/admin'>Overview</Link><Link href='/dashboard/admin/staff'>Staff</Link><Link href='/dashboard/admin/logs'>Logs</Link></nav></aside>); }
