import React from 'react';
import './WalkIn-Repair.scss';

const WalkInRepair = () => {

    return (
        <>
        <div className='WalkIn-container'>
        <div className='WalkIn-header'>
                <h1 className='WalkIn-title'>SCHEDULE Drop-Off</h1>
                <p className='WalkIn-des'>PLEASE CHOOSE AN APPOINTMENT SLOT THAT WORKS FOR YOU</p>
            </div>

            <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1551.9208405755262!2d-80.33475760737464!3d25.99977299604164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9bb8e7f838ac5%3A0x6340ed004188d429!2sfloridapcsupport!5e0!3m2!1sen!2sus!4v1712463650391!5m2!1sen!2sus" 
            className='location-map'
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
            </iframe>
            </div>

            <iframe src="https://app.acuityscheduling.com/schedule.php?owner=32003116&appointmentType=61388154" 
            title="Schedule Appointment"  
            frameBorder="0"
            className="WalkIn-iframe">
            </iframe>
            <script src="https://embed.acuityscheduling.com/js/embed.js" type="text/javascript"></script>

            <div className="MailIn-container">
                <div className="MailIn-content">
                    <h2 className='mailin-title'>Mail-In Repair</h2>
                    <p className='mailin-des'>Can't find a store near you?</p>
                    <button className='mailin-btn'>Mail in your device</button>
                </div>
            </div>
        </div>
        </>
    );
};

export default WalkInRepair;
