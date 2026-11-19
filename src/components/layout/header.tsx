import { useLocation } from "react-router-dom";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { getInitials } from "@/lib/utils";

const pageNames: Record<string, string> = {
  "/dashboard": "Dashboard",
  "/employees": "Employees",
  "/leave": "Leave",
  "/expenses": "Expenses",
  "/payroll": "Payroll",
  "/calendar": "Calendar",
};

export function Header() {
  const { pathname } = useLocation();
  const currentPage = pageNames[pathname] || "Dashboard";
  const name = "Demo HR Admin";

  return (
    <header className="sticky top-0 z-40 flex h-16 items-center border-b border-gray-200 bg-white px-4 shadow-sm sm:px-6 lg:px-8">
      <h1 className="flex-1 text-lg font-semibold text-gray-900">{currentPage}</h1>
      <div className="flex items-center gap-2">
        <Avatar className="h-8 w-8 bg-primary">
          <AvatarFallback className="bg-primary text-sm text-white">
            {getInitials(name)}
          </AvatarFallback>
        </Avatar>
        <span className="hidden text-sm font-medium text-gray-700 sm:block">
          {name}
        </span>
      </div>
    </header>
  );
}
