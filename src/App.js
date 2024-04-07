import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PatientList from './components/PatientList';
import AppointmentScheduler from './components/AppointmentScheduler';
import ElectronicHealthRecord from './components/ElectronicHealthRecord';
import PrescriptionManagement from './components/PrescriptionManagement';
import BillingInvoicing from './components/BillingInvoicing';
import AdminDashboard from './components/AdminDashboard';
import UserManagement from './components/UserManagement';
import ReportGeneration from './components/ReportGeneration';
import Settings from './components/Settings';
import HomePage from './HomePage';
import Login from './Login';
import Registration from './Registration';
import DoctorLogin from './components/DoctorLogin'
import PatientLogin from './components/PatientLogin'
import AdminLogin from './components/AdminLogin';
import RoleSelection from './HandleRegister';



function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/handleRegister" element={<RoleSelection />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/registration" element={<Registration />} />
          <Route exact path="/adminLogin" element={<AdminLogin />} />
          <Route exact path="/admin" element={<AdminDashboard />} />
          <Route exact path="/doctorLogin" element={<DoctorLogin />} />
          <Route exact path="/patientLogin" element={<PatientLogin />}/>
          <Route exact path="/patients" element={<PatientList />} />
          <Route exact path="/appointments" element={<AppointmentScheduler />} />
          <Route exact path="/records/:patientId" element={<ElectronicHealthRecord />} />
          <Route exact path="/prescriptions/:patientId" element={<PrescriptionManagement />} />
          <Route exact path="/billing/:patientId" element={<BillingInvoicing />} />


          <Route exact path="/admin/users" element={<UserManagement />} />
          <Route exact path="/admin/reports" element={<ReportGeneration />} />
          <Route exact path="/admin/settings" element={<Settings />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;