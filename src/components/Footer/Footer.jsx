import "./footer.scss";


const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
            <h1>Florida PC Support</h1>
        </div>
        <div>
            <a href="/">
                <i className="fa-brands fa-facebook-square"></i>
            </a>
            <a href="/">
                <i className="fa-brands fa-instagram-square"></i>
            </a>
            <a href="/">
                <i className="fa-brands fa-youtube-square"></i>
            </a>
            <a href="/">
                <i className="fa-brands fa-twitter-square"></i>
            </a>
        </div>
      </div>

        <div className="bottom">
            <div>
                <h4>Shop</h4>
                <a href="">Reviews</a>
                <a href="">Check Your Order</a>
                <a href="">Florida PC Garage</a>
            </div>
            <div>
                <h4>Best Sellers</h4>
                <a href="">Builds</a>
                <a href="">Repairs</a>
                <a href="">Products</a>
            </div>
            <div>
                <h4>Community</h4>
                <a href="">Terms & Conditions</a>
                <a href="">Privacy Policy</a>
                <a href="">Refund Policy</a>
                <a href="">Shipping Policy</a>
                <a href="">Referrals</a>
            </div>
            <div>
                <h4>Help</h4>
                <a href="">Why Florida PC</a>
                <a href="">Support</a>
                <a href="">Contact Us</a>
                <a href="">FAQ</a>
            </div>
        </div>
        <p>Copyright © 2024 Florida PC. All Rights Reserved.</p>
    </div>
  );
}

export default Footer