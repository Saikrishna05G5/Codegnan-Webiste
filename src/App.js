// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Placements from './components/Placements';
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
import Team from './components/About/Team';
import Gallery from './components/About/Gallery';
import Internships from './components/About/Internships';
import JobAcceleratorProgram from './components/About/JobAcceleratorProgram';
import Bangalore from './components/Campuses/Bangalore';
import Hyderabad from './components/Campuses/Hyderabad';
import Vijayawada from './components/Campuses/Vijayawada';

const App = () => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const handleSelect = () => {
    setExpanded(false);
  };

  return (
    <Router>
      <div className="App">
        <Navbar bg="white" variant="light" expand="lg" expanded={expanded}>
          <Navbar.Brand as={Link} to="/">
            <img
              src="./CodegnanDestination.png"
              alt="Codegnan Logo"
              style={{ height: '90px', width: '55%', marginRight: '130px', marginLeft: '40px' }}
            />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={handleToggle}
            style={{ borderColor: '#1ab69d' }}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto" style={{ color: '#001019', fontSize: '20px' }}>
              <Nav.Link as={Link} to="/" onClick={handleSelect} style={{ marginLeft: '20px' }}>
                Home
              </Nav.Link>
              <NavDropdown title="Trainings" id="trainings-nav-dropdown" style={{ marginLeft: '20px' }}>
                <NavDropdown.Item as={Link} to="/trainings/python" onClick={handleSelect}>
                  Python Training
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/trainings/python-full-stack" onClick={handleSelect}>
                  Python Full Stack
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/trainings/java" onClick={handleSelect}>
                  Java Training
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/trainings/java-full-stack" onClick={handleSelect}>
                  Java Full Stack Training
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/trainings/data-science" onClick={handleSelect}>
                  Data Science Training
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/trainings/machine-learning" onClick={handleSelect}>
                  Machine Learning
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/trainings/software-testing" onClick={handleSelect}>
                  Software Testing
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/trainings/react-js" onClick={handleSelect}>
                  React JS Training
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/trainings/data-structures" onClick={handleSelect}>
                  Data Structures Training
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/trainings/c-programming" onClick={handleSelect}>
                  C Programming
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Resources" id="resources-nav-dropdown" style={{ marginLeft: '20px' }}>
                <NavDropdown.Item as={Link} to="/resources/blog" onClick={handleSelect}>
                  Blog
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/resources/project-ideas" onClick={handleSelect}>
                  Project Ideas
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/resources/syllabus" onClick={handleSelect}>
                  Syllabus
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="/placements" onClick={handleSelect} style={{ marginLeft: '20px' }}>
                Placements
              </Nav.Link>
              <NavDropdown title="About" id="about-nav-dropdown" style={{ marginLeft: '20px' }}>
                <NavDropdown.Item as={Link} to="/about/team" onClick={handleSelect}>
                  Team
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/about/gallery" onClick={handleSelect}>
                  Gallery
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/about/internships" onClick={handleSelect}>
                  Internships
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/about/job-accelerator-program" onClick={handleSelect}>
                  Job Accelerator Program
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Campuses" id="campuses-nav-dropdown" style={{ marginLeft: '20px' }}>
                <NavDropdown.Item as={Link} to="/campuses/bangalore" onClick={handleSelect}>
                  Bangalore
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/campuses/hyderabad" onClick={handleSelect}>
                  Hyderabad
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/campuses/vijayawada" onClick={handleSelect}>
                  Vijayawada
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="/contact" onClick={handleSelect} style={{ marginLeft: '20px' }}>
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trainings/python" element={<PythonTraining />} />
          <Route path="/trainings/python-full-stack" element={<PythonFullStack />} />
          <Route path="/trainings/java" element={<JavaTraining />} />
          <Route path="/trainings/java-full-stack" element={<JavaFullStackTraining />} />
          <Route path="/trainings/data-science" element={<DataScienceTraining />} />
          <Route path="/trainings/machine-learning" element={<MachineLearning />} />
          <Route path="/trainings/software-testing" element={<SoftwareTesting />} />
          <Route path="/trainings/react-js" element={<ReactJSTraining />} />
          <Route path="/trainings/data-structures" element={<DataStructuresTraining />} />
          <Route path="/trainings/c-programming" element={<CProgramming />} />
          <Route path="/resources/blog" element={<Blog />} />
          <Route path="/resources/syllabus" element={<Syllabus />} />
          <Route path="/resources/project-ideas" element={<ProjectIdeas />} />
          <Route path="/campuses" element={<Placements />} />
          <Route path="/about/team" element={<Team />} />
          <Route path="/about/gallery" element={<Gallery />} />
          <Route path="/about/internships" element={<Internships />} />
          <Route path="/about/job-accelerator-program" element={<JobAcceleratorProgram />} />
          <Route path="/campuses/bangalore" element={<Bangalore />} />
          <Route path="/campuses/hyderabad" element={<Hyderabad />} />
          <Route path="/campuses/vijayawada" element={<Vijayawada />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
