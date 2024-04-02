import RepairsData from "./RepairsData";
import Repair1 from "../../assets/repair1.avif";
import Repair2 from "../../assets/repair2.avif";
import Repair3 from "../../assets/repair3.avif";

import "./repairs.scss";

function Repairs() {
  return (
    <div className="repairs">
      <h1>Recent Repairs</h1>
      <p>Revive Your Tech - Highlights from Recent Repairs</p>
      <div className="repairscard">
        <RepairsData
        image={Repair1} 
        heading="CPU Processor Repair"
        text="We can repair your CPU processor and get it running like new again."
        />
        <RepairsData
        image={Repair2} 
        heading="RAM Repair"
        text="We can repair your RAM and get it running like new again."
        />
        <RepairsData
        image={Repair3} 
        heading="Network Card Repair"
        text="We can repair your network card and get it running like new again."
        />
      </div>
    </div>
  );
}

export default Repairs;