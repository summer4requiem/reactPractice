import React from 'react';
import preloader from '/Users/summer_requiem/Dev/my-app/src/components/Users/preloader.svg';


const Preloader = () => (
    <div>
         <img src={preloader} className={preloader} alt={`loading`} width={80} height={80} />
    </div>
);

export default Preloader;
