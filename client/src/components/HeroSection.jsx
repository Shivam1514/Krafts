import "../styles/herosection.css";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <div className="hero-container">
      <div className="hero-background-image"></div>
      <h1 className="hero-heading">India's Finest Handicrafts</h1>
      <p className="hero-subtitle">
        Crafts of Remarkable Nature, Directly from the Artisans
      </p>
      <Link to="/all-products">
        <button className="shop-now">Explore</button>
      </Link>
    </div>
  );
}

export default HeroSection;
