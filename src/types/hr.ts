export type EmployeeStatus = "ACTIVE" | "ON_LEAVE" | "TERMINATED" | "RESIGNED";
export type LeaveStatus = "PENDING" | "APPROVED" | "REJECTED" | "CANCELLED";
export type ExpenseStatus = "PENDING" | "APPROVED" | "REJECTED" | "PAID";
export type PayslipStatus = "DRAFT" | "GENERATED" | "PAID";

export interface Department {
  id: string;
  name: string;
  code: string;
}

export interface Employee {
  id: string;
  employeeId: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string | null;
  position: string;
  status: EmployeeStatus;
  departmentId: string;
  department: Department;
}

export interface LeaveRequest {
  id: string;
  startDate: Date;
  endDate: Date;
  days: number;
  reason: string | null;
  status: LeaveStatus;
  createdAt: Date;
  employee: Pick<Employee, "id" | "firstName" | "lastName"> & {
    department: Pick<Department, "name">;
  };
  leaveType: { name: string; code: string };
  approver: { firstName: string; lastName: string } | null;
}

export interface ExpenseCategory {
  id: string;
  name: string;
  code: string;
}

export interface ExpenseClaim {
  id: string;
  description: string;
  amount: number;
  expenseDate: Date;
  status: ExpenseStatus;
  receiptUrl: string | null;
  createdAt: Date;
  employee: Pick<Employee, "id" | "firstName" | "lastName">;
  category: ExpenseCategory;
  approver: { firstName: string; lastName: string } | null;
}

export interface Payslip {
  id: string;
  payPeriodStart: Date;
  payPeriodEnd: Date;
  paymentDate: Date;
  basicSalary: number;
  allowances: number;
  overtime: number;
  bonus: number;
  grossSalary: number;
  cpfEmployee: number;
  cpfEmployer: number;
  incomeTax: number;
  totalDeductions: number;
  netSalary: number;
  status: PayslipStatus;
  employee: Pick<
    Employee,
    "id" | "firstName" | "lastName" | "employeeId"
  > & { department: Pick<Department, "name"> };
}

export interface CalendarEvent {
  id: string;
  title: string;
  start: Date;
  end: Date;
  allDay: boolean;
  type: string;
  color: string;
  description?: string | null;
}
