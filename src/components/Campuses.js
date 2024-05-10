import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Bangalore from './Bangalore';
import Hyderabad from './Hyderabad';
import Vijayawada from './Vijayawada';
import PythonTraining from '../trainings/PythonTraining';

const Campuses = () => {
  const campuses = ['Bangalore', 'Hyderabad', 'Vijayawada'];

  return (
    <Router>
      <div>
        <h1>Campuses</h1>
        <ul>
          <li><Link to="/campuses/bangalore">Bangalore</Link></li>
          <li><Link to="/campuses/hyderabad">Hyderabad</Link></li>
          <li><Link to="/campuses/vijayawada">Vijayawada</Link></li>
        </ul>
        <Routes>
          <Route path="/campuses/bangalore" element={<Bangalore />} />
          <Route path="/campuses/hyderabad" element={<Hyderabad />} />
          <Route path="/campuses/vijayawada" element={<Vijayawada />} />
          <Route path="/campuses/:campusId/trainings" element={<PythonTraining campuses={campuses} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Campuses;
