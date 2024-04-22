import React, { useState } from 'react';
import './DataRecoveryServices.scss';

// Import images
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

// Import service images
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

// Import data services images
import DataServices from '../../assets/DataRecovery-2.jpg';

// Import data for reviews
import { Data } from "./DataReview";

// Import Swiper components and required modules
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

// Import components
import { ServiceCard } from './ServiceCard';
import { ProcessStep } from './ProcessStep';
import { ListItem } from './ListItem';

// Array of brand images
const brands = [
    western, toshiba, synology, sony, seagate, samsung, lacie, lexar,
    maxtar, ocz, pny, quantum, kingston, intel, ibm, hp, hitachi, gtech,
    apple, asus, drobo, buffalo, fujitsu, sandisk,
];

// Array of service data
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

  const [dropdownStates, setDropdownStates] = useState({
    dropdown1: false,
    dropdown2: false,
    dropdown3: false
});

const toggleDropdown = (dropdownId) => {
    // Close all dropdowns
    const newDropdownStates = {
        dropdown1: false,
        dropdown2: false,
        dropdown3: false
    };
    
    // Toggle the targeted dropdown
    newDropdownStates[dropdownId] = !dropdownStates[dropdownId];
    setDropdownStates(newDropdownStates);
};


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

            <div className="sectionClasses">
              <h1 className="titleClasses">
                Undertaking All Aspects Of Data Recovery Services
              </h1>
              <div className="grid">
                <p className="textClasses">
                  Our data recovery experts support all device types. Regardless of the type of damage, our data recovery experts specialize in recovering from drops, liquid damage, fires, and mechanical damage.
                </p>
                <p className="textClasses">
                  We work with all manufacturers, mobile phone suppliers, and computer models. Most importantly, we provide a recovery guarantee. If we cannot recover your files, there is no charge.
                </p>
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
        

        <div className="flex-middle">
            <button className="primaryButtonClass buttonClass">Make A Shipping Request</button>
            <button className="secondaryButtonClass buttonClass">Visit Us Now!</button> 
        </div>

    <section className="review-container">
      <h2 className="review__title">5* Star Reviews For Our Data Recovery Services</h2>
      <Swiper
        className="review__container"
        loop={true}
        grabCursor={true}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
        }}
        modules={[Pagination]}
      >
        {Data.map(({ id, images, title, description }) => {
          return (
            <SwiperSlide className="review__card" key={id}>
                <div className="review-content">
                <div className="review-header">
              <img src={images} alt="" className="review__img" />
              <div className="review-details">
                  <h3 className="review__name">{title}</h3>
                  <div className='stars'>
                    <span>&#9733;</span>
                    <span>&#9733;</span>
                    <span>&#9733;</span>
                    <span>&#9733;</span>
                    <span>&#9733;</span>
                  </div>
              </div>
              </div>
              <p className="review__description">{description}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>

    <div className="process-step-container">
    <h2 className="process-step-title">Here's our simple 4-step process</h2>
      <div className="process-steps">
        <ProcessStep stepNumber={1} stepText="Mail-in/drop-off your device" iconClass="fa-solid fa-truck" />
        <ProcessStep stepNumber={2} stepText="Full evaluation & diagnostics" iconClass="fa-tools" />
        <ProcessStep stepNumber={3} stepText="Provide an estimate for your job" iconClass="fa-file-invoice-dollar" />
        <ProcessStep stepNumber={4} stepText="100% guaranteed recovery" iconClass="fa-solid fa-laptop-medical" />
      </div>
    </div>

      <div className="data-services">
            <div className="data-img">
                <img src={DataServices} alt="Data" />
            </div>
            <div className="data-content-container">
                <h2 className="data-title">DATA RECOVERY SERVICES</h2>
                <h3 className="data-subtitle">We Cover All Types Of Damages</h3>
                <ul className="data-list">
                    <ListItem className="data-list-item" text="Water Spill" />
                    <ListItem className="data-list-item" text="Human Errors" />
                    <ListItem className="data-list-item" text="Virus & Malware" />
                    <ListItem className="data-list-item" text="Hacks & Malicious Sabotage" />
                    <ListItem className="data-list-item" text="Mechanical Failures" />
                    <ListItem className="data-list-item" text="Software Corruption" />
                </ul>
                <p className='and-more'>And More...</p>
            </div>
         </div>

         <div className="data-services-bottom">
            <div className="data-content-container">
                <h2 className="data-title">DATA RECOVERY SERVICES NEAR ME</h2>
                <h3 className="data-subtitle">Looking for expert data recovery services?</h3>
                <ul className="relative">
            <li className="cursor-pointer" onClick={() => toggleDropdown('dropdown1')}>Click me
                {dropdownStates.dropdown1 && (
                    <ul className="dropdown dropdown-open">
                        <li>Option 1</li>
                        <li>Option 2</li>
                        <li>Option 3</li>
                    </ul>
                )}
            </li>
            <li className="cursor-pointer" onClick={() => toggleDropdown('dropdown2')}>Click me
                {dropdownStates.dropdown2 && (
                    <ul className="dropdown dropdown-open">
                        <li>Option 1</li>
                        <li>Option 2</li>
                        <li>Option 3</li>
                    </ul>
                )}
            </li>
            <li className="cursor-pointer" onClick={() => toggleDropdown('dropdown3')}>Click me
                {dropdownStates.dropdown3 && (
                    <ul className="dropdown dropdown-open">
                        <li>Option 1</li>
                        <li>Option 2</li>
                        <li>Option 3</li>
                    </ul>
                )}
            </li>
        </ul>
                <p className='and-more'>View Pricing</p>
            </div>
            <div className="data-img">
                <img src={DataServices} alt="Data" />
            </div>
         </div>

</div>
    </>
    );
};



export default DataRecoveryComponent;
