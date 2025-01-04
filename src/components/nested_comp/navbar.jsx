import React from 'react'
import '../index.css'
import SearchIcon from '../../assets/Search.svg';
import BellIcon from '../../assets/Bell.png';
import AvatarIcon from '../../assets/Avatar_pic.png';
import Layila from '../../assets/Layila.png';


const Navbar = () => {
    return (
        <div className='navbar' style={{ width: '100%', height: "auto", paddingLeft: 40, paddingRight: 40, paddingTop: 10, paddingBottom: 10, background: 'white', border: '1px #D2D2D2 solid', backdropFilter: 'blur(220px)', justifyContent: 'space-between', alignItems: 'center', display: 'flex' }}>

            <div className="icon-container" style={{ paddingLeft: 12, paddingRight: 4, paddingTop: 4, paddingBottom: 4, background: '#0F0F36', borderRadius: 6, justifyContent: 'center', alignItems: 'center', gap: 4, display: 'flex', height: 24 }}>
                <div className='tilt' style={{ width: '20px', height: '20px', position: 'relative' }}> {/* Reduced height and width */}
                    <div style={{ width: 12.09, height: 22.63, left: 16, top: 0, position: 'absolute', transform: 'scale(0.9) rotate(45deg)', transformOrigin: '0 0' }}> {/* Adjusted scale */}
                        <div style={{ width: 3.36, height: 3.36, left: 0.92, top: 4.27, position: 'absolute', background: 'linear-gradient(225deg, #FFF2F7 0%, #FCACC9 100%)' }} />
                        <div style={{ width: 2.85, height: 2.85, left: -4.77, top: 4.77, position: 'absolute', background: 'linear-gradient(225deg, #FFF2F7 0%, #FF8CB6 67%)' }} />
                        <div style={{ width: 2.85, height: 2.85, left: -1.92, top: 7.62, position: 'absolute', background: 'linear-gradient(225deg, #FFF2F7 0%, #FF8CB6 67%)' }} />
                        <div style={{ width: 1.90, height: 1.90, left: -6.67, top: 7.62, position: 'absolute', background: 'linear-gradient(225deg, #FD8FB5 0%, #EA63E7 82%)' }} />
                        <div style={{ width: 1.90, height: 1.90, left: -4.77, top: 9.52, position: 'absolute', background: 'linear-gradient(225deg, #FD8FB5 0%, #EA63E7 82%)' }} />
                        <div style={{ width: 1.90, height: 1.90, left: -2.87, top: 11.41, position: 'absolute', background: 'linear-gradient(225deg, #FD8FB5 0%, #EA63E7 82%)' }} />
                        <div style={{ width: 1.90, height: 1.90, left: -6.07, top: 12.72, position: 'absolute', background: 'linear-gradient(225deg, #FD8FB5 0%, #C86AFF 82%)' }} />
                        <div style={{ width: 0.84, height: 0.84, left: -11.72, top: 19.44, position: 'absolute', background: '#0072DC' }} />
                        <div style={{ width: 1.90, height: 1.90, left: -4.17, top: 14.62, position: 'absolute', background: 'linear-gradient(225deg, #FD8FB5 0%, #C86AFF 82%)' }} />
                        <div style={{ width: 1.90, height: 1.90, left: -7.97, top: 10.82, position: 'absolute', background: 'linear-gradient(225deg, #FD8FB5 0%, #C86AFF 82%)' }} />
                        <div style={{ width: 1.50, height: 1.50, left: -9.63, top: 13.67, position: 'absolute', background: 'linear-gradient(225deg, #C86AFF 17%, #538FF9 82%)' }} />
                        <div style={{ width: 1.50, height: 1.50, left: -8.09, top: 15.21, position: 'absolute', background: 'linear-gradient(225deg, #C86AFF 17%, #538FF9 82%)' }} />
                        <div style={{ width: 1.19, height: 1.19, left: -10.62, top: 16.72, position: 'absolute', background: 'linear-gradient(225deg, #5390F9 17%, #0072DC 82%)' }} />
                        <div style={{ width: 1.19, height: 1.19, left: -9.43, top: 17.91, position: 'absolute', background: 'linear-gradient(225deg, #5390F9 17%, #0072DC 82%)' }} />
                        <div style={{ width: 1.50, height: 1.50, left: -6.55, top: 16.76, position: 'absolute', background: 'linear-gradient(225deg, #C86AFF 17%, #538FF9 82%)' }} />
                        <div style={{ width: 1.90, height: 1.90, left: -0.97, top: 13.31, position: 'absolute', background: 'linear-gradient(225deg, #FD8FB5 0%, #EA63E7 82%)' }} />
                        <div style={{ width: 2.85, height: 2.85, left: 0.93, top: 10.46, position: 'absolute', background: 'linear-gradient(225deg, #FFF2F7 0%, #FF8CB6 67%)' }} />
                    </div>
                </div>
                <div style={{ color: 'white', height: 12, fontSize: 12, fontFamily: 'SF UI Text', fontWeight: '600', letterSpacing: 0.48, wordWrap: 'break-word', justifyContent: 'center', alignItems: 'center', gap: 4, display: 'flex'}}>Aspireit</div>
            </div>
            {/* brand logo done */}



            <div className="search-box" style={{ width: 609, height: 44, paddingLeft: 24, paddingRight: 24, background: '#F5F5F5', boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)', borderRadius: 32, display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: 16 }}>
                <div style={{ width: 36, height: 36, position: 'relative' }}>
                    <div style={{ width: 36, height: 36, position: 'absolute', background: '#F5F5F5', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img style={{ width: 20, height: 20 }} src={SearchIcon} alt="Search Icon" />
                    </div>
                </div>
                <input
                    className="search-input"
                    type="text"
                    placeholder="Search"
                />
            </div>
            {/* Search box done */}



            <div style={{ width: 170, height: 44, justifyContent: 'flex-end', alignItems: 'flex-end', gap: 24, display: 'inline-flex' }}>
                <div style={{ width: 110, height: 36, paddingLeft: 16, paddingRight: 16, paddingTop: 4, paddingBottom: 4, background: '#EBEBEB', boxShadow: '0px 0px 6px rgba(0, 0, 0, 0.25)', borderRadius: 40, backdropFilter: 'blur(4px)', justifyContent: 'center', alignItems: 'center', gap: 6, display: 'inline-flex' }}>
                    <div style={{ width: 36, height: 36, display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'white', borderRadius: '50%' }}>
                        <img style={{ width: 19, height: 19 }} src={BellIcon} alt="Bell Icon" />
                    </div>
                    <div style={{ width: 36, height: 36, display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'white', borderRadius: '50%' }}>
                        <img style={{ width: 36, height: 36, borderRadius: '50%' }} src={AvatarIcon} alt="Avatar Icon" />
                    </div>
                </div>


                <div style={{ width: 36, height: 36, background: "none", border: 'none', justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                    <img style={{ width: 36, height: 36, boxShadow: '4px 8px 50px rgba(0, 0, 0, 0.35)', borderRadius: '50%' }} src={Layila} alt="Layila Icon" />
                </div>
            </div>

            {/* done */}

        </div>

        // navbar done
    )
}

export default Navbar
