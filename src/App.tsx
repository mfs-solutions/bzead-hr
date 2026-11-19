import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Sidebar } from "@/components/layout/sidebar";
import { Header } from "@/components/layout/header";
import { UserNav } from "@/components/layout/user-nav";
import { Toaster } from "@/components/ui/toaster";
import { CalendarPage } from "@/pages/calendar";
import { DashboardPage } from "@/pages/dashboard";
import { EmployeesPage } from "@/pages/employees";
import { ExpensesPage } from "@/pages/expenses";
import { LeavePage } from "@/pages/leave";
import { PayrollPage } from "@/pages/payroll";

function AppLayout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <aside className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white">
          <Sidebar />
          <UserNav />
        </div>
      </aside>

      <div className="lg:pl-72">
        <Header />
        <div className="border-b border-amber-200 bg-amber-50 px-4 py-2 text-center text-sm text-amber-900 sm:px-6 lg:px-8">
          Frontend-only demo: sample data only; changes are temporary and no
          backend or sign-in is connected.
        </div>
        <main className="px-4 py-6 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/employees" element={<EmployeesPage />} />
            <Route path="/leave" element={<LeavePage />} />
            <Route path="/expenses" element={<ExpensesPage />} />
            <Route path="/payroll" element={<PayrollPage />} />
            <Route path="/calendar" element={<CalendarPage />} />
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Routes>
        </main>
      </div>
      <Toaster />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}
