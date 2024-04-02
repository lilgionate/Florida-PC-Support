import React, { useState } from 'react';
import { PopupButton } from 'react-calendly';
import './calendly.scss';

const Calendly = () => {
    return (
        <div className='calendly-container'>
            <h1>SCHEDULE A REPAIR</h1>
            <p>PLEASE CHOOSE AN APPOINTMENT SLOT THAT WORKS FOR YOU</p>
            <PopupButton
                url="https://calendly.com/gioanathanv/florida-pc-home-tech-support"
                /*
                * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
                * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
                */
                rootElement={document.getElementById("root")}
                text="Schedule Appointment"
                className="calendly-button"
                style={{ display: "block", margin: "0 auto" }}
            />
        </div>
    );
};

export default Calendly;