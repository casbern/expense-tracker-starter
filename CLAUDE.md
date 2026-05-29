# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## About this project

Starter project for a [Claude Code course](https://codewithmosh.com/p/claude-code). The app intentionally ships with a bug, poor UI, and messy code — these are fixed as course exercises.

## Commands

```bash
npm install       # install dependencies (required before first run)
npm run dev       # start dev server at http://localhost:5173
npm run build     # production build
npm run lint      # run ESLint
npm run preview   # preview production build locally
```

## Architecture

Single-page React app (no routing). State is split across components:

- **`src/App.jsx`** — root component; holds the `transactions` array state (seeded with hardcoded data) and passes it down. Renders `Summary`, `TransactionForm`, and `TransactionList`.
- **`src/Summary.jsx`** — receives `transactions` and derives `totalIncome`, `totalExpenses`, and `balance` internally via `filter` + `reduce`.
- **`src/TransactionForm.jsx`** — owns its own form state (`description`, `amount`, `type`, `category`); calls `onAdd(transaction)` prop on submit and resets to defaults.
- **`src/TransactionList.jsx`** — receives `transactions` and owns its own `filterType` / `filterCategory` state; renders the filtered table.

`src/App.css` contains all styles, including a `.delete-btn` rule that has no corresponding button in the JSX yet.

## Known intentional bugs

- No delete functionality is wired up despite CSS for `.delete-btn` existing.
