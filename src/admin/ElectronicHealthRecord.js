import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';

const ElectronicHealthRecord = () => {
  const { patientId } = useParams();
  const [healthRecord, setHealthRecord] = useState({});

  useEffect(() => {
    // Fetch health record data for the selected patient
    const fetchHealthRecord = async () => {
      try {
        const response = await api.get(`/records/${patientId}`);
        setHealthRecord(response.data);
      } catch (error) {
        console.error('Error fetching health record:', error);
      }
    };

    fetchHealthRecord();
  }, [patientId]);

  return (
    <div>
      <h1>Electronic Health Record</h1>
      {/* Display health record information */}
    </div>
  );
};

export default ElectronicHealthRecord;
