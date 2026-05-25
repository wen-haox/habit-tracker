import { Button } from "./Button";
import { eachDayOfInterval, startOfWeek, endOfWeek, format, isFuture, isSameDay } from "date-fns";

export type Habit = {
  id: string
  name: string
  completions: Date[]
}
type HabitListProps = {
  habits: Habit[]
  deleteHabit: (id: string) => void
  toggleHabit: (id: string, date: Date) => void
}

export function HabitList({ habits, deleteHabit, toggleHabit }: HabitListProps) {
  if (habits.length === 0) {
    return (
      <h1 className="text-zinc-400 text-center py-12">
        No habits yet. Add one above to get started!
      </h1>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      {habits.map((habit) => (
        <HabitItem deleteHabit={deleteHabit} toggleHabit={toggleHabit} key={habit.id} habit={habit} />
      ))}
    </div>
  );
}

type HabitItemProps = {
  habit: Habit
  deleteHabit: (id: string) => void
  toggleHabit: (id: string, date: Date) => void

};

function HabitItem({ habit, deleteHabit, toggleHabit }: HabitItemProps) {
  const visibleDates = eachDayOfInterval({
    start: startOfWeek(new Date(), { weekStartsOn: 1 }),
    end: endOfWeek(new Date(), { weekStartsOn: 1 }),
  });

  return (
    <div className="rounded-xl bg-zinc-800 p-4 flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <div className="flex gap-3 items-center">
          <span className="font-medium">{habit.name}</span>
          <span className="text-sm text-amber-400">🔥 3</span>
        </div>
        <Button onClick={() => deleteHabit(habit.id)} variant="ghost-destructive" className="text-sm">Delete</Button>
      </div>
      <div className="flex gap-1.5">
        {visibleDates.map((date) => (
          <Button className="flex flex-1 flex-col items-center gap-0.5 rounded-lg text-xs"
          disabled={isFuture(date)}
          onClick={() => toggleHabit(habit.id, date)}
          variant={habit.completions.some(d => isSameDay(date, d)) ? "primary" : "secondary"}
          key={date.toISOString()}>
            <span className="font-medium">{format(date, "EEE")}</span>
            <span>{format(date, "d")}</span>
          </Button>
        ))}
      </div>
    </div>
  );
}
