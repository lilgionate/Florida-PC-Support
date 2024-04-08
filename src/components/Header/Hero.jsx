import React, { useState } from 'react';
import "./hero.scss";

function Hero(props) {
    // Define state to manage the active card
    const [activeCard, setActiveCard] = useState(null);

    // Event handler for clicking on a card
    const handleCardClick = (index) => {
        setActiveCard(index); // Set the active card index
    };

    return (
        <>
            <div className={props.cName}>
                <img src={props.heroImg} alt="HeroImg" />
              <div className='hero-content'>
                <div className="hero-container">
                    {/* Mapping over your card data */}
                    {props.cards.map((card, index) => (
                        <div
                            key={index}
                            className={`hero-card ${activeCard === index ? 'active' : ''}`}
                            onClick={() => handleCardClick(index)} // Pass index to the event handler
                        >
                            <img className="background hero-img" src={card.image} alt="" />

                            <div className="card-content">
                                <div className="profile-image">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-gamepad-2"
                                    >
                                        <line x1="6" x2="10" y1="11" y2="11" />
                                        <line x1="8" x2="8" y1="9" y2="13" />
                                        <line x1="15" x2="15.01" y1="12" y2="12" />
                                        <line x1="18" x2="18.01" y1="10" y2="10" />
                                        <path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z" />
                                    </svg>
                                </div>

                                <h3 className="title">{card.title}</h3>
                            </div>
                            <div className="backdrop"></div>
                        </div>
                    ))}
                </div>
                </div>
            </div>
        </>
    );
}

export default Hero;