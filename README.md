# SubMind UI

SubMind UI is a Angular-based frontend application designed to provide a seamless and interactive user experience for saving and interpreting dreams. SubMind acts as a chatbot where users can log their dreams, receive AI-powered interpretations, and get personalized recommendations based on their dream content.

## Features

- **Authentication**: Login and logout functionality with token-based authentication.
- **Route Guards**: Protect routes using `AuthGuard` to ensure only authenticated users can access certain pages.
- **Error Handling**: Global HTTP error handling with toast notifications using PrimeNG.
- **Reactive Forms**: Built-in form validation for user inputs.
- **PrimeNG Integration**: Beautiful UI components powered by PrimeNG.

---

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v16 or higher)
- [Angular CLI](https://angular.io/cli) (v15 or higher)

### Installation

1. Clone the repository:
   git clone https://github.com/your-repo/submind-ui.git
   cd submind-ui

2. Install dependencies:
   yarn install

3. Start the development server:
   yarn start

4. Open your browser and navigate to:
   http://localhost:4200

---

## Project Structure

src/
├── app/
│ ├── core/
│ │ ├── guards/ # Route guards (e.g., AuthGuard)
│ │ ├── interceptors/ # HTTP interceptors (e.g., error handling)
│ │ ├── services/ # Shared services (e.g., AuthService)
│ ├── features/
│ │ ├── login/ # Login feature module
│ │ ├── home/ # Home feature module
│ ├── app.routes.ts # Application routes
│ ├── app.config.ts # Application configuration
├── assets/ # Static assets
├── environments/ # Environment-specific configurations

---

## Scripts

Here are the most commonly used scripts:

- **Start Development Server**:
  ng serve

- **Build for Production**:
  ng build --prod

- **Run Unit Tests**:
  ng test

- **Lint the Code**:
  ng lint

---

## Technologies Used

- **Angular**: Framework for building the application.
- **PrimeNG**: UI components for Angular.
- **RxJS**: Reactive programming for handling asynchronous operations.
- **Sass**: CSS preprocessor for styling.
- **TypeScript**: Superset of JavaScript for type safety.
