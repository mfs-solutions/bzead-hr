import { CalendarView } from "@/components/calendar/calendar-view";
import { calendarEvents } from "@/lib/mock-data";

export function CalendarPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Calendar</h1>
        <p className="mt-1 text-gray-500">Events, holidays &amp; leave schedule</p>
      </div>
      <CalendarView events={calendarEvents} />
    </div>
  );
}
