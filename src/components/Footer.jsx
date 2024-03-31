import "./footer.css";


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
                <a href="">PC Builds</a>
                <a href="">Repairs</a>
                <a href="">Products</a>
            </div>
            <div>
                <h4>Community</h4>
                <a href="">Terms & Conditions</a>
                <a href="">Why Florida PC</a>
                <a href="">Support</a>
                <a href="">Check Your Order</a>
                <a href="">Florida PC Garage</a>
            </div>
            <div>
                <h4>Help</h4>
                <a href="">Why Florida PC</a>
                <a href="">Support</a>
                <a href="">Contact Us</a>
                <a href="">Florida PC Garage</a>
            </div>
        </div>
    </div>
  );
}

export default Footer