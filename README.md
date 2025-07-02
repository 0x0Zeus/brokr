# Brokr: Unified Travel Booking Platform

<p align="center">
  <img src="src/assets/home.png" alt="Brokr Home Screenshot" width="700" />
</p>

<p align="center">
  <a href="https://www.figma.com/design/uabGhhYkGYZgqU3tb1Bwco/Brokr-Traveling?node-id=0-1&p=f&t=nFeIZCClJmHOlE4v-0" target="_blank"><strong>View Figma UI/UX Design</strong></a>
</p>

---

## Overview

**Brokr** is a comprehensive web application for searching and booking hotels, cars, flights, and attractions—drawing inspiration from leading travel platforms. The project features a modern, responsive UI, real-time search, advanced filtering, and interactive maps, providing a seamless travel booking experience.

---

## Features
- Unified search and booking for hotels, cars, flights, and attractions
- Real-time search with elastic search and debounce
- Advanced filtering and sorting options
- Interactive maps (TomTom integration)
- User reviews and ratings
- Responsive, modern UI (Angular, NgPrime, Tailwind CSS)
- CI/CD with GitHub Actions
- Deployed on Vercel

---

## Demo
- **Figma Design:** [Brokr Traveling UI/UX](https://www.figma.com/design/uabGhhYkGYZgqU3tb1Bwco/Brokr-Traveling?node-id=0-1&p=f&t=nFeIZCClJmHOlE4v-0)


---

## Tech Stack
- **Angular** – Frontend framework
- **RxJS** – Reactive programming for async operations
- **NgRx** – State management
- **NgPrime** – UI component library
- **Tailwind CSS** – Utility-first CSS framework
- **TomTom Maps** – Map integration
- **Booking.com API** – Real-world data for hotels, cars, flights, and attractions
- **ESLint, Prettier, Husky** – Code quality and formatting

---

## Project Structure
- `src/app/components/` – Reusable UI components (cars, stays, flights, attractions, etc.)
- `src/app/pages/` – Main application pages
- `src/app/core/` – Core modules, services, interceptors
- `src/app/shared/` – Shared utilities, models, interfaces
- `src/app/store/` – State management (NgRx)
- `src/assets/` – Static assets (images, icons, fonts)

---

## Pages Overview

- **Landing:** Introduction to the application and its capabilities.
- **Cars:** Search and book rental cars by city, date, and time. View results with pagination and map integration. Navigate to detailed car information.
- **Car Details:** Detailed information about a selected car and dealer, including photos and user reviews.
- **Stays:** Search and book hotels and homes by city and date. Filter by guests, rooms, price, and sort by popularity, distance, rating, or price. Pagination and map integration included.
- **Stay Details:** Detailed information about a selected hotel or home, with room photos and paginated user reviews.
- **Attractions:** Search and book tickets for attractions and activities by city. Sort by trend, rating, or price. Pagination and detailed attraction information.
- **Attraction Details:** Detailed information about a selected attraction, with photos and user reviews.
- **Flights:** Search and book flights by departure/arrival city and date. Filter by seat count and class. Sort by duration or price. Pagination and detailed flight information.
- **Flight Details:** Detailed information about a selected flight and carrier.
- **Not Found:** Custom 404 page for undefined routes.

---

## Getting Started

### Prerequisites
- Node.js (v14 or higher recommended)
- npm

### Installation
```bash
npm install
```

### Running Locally
```bash
npm start
```

### Lint & Format
```bash
npm run lint
npm run format
```

### Build
```bash
npm run build
```

---

## License

This project is for educational and demonstration purposes only. Not for commercial use.
