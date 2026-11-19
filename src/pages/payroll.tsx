import { PayrollList } from "@/components/payroll/payroll-list";
import { payslips } from "@/lib/mock-data";
import { formatCurrency } from "@/lib/utils";
import { DollarSign, TrendingUp } from "lucide-react";

export function PayrollPage() {
  const totalPaid = payslips
    .filter((payslip) => payslip.status === "PAID")
    .reduce((total, payslip) => total + payslip.netSalary, 0);
  const pendingAmount = payslips
    .filter((payslip) => payslip.status !== "PAID")
    .reduce((total, payslip) => total + payslip.netSalary, 0);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Payroll</h1>
        <p className="mt-1 text-gray-500">Manage salary payments</p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="flex items-center justify-between rounded-2xl bg-green-500 p-6 text-white">
          <div>
            <p className="text-sm text-green-100">Total Paid</p>
            <p className="mt-1 text-3xl font-bold">{formatCurrency(totalPaid)}</p>
          </div>
          <DollarSign className="h-8 w-8" />
        </div>
        <div className="flex items-center justify-between rounded-2xl bg-amber-500 p-6 text-white">
          <div>
            <p className="text-sm text-amber-100">Pending Payments</p>
            <p className="mt-1 text-3xl font-bold">
              {formatCurrency(pendingAmount)}
            </p>
          </div>
          <TrendingUp className="h-8 w-8" />
        </div>
      </div>

      <PayrollList payslips={payslips} isHR />
    </div>
  );
}
