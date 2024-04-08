import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import PatientList from './admin/PatientList';
// import AppointmentScheduler from './admin/AppointmentScheduler';
// import ElectronicHealthRecord from './admin/ElectronicHealthRecord';
// import PrescriptionManagement from './admin/PrescriptionManagement';
// import BillingInvoicing from './admin/BillingInvoicing';
// import AdminDashboard from './admin/AdminDashboard';
// import UserManagement from './admin/UserManagement';
// import ReportGeneration from './admin/ReportGeneration';
// import Settings from './admin/Settings';
import HomePage from './HomePage';
import Login from './Login';
import Registration from './Registration';
import PatientLogin from './patient/PatientLogin';
import DoctorLogin from './Doctor/DoctorLogin';
import DoctorRegister from './Doctor/DoctorRegister';
import AdminLogin from './admin/AdminLogin';
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
          <Route exact path="/patientLogin" element={<PatientLogin />}/>
          <Route exact path="/doctorLogin" element={<DoctorLogin />} />
          <Route exact path="/doctorRegister" element={<DoctorRegister />} />
          {/* <Route exact path="/admin" element={<AdminDashboard />} /> */}
          {/* <Route exact path="/patients" element={<PatientList />} />
          <Route exact path="/appointments" element={<AppointmentScheduler />} />
          <Route exact path="/records/:patientId" element={<ElectronicHealthRecord />} />
          <Route exact path="/prescriptions/:patientId" element={<PrescriptionManagement />} />
          <Route exact path="/billing/:patientId" element={<BillingInvoicing />} />


          <Route exact path="/admin/users" element={<UserManagement />} />
          <Route exact path="/admin/reports" element={<ReportGeneration />} />
          <Route exact path="/admin/settings" element={<Settings />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;