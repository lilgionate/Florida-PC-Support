import React from 'react';
import './CustomPCPage.scss';

const bgImage = 'https://placehold.co/1837x768';

const CustomPCForm = () => {
  return (
    <div className="custom-pc-form" style={{backgroundImage: `url(${bgImage})`}}>
      <div className="form-content-container">
          <div className="form-content">
            <h1 className="form-text-title">Want to build your dream computing experience?</h1>
            <p className="form-text-description">Schedule a phone chat or consultation at our repair center to customize your PC.</p>
            <div >
              <button className="form-content-button">Schedule Phone Chat</button>
              <button className="form-content-button">Schedule In-Person Consult</button>
            </div>
          </div>
          <div className="form-container">
            <form>
              <div className="mb-4">
                <input type="text" placeholder="Name" className="input" />
              </div>
              <div className="mb-4">
                <input type="email" placeholder="Email" className="input" />
              </div>
              <div className="mb-4">
                <input type="tel" placeholder="Phone" className="input" />
              </div>
              <div className="mb-4">
                <select className="input">
                  <option defaultValue>What will your custom PC be set up for?</option>
                  <option value="gaming">Gaming</option>
                  <option value="work">Work</option>
                  <option value="design">Design</option>
                  <option value="general_use">General Use</option>
                </select>
              </div>
              <div>
                <textarea placeholder="Share details of your custom PC requirements" className="form-text-area"></textarea>
              </div>
              <button type="submit" className="form-button">Submit Request Now</button>
            </form>
          </div>
        </div>
    </div>
  );
};

export default CustomPCForm;
