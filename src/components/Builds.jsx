import Powerhouse from "../assets/powerhouse.webp"
import Powerhouse2 from "../assets/powerhouse2.jpg"
import Vortex from "../assets/vortex.avif"
import Vortex2 from "../assets/vortex2.avif"

import BuildsData from "./BuildsData";
import "./builds.css"

const Builds = () => {
  return (
    <div className="builds">
      <h1>Popular PC Builds</h1>
      <p>Discover the excitement of PC builds where every 
        detail is crafted with your needs and desires in mind!
      </p>

      <BuildsData className="first-des"
      heading="Powerhouse Perfection"
      text="Introducing our Powerhouse Perfection PC build: 
            the ultimate blend of performance and 
            reliability. Designed with precision and 
            tailored to your needs, this cutting-edge system 
            offers an unrivaled computing experience. 
            Elevate your productivity, immerse yourself in 
            seamless gaming, and unleash your creativity with 
            every click. It's more than just hardware; it's a 
            gateway to boundless possibilities. Explore 
            innovation with our Powerhouse Perfection PC build."
      img1={Powerhouse}
      img2={Powerhouse2}
      />

<BuildsData className="second-des"
      heading="Velocity Vortex PC Build"
      text="Step into the realm of cutting-edge computing with 
      our Velocity Vortex PC build. Engineered for maximum power 
      and style, this powerhouse machine is meticulously crafted 
      to elevate your gaming and productivity experience. With 
      lightning-fast processing, stunning graphics, and sleek 
      design, immerse yourself in a world where performance meets 
      aesthetics. Unleash your potential and dominate the digital 
      landscape with the Velocity Vortex."
      img1={Vortex}
      img2={Vortex2}
      />
    </div>
  );
};

export default Builds;