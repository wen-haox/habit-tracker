# Habit Tracker

A simple weekly habit tracker built with React. Add habits, mark each day you complete them, and see your progress at a glance. Data is saved in the browser with `localStorage`, so your habits persist between visits.

This project was built by following [this YouTube tutorial](https://www.youtube.com/watch?v=9aTRnV6g0eQ).

## Features

- Add and delete habits
- Toggle completion for each day of the week (Monday–Sunday)
- Navigate between weeks; future days are disabled
- Daily progress summary (habits completed today)
- Streak counter for consecutive completed days
- Persistent storage via `localStorage`

## Tech stack

- [React](https://react.dev/) 19
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) 4
- [Vite](https://vite.dev/)
- [date-fns](https://date-fns.org/) for date handling

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/)

### Install and run

```bash
npm install
npm run dev
```

Open the URL shown in the terminal.

### Other scripts

| Command           | Description                          |
| ----------------- | ------------------------------------ |
| `npm run build`   | Type-check and build for production  |
| `npm run preview` | Preview the production build locally |
| `npm run lint`    | Run ESLint                           |
