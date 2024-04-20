import React from 'react';
import './DataRecoveryServices.scss'; // Import the CSS file

import bgImage from '../../assets/data-header.avif';
import western from '../../assets/western.png';
import toshiba from '../../assets/toshiba.png';
import synology from '../../assets/synology.png';
import sony from '../../assets/sony.png';
import seagate from '../../assets/seagate.png';
import samsung from '../../assets/samsung.png';
import lacie from '../../assets/lacie.png';
import lexar from '../../assets/lexar.png';
import maxtar from '../../assets/maxtar.png';
import ocz from '../../assets/ocz.png';
import pny from '../../assets/pny.png';
import quantum from '../../assets/quantum.png';
import kingston from '../../assets/kingston.png';
import intel from '../../assets/intel.png';
import ibm from '../../assets/ibm.png';
import hp from '../../assets/hp.png';
import hitachi from '../../assets/hitachi.png';
import gtech from '../../assets/g-tech.png';
import apple from '../../assets/apple.png';
import asus from '../../assets/asus.png';
import drobo from '../../assets/drobo.png';
import buffalo from '../../assets/buffalo.png';
import fujitsu from '../../assets/fujitsu.png';
import sandisk from '../../assets/sandisk.png';

const brands = [
    western, toshiba, synology, sony, seagate, samsung, lacie, lexar,
    maxtar, ocz, pny, quantum, kingston, intel, ibm, hp, hitachi, gtech,
    apple, asus, drobo, buffalo, fujitsu, sandisk,
];

const DataRecoveryComponent = () => {
    return (
        <div className="data-recovery-container">
            <img className='dataimg' src={bgImage} alt="" />
            <div className="containerClass">
                <div className="textClass max-w-3xl">
                    <h1 className="dataheader mb-4">Data Recovery Services</h1>
                    <ul>
                        <li className="list">✔ We Provide Data Recoveries For Hard Drives, SSDs, Memory Cards, USB Drives, Phones & Tablets</li>
                        <li className="list">✔ Managed By Experts In The Industry</li>
                        <li className="list">✔ FREE In-Depth Diagnosis And Evaluation</li>
                        <li className="list">✔ Mail-In Or Drop Off Your Devices</li>
                        <li className="list">✔ Emergency Data Recovery Service Options</li>
                    </ul>
                    <div className="flex">
                        <button className="primaryButtonClass buttonClass">Make A Shipping Request</button> {/* Use the class names defined in SCSS */}
                        <button className="secondaryButtonClass buttonClass">Visit Us Now!</button> {/* Use the class names defined in SCSS */}
                    </div>
                </div>
            </div>

            <div className="containerClasses">
                <h2 className="headingClasses">Brands We Work With</h2>
                <div className="gridClasses gap-1">
                    {brands.map((brand, index) => (
                        <img key={index} src={`${brand}`} alt={brand} className="imageClasses" />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DataRecoveryComponent;
