import { Header } from "./components/Header";
import { HabitForm } from "./components/HabitForm";
import { useState } from "react";
import { HabitList, type Habit } from "./components/HabitList";
import { isSameDay } from "date-fns";

export default function App() {
  const [habits, setHabits] = useState<Habit[]>([])
  
  function addHabit(name: string) {
    setHabits(curr => [...curr, { id: crypto.randomUUID(), name, completions: [] }])
  }

  function deleteHabit(id: string) {
    setHabits(curr => curr.filter(h => h.id !== id))
  }

  function toggleHabit(id: string, date: Date) {
    setHabits(curr => (
      curr.map(h => {
        if (h.id !== id) return h;
        const alreadyDone = h.completions.some(d => isSameDay(d, date))
        const completions = alreadyDone ? h.completions.filter(d => !isSameDay(d, date)) : [...h.completions, date]

        return { ...h, completions }
      })
      
    ))
  }

  return (
    <div className="max-w-2xl mx-auto p-4 flex flex-col gap-4">
      <Header />
      <HabitForm addHabit={addHabit}/>
      <HabitList deleteHabit={deleteHabit} toggleHabit={toggleHabit} habits={habits} />
    </div>
  );
}
