import "./DataRecoveryServices.scss"
import PricingCard from "./PricingCard";

const PricingPage = () => {
    const hardDriveServices = [
        { name: "Basic Recovery", price: "$85 - $125", description: "includes file transfers, backups, partition corruption, software corruption" },
        { name: "Standard Recovery", price: "$125 - $250", description: "includes bypassing lightly failing hardware to recover files" },
        { name: "Advanced Recovery", price: "$250 - $500", description: "includes repairing physically failing hardware to recovery files" },
        { name: "Lab Recovery", price: "$950+", description: "includes replacing mechanically failed parts from 1TB - 4TB drives" }
    ];

    const thumbDriveServices = [
        { name: "Basic Recovery", price: "$85 - $150", description: "partition corruption, software corruption, lightly physically failing" },
        { name: "Standard Recovery", price: "$250", description: "directly repairing damaged parts" },
        { name: "Hardware Recovery", price: "$250 - $500", description: "replacing mechanically failed parts" }
    ];

    return (
        <div className="dataPricingContainer">
        <h2 className="dataPricingTitle">Data Recovery Pricing</h2>
        <div className="cardDataContainerClasses">
            <PricingCard title="Hard Drive" services={hardDriveServices} />
            <PricingCard title="USB Thumb Drive" services={thumbDriveServices} />
        </div>
        </div>
    );
};

export default PricingPage;