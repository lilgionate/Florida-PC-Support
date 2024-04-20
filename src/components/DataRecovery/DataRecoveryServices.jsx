// DataRecoveryComponent.jsx
import React from 'react';
import './DataRecoveryServices.scss'; // Import the SCSS file

import bgImage from '../../assets/harddrive.jpg'; // Import the background image

const DataRecoveryComponent = () => {
    return (
        <div className="bg-cover bg-center text-white" >
            <img className='dataimg' src={bgImage} alt="" />
            <div className="containerClass"> {/* Use the class names defined in SCSS */}
                <div className="textClass max-w-3xl">
                    <h1 className="dataheader mb-4">Data Recovery Services</h1>
                    <ul>
                        <li className="list">✔ We Provide Data Recoveries For Hard Drives, SSDs, Memory Cards, USB Drives, Phones & Tablets</li>
                        <li className="list">✔ Managed By Experts In The Industry</li>
                        <li className="list">✔ FREE In-Depth Diagnosis And Evaluation</li>
                        <li className="list">✔ Mail-In Or Drop Off Your Devices</li>
                        <li className="list">✔ Emergency Data Recovery Service Options</li>
                    </ul>
                    <div className="flex gap-4">
                        <button className="primaryButtonClass buttonClass">Make A Shipping Request</button> {/* Use the class names defined in SCSS */}
                        <button className="secondaryButtonClass buttonClass">Visit Us Now!</button> {/* Use the class names defined in SCSS */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DataRecoveryComponent;
