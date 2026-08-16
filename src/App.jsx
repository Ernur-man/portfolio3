import './App.css'
import AboutPage from './Pages/AboutPage'
import ContactPage from './Pages/ContactPage'
import HomePage from './Pages/HomePage'
import ProjectsPage from './Pages/ProjectsPage'
import WorkPage from './Pages/WorkPage'
import { motion } from 'framer-motion'
import { Routes, Route } from 'react-router-dom'
import './i18next.js'
function App() {
  return (
    <>
      <HomePage />

      <ProjectsPage />
      <WorkPage />


      <ContactPage />
    </>
  );
}

export default App
