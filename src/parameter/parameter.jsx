import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ParameterList = () => {
  const [parameters, setParameters] = useState([]);

  useEffect(() => {
    async function fetchParameters() {
      try {
        const response = await axios.get('/api/parameter');
        setParameters(response.data);
      } catch (error) {
        console.error('Fetch parameters error:', error);
      }
    }
    fetchParameters();
  }, []);

  return (
    <div>
      <h2>Parameter List</h2>
      <ul>
        {parameters.map((param) => (
          <li key={param.id}>
            {param.name}: {param.value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ParameterList;
