import React from 'react';
import './MacRepairs.scss';

import MacBookCenter from '../../assets/macbook-service-center.jpg';

import ServiceCard from './MacScenarios';

const MacRepairPage = () => {
    return (
        <>
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

        <div className="scenario-service-container">
            <h2 className='scenario-title'>Why are we better than the Apple store? Here are some real customer scenarios:</h2>
            <div className="scenario-service-grid">
                <ServiceCard
                    title="My Mac is so slow."
                    description="Do you need help? Take a number or walk in anytime. Which do you prefer? If you have a Mac issue, Apple asks you to reserve a time in advance. At New York Computer Help, you may drop in at your convenience. Time is of the essence and we get that. Your Mac needs help and we want to fix it right away for you. And by the way, we look to actually fix your current Mac, not upsell you on a new one."
                />
                <ServiceCard
                    title="My MacBook doesn’t turn on."
                    description="The Genius Bar’s canned response is: “That will be $1,000 for the logic board replacement.” What?! New York Computer Help responds: “We’ll be happy to provide a free on-the-spot diagnostic. We are able to directly repair the logic board and perform part replacements which would cut your Mac repair cost to a third of what the Apple store usually charges.”"
                />
            </div>
        </div>

        </>
    );
};

export default MacRepairPage;
