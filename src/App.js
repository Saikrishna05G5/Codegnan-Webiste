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
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <Router>
      <div className="App">
        <Navbar bg="white" variant="light" expand="lg">
          <Navbar.Brand as={Link} to="/">
            <img src='./CodegnanDestination.png' alt="Codegnan Logo" style={{ height: '90px', width: '55%',marginRight:'130px',marginLeft:'40px' }} />
          </Navbar.Brand>
          <Navbar.Toggle 
            aria-controls="basic-navbar-nav" 
            onClick={toggleMenu} 
            style={{ borderColor: "#1ab69d" }} // Change the color here
          />

          <Navbar.Collapse id="basic-navbar-nav" className={showMenu ? "show" : ""}>
            <Nav className="mr-auto" style={{ color: '#001019',fontSize:'20px'}}>
              <Nav.Link as={Link} to="/" onClick={() => setShowMenu(false)} style={{marginLeft:"20px"}}>Home</Nav.Link><hr/>
              <NavDropdown title="trainings" id="basic-nav-dropdown" style={{marginLeft:"20px"}}>
                <NavDropdown.Item as={Link} to="/trainings/python" onClick={() => setShowMenu(false)}>Python Training</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/trainings/python-full-stack" onClick={() => setShowMenu(false)}>Python Full Stack</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/trainings/java" onClick={() => setShowMenu(false)}>Java Training</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/trainings/java-full-stack" onClick={() => setShowMenu(false)}>Java Full Stack Training</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/trainings/data-science" onClick={() => setShowMenu(false)}>Data Science Training</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/trainings/machine-learning" onClick={() => setShowMenu(false)}>Machine Learning</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/trainings/software-testing" onClick={() => setShowMenu(false)}>Software Testing</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/trainings/react-js" onClick={() => setShowMenu(false)}>React JS Training</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/trainings/data-structures" onClick={() => setShowMenu(false)}>Data Structures Training</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/trainings/c-programming" onClick={() => setShowMenu(false)}>C Programming</NavDropdown.Item>
              </NavDropdown><hr/>
              <NavDropdown title="resources" id="basic-nav-dropdown" style={{marginLeft:"20px"}}>
                <NavDropdown.Item as={Link} to="/resources/blog" onClick={() => setShowMenu(false)}>Blog</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/resources/project-ideas" onClick={() => setShowMenu(false)}>Project Ideas</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/resources/syllabus" onClick={() => setShowMenu(false)}>Syllabus</NavDropdown.Item>
              </NavDropdown><hr/>
              <Nav.Link as={Link} to="/placements" onClick={() => setShowMenu(false)} style={{marginLeft:"20px"}}>Campus</Nav.Link><hr/>
              <NavDropdown title="about" id="basic-nav-dropdown" style={{marginLeft:"20px"}}>
                <NavDropdown.Item as={Link} to="/about/team" onClick={() => setShowMenu(false)}>Team</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/about/gallery" onClick={() => setShowMenu(false)}>Gallery</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/about/internships" onClick={() => setShowMenu(false)}>Internships</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/about/job-accelerator-program" onClick={() => setShowMenu(false)}>Job Accelerator Program</NavDropdown.Item>
              </NavDropdown><hr/>
              <NavDropdown title="Placements" id="basic-nav-dropdown" style={{marginLeft:"20px"}}>
                <NavDropdown.Item as={Link} to="/campuses/bangalore" onClick={() => setShowMenu(false)}>Bangalore</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/campuses/hyderabad" onClick={() => setShowMenu(false)}>Hyderabad</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/campuses/vijayawada" onClick={() => setShowMenu(false)}>Vijayawada</NavDropdown.Item>
              </NavDropdown><hr/>
              <Nav.Link as={Link} to="/contact" onClick={() => setShowMenu(false)} style={{marginLeft:"20px"}}>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trainings/*" element={<trainings />}>
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
          <Route path="/resources/*" element={<resources />}>
            <Route path="blog" element={<Blog />} />
            <Route path="syllabus" element={<Syllabus />} />
            <Route path="project-ideas" element={<ProjectIdeas />} />
          </Route>
          <Route path="/placements" element={<Placements />} />
          <Route path="/about/*" element={<about />}>
            <Route path="team" element={<Team />} /> 
            <Route path="gallery" element={<Gallery />} /> 
            <Route path="internships" element={<Internships />} />
            <Route path="job-accelerator-program" element={<JobAcceleratorProgram />} /> 
          </Route>
          <Route path="/camp" element={<campuses />}>
            <Route path="bangalore" element={<Bangalore />} /> 
            <Route path="hyderabad" element={<Hyderabad />} /> 
            <Route path="vijayawada" element={<Vijayawada />} />
          </Route>
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
