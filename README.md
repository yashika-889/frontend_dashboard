# Hintro Mock Dashboard

A high-fidelity, responsive mock dashboard for Hintro, crafted to match Figma designs and integrated with dynamic mock APIs.

## 🚀 Overview

This project implements a comprehensive dashboard for Hintro, featuring real-time data visualization, user state management, and a robust feedback system. It showcases two distinct user states:
- **User 1 (u1)**: Displays empty states for all metrics and lists.
- **User 2 (u2)**: Displays dynamic, randomly generated data for all dashboard components.

## 🛠️ Tech Stack

- **Frontend Core**: React (Vite)
- **Styling**: Tailwind CSS  (utilizing the new `@theme` configuration for global design tokens)
- **Animations**: Framer Motion for smooth transitions and modal effects
- **Data Fetching**: Axios
- **Icons**: React Icons (Lucide & Material Design)
- **State Management**: Custom React Hooks

## ✨ Key Features

- **Pixel-Perfect UI**: Strictly adheres to Figma layouts, typography, and spacing.
- **Dynamic Theming**: Global CSS variables ensure consistency across the application without hardcoded colors.
- **Multi-User Simulation**: Toggle between User 1 (Empty) and User 2 (Filled) via the profile switcher in the navbar.
- **Feedback System**: A detailed multi-step feedback flow accessible from the sidebar, with data persisted in `localStorage`.
- **Responsive Design**: Seamless transitions between desktop and mobile views, including a dedicated mobile drawer navigation.
- **Smart Data Formatting**: Converts raw API seconds/stats into design-compliant formats (e.g., duration, percentage trends).

## 📋 Prerequisites

- Node.js (v18.0 or higher)
- npm or yarn

## ⚙️ Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd hintro_dashboard
   ```

2. **Navigate to the frontend directory**:
   ```bash
   cd frontend
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Environment Configuration**:
   Ensure the `.env` file exists in the `frontend` folder with the following:
   ```env
   VITE_BASE_URL=https://mock-backend-hintro.vercel.app
   ```

5. **Start the development server**:
   ```bash
   npm run dev
   ```

## 🏗️ Architecture & Conventions

- **Atomic Design**: Components are organized into reusable blocks (cards, buttons, modals).
- **Service Layer**: API calls are centralized in `src/api/` for better maintainability.
- **Theme First**: All styling uses Tailwind's utility classes derived from the central theme in `index.css`.
- **Modularity**: Sidebar and Navbar are decoupled from main page logic via `DashboardLayout`.

## 💡 Assumptions & Implementation Details

- **User Switching**: The system assumes `u1` and `u2` as the primary identifiers for the mock API.
- **Data Handling**: Time values from the API (provided in seconds) are dynamically formatted into `MM:SS` or `HH:MM:SS` based on duration.
- **Feedback Storage**: Feedback entries are stored as an array of objects in `localStorage` under the key `hintro_feedback`, allowing history retrieval.
- **Empty States**: Specific "Empty" components are rendered when User 1 is active to provide a clean, design-compliant blank slate.

## 📄 License

This project is developed as part of a technical assessment for Hintro.
