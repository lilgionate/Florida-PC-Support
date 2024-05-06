import React from 'react'; 
import './PcRepairs.scss';

import PCSplitImg from '../../assets/pc-split-img.avif';

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

    <div className="pc-repair-split-container">
    <div className="pc-repair-split-img">
        <img src={PCSplitImg} alt="Computer repair" className="pc-repair-split-image" />
      </div>
      <div className="pc-repair-split-content">
        <h1 className="pc-repair-split-heading-one">Why choose Florida PC Support over Microsoft?</h1>
        <p className="pc-repair-split-paragraph">
          Our Florida Microsoft repair service experts will get the job done right and much faster. Plain and simple. With Microsoft, you will need to call up and take the time to explain your Windows issue to at least 3 different departments. Then, more time will be wasted to have a Microsoft rep remote into your computer. Finally, you’ll need to hope and pray your computer isn’t screwed up worse than it is. We know first-hand since we’ve cleaned up Microsoft’s shoddy repair attempts many times.
        </p>
        <h1 className="pc-repair-split-heading-two">Why is Florida PC Support better than your PC manufacturer?</h1>
        <p className="pc-repair-split-paragraph">
        If you’re thinking of Dell, HP, Lenovo, Sony, Toshiba, Acer, Asus or another PC manufacturer, think again. In most cases, you’ll need to ship your computer into the repair depot. This is only a good service if you have 2-4 weeks to spare. On the other hand, if you want to fix your computer in the same day without any hassles, go to Florida PC Support for the best Microsoft repair service in Florida.  Our PC technicians are certified to work on all the major manufacturer Windows laptops and desktops, and are able to begin fixing your computer as soon as you ask us to.  No red tape, no overcharging, and no tech speak.  Instead, you’ll get straightforward PC repair service and costs that you can trust.
        </p>
      </div>
     
    </div>

        </>
)}

export default PcRepairPage;