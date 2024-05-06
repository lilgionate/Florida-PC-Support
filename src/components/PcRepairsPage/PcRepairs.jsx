import React from 'react'; 
import './PcRepairs.scss';

import MacBookCenter from '../../assets/pc-service-center.jpg';
import CommonIssuesList from './SupportedPcIssues';


const PcRepairPage = () => {
    return (
        <>
        <div className="PcRepairContainer">
            <div className="PcRepairsContent">
                <h1 className="PcRepairsTitle">PC Repairs</h1>
                <p className="PcRepairsDes">
                Get a free diagnostic on the spot to repair your PC. The turn-around time is 
                the same day to next day. 
                You need your computer fixed right away and we will make that happen for you.
                </p>
                <button className="PcRepairsButton">
                    Get a free diagnostic
                </button>
            </div>
            <div className="PcRepairsImg">
                <img src={MacBookCenter} alt="Pc Repair Image" className='PcImg'/>
            </div>
        </div>

        <CommonIssuesList />

        <div className="pc-repair-service-container">
            <h1 className="pc-repair-service-heading">Drop-off or Onsite Windows / Microsoft repair service: You choose</h1>
            <p className="pc-repair-service-paragraph">
                Whether you prefer a free diagnostic first or same-day visit, we will accommodate you. We will work around your schedule. You may schedule for one of our Florida Microsoft repair service experts to come to your home or office during the same day. Or you may drop off at our repair centers. Either way, you will get a certified Windows PC repair expert take care of your Microsoft issue.
            </p>
        </div>

        </>
)}

export default PcRepairPage;