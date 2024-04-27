import "./Hero-Top.scss";

function HeroTop (props) {
    return (
      <>
      <div className={props.className}>
        <img src={props.heroImg} alt="HeroImg" className="img-hero-top"/>
        
      </div>
      </>
    )
  }
  
  export default HeroTop