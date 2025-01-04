import React from 'react';
// import NewCard from './NewCard';
import NewCard2 from './NewCard2';

const styles = {
    container: {
        // width: '100%',
        // height: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'flex-start', // Aligns the cards to the left
        // padding: '0px 0px 0px 30px',
        boxSizing: 'border-box',
        // margin: "0px 22px",
        // gap: '60px', // Add gap between cards

    },
    card: {
        // width: '45%', // For two cards side by side
        marginLeft: '30px'
    },
};

const Opportunities = () => {
    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <NewCard2 />
            </div>
            <div style={styles.card}>
                <NewCard2 />
            </div>
            {/*
            <div style={styles.card}>
                <NewCard />
            </div> */}
        </div>
    );
};

export default Opportunities;
