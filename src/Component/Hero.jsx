import "./Hero.css";
import heroImage from "../assets/banner-stack.png";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">

        {/* Left Side */}
        <div className="hero-content">

          <h1 className="hero-title">
            Build Your Ideal
            <span>Development Stack</span>
          </h1>

          <div className="hero-description-box">
            <span className="hero-line"></span>

            <p className="hero-description">
              Explore frontend, backend, database, and tooling options,
              compare them side by side, and put together the stack that fits
              your next project.
            </p>
          </div>

          <div className="hero-buttons">
            <button className="explore-button">
              Explore Technologies
            </button>

            <button className="learn-button">
              Learn More
            </button>
          </div>

        </div>

        {/* Right Side */}
        <div className="hero-image-wrapper">
          <img
            src={heroImage}
            alt="Development Stack"
            className="hero-image"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;
