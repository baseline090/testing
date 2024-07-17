
import Testpage from '../sectionadmin/Testpage';

import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from '../sectionadmin/Header';
import '../css/Admin.css'; // You can define your responsive classes here
import Sidebar from '../sectionadmin/Sidebar';

import Admindashboardhome from '../sectionadmin/Admindashboardhome';
import Agency from '../sectionadmin/Agency';
import Lab from '../sectionadmin/Lab';
import AdminProfile from '../sectionadmin/Adminprofile';
import Changepassword from '../sectionadmin/Changepassword';

function DashboardLayoutAdmin() {
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
        <Route path="/" element={<Admindashboardhome />} />
        <Route path="/testpage" element={<Testpage />} />
        <Route path="/parentlab" element={<Agency />} />
        <Route path="/adminlab" element={<Lab />} />
        <Route path="/adminprofile" element={<AdminProfile />} />
        <Route path="/changepassword" element={<Changepassword />} />
        </Routes>
      </main>
    </div>
  );
}

export default DashboardLayoutAdmin;


