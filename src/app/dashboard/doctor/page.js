import RequireRole from "@/components/RequireRole";
import DoctorNotesUploader from "@/components/DoctorNotesUploader";

export default function DoctorDashboardPage() {
  return (
    <RequireRole allowed={['doctor', 'nurse', 'lab']}>
      <div className="p-6">
        <h1>Doctor Dashboard</h1>
        <DoctorNotesUploader />
      </div>
    </RequireRole>
  );
}
