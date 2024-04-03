import React from 'react'
import './certification.scss'

import img from '../../assets/repairicon.jpg'

const certification = () => {
  return (
    <section className="about section">
        <div className="secContainer">
            <h3 className="title">
                Why Florida PC Support
            </h3>

            <div className="mainContent container grid">
                <div className="singleItem">
                    <img src={img} alt="" />
                    <h3>CompTIA A+</h3>
                    <p>Our team has completed over 100 repairs for our customers.</p>
                </div>

                <div className="singleItem">
                    <img src={img} alt="" />
                    <h3>Microsoft Technology Associate (MTA)</h3>
                    <p>Our team has completed over 100 repairs for our customers.</p>
                </div>

                <div className="singleItem">
                    <img src={img} alt="" />
                    <h3>Cisco Certified Technician (CCT)</h3>
                    <p>Our team has completed over 100 repairs for our customers.</p>
                </div>

                <div className="singleItem">
                    <img src={img} alt="" />
                    <h3>Apple Certified Mac Technician (ACMT)</h3>
                    <p>Our team has completed over 100 repairs for our customers.</p>
                </div>
            </div>

            <div className="videoCard container">
                <div className="cardContent grid">
                    <div className="cardText">
                        <h2>Experience the greatest!</h2>
                        <p>Experience seamless PC repair services with our expert team, ensuring fast and reliable solutions to all your hardware and software issues.</p>
                    </div>

                    <div className="cardVideo">
                    <iframe width="560" 
                    height="315" 
                    src="https://www.youtube.com/embed/oGNPT6PnBLc?si=O4fLBk2uSrmrnGOq" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerpolicy="strict-origin-when-cross-origin" 
                    allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default certification