import React from 'react'; 
import './PcRepairs.scss';

import MacBookCenter from '../../assets/pc-service-center.jpg';


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

        
        </>
)}

export default PcRepairPage;