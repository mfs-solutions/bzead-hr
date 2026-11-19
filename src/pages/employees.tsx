import { EmployeeList } from "@/components/staff/employee-list";
import { departments, employees } from "@/lib/mock-data";

export function EmployeesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Employees</h1>
        <p className="mt-1 text-gray-500">{employees.length} team members</p>
      </div>
      <EmployeeList employees={employees} departments={departments} />
    </div>
  );
}
