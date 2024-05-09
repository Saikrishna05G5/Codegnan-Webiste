import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';

import Placements from './components/Placements';
import About from './components/About';
import Campuses from './components/Campuses';
import Contact from './components/Contact';
import PythonTraining from './components/trainings/PythonTraining';
import PythonFullStack from './components/trainings/PythonFullStack';
import JavaTraining from './components/trainings/JavaTraining';
import JavaFullStackTraining from './components/trainings/JavaFullStackTraining';
import DataScienceTraining from './components/trainings/DataScienceTraining';
import MachineLearning from './components/trainings/MachineLearning';
import SoftwareTesting from './components/trainings/SoftwareTesting';
import ReactJSTraining from './components/trainings/ReactJSTraining';
import DataStructuresTraining from './components/trainings/DataStructuresTraining';
import CProgramming from './components/trainings/CProgramming';
import Blog from './components/Resources/Blog';
import Syllabus from './components/Resources/Syllabus';
import ProjectIdeas from './components/Resources/ProjectIdeas';
import { IoClose, IoMenu } from "react-icons/io5";
import "./components/Navigate.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenuOnMobile = () => {
    if (window.innerWidth <= 1150) {
      setShowMenu(false);
    }
  }

  return (
    <nav className="navbar">
      <div className="nav">
        <Link to="/" className="nav__logo">Navbar</Link>
        <div className="nav__toggle" onClick={toggleMenu}>
          {showMenu ? <IoClose /> : <IoMenu />}
        </div>
        <ul className={showMenu ? "nav__menu show-menu" : "nav__menu"}>
          <li onClick={closeMenuOnMobile}><Link to="/">Home</Link></li>
          <li className="nav__dropdown" onClick={closeMenuOnMobile}>
            <span>Trainings</span>
            <ul className="nav__dropdown-menu">
              <li><Link to="/trainings/python">Python Training</Link></li>
              <li><Link to="/trainings/python-full-stack">Python Full Stack</Link></li>
              <li><Link to="/trainings/java">Java Training</Link></li>
              <li><Link to="/trainings/java-full-stack">Java Full Stack Training</Link></li>
              <li><Link to="/trainings/data-science">Data Science Training</Link></li>
              <li><Link to="/trainings/machine-learning">Machine Learning</Link></li>
              <li><Link to="/trainings/software-testing">Software Testing</Link></li>
              <li><Link to="/trainings/react-js">React JS Training</Link></li>
              <li><Link to="/trainings/data-structures">Data Structures Training</Link></li>
              <li><Link to="/trainings/c-programming">C Programming</Link></li>
            </ul>
          </li>
          <li className="nav__dropdown" onClick={closeMenuOnMobile}>
            <span>Trainings</span>
            <ul className="nav__dropdown-menu">
              <li><Link to="/Resources/Blog">Blog</Link></li>
              <li><Link to="/Resources/ProjectIdeas">ProjectIdeas</Link></li>
              <li><Link to="/Resources/Syllabus">Syllabus</Link></li>
          
            </ul>
          </li>
         
          <li onClick={closeMenuOnMobile}><Link to="/placements">Placements</Link></li>
          <li onClick={closeMenuOnMobile}><Link to="/about">About</Link></li>
          <li onClick={closeMenuOnMobile}><Link to="/campuses">Campuses</Link></li>
          <li onClick={closeMenuOnMobile}><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trainings" element={<trainings />}>
            <Route path="python" element={<PythonTraining />} />
            <Route path="python-full-stack" element={<PythonFullStack />} />
            <Route path="java" element={<JavaTraining />} />
            <Route path="java-full-stack" element={<JavaFullStackTraining />} />
            <Route path="data-science" element={<DataScienceTraining />} />
            <Route path="machine-learning" element={<MachineLearning />} />
            <Route path="software-testing" element={<SoftwareTesting />} />
            <Route path="react-js" element={<ReactJSTraining />} />
            <Route path="data-structures" element={<DataStructuresTraining />} />
            <Route path="c-programming" element={<CProgramming />} />
          </Route>
          <Route path="/Resources" element={<resources />}>
            <Route path="blog" element={<Blog />} />
            <Route path="syllabus" element={<Syllabus />} />
            <Route path="project-ideas" element={<ProjectIdeas />} />
          </Route>
          <Route path="/placements" element={<Placements />} />
          <Route path="/about" element={<About />} />
          <Route path="/campuses" element={<Campuses />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
