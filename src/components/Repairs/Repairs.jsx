
import ITSupport from "../../assets/ITSupport.jpg";
import "./repairs.scss";

function Repairs() {
  return (
    <div className="repairs-container">
      <div className="repairs-content">
        <h2>Office IT Support</h2>
        <p>Outsourced & Onsite Solutions</p>
        <div className="repairs-list-container">
          <div className="repairs-list">
            <div className="repairs-list-item">
              <li>Daily or Weekly Support</li>
            </div>
            <div className="repairs-list-item">
              <li>Computer Tech Recruitment</li>
            </div>
            <div className="repairs-list-item">
              <li>Fill-in Tech Coverage</li>
            </div>
            <div className="repairs-list-item">
              <li>Scheduled Maintenance</li>
            </div>
            <div className="repairs-list-item">
              <li>Bulk Hardware Repair</li>
            </div>
            <div className="repairs-list-item">
              <li>Monthly Device Warranty</li>
            </div>
            <div className="repairs-list-item">
              <li>Network Cabling</li>
            </div>
            <div className="repairs-list-item">
              <li>New Office Setup</li>
            </div>
            <div className="repairs-list-item">
              <li>Special Project</li>
            </div>
            <div className="repairs-list-item">
              <li>Remote Support</li>
            </div>
          </div>
        </div>
      </div>
      <div className="repairscard">
        <div className="r-card">
          <div className="r-image">
            <img src={ITSupport} alt="image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Repairs;