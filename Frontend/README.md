# Spark Modeling Agency Website

A modern, responsive website for Spark Modeling Agency built with React, Vite, and Tailwind CSS.

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

### Installation
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173` (or the port shown in terminal)

## 📁 Project Structure

```
Frontend/
├── src/
│   ├── Components/
│   │   ├── navbar.jsx           # Fixed navigation bar (displayed site-wide)
│   │   ├── Home/
│   │   │   └── main.jsx         # Main page component that imports all sections
│   │   └── Sections/            # Individual page sections
│   │       ├── HeroSection.jsx
│   │       ├── AboutSection.jsx
│   │       ├── ServicesSection.jsx
│   │       ├── ContactSection.jsx
│   │       └── index.js         # Export file for easy imports
│   ├── App.jsx                  # Main app component
│   ├── main.jsx                 # App entry point
│   └── index.css                # Global styles with Tailwind
├── package.json
└── vite.config.js
```

## 🎨 Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Fixed Navigation**: Navbar stays visible across all sections
- **Smooth Scrolling**: Navigation links smoothly scroll to sections
- **Modular Components**: Each section is a separate component for easy maintenance
- **Modern UI**: Gradient backgrounds, hover effects, and clean design
- **Contact Form**: Functional contact form with form handling

## 🔧 Component Overview

### Navbar (`src/Components/navbar.jsx`)
- Fixed position navigation bar
- Smooth scrolling to page sections
- Social media icons
- Responsive design

### Main Page (`src/Components/Home/main.jsx`)
- Imports and displays all page sections
- Acts as the main content area

### Sections (`src/Components/Sections/`)
- **HeroSection**: Landing area with call-to-action buttons
- **AboutSection**: Company information with statistics
- **ServicesSection**: Services offered with icons and descriptions
- **ContactSection**: Contact form and company contact information

## 🎯 Adding New Sections

1. Create a new component in `src/Components/Sections/`
2. Export it in `src/Components/Sections/index.js`
3. Import and add it to `src/Components/Home/main.jsx`
4. Update navbar links if needed

## 🛠 Technologies Used

- **React**: Frontend framework
- **Vite**: Build tool and development server
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library
- **ESLint**: Code linting

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🚀 Build and Deploy

To build for production:
```bash
npm run build
```

To preview the production build:
```bash
npm run preview
```

## 📄 License

This project is licensed under the MIT License.+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
