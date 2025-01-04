import React, { useEffect, useState } from 'react'
import AmazonLogo from '../../assets/LogoAma.svg';

const NewCard2 = ({ gradient }) => {


    const aboutCompany = {
        postedDate: "19th Dec 2024",
        companyName: "Amazon",
        role: "Senior UI/UX Designer",
        detail: [
            "Full-time",
            'Remote',
            'Health benefits',
            '401k'
        ],
        skills: [
            'Figma',
            'Adobe XD',
            'Spline',
            'CSS',
            'JavaScript',
        ],
        currentStatus: {
            "Candidates Applied": 12,
            "Completed Interview": 26,
        }
    }



    return (
        <div style={{ width: 525, height: 'auto', paddingTop: 12, paddingBottom: 28, paddingLeft: 12, paddingRight: 12, background: 'white', boxShadow: '0px 2px 12px rgba(0, 0, 0, 0.25)', borderRadius: 32, border: '0.50px #D388FF solid', backdropFilter: 'blur(16px)', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-end', gap: 16, display: 'inline-flex' }}>
            <div style={{ alignSelf: 'stretch', height: 'auto', padding: 24, background: '#F5F5F5', boxShadow: '0px 0px 12px rgba(0, 0, 0, 0.25) inset', borderRadius: 24, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 20, display: 'flex' }}>


                <div style={{ width: '100%', height: '100%', justifyContent: 'flex-end', alignItems: 'flex-start', gap: 8, display: 'inline-flex' }}>

                    <div style={{ width: '100%', height: '100%', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'inline-flex' }}>
                        <div style={{ width: 'auto', height: '100%', padding: 12, background: 'white', borderRadius: 24, backdropFilter: 'blur(16px)', justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'inline-flex' }}>
                            <div style={{ color: '#0072DC', fontSize: 12, fontFamily: 'SF UI  Text', fontWeight: '600', height: 12, wordWrap: 'break-word' }}>{aboutCompany.postedDate}</div>
                        </div>


                        <div style={{ width: '100%', height: '100%', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: 8, display: 'inline-flex' }}>
                            <div style={{ width: '100%', height: '100%', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
                                <div style={{ padding: 4, justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'inline-flex' }}> <div style={{ textAlign: 'center', color: '#55557C', fontSize: 18, fontFamily: 'SF UI  Text', fontWeight: '600', height: 18, wordWrap: 'break-word' }}>{aboutCompany.companyName}</div>
                                </div>
                                <div style={{ padding: 4, justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'inline-flex' }}> <div style={{ background: gradient, WebkitBackgroundClip: 'text', textAlign: 'center', color: 'transparent', fontSize: 28, fontFamily: 'SF UI  Text', fontWeight: '700', wordWrap: 'break-word', lineHeight: 'auto' }}>
                                    {aboutCompany.role}
                                </div>
                                </div>
                            </div>


                            <div style={{ width: '100%', height: '100%', boxShadow: '0px 0px 4px #C9FFFC', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'inline-flex' }}>
                                {aboutCompany.detail.map((item, index) => (<div key={index} style={{ border: '1.50px #D388FF solid', paddingLeft: 8, paddingRight: 8, paddingTop: 4, paddingBottom: 4, borderRadius: 8, justifyContent: 'center', alignItems: 'center', gap: 8, display: 'flex' }}>     <div style={{ background: 'linear-gradient(to right, rgba(211, 136, 255, 1), rgba(75, 148, 246, 1))', WebkitBackgroundClip: 'text', color: 'transparent', textAlign: 'center', fontSize: 11, fontFamily: 'SF UI Text', fontWeight: '700', textTransform: 'uppercase', height: 12, letterSpacing: 0.48, wordWrap: 'break-word' }}>         {item}     </div> </div>
                                ))}
                            </div>
                            {/* boxShadow: '0px 0px 4px #D388FF', */}
                        </div>
                    </div>

                    <img src={AmazonLogo} alt="" />

                </div>
                {/* top session done */}




                <div style={{ width: '100%', height: '100%', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 12, display: 'inline-flex' }}>
                    <div style={{ alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'inline-flex' }}>
                        {
                            aboutCompany.skills.map((item, index) => (
                                <div style={{ padding: 12, background: 'white', borderRadius: 24, backdropFilter: 'blur(16px)', justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'flex' }}>
                                    <div style={{ color: '#1E1E1E', fontSize: 12, fontFamily: 'SF UI  Text', fontWeight: '600', height: 12, wordWrap: 'break-word' }}>{item}</div>
                                </div>
                            ))
                        }
                    </div>
                    <div style={{ alignSelf: 'stretch', paddingTop: 4, paddingBottom: 4, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 12, display: 'inline-flex' }}>
                        {Object.entries(aboutCompany.currentStatus).map(([key, value], index) => (
                            <div key={index} style={{ flex: '1 1 0', height: 36, paddingLeft: 20, paddingRight: 20, paddingTop: 8, paddingBottom: 8, background: 'rgba(255, 255, 255, 0.35)', boxShadow: '0px 2px 12px rgba(0, 0, 0, 0.25)', borderRadius: 12, border: '1px #DCFFFF solid', justifyContent: 'space-between', alignItems: 'center', display: 'flex' }}>
                                <div style={{ color: '#55557C', fontSize: 14, fontFamily: 'SF UI Text', fontWeight: '400', height: 14, wordWrap: 'break-word' }}>
                                    {key}
                                </div>
                                <div style={{ textAlign: 'right', color: '#55557C', fontSize: 20, fontFamily: 'SF UI Text', fontWeight: '600', height: 20, wordWrap: 'break-word' }}> {value}
                                </div>
                            </div>
                        ))}

                    </div>
                </div>

                {/* top mid session */}


            </div>


            <div className='Ai' style={{ margin: '-0px -20px 0px 0px', padding: '0 16px', display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', width: '100%' }}>
                <div style={{ background: 'linear-gradient(to right, rgba(211, 136, 255, 1), rgba(75, 148, 246, 1))', WebkitBackgroundClip: 'text', color: 'transparent', fontSize: 20, fontFamily: 'SF UI Text', fontWeight: '700', lineHeight: 'auto', wordWrap: 'break-word' }}>
                    AI Interview In progress
                </div>
            </div>


        </div>
    )
}

export default NewCard2