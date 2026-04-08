# Book Vibe

Book Vibe is a React and Vite-based book browsing application that lets users explore a curated collection of books, view detailed information for each title, and manage personal reading lists with read and wishlist states.

Live Demo: [Book Vibe](https://book-vibe-project-10.netlify.app/)

## Overview

The app presents a landing experience with a featured banner and a responsive grid of books sourced from a local JSON dataset. From there, users can open individual book details, review metadata such as author, category, rating, and page count, then mark titles as read or save them to a wishlist. Saved books are organized in a dedicated library view with tabbed sections.

## Features

- Browse a responsive catalog of books on the homepage.
- View detailed book information, including review, tags, publisher, and publishing year.
- Mark books as read or add them to a wishlist.
- Prevent books already in the read list from being added to the wishlist.
- Review saved books in tabbed read list and wishlist sections.
- See toast notifications when books are added or when a duplicate action is blocked.
- Use a custom 404 page for invalid routes.

## Tech Stack

- React 19
- Vite
- React Router
- React Context API
- Tailwind CSS 4
- DaisyUI
- React Toastify
- Axios
- React Tabs

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm

### Installation

1. Clone the repository.
2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open the app in your browser using the local Vite URL shown in the terminal.

## Available Scripts

- `npm run dev` - Start the Vite development server.
- `npm run build` - Create a production build.
- `npm run preview` - Preview the production build locally.
- `npm run lint` - Run ESLint across the project.

## Project Structure

```text
public/
	booksData.json
src/
	components/
	context/
	layout/
	pages/
	routes/
	main.jsx
	index.css
```

## Data Source

Book data is loaded from `public/booksData.json`, which powers the homepage catalog and the book details route.

## Notes

- The application uses client-side routing.
- Book selection state is managed in context, so read and wishlist data are shared across the app.
- The project is styled with utility classes and DaisyUI components for a responsive interface.
