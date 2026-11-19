import { LeaveList } from "@/components/leave/leave-list";
import { leaveRequests } from "@/lib/mock-data";

export function LeavePage() {
  const stats = {
    pending: leaveRequests.filter((request) => request.status === "PENDING")
      .length,
    approved: leaveRequests.filter((request) => request.status === "APPROVED")
      .length,
    rejected: leaveRequests.filter((request) => request.status === "REJECTED")
      .length,
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Leave Management</h1>
        <p className="mt-1 text-gray-500">Manage time off requests</p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {[
          {
            label: "Pending",
            value: stats.pending,
            className: "text-amber-600",
          },
          {
            label: "Approved",
            value: stats.approved,
            className: "text-green-600",
          },
          {
            label: "Rejected",
            value: stats.rejected,
            className: "text-red-600",
          },
        ].map((stat) => (
          <div key={stat.label} className="rounded-xl border bg-white p-6">
            <p className={`text-2xl font-bold ${stat.className}`}>
              {stat.value}
            </p>
            <p className="text-sm text-gray-500">{stat.label}</p>
          </div>
        ))}
      </div>

      <LeaveList requests={leaveRequests} isManager />
    </div>
  );
}
