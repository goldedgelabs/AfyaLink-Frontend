'use client';
export default function DataTable({rows}){ return (<table className='w-full'><thead><tr><th>Name</th><th>Role</th></tr></thead><tbody>{rows.map(r=>(<tr key={r.id}><td>{r.name||r.fullName}</td><td>{r.role||r.specialty||'n/a'}</td></tr>))}</tbody></table>); }
