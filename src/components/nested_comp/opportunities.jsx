import React from 'react';
// import NewCard from './NewCard';
import NewCard2 from './NewCard2';


const gradientColor = {
    one: "linear-gradient(to right, rgba(211, 136, 255, 1), rgba(75, 148, 246, 1))",
    two: "linear-gradient(to right, rgba(255, 95, 215, 1), rgba(200, 106, 255, 1))",
    three: "linear-gradient(to right, rgba(255, 15, 123, 1), rgba(248, 155, 41, 1))",
    four: "linear-gradient(to right, rgba(40, 144, 250, 1), rgba(110, 214, 245, 1))",
  };

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

    const getRandomGradient = () => {
        const gradientKeys = Object.keys(gradientColor);
        const randomKey = gradientKeys[Math.floor(Math.random() * gradientKeys.length)];
        return gradientColor[randomKey];
      };

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <NewCard2 gradient={getRandomGradient()}/>
            </div>
            <div style={styles.card}>
                <NewCard2 gradient={getRandomGradient()}/>
            </div>
            {/*
            <div style={styles.card}>
                <NewCard />
            </div> */}
        </div>
    );
};

export default Opportunities;
