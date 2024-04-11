import React from 'react'
import './OurServices.scss'

import img from '../../assets/repairicon.jpg'

const certification = () => {
  return (
    <>
    <section className="about">
        <div className="secContainer">
            <h3 className="title">
            Your Go-To Mac Repair Center
            </h3>
            <p className='Our-des'>
            Directly repairing logic boards and all MacBook, iMac, and Mac Pro issues, saving you time and money.
            </p>

            <div className="mainContent container grid">
            <div className="itemContainerRow">
                <div className="itemContainer">
                    <div className="singleItem">
                       <img src={img} alt="" />
                       <h3>MacBook Won’t Power Up</h3>
                    </div>
                </div> 

                <div className="itemContainer"> 
                    <div className="singleItem">
                       <img src={img} alt="" />
                       <h3>MacBook Screen Replacement</h3>
                   </div>
                </div>

                <div className="itemContainer"> 
                   <div className="singleItem">
                      <img src={img} alt="" />
                      <h3>MacBook Spill Repair</h3>
                    </div>
                </div>
                </div>

                <div className="itemContainerRow">
                <div className="itemContainer">
                    <div className="singleItem">
                       <img src={img} alt="" />
                       <h3>MacBook Battery Replacement</h3>
                    </div>
                </div>

                <div className="itemContainer">
                    <div className="singleItem">
                       <img src={img} alt="" />
                       <h3>MacBook Logic Board Repair</h3>
                    </div>
                </div>

                <div className="itemContainer">
                    <div className="singleItem">
                       <img src={img} alt="" />
                       <h3>MacBook Data Recovery</h3>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </section>

<section className="about section">
<div className="secContainer">
    <h3 className="title">
    Fixing all Windows / PC issues
    </h3>
    <p className='Our-des'>Repairing laptops, desktops, PCs, custom gaming machines, all-in-ones, and tablets.</p>

    <div className="mainContent container grid">
    <div className="itemContainerRow">
        <div className="itemContainer">
            <div className="singleItem">
               <img src={img} alt="" />
               <h3>Windows Laptop Screen Replacements</h3>
            </div>
        </div> 

        <div className="itemContainer"> 
            <div className="singleItem">
               <img src={img} alt="" />
               <h3>Windows Data Recovery</h3>
           </div>
        </div>

        <div className="itemContainer"> 
           <div className="singleItem">
              <img src={img} alt="" />
              <h3>Windows / PC Won’t Start Fix</h3>
            </div>
        </div>
        </div>

        <div className="itemContainerRow">
        <div className="itemContainer">
            <div className="singleItem">
               <img src={img} alt="" />
               <h3>Slow PC Issue</h3>
            </div>
        </div>

        <div className="itemContainer">
            <div className="singleItem">
               <img src={img} alt="" />
               <h3>Windows / PC Won’t Start Fix</h3>
            </div>
        </div>

        <div className="itemContainer">
            <div className="singleItem">
               <img src={img} alt="" />
               <h3>Laptop Spill Repair</h3>
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