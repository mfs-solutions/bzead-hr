import { ExpenseList } from "@/components/expenses/expense-list";
import { expenseCategories, expenseClaims } from "@/lib/mock-data";
import { formatCurrency } from "@/lib/utils";
import { DollarSign } from "lucide-react";

export function ExpensesPage() {
  const totalExpenses = expenseClaims.reduce(
    (total, claim) => total + claim.amount,
    0
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Expense Claims</h1>
        <p className="mt-1 text-gray-500">Submit and manage expenses</p>
      </div>

      <div className="flex items-center justify-between rounded-2xl bg-gray-900 p-6 text-white">
        <div>
          <p className="text-sm text-gray-400">Total Expenses</p>
          <p className="mt-1 text-3xl font-bold">{formatCurrency(totalExpenses)}</p>
          <p className="mt-1 text-sm text-gray-400">
            {expenseClaims.length} claims
          </p>
        </div>
        <div className="rounded-xl bg-gray-800 p-3">
          <DollarSign className="h-8 w-8 text-gray-400" />
        </div>
      </div>

      <ExpenseList
        claims={expenseClaims}
        categories={expenseCategories}
        isManager
      />
    </div>
  );
}
