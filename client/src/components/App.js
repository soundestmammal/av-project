import React from 'react';

import Header from './header';
import Hero from './Hero';
import Info from './Info';
import WideInfo from './WideInfo';

const App = () => {
    const vehicleUrl = "https://r7tupvw8d1-flywheel.netdna-ssl.com/wp-content/uploads/2018/02/fig-1-remote-sensing-685452052.jpg";
    return (
        <div>
            <Header />
            <Hero />
            <Info picUrl={vehicleUrl}/>
            <WideInfo /> 
            <Info picUrl={vehicleUrl}/>            
        </div>
    );
}

export default App;