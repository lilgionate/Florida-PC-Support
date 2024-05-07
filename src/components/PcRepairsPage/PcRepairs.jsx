import React from 'react'; 
import './PcRepairs.scss';

import PCSplitImg from '../../assets/pc-split-img.avif';

import PCFooter from '../../assets/pc-page-footer.jpg'

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
            <div className="pc-services-price-header">Services and prices for Walk-in Service</div>
            <div className="pc-services-price-grid">
                <MacServiceCard
                    image=""
                    altText="PC Hard Drive Replacements And Upgrades"
                    title="PC Hard Drive Replacements And Upgrades"
                    priceRange="$210+"
                    linkUrl={'/macbook-spill'}
                />
                <MacServiceCard
                    image=""
                    altText="Slow PC Issue"
                    title="Slow PC Issue"
                    priceRange="$125+"
                    linkUrl={'/macbook-hard-drive-replacement-upgrade'}
                />
                <MacServiceCard
                    image=""
                    altText="Windows Laptop Screen Replacements"
                    title="Windows Laptop Screen Replacements"
                    priceRange="$125 - $450"
                    linkUrl={'/macbook-ram-memory-upgrade'}
                />
                <MacServiceCard
                    image=""
                    altText="Windows / PC Won’t Start Fix"
                    title="Windows / PC Won’t Start Fix"
                    priceRange="$45+"
                    linkUrl={'/macbook-dvd-drive-replacement'}
                />
                <MacServiceCard
                    image=""
                    altText="Windows Data Recovery"
                    title="Windows Data Recovery"
                    priceRange="Typically $85 – $250. Lab Recovery Service: $950+"
                    linkUrl={'/macbook-password-reset'}
                />
                <MacServiceCard
                    image=""
                    altText="Windows Virtual Machine Setup"
                    title="Windows Virtual Machine Setup"
                    priceRange="$85 - $150"
                    linkUrl={'/mac-touchpad-trackpad-replacement'}
                />
                <MacServiceCard
                    image=""
                    altText="Windows 10 Repair"
                    title="Windows 10 Repair"
                    priceRange="$85 - $150"
                    linkUrl={'/mac-top-case-replacement'}
                />
                <MacServiceCard
                    image=""
                    altText="Windows 8 Repair"
                    title="Windows 8 Repair"
                    priceRange="$85 - $150"
                    linkUrl={'/mac-hinge-replacement'}
                />
                <MacServiceCard
                    image=""
                    altText="Windows 7 Repair"
                    title="Windows 7 Repair"
                    priceRange="$85 - $150"
                    linkUrl={'/macbook-battery'}
                />
                <MacServiceCard
                    image=""
                    altText="Windows Vista Repair"
                    title="Windows Vista Repair"
                    priceRange="$85 - $150"
                    linkUrl={'/macbook-logic-board'}
                />
                <MacServiceCard
                    image=""
                    altText="PC Physical Damage Repair"
                    title="PC Physical Damage Repair"
                    priceRange="$85+"
                    linkUrl={'/mac-power-adapter-replacement'}
                />
                <MacServiceCard
                    image=""
                    altText="PC Upgrade"
                    title="PC Upgrade"
                    priceRange="$85+"
                    linkUrl={'/mac-jack-dc-board-replacement'}
                />
                <MacServiceCard
                    image=""
                    altText="Laptop Power Jack Repair"
                    title="Laptop Power Jack Repair"
                    priceRange="$125 - $250"
                    linkUrl={'/mac-logic-board-replacement'}
                />
                <MacServiceCard
                    image=""
                    altText="Laptop Spill Repair"
                    title="Laptop Spill Repair"
                    priceRange="$85+"
                    linkUrl={'/install-windows-on-mac'}
                />
                <MacServiceCard
                    image=""
                    altText="Set Up New PC"
                    title="Set Up New PC"
                    priceRange="$85 - $125"
                    linkUrl={'/mac-virus-removal'}
                />
                <MacServiceCard
                    image=""
                    altText="PC Tune-Up"
                    title="PC Tune-Up"
                    priceRange="$85"
                    linkUrl={'/mac-wont-boot-repair'}
                />
                <MacServiceCard
                    image=""
                    altText="PC Runs Loud And Noisy"
                    title="PC Runs Loud And Noisy"
                    priceRange="$85 - $175"
                    linkUrl={'/mac-set-up-new'}
                />
                <MacServiceCard
                    image=""
                    altText="Blue Screen PC Error"
                    title="Blue Screen PC Error"
                    priceRange="$85+"
                    linkUrl={'/mac-email-internet-repair'}
                />
                <MacServiceCard
                    image=""
                    altText="No Email / Internet"
                    title="No Email / Internet"
                    priceRange="$85 - $125"
                    linkUrl={'/mac-upgrade'}
                />
                <MacServiceCard
                    image=""
                    altText="PC Shuts Off /Overheats"
                    title="PC Shuts Off /Overheats"
                    priceRange="$85+"
                    linkUrl={'/mac-physical-damage-repair'}
                />
                <MacServiceCard
                    image=""
                    altText="Laptop Keyboard Replacement"
                    title="Laptop Keyboard Replacement"
                    priceRange="$85 - $250"
                    linkUrl={'/mac-apple-software-support'}
                />
                <MacServiceCard
                    image=""
                    altText="PC Virus Removal"
                    title="PC Virus Removal"
                    priceRange="$85 - $150"
                    linkUrl={'/macbook-data'}
                />
            </div>
        </div>

        <div className="pc-repair-bottom-container">
            <img src={PCFooter} alt="Mac Repair" className="pc-repair-img" />
            <div className="overlay">
                <div className="overlay-text">
                    <h1>Need Your PC Repaired?</h1>
                    <a href="#" >Get a free diagnostic</a>
                </div>
            </div>
        </div>

        </>
)}

export default PcRepairPage;