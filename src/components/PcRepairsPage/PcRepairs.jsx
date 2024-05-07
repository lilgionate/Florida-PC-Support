import React from 'react'; 
import './PcRepairs.scss';

import PCSplitImg from '../../assets/pc-split-img.avif';

import MacBookCenter from '../../assets/pc-service-center.jpg';

import CommonIssuesList from './SupportedPcIssues';

import MacServiceCard from './PcRepairCards';

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


    <div className="pc-services-price-container">
            <div className="pc-services-price-header">Mac Services and Prices - Walk-in Service</div>
            <div className="pc-services-price-grid">
                <MacServiceCard
                    image=""
                    altText="MacBook Spill Repairs"
                    title="MacBook Spill Repairs"
                    priceRange="$125+"
                    linkUrl={'/macbook-spill'}
                />
                <MacServiceCard
                    image=""
                    altText="MacBook Hard Drive Replacements & Upgrades"
                    title="MacBook Hard Drive Replacements & Upgrades"
                    priceRange="$125+"
                    linkUrl={'/macbook-hard-drive-replacement-upgrade'}
                />
                <MacServiceCard
                    image=""
                    altText="RAM / Memory Upgrade"
                    title="RAM / Memory Upgrade"
                    priceRange="$50 - $200"
                    linkUrl={'/macbook-ram-memory-upgrade'}
                />
                <MacServiceCard
                    image=""
                    altText="DVD Drive Replacement"
                    title="DVD Drive Replacement"
                    priceRange="$125 - $195"
                    linkUrl={'/macbook-dvd-drive-replacement'}
                />
                <MacServiceCard
                    image=""
                    altText="Password Reset"
                    title="Password Reset"
                    priceRange="$85"
                    linkUrl={'/macbook-password-reset'}
                />
                <MacServiceCard
                    image=""
                    altText="Touchpad / Trackpad Replacement"
                    title="Touchpad / Trackpad Replacement"
                    priceRange="$150 - $350"
                    linkUrl={'/mac-touchpad-trackpad-replacement'}
                />
                <MacServiceCard
                    image=""
                    altText="Top Case Replacement"
                    title="Top Case Replacement"
                    priceRange="$125 - $450"
                    linkUrl={'/mac-top-case-replacement'}
                />
                <MacServiceCard
                    image=""
                    altText="Hinge Replacement"
                    title="Hinge Replacement"
                    priceRange="$125+"
                    linkUrl={'/mac-hinge-replacement'}
                />
                <MacServiceCard
                    image=""
                    altText="Battery Replacement"
                    title="Battery Replacement"
                    priceRange="$100 - $175"
                    linkUrl={'/macbook-battery'}
                />
                <MacServiceCard
                    image=""
                    altText="MacBook Logic Board Repairs"
                    title="MacBook Logic Board Repairs"
                    priceRange="$250 - $750"
                    linkUrl={'/macbook-logic-board'}
                />
                <MacServiceCard
                    image=""
                    altText="Power Adapter Replacement"
                    title="Power Adapter Replacement"
                    priceRange="$65 - $85"
                    linkUrl={'/mac-power-adapter-replacement'}
                />
                <MacServiceCard
                    image=""
                    altText="Jack / DC-In Board Replacement"
                    title="Jack / DC-In Board Replacement"
                    priceRange="$75 - $150"
                    linkUrl={'/mac-jack-dc-board-replacement'}
                />
                <MacServiceCard
                    image=""
                    altText="Logic Board Replacement"
                    title="Logic Board Replacement"
                    priceRange="$250 -$750"
                    linkUrl={'/mac-logic-board-replacement'}
                />
                <MacServiceCard
                    image=""
                    altText="Install Windows On Mac"
                    title="Install Windows On Mac"
                    priceRange="$125"
                    linkUrl={'/install-windows-on-mac'}
                />
                <MacServiceCard
                    image=""
                    altText="Windows / Mac Virus Removal"
                    title="Windows / Mac Virus Removal"
                    priceRange="$85 - $150"
                    linkUrl={'/mac-virus-removal'}
                />
                <MacServiceCard
                    image=""
                    altText="Mac Won’t Boot"
                    title="Mac Won’t Boot"
                    priceRange="$85+"
                    linkUrl={'/mac-wont-boot-repair'}
                />
                <MacServiceCard
                    image=""
                    altText="Set Up New Mac"
                    title="Set Up New Mac"
                    priceRange="$85 - $150"
                    linkUrl={'/mac-set-up-new'}
                />
                <MacServiceCard
                    image=""
                    altText="Email And Internet Mac Repair"
                    title="Email And Internet Mac Repair"
                    priceRange="$125 - $250"
                    linkUrl={'/mac-email-internet-repair'}
                />
                <MacServiceCard
                    image=""
                    altText="Mac Upgrade"
                    title="Mac Upgrade"
                    priceRange="$50+"
                    linkUrl={'/mac-upgrade'}
                />
                <MacServiceCard
                    image=""
                    altText="Mac Physical Damage Repair"
                    title="Mac Physical Damage Repair"
                    priceRange="$85+"
                    linkUrl={'/mac-physical-damage-repair'}
                />
                <MacServiceCard
                    image=""
                    altText="Apple Software Support"
                    title="Apple Software Support"
                    priceRange="$85 - $150"
                    linkUrl={'/mac-apple-software-support'}
                />
                <MacServiceCard
                    image=""
                    altText="MacBook Data Recovery"
                    title="MacBook Data Recovery"
                    priceRange="$85+"
                    linkUrl={'/macbook-data'}
                />
            </div>
        </div>

        <div className="macbook-repair-bottom-container">
            <img src="" alt="Mac Repair" className="mac-repair-img" />
            <div className="overlay">
                <div className="overlay-text">
                    <h1>Need Your Mac Repaired?</h1>
                    <a href="#" >Get a free diagnostic</a>
                </div>
            </div>
        </div>

        </>
)}

export default PcRepairPage;