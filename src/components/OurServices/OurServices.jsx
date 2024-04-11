import React from 'react'
import './OurServices.scss'

import img from '../../assets/repairicon.jpg'

const certification = () => {
  return (
    <>
    <section className="about section">
        <div className="secContainer">
            <h3 className="title">
                OUR FOCUS
            </h3>

            <div className="mainContent container grid">
            <div className="itemContainerRow">
                <div className="itemContainer">
                    <div className="singleItem">
                       <img src={img} alt="" />
                       <h3>CompTIA A+</h3>
                       <p>Our team has completed over 100 repairs for our customers.</p>
                    </div>
                </div> 

                <div className="itemContainer"> 
                    <div className="singleItem">
                       <img src={img} alt="" />
                       <h3>Microsoft Technology Associate (MTA)</h3>
                       <p>Our team has completed over 100 repairs for our customers.</p>
                   </div>
                </div>

                <div className="itemContainer"> 
                   <div className="singleItem">
                      <img src={img} alt="" />
                      <h3>Cisco Certified Technician (CCT)</h3>
                      <p>Our team has completed over 100 repairs for our customers.</p>
                    </div>
                </div>
                </div>

                <div className="itemContainerRow">
                <div className="itemContainer">
                    <div className="singleItem">
                       <img src={img} alt="" />
                       <h3>Apple Certified Mac Technician (ACMT)</h3>
                       <p>Our team has completed over 100 repairs for our customers.</p>
                    </div>
                </div>

                <div className="itemContainer">
                    <div className="singleItem">
                       <img src={img} alt="" />
                       <h3>Apple Certified Mac Technician (ACMT)</h3>
                       <p>Our team has completed over 100 repairs for our customers.</p>
                    </div>
                </div>

                <div className="itemContainer">
                    <div className="singleItem">
                       <img src={img} alt="" />
                       <h3>Apple Certified Mac Technician (ACMT)</h3>
                       <p>Our team has completed over 100 repairs for our customers.</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </section>

<section className="about section">
<div className="secContainer">
    <h3 className="title">
        OUR FOCUS
    </h3>

    <div className="mainContent container grid">
    <div className="itemContainerRow">
        <div className="itemContainer">
            <div className="singleItem">
               <img src={img} alt="" />
               <h3>CompTIA A+</h3>
               <p>Our team has completed over 100 repairs for our customers.</p>
            </div>
        </div> 

        <div className="itemContainer"> 
            <div className="singleItem">
               <img src={img} alt="" />
               <h3>Microsoft Technology Associate (MTA)</h3>
               <p>Our team has completed over 100 repairs for our customers.</p>
           </div>
        </div>

        <div className="itemContainer"> 
           <div className="singleItem">
              <img src={img} alt="" />
              <h3>Cisco Certified Technician (CCT)</h3>
              <p>Our team has completed over 100 repairs for our customers.</p>
            </div>
        </div>
        </div>

        <div className="itemContainerRow">
        <div className="itemContainer">
            <div className="singleItem">
               <img src={img} alt="" />
               <h3>Apple Certified Mac Technician (ACMT)</h3>
               <p>Our team has completed over 100 repairs for our customers.</p>
            </div>
        </div>

        <div className="itemContainer">
            <div className="singleItem">
               <img src={img} alt="" />
               <h3>Apple Certified Mac Technician (ACMT)</h3>
               <p>Our team has completed over 100 repairs for our customers.</p>
            </div>
        </div>

        <div className="itemContainer">
            <div className="singleItem">
               <img src={img} alt="" />
               <h3>Apple Certified Mac Technician (ACMT)</h3>
               <p>Our team has completed over 100 repairs for our customers.</p>
            </div>
        </div>
        </div>
    </div>
</div>
</section>
</>
  )
}

export default certification