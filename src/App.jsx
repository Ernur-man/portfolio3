import './App.css'
import Experience from './component/experince'
import Message from './component/message'
import AboutPage from './Pages/AboutPage'
import ContactPage from './Pages/ContactPage'
import HomePage from './Pages/HomePage'
import ProjectsPage from './Pages/ProjectsPage'
import WorkPage from './Pages/WorkPage'
import { motion } from 'framer-motion'

function App() {

  return (
    <>
      <Message/>
      <HomePage/>
      <AboutPage/>
      <Experience/>
      <ProjectsPage/>
      <WorkPage/>
      <ContactPage/>
    </>
  )
}

export default App
