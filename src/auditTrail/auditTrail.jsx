import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AuditTrailList = () => {
  const [auditTrail, setAuditTrail] = useState([]);

  useEffect(() => {
    async function fetchAuditTrail() {
      try {
        const response = await axios.get('/api/audittrail');
        setAuditTrail(response.data);
      } catch (error) {
        console.error('Fetch audit trail error:', error);
      }
    }
    fetchAuditTrail();
  }, []);

  return (
    <div>
      <h2>Audit Trail</h2>
      <ul>
        {auditTrail.map((audit) => (
          <li key={audit.id}>
            Action: {audit.action}, Table: {audit.tableName}, Timestamp: {audit.timestamp}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AuditTrailList;
