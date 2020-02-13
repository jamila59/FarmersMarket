  
import React from 'react';

function Background(){
    const backgroundStyle = {
        minHeight: '100%',
        minWidth: '1024px',

        /* Set up proportionate scaling */
        width: '100%',
        height: 'auto',

        /* Set up positioning */
        position: 'relative',
        top: '0',
        left: '0',
        zIndex: '-1'
    }
    return(
        <img src="https://a0.muscache.com/4ea/air/r:w1550-h1037-sfit,e:fjpg-c80/pictures/0ffd8594-f123-43f0-85bb-7ef88c6f0624.jpg" alt="" style = {backgroundStyle}/>
    );
}

export default Background;