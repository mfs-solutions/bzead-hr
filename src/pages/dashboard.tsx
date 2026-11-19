import { QuickActions } from "@/components/dashboard/quick-actions";
import { RecentActivity } from "@/components/dashboard/recent-activity";
import { StatsCards } from "@/components/dashboard/stats-cards";
import { expenseClaims, employees, leaveRequests } from "@/lib/mock-data";

export function DashboardPage() {
  const stats = {
    totalEmployees: employees.length,
    activeEmployees: employees.filter((employee) => employee.status === "ACTIVE")
      .length,
    pendingLeaves: leaveRequests.filter((request) => request.status === "PENDING")
      .length,
    pendingExpenses: expenseClaims.filter((claim) => claim.status === "PENDING")
      .length,
    totalExpensesThisMonth: expenseClaims.reduce(
      (total, claim) => total + claim.amount,
      0
    ),
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Welcome back, Admin.</h1>
        <p className="mt-1 text-gray-500">
          Here&apos;s what&apos;s happening in your organization
        </p>
      </div>
      <StatsCards stats={stats} />
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <QuickActions />
        </div>
        <RecentActivity expenses={expenseClaims} leaves={leaveRequests} />
      </div>
    </div>
  );
}
