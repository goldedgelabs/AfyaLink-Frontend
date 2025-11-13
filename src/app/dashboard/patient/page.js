import RequireRole from "@/components/RequireRole";
import PatientCapture from "@/components/PatientCapture";

export default function PatientDashboardPage() {
  return (
    <RequireRole allowed={['patient']}>
      <div className="p-6">
        <h1>Patient Dashboard</h1>
        <PatientCapture onShare={(p)=>console.log('shared',p)} />
      </div>
    </RequireRole>
  );
}
