import React, { useState } from 'react';
import DownArrow from '../../assets/Down arrow.png';
import StarIcon from '../../assets/Icon.svg';

const FilterActions = ({ setShowFirstComponent }) => {

  const [openDropdown, setOpenDropdown] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleDropdown = (dropdownName) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div style={{ margin: '26px', height: 'auto', width: '96%', paddingLeft: 36, paddingRight: 36, paddingTop: 12, paddingBottom: 12, background: '#F5F5F5', borderRadius: 8, justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex' }}>
      <div style={{ width: '100%', height: '40', justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'inline-flex' }}>
        <div style={{ position: 'relative' }}>
          <div onClick={() => toggleDropdown('openJobs')} style={{ width: 146, height: 40, paddingLeft: 12, paddingRight: 12, paddingTop: 8, paddingBottom: 8, background: '#F5F5F5', boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.40)', borderRadius: 24, justifyContent: 'space-between', alignItems: 'center', gap: 16, display: 'inline-flex', cursor: 'pointer' }}>
            <div style={{ color: '#161616', fontSize: 16, fontFamily: 'SF UI  Text', fontWeight: '400', height: 16, wordWrap: 'break-word' }}>
              Open Jobs
            </div>
            <img style={{ width: 15.6, height: 7, transform: openDropdown === 'openJobs' ? 'rotate(180deg)' : 'rotate(0deg)', transformOrigin: '0 0' }} src={DownArrow} alt="" />
          </div>
          {openDropdown === 'openJobs' && (
            <div style={{ position: 'absolute', top: '40px', left: 0, background: 'white', boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.25)', borderRadius: 8, zIndex: 10 }}>
              <div style={{ padding: '8px 16px' }}>Option 1</div>
              <div style={{ padding: '8px 16px' }}>Option 2</div>
              <div style={{ padding: '8px 16px' }}>Option 3</div>
            </div>
          )}
        </div>

        <div style={{ position: 'relative' }}>
          <div onClick={() => toggleDropdown('closedJobs')} style={{ lineHeight: 'auto', width: 146, height: 40, paddingLeft: 12, paddingRight: 12, paddingTop: 8, paddingBottom: 8, background: '#F5F5F5', boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.40)', borderRadius: 24, justifyContent: 'space-between', alignItems: 'center', gap: 16, display: 'inline-flex', cursor: 'pointer' }}>
            <div style={{  color: '#161616', fontSize: 16, fontFamily: 'SF UI  Text', fontWeight: '400', height: 16, wordWrap: 'break-word' }}>
              Closed Jobs
            </div>
            <img style={{ width: 15.6, height: 7, transform: openDropdown === 'closedJobs' ? 'rotate(180deg)' : 'rotate(0deg)', transformOrigin: '0 0' }} src={DownArrow} alt="" />
          </div>
          {openDropdown === 'closedJobs' && (
            <div style={{ position: 'absolute', top: '40px', left: 0, background: 'white', boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.25)', borderRadius: 8, zIndex: 10 }}>
              <div style={{ padding: '8px 16px' }}>Option 1</div>
              <div style={{ padding: '8px 16px' }}>Option 2</div>
              <div style={{ padding: '8px 16px' }}>Option 3</div>
            </div>
          )}
        </div>
      </div>

      {/* Button to trigger the action */}
      <div style={{ width: '160px', height: 'auto', paddingTop: 8, paddingBottom:8,paddingLeft: 16, paddingRight: 16, background: 'linear-gradient(135deg, #002DBF 7%, #4396F7 46%, #FF9BD2 71%, #C9FFFC 97%)', boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)', borderRadius: 30, justifyContent: 'center', alignItems: 'center', gap: 4, display: 'inline-flex' }}>
        <img src={StarIcon} alt="" />
        <button
          onClick={()=>setShowFirstComponent(true)}
          style={{ textAlign: 'center', color: 'white', paddingLeft: 12, paddingRight: 12, fontSize: 14, fontFamily: 'SF UI Text', fontWeight: '600', background: 'transparent', border: 'none', cursor: 'pointer' }}
        >
          Post A Job
        </button>
      </div>
    </div>
  );
};

export default FilterActions;
