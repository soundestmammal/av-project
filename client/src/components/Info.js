import React from 'react';

const Info = (props) => {
    return (
        <div style={{height: '600px', display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
            <div style={{border: '1px solid red', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center'}}>
                <h4>We can see</h4> 
                <p>Our vehicles use the latest sensors and cameras to best understand the enviornment around it. </p>
            </div>
            <div style={{border: '1px solid green', width:'100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <img src={props.picUrl} alt="A car" style={{height: '300px'}}/> 
            </div> 
        </div> 
    );
}

export default Info;