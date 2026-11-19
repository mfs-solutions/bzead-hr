import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { getInitials } from "@/lib/utils";

export function UserNav() {
  const name = "Demo HR Admin";

  return (
    <div className="border-t border-gray-200 p-4">
      <div className="flex items-center gap-3 rounded-lg p-2">
        <Avatar className="h-10 w-10 bg-primary">
          <AvatarFallback className="bg-primary text-white">
            {getInitials(name)}
          </AvatarFallback>
        </Avatar>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-medium text-gray-900">{name}</p>
          <p className="truncate text-xs text-gray-500">Sample profile</p>
        </div>
      </div>
    </div>
  );
}
