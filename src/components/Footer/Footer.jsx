import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="secContainer container">
        <div className="logoDiv">
          <div className="footerLogo">
            <a href="" className="logo">
              <h1 className="flex">FLORIDA PC SUPPORT</h1>
            </a>
          </div>
          <div className="socials flex">
            <a href="/">
              <i className="fa-brands fa-facebook icon"></i>
            </a>
            <a href="/">
              <i className="fa-brands fa-instagram icon"></i>
            </a>
            <a href="/">
              <i className="fa-brands fa-youtube icon"></i>
            </a>
            <a href="/">
              <i className="fa-brands fa-twitter icon"></i>
            </a>
          </div>
        </div>
        <div className="footerLinks">
          <div className="linksGroup">
            <span className="linkTitle">Shop</span>
            <ul>
              <li><a href="">Reviews</a></li>
              <li><a href="">Check Your Order</a></li>
              <li><a href="">Florida PC Garage</a></li>
            </ul>
          </div>
          <div className="linksGroup">
            <span className="linkTitle">Best Sellers</span>
            <ul>
              <li><a href="">Builds</a></li>
              <li><a href="">Repairs</a></li>
              <li><a href="">Products</a></li>
            </ul>
          </div>
          <div className="linksGroup">
            <span className="linkTitle">Community</span>
            <ul>
              <li><a href="">Terms & Conditions</a></li>
              <li><a href="">Privacy Policy</a></li>
              <li><a href="">Refund Policy</a></li>
              <li><a href="">Shipping Policy</a></li>
              <li><a href="">Referrals</a></li>
            </ul>
          </div>
          <div className="linksGroup">
            <span className="linkTitle">Help</span>
            <ul>
              <li><a href="">Terms & Conditions</a></li>
              <li><a href="">Why Florida PC</a></li>
              <li><a href="">Support</a></li>
              <li><a href="">Contact Us</a></li>
              <li><a href="">FAQ</a></li>
            </ul>
          </div>
        </div>
      </div>
      <p>Copyright © 2024 Florida PC. All Rights Reserved.</p>
    </div>
  );
};

export default Footer;