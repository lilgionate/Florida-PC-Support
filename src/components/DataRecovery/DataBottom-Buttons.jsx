import "./DataRecoveryServices.scss";
import Feature from "./DataBottom-Cards";
import DataBG from "../../assets/HDD-Disk.jpg";

const DataBottomButtons = () => {
  const icon = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="data-hero-icon">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3.75v12m0 0l3.25-3.25m-3.25 3.25L8.75 12.5m3.25 3.25H21m-9 0a8.25 8.25 0 110-16.5 8.25 8.25 0 010 16.5z" />
    </svg>
  );

  return (
    <div className="data-hero-container">
      <img src={DataBG} alt="Data Recovery" className="data-hero-bg" /> 
      <Feature
        icon={icon}
        title="Mail-in Your Device"
        description="Simply make a shipping request and mail in your device to have your data recovered."
        buttonText="Make A Shipping Request"
      />
      <Feature
        icon={icon}
        title="Visit Us At Our Store"
        description="Walk in at your convenience. Accepting walk-ins and scheduled appointments."
        buttonText="Visit Us Now!"
      />
    </div>
  );
};

export default DataBottomButtons;
