import React, { useState } from 'react';
import { PopupButton } from 'react-calendly';
import './calendly.scss';

const Calendly = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const toggleModal = () => {
        setModalOpen(!modalOpen);
    };

    return (
        <div className='calendly-container'>
            <h1>Repair Scheduling</h1>
            <p>Please choose an appointment slot that works for you:</p>
            <PopupButton
                url="https://calendly.com/gioanathanv/florida-pc-home-tech-support"
                /*
                * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
                * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
                */
                rootElement={document.getElementById("root")}
                text="Schedule Appointment"
                className="calendly-button"
            />
        </div>
    );
};

export default Calendly;