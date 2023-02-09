import React from 'react';

import { Outlet } from  "react-router-dom";


const Shared =()=>{

    return (
        <div>
            <header> Navigation</header>
            <Outlet  />
        </div>
    )
}


export  default  Shared;
