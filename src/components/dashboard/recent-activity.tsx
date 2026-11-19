import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays, DollarSign } from "lucide-react";
import { formatCurrency, formatDate } from "@/lib/utils";
import type { ExpenseClaim, LeaveRequest } from "@/types/hr";

interface RecentActivityProps {
  expenses: ExpenseClaim[];
  leaves: LeaveRequest[];
}

export function RecentActivity({ expenses, leaves }: RecentActivityProps) {
  const activities = [
    ...expenses.map((expense) => ({
      id: expense.id,
      createdAt: expense.createdAt,
      name: `${expense.employee.firstName} ${expense.employee.lastName.charAt(0)}.`,
      detail: `${formatCurrency(expense.amount)} - ${expense.category.name}`,
      type: "expense" as const,
    })),
    ...leaves.map((leave) => ({
      id: leave.id,
      createdAt: leave.createdAt,
      name: `${leave.employee.firstName} ${leave.employee.lastName.charAt(0)}.`,
      detail: `${leave.days} days - ${leave.leaveType.name}`,
      type: "leave" as const,
    })),
  ]
    .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
    .slice(0, 5);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.length === 0 ? (
            <p className="text-sm text-gray-500 text-center py-4">
              No recent activity
            </p>
          ) : (
            activities.map((activity) => (
              <div key={activity.id} className="flex items-center gap-3">
                <div className="rounded-lg bg-amber-100 p-2">
                  {activity.type === "expense" ? (
                    <DollarSign className="h-4 w-4 text-amber-600" />
                  ) : (
                    <CalendarDays className="h-4 w-4 text-amber-600" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {activity.name}
                  </p>
                  <p className="text-xs text-gray-500">{activity.detail}</p>
                </div>
                <span className="text-xs text-gray-400">
                  {formatDate(activity.createdAt).split(" ").slice(0, 2).join(" ")}
                </span>
              </div>
            ))
          )}
        </div>
      </CardContent>
    </Card>
  );
}
