import React from 'react';

const Hero = () => {
    const backgroundUrl = "https://3c1703fe8d.site.internapcdn.net/newman/gfx/news/hires/2017/sharedautono.jpg";
    return (
        <div style={{height: '800px'}}>
            <div style={{backgroundImage: `url(${backgroundUrl})`, height: '100%'}}>
                <div style={{color: 'white', letterSpacing: '0.1em', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                        <h2 style={{fontWeight: 'bold', letterSpacing: '0.5em'}}>Safety, Accessibility, Productivity</h2>
                        <div>This is where the content is going to go</div>
                        <button style={{backgroundColor: 'white', color: 'salmon', borderRadius: '10px'}}>Learn More</button>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default Hero;