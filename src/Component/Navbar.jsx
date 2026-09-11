function Navbar() {
  return (
    <header className="header">
      <nav className="navbar">
        
        
        <div className="brand">
          <img src="/logo-text.png" alt="Dev Stack Logo" />
        </div>

        {/* Center: Navigation links */}
        <ul className="nav-links">
          <li>
            <a className="homecolor "href="#home">Home</a>
          </li>

          <li>
            <a href="#technologies">Technologies</a>
          </li>

          <li>
            <a href="#projects">Projects</a>
          </li>

          <li>
            <a href="#about">About</a>
          </li>

          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        {/* Right side: Authentication buttons */}
        <div className="nav-buttons">
          <button className="sign-in-button">Sign In</button>
          <button className="sign-up-button">Sign Up</button>
        </div>

      </nav>
    </header>
  );
}

export default Navbar;
