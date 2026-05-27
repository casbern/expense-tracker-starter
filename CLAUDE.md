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

Single-page React app (no routing). All state and logic lives in `src/App.jsx`:

- **Transactions state** — array of `{ id, description, amount, type, category, date }` objects; seeded with hardcoded data on load
- **Summary** — income/expense/balance totals derived from state via `filter` + `reduce`
- **Filters** — `filterType` and `filterCategory` state drives the visible subset of transactions
- **Form** — controlled inputs add new transactions; resets to defaults on submit

`src/App.css` contains all styles, including a `.delete-btn` rule that has no corresponding button in the JSX yet.

## Known intentional bugs

- `amount` is stored as a **string** (directly from `<input type="number">`), so `reduce((sum, t) => sum + t.amount, 0)` concatenates instead of summing — fix by parsing to `Number` on add or on read.
- Seed data also stores amounts as strings (`"5000"`, `"1200"`, etc.), compounding the above.
- No delete functionality is wired up despite CSS for `.delete-btn` existing.
