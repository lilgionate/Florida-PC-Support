import "./DataRecoveryServices.scss";

const PricingCard = ({ title, services }) => {
    return (
        <div className="cardDataClasses">
            <h3 className="titleDataClasses">{title}</h3>
            <div className="descriptionDataClasses">
                {services.map((service, index) => (
                    <><div key={index} className="sectionDataClasses">
                        <h3 className="priceDataClasses">{service.name}</h3>
                        <span>{service.price}</span>
                    </div><p>{service.description}</p></>
                ))}
            </div>
        </div>
    );
};

export default PricingCard;