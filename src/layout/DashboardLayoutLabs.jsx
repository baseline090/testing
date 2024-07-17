

import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import '../css/Admin.css';
import Labprofile from '../sectionlab/Labprofile';
import LabChangepassword from '../sectionlab/LabChangepassword';
import Labdashboardhome from '../sectionlab/Labdashboardhome';
import Header from '../sectionlab/Header';
import Sidebar from '../sectionlab/Sidebar';
import BookingCalendar from '../sectionlab/Bookingcalender';

function DashboardLayoutLabs() {
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
        <Route path="/" element={<Labdashboardhome />} />
        <Route path="/labprofile" element={<Labprofile />} />
        <Route path="/labchangepassword" element={<LabChangepassword />} />
        <Route path="/bookingcalender" element={<BookingCalendar />} />
        </Routes>
      </main>
    </div>
  );
}

export default DashboardLayoutLabs;


