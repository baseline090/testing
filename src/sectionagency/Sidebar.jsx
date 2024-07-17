import React from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home'; 
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom'; 
import EscalatorWarningIcon from '@mui/icons-material/EscalatorWarning';
import { ListItemIcon, ListItemText } from '@mui/material'; 

const Sidebar = () => {
  const sidebarStyle = {
    backgroundColor: 'white',
    color: 'rgb(13 121 173)',
    padding: '10px',
    width: '150px',
    minHeight:"600px",
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)'  // bottom box shadow
  };
  

  const linkStyle = {
    color: 'rgb(13 121 173)',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '8%'
  };

  return (
    <aside style={sidebarStyle}>
      <nav className="sidebar-nav">
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li style={linkStyle}>
          <ListItemIcon sx={{ minWidth: '0px' }}>
              <HomeIcon style={{ color: 'white' }} />
            </ListItemIcon>
            <Link to="/agencydashboard" style={linkStyle}>
            Home
            </Link>
          </li>
          <li style={linkStyle}>
          <ListItemIcon sx={{ minWidth: '0px' }}>
              <EscalatorWarningIcon style={{ color: 'white' }} />
            </ListItemIcon>
            <Link to="/agencydashboard/agencylab" style={linkStyle}>
             Laboratory
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
