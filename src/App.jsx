import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import DashboardLayoutAdmin from "./layout/DashboardLayoutAdmin";
import Loginadmin from "./sectionadmin/Loginadmin";
import Userlablisting from "./sectionuser/userlablisting";
import LocationSection from "./homecomponents/LocationSection";
import Loginagency from "./sectionagency/Loginagency";
import LoginLab from "./sectionlab/LoginLab";
import DashboardLayoutAgency from "./layout/DashboardLayoutAgency";
import DashboardLayoutLabs from "./layout/DashboardLayoutLabs";
import ForgotPassword from "./sectionadmin/Forgotpassword";
import ProfileSection from "./sectionuser/ProfileSection";
import MembersDetail from "./sectionuser/MembersDetail";
import { ToastContainer } from "react-toastify";
import Subscriptionpage from "./sectionuser/Subscriptionpage";
import Labcontentpage from "./sectionuser/Labcontentpage";
import PrivacyPolicy from "./sectionuser/Privacypolicy";
import TermsAndConditions from "./sectionuser/TermsAndConditions";
import Consultation from "./sectionuser/Consultation";
import ClaimAssistance from "./sectionuser/ClaimAssistance";

const App = () => {
  return (
    <Router>
       <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/location" element={<LocationSection />} />
        <Route path="/user/userlablisting" element={<Userlablisting />} />
        <Route path="/user/profile" element={<ProfileSection/>} />
        <Route path="/user/members" element={<MembersDetail/>} />
        <Route path="/user/privacypolicy" element={<PrivacyPolicy/>} />
        <Route path="/user/consultation" element={<Consultation/>} />
        <Route path="/user/term&condition" element={<TermsAndConditions/>} />
        <Route path="/user/claimassistance" element={<ClaimAssistance/>} />
        <Route path="/user/subscription" element={<Subscriptionpage/>} />
        <Route path="/user/labcontentpage" element={<Labcontentpage/>} />
        <Route path="/admin" element={<Loginadmin />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/agency" element={<Loginagency />} />
        <Route path="/lab" element={<LoginLab />} />
        <Route path="/admindashboard/*" element={<DashboardLayoutAdmin />} />
        <Route path="/agencydashboard/*" element={<DashboardLayoutAgency />} />
        <Route path="/labdashboard/*" element={<DashboardLayoutLabs />} />
      </Routes>
    </Router>
  );
};

export default App;
