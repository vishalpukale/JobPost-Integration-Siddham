import React from 'react';
import '../components/index.css';
import Navbar from '../components/nested_comp/navbar';
import FilterActions from '../components/nested_comp/filterActions';
import Opportunities from '../components/nested_comp/opportunities';

const JobSearchMain = ({ setShowFirstComponent }) => {

  return (
    <div className="main-container" style={{ width: '100%', height: '100%', background: 'white', borderRadius: 30, overflow: 'hidden' }}>
      <Navbar />
      <div style={{ width: '100%', height: '100%'}} >
        <FilterActions setShowFirstComponent={setShowFirstComponent} /> {/* Pass the prop to FilterActions */}
        <Opportunities />
      </div>
    </div>
  );
};

export default JobSearchMain;
