'use client';
import Link from 'next/link';
export default function SuperAdminNavbar(){ return (<div style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:12,borderBottom:'1px solid rgba(255,255,255,0.02)'}}><div style={{display:'flex',gap:12}}><img src='/icons/afyalink-logo.svg' width={36} alt='logo' /><strong>AfyaLink v4.0</strong></div><div><Link href='/dashboard/super-admin'>Super Admin</Link> | <Link href='/dashboard/admin'>Admin</Link></div></div>); }
