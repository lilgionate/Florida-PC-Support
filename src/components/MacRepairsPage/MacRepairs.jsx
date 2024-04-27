import React from 'react';
import './MacRepairs.scss';

import MacBookCenter from '../../assets/macbook-service-center.jpg';

const MacRepairPage = () => {
    return (
        <div className="MacRepairContainer">
            <div className="MacRepairsContent">
                <h1 className="MacRepairsTitle">Mac Repairs</h1>
                <p className="MacRepairsDes">
                    We are experts at fixing all Macs. Stop in for an affordable, 
                    speedy reliable Mac repair service in Florida. You may bring your Apple device 
                    to our Florida PC Support shop for a free diagnostic 
                    and quick turn-around. If you prefer to have a Florida Mac repair technician 
                    come to you, contact us to schedule same-day IT service.
                </p>
                <button className="MacRepairsButton">
                    Get a free diagnostic
                </button>
            </div>
            <div className="MacRepairsImg">
                <img src={MacBookCenter} alt="Mac Repair Image" className='MacImg'/>
            </div>
        </div>
    );
};

export default MacRepairPage;
