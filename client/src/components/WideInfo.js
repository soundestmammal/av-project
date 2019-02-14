import React from 'react';

const WideInfo = () => {
    return (
        <div style={{height: '600px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <h2>Our mission is to design the world's smartest driver</h2>
            <p style={{maxWidth: '700px'}}>By driving over 1 million miles every day, we are collecting Petabytes of data to better learn how to drive. We give our algorithms access to billions of hours of past driving experience 
                to make more informed decisions in the future. By allowing our vehicles to experience different driving behavior in a wide variety of environments we are able to make the safest driver.
            </p>
        </div>
    );
}

export default WideInfo;