import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';

const PrescriptionManagement = () => {
  const { patientId } = useParams();
  const [prescriptions, setPrescriptions] = useState([]);

  useEffect(() => {
    // Fetch prescription data for the selected patient
    const fetchPrescriptions = async () => {
      try {
        const response = await api.get(`/prescriptions/${patientId}`);
        setPrescriptions(response.data);
      } catch (error) {
        console.error('Error fetching prescriptions:', error);
      }
    };

    fetchPrescriptions();
  }, [patientId]);

  // Add prescription management logic here

  return (
    <div>
      <h1>Prescription Management</h1>
      {/* Render prescription list and management interface */}
    </div>
  );
};

export default PrescriptionManagement;
