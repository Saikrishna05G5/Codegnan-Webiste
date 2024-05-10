import React from 'react';

const PythonTraining = ({ campuses }) => {
  return (
    <div>
      <h2>Python Training</h2>
      <div>
        <label htmlFor="campus-select">Select Campus:</label>
        <select id="campus-select">
          {campuses.map((campus, index) => (
            <option key={index} value={campus}>{campus}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default PythonTraining;
