

import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import '../css/Admin.css';



import Agencydashboardhome from '../sectionagency/Agencydashboardhome';
import Header from '../sectionagency/Header';
import Sidebar from '../sectionagency/Sidebar';
import TestAgencypage from '../sectionagency/TestAgencypage';
import AgencyChangepassword from '../sectionagency/AgencyChangepassword';
import Agencyprofile from '../sectionagency/Agencyprofile';
import Lab from '../sectionagency/Lab';

function DashboardLayoutAgency() {
  const [asideOpen, setAsideOpen] = useState(true);

  const toggleAside = () => {
    setAsideOpen(!asideOpen);
  };

  return (
    <div className="admin-container">
      <header className="header">
        <Header toggleAside={toggleAside} />
      </header>
      <div className="flex">

        {asideOpen && <Sidebar />}
      </div>
      <main className="main-content">
        <Routes>
        <Route path="/" element={<Agencydashboardhome />} />
        <Route path="/testagencypage" element={<TestAgencypage />} />
        <Route path="/agencyprofile" element={<Agencyprofile />} />
        <Route path="/agencychangepassword" element={<AgencyChangepassword />} />
        <Route path="/agencylab" element={< Lab/>} />
        </Routes>
      </main>
    </div>
  );
}

export default DashboardLayoutAgency;


