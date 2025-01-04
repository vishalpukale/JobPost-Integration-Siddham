import React from 'react'
import AmazonLogo from '../assets/LogoAma.svg';

const styles = {
    parent: {
        width: 589,
        height: 386,
        paddingTop: 12,
        paddingBottom: 28,
        paddingLeft: 12,
        paddingRight: 12,
        background: 'white',
        boxShadow: '0px 2px 12px rgba(0, 0, 0, 0.25)',
        borderRadius: 32,
        border: '0.50px #D388FF solid',
        backdropFilter: 'blur(16px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        gap: 16,
        boxSizing: 'border-box', // Ensures padding is included in width/height
    },
    child: {
        width: '100%', // Full width of the parent
        height: '100%',
        padding: 24,
        background: 'rgba(42.50, 0, 255, 0.16)',
        borderRadius: 24,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        gap: 28,
        boxSizing: 'border-box', // Includes padding in width
    },
};

const Card = () => {
    return (
        <div style={styles.parent}>
            <div style={styles.child}>
                <div style={{ width: '100%', height: '100%', justifyContent: 'flex-end', alignItems: 'flex-end', gap: 8, display: 'inline-flex' }}>

                    <div style={{ width: '100%', height: '100%', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'inline-flex' }}>
                        <div style={{ width: 'auto', height: '100%', padding: 12, background: '#F5F5F5', borderRadius: 24, backdropFilter: 'blur(16px)', justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'inline-flex' }}>
                            <div style={{ color: '#0072DC', fontSize: 12, fontFamily: 'SF UI  Text', fontWeight: '600', height: 12, wordWrap: 'break-word' }}>19th Dec 2024</div>
                        </div>


                        <div style={{ width: '100%', height: '100%', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: 8, display: 'inline-flex' }}>
                            <div style={{ width: '100%', height: '100%', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
                                <div style={{ padding: 4, justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'inline-flex' }}>
                                    <div style={{ textAlign: 'center', color: '#55557C', fontSize: 18, fontFamily: 'SF UI  Text', fontWeight: '600', height: 18, wordWrap: 'break-word' }}>Amazon</div>
                                </div>
                                <div style={{ padding: 4, justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'inline-flex' }}>
                                    <div style={{ textAlign: 'center', color: '#55557C', fontSize: 28, fontFamily: 'SF UI  Text', fontWeight: '700', height: 28, wordWrap: 'break-word' }}>Senior UI/UX Designer</div>
                                </div>
                            </div>


                            <div style={{ width: '100%', height: '100%', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'inline-flex' }}>
                                <div style={{ paddingLeft: 8, paddingRight: 8, paddingTop: 4, paddingBottom: 4, background: 'linear-gradient(319deg, #D388FF 0%, #4B94F6 69%)', boxShadow: '0px 0px 4px #D388FF', borderRadius: 8, justifyContent: 'center', alignItems: 'center', gap: 8, display: 'flex' }}>
                                    <div style={{ textAlign: 'center', color: 'white', fontSize: 12, fontFamily: 'SF UI  Text', fontWeight: '400', textTransform: 'uppercase', height: 12, letterSpacing: 0.48, wordWrap: 'break-word' }}>Full-time</div>
                                </div>
                                <div style={{ paddingLeft: 8, paddingRight: 8, paddingTop: 4, paddingBottom: 4, background: 'linear-gradient(319deg, #D388FF 0%, #4B94F6 69%)', boxShadow: '0px 0px 4px #D388FF', borderRadius: 8, justifyContent: 'center', alignItems: 'center', gap: 8, display: 'flex' }}>
                                    <div style={{ textAlign: 'center', color: 'white', fontSize: 12, fontFamily: 'SF UI  Text', fontWeight: '400', textTransform: 'uppercase', height: 12, letterSpacing: 0.48, wordWrap: 'break-word' }}>Remote</div>
                                </div>
                                <div style={{ paddingLeft: 8, paddingRight: 8, paddingTop: 4, paddingBottom: 4, background: 'linear-gradient(319deg, #D388FF 0%, #4B94F6 69%)', boxShadow: '0px 0px 4px #D388FF', borderRadius: 8, justifyContent: 'center', alignItems: 'center', gap: 8, display: 'flex' }}>
                                    <div style={{ textAlign: 'center', color: 'white', fontSize: 12, fontFamily: 'SF UI  Text', fontWeight: '400', textTransform: 'uppercase', height: 12, letterSpacing: 0.48, wordWrap: 'break-word' }}>Health benefits</div>
                                </div>
                                <div style={{ paddingLeft: 8, paddingRight: 8, paddingTop: 4, paddingBottom: 4, background: 'linear-gradient(319deg, #D388FF 0%, #4B94F6 69%)', boxShadow: '0px 0px 4px #D388FF', borderRadius: 8, justifyContent: 'center', alignItems: 'center', gap: 8, display: 'flex' }}>
                                    <div style={{ textAlign: 'center', color: 'white', fontSize: 12, fontFamily: 'SF UI  Text', fontWeight: '400', textTransform: 'uppercase', height: 12, letterSpacing: 0.48, wordWrap: 'break-word' }}>401k</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <img src={AmazonLogo} alt="" />

                </div>
                {/* top session done */}




                <div style={{ width: '100%', height: '100%', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 12, display: 'inline-flex' }}>
                    <div style={{ width: '100%', height: '100%', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 12, display: 'inline-flex' }}>
                        <div style={{ alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'inline-flex' }}>
                            <div style={{ padding: 12, background: '#F5F5F5', borderRadius: 24, backdropFilter: 'blur(16px)', justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'flex' }}>
                                <div style={{ color: '#1E1E1E', fontSize: 12, fontFamily: 'SF UI  Text', fontWeight: '600', height: 12, wordWrap: 'break-word' }}>Figma</div>
                            </div>
                            <div style={{ padding: 12, background: '#F5F5F5', borderRadius: 24, backdropFilter: 'blur(16px)', justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'flex' }}>
                                <div style={{ color: '#1E1E1E', fontSize: 12, fontFamily: 'SF UI  Text', fontWeight: '600', height: 12, wordWrap: 'break-word' }}>Adobe XD</div>
                            </div>
                            <div style={{ padding: 12, background: '#F5F5F5', borderRadius: 24, backdropFilter: 'blur(16px)', justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'flex' }}>
                                <div style={{ color: '#1E1E1E', fontSize: 12, fontFamily: 'SF UI  Text', fontWeight: '600', height: 12, wordWrap: 'break-word' }}>Spline</div>
                            </div>
                            <div style={{ padding: 12, background: '#F5F5F5', borderRadius: 24, backdropFilter: 'blur(16px)', justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'flex' }}>
                                <div style={{ color: '#1E1E1E', fontSize: 12, fontFamily: 'SF UI  Text', fontWeight: '600', height: 12, wordWrap: 'break-word' }}>CSS</div>
                            </div>
                            <div style={{ padding: 12, background: '#F5F5F5', borderRadius: 24, backdropFilter: 'blur(16px)', justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'flex' }}>
                                <div style={{ color: '#1E1E1E', fontSize: 12, fontFamily: 'SF UI  Text', fontWeight: '600', height: 12, wordWrap: 'break-word' }}>JavaScript</div>
                            </div>
                        </div>
                        <div style={{ alignSelf: 'stretch', paddingTop: 4, paddingBottom: 4, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 12, display: 'inline-flex' }}>
                            <div style={{ flex: '1 1 0', height: 36, paddingLeft: 20, paddingRight: 20, paddingTop: 8, paddingBottom: 8, background: 'rgba(255, 255, 255, 0.35)', boxShadow: '0px 2px 12px rgba(0, 0, 0, 0.25)', borderRadius: 12, border: '1px #DCFFFF solid', justifyContent: 'space-between', alignItems: 'center', display: 'flex' }}>
                                <div style={{ color: '#55557C', fontSize: 14, fontFamily: 'SF UI  Text', fontWeight: '400', height: 14, wordWrap: 'break-word' }}>Candidates Applied</div>
                                <div style={{ textAlign: 'right', color: '#55557C', fontSize: 20, fontFamily: 'SF UI  Text', fontWeight: '600', height: 20, wordWrap: 'break-word' }}>12</div>
                            </div>
                            <div style={{ flex: '1 1 0', height: 36, paddingLeft: 20, paddingRight: 20, paddingTop: 8, paddingBottom: 8, background: 'rgba(255, 255, 255, 0.35)', boxShadow: '0px 2px 12px rgba(0, 0, 0, 0.25)', borderRadius: 12, border: '1px #DCFFFF solid', justifyContent: 'space-between', alignItems: 'center', display: 'flex' }}>
                                <div style={{ color: '#55557C', fontSize: 14, fontFamily: 'SF UI  Text', fontWeight: '400', height: 14, wordWrap: 'break-word' }}>Completed Interview</div>
                                <div style={{ textAlign: 'right', color: '#55557C', fontSize: 20, fontFamily: 'SF UI  Text', fontWeight: '600', height: 20, wordWrap: 'break-word' }}>26</div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* top mid session */}
            </div>



            <div style={{ width: '100%', height: '100%', paddingLeft: 16, paddingRight: 16, justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'inline-flex' }}>
                <div style={{ flex: '1 1 0', textAlign: 'center', color: '#D388FF', fontSize: 20, fontFamily: 'SF UI Text', fontWeight: '700', height: 20, wordWrap: 'break-word' }}>AI Interview In progress</div>
            </div>

        </div>

    )
}

export default Card