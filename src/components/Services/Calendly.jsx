import React from 'react';
import './calendly.scss';

const Calendly = () => {

    return (
        <div className='calendly-container'>
            <h1>SCHEDULE A REPAIR</h1>
            <p>PLEASE CHOOSE AN APPOINTMENT SLOT THAT WORKS FOR YOU</p>
            <iframe src="https://app.acuityscheduling.com/schedule.php?owner=32003116&appointmentType=61388154" 
            title="Schedule Appointment"  
            frameBorder="0"
            class="custom-iframe">
            </iframe>
            <script src="https://embed.acuityscheduling.com/js/embed.js" type="text/javascript"></script>
        </div>
    );
};

export default Calendly;
