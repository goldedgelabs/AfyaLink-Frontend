'use client';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
export default function Charts(){ const data={ labels:['Mon','Tue','Wed','Thu','Fri'], datasets:[{label:'Patients',data:[12,19,7,14,9],fill:false}] }; return <div className='card p-3'><Line data={data} /></div>; }
