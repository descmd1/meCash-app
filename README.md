# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



Key Features Implemented
This project was create using react + vites

Search Functionality:

Debounced search input to prevent excessive API calls

Full-text search using GitHub's API

Filtering:

Language filter (JavaScript, Python, etc.)

Stars range filter (with predefined ranges)

License filter (MIT, Apache, etc.)

Sorting:

Sort by stars, forks, or last updated

Ascending or descending order

Pagination:

Dynamic page navigation based on total results

Smart pagination display showing current page in context

Performance Optimizations:

Memoization of context values

Debounced search

Skeleton loading states

Efficient API calls with all parameters

Error Handling:

Display of error messages when API fails

Empty state when no results found

Clean Code Structure:

Separation of concerns (UI, logic, data fetching)

Reusable components

Custom hooks for business logic

Installation: 
Run: npm install

To start this project;
Run: npm run dev
Local:   http://localhost:5173/