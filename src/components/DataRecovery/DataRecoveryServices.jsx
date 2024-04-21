import React from 'react';
import './DataRecoveryServices.scss';

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

import DataRecovery from '../../assets/DataRecovery-2.jpeg';
import ExternalDrive from '../../assets/external-hard.jpg';
import MacBook from '../../assets/macbook-maxed.jpg';
import PCRepair from '../../assets/pc-windows-repair.jpg';
import Need from '../../assets/need.jpg';
import Imac from '../../assets/imac-pro.jpg';
import Iphone from '../../assets/iphone-data.png';
import Thumb from '../../assets/thumb-drive.jpg';
import Memory from '../../assets/memory-card.jpg';
import Screen from '../../assets/Screen-Shot.jpg';
import Raid from '../../assets/raid-server.jpg';

const brands = [
    western, toshiba, synology, sony, seagate, samsung, lacie, lexar,
    maxtar, ocz, pny, quantum, kingston, intel, ibm, hp, hitachi, gtech,
    apple, asus, drobo, buffalo, fujitsu, sandisk,
];

const services = [
    {
        title: 'Hard Drive Data Recovery',
        description: 'Own a desktop PC, laptop, or any kind of computer? Then, that means you have a hard drive inside. If you hear odd sounds or having computer issues, chances are you need hard drive recovery.',
        image: DataRecovery,
        alt: 'Hard Drive'
    },
    {
        title: 'External Hard Drive Data Recovery',
        description: "This is the most common data recovery we perform. We'll ensure your backup files are salvaged.",
        image: ExternalDrive,
        alt: 'External Hard Drive'
    },
    {
        title: 'Macbook Data Recovery',
        description: 'Hard drives, SSDs, and built-in logic board drives do fail. Don"t let Apple convince you your files are gone. Let us be the final judge of that!',
        image: MacBook,
        alt: 'Macbook'
    },
    {
        title: 'Windows Laptop Recovery',
        description: 'Your Windows laptop may have issues booting up. Our recovery techs can recover files from this. We also have convenient options afterwards to get your Windows computer up and running again.',
        image: PCRepair,
        alt: 'Windows Laptop',
    },
    {
        title: 'Desktop/PC Data Recovery',
        description: 'Got a desktop PC, all-in-one, or custom build computer? We have tons of experience recovering files from these systems. And you"ll also receive easy options to get your PC working again.',
        image: Need,
        alt: 'Desktop/PC Data Recovery',
    },
    {
        title: 'iMac - Mac Pro - Mac Mini Data Recovery',
        description: 'Many shy away from opening up iMac glass or prying open the Mac Pro or Mac mini. Not us. We are experts at recovering from these Apple systems.',
        image: Imac,
        alt: 'Imac - Mac Pro - Mac Mini Data Recovery',
    },
    {
        title: 'iPhone Data Recovery',
        description: 'Precious photos, videos, chats, text messages, and other files can still be recovered if your iPhone has issues. Don"t worry, we won"t judge you if you spilled liquid or dropped your iPhone.',
        image: Iphone,
        alt: 'Iphone Data Recovery',
    },
    {
        title: 'USB/Thumb Drive Data Recovery',
        description: 'Repairing thumb drives to recover files is a service we have performed since they were first invented in 2000.',
        image: Thumb,
        alt: 'USB/Thumb Drive Data Recovery',
    },
    {
        title: 'Memory Card Data Recovery',
        description: 'Dont"t give up on those unique, precious, photo memories and videos.',
        image: Memory,
        alt: 'Memory Card Data Recovery',
    },
    {
        title: 'SSD Data Recovery',
        description: 'Although solid state drives don"t have physical spinning disks and movable read-write heads, they are still prone to physical shock.',
        image: Screen,
        alt: 'SSD Data Recovery',
    },
    {
        title: 'RAID - NAS Data Recovery',
        description: 'Recovering from enterprise-level, mission critical storage devices. We may also help with rebuilding your server or offering alternate solutions.',
        image: Raid ,
        alt: 'RAID - NAS Data Recovery',
    },
];


const DataRecoveryComponent = () => {
    return (
        <>
        <div className="data-recovery-container">
            <img className='dataimg' src={bgImage} alt="" />
            <div className="containerClass">
                <div className="textClass">
                    <h1 className="dataheader mb-4">Data Recovery Services</h1>
                    <ul>
                        <li className="list">✔ We Provide Data Recoveries For Hard Drives, SSDs, Memory Cards, USB Drives</li>
                        <li className="list">✔ Managed By Experts In The Industry</li>
                        <li className="list">✔ FREE In-Depth Diagnosis And Evaluation</li>
                        <li className="list">✔ Mail-In Or Drop Off Your Devices</li>
                        <li className="list">✔ Emergency Data Recovery Service Options</li>
                    </ul>
                    <div className="flex">
                        <button className="primaryButtonClass buttonClass">Make A Shipping Request</button>
                        <button className="secondaryButtonClass buttonClass">Visit Us Now!</button> 
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

            <div className="section2Classes">
                <h2 className="heading2Classes">Our Data Recovery Services Cover All Device Types</h2>
                <div className="dataGrid">
                    {services.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>
            </div>
        </div>

        <div className="flex-middle">
            <button className="primaryButtonClass buttonClass">Make A Shipping Request</button>
            <button className="secondaryButtonClass buttonClass">Visit Us Now!</button> 
        </div>
    </>
    );
};

        const ServiceCard = ({ title, description, image, alt }) => (
            <div className="cardClasses">
                <img src={image} alt={alt} className="fullCard" />
                <h3 className="text-card">{title}</h3>
                <p>{description}</p>
            </div>
);

export default DataRecoveryComponent;
