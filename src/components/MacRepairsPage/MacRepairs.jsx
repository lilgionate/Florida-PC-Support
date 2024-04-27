import React from 'react';
import './MacRepairs.scss';

import MacBookCenter from '../../assets/macbook-service-center.avif';

import ServiceCard from './MacScenarios';
import ImageWithButton from './MacRepairMiddle';

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
            <h2 className='scenario-title-header'>Why are we better than the Apple store? Here are some real customer scenarios:</h2>
            <div className="scenario-service-grid">
                <ServiceCard
                    title="My Mac is so slow."
                    description="Do you need help? Take a number or walk in anytime. Which do you prefer? If you have a Mac issue, Apple asks you to reserve a time in advance. At Florida PC Support, you may drop in at your convenience. Time is of the essence and we get that. Your Mac needs help and we want to fix it right away for you. And by the way, we look to actually fix your current Mac, not upsell you on a new one."
                />
                <ServiceCard
                    title="My MacBook doesn’t turn on."
                    description="The Genius Bar’s canned response is: “That will be $1,000 for the logic board replacement.” What?! Florida PC Support responds: “We’ll be happy to provide a free on-the-spot diagnostic. We are able to directly repair the logic board and perform part replacements which would cut your Mac repair cost to a third of what the Apple store usually charges.”"
                />
                <ServiceCard
                    title="I just spilled water on my MacBook Air. Can you help?"
                    description="The Apple store automatically negates your pricey AppleCare warranty support and reverts you to its $1,000 standard fee or tries to sell you a new Mac. New York Computer Help routinely performs Mac spill clean repairs and is able to save you hundreds of dollars by directly removing the spill damage. Further, data recovery is one of our specialties if your Mac looks far gone.”"
                />
                <ServiceCard
                    title="My iMac needs a repair?"
                    description="Can you come to my home or office? Apple doesn’t make house calls. Florida PC Support gladly has a 25-tech team that will be able to assist you in the same day. You’ll receive a certified Apple technician who will take care of all your Apple repair needs.”"
                />
                <ServiceCard
                    title="I need to upgrade my MacBook."
                    description="The Apple store does not work on “older” Macs. Also, it does not perform basic upgrades, such as RAM upgrades and hard drive upgrades. Why? They’re product-focused and want you to buy the newest MacBook. At Florida PC Support, we are service-focused and will do everything in our power to repair, upgrade, and save your precious MacBook. Yes, we actually care!”"
                />
                <ServiceCard
                    title="My Mac is only 6 years old but Apple won’t repair it because it is a “vintage” product that is too old to fix."
                    description="This one really gets us upset! You mean Apple manufactured a product that you paid a ton for, and they refuse to support it any longer?! Just awful! We gladly accept all vintage, antiques, and the most seriously challenged Mac that you need to have repaired. We certainly do not discriminate, welcoming all models, years, and Mac issues!”"
                />
            </div>
        </div>

        <ImageWithButton />

        </>
    );
};

export default MacRepairPage;
