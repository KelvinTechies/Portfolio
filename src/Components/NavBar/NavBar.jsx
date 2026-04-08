import React from 'react';

const NavBar = () => {
  return (
    <header className="header" id="navbar-collapse-toggle">
      {/* Fixed Navigation Starts */}
      <ul id="desktop-nav" className="icon-menu d-none d-lg-block">
        <li className="icon-box desktop-nav-element active">
          <i className="fa fa-home"></i>
          <div>
            <h2>Home</h2>
          </div>
        </li>
        <li className="icon-box desktop-nav-element">
          <i className="fa fa-user"></i>
          <div>
            <h2>About</h2>
          </div>
        </li>
        <li className="icon-box desktop-nav-element">
          <i className="fa fa-briefcase"></i>
          <div>
            <h2>Portfolio</h2>
          </div>
        </li>
        <li className="icon-box desktop-nav-element">
          <i className="fa fa-envelope-open"></i>
          <div>
            <h2>Contact</h2>
          </div>
        </li>
      </ul>
      {/* Fixed Navigation Ends */}
      
      {/* Mobile Menu Starts */}
      <nav className="d-block d-lg-none">
        <div className="inputmobile" id="inputmobile">
          <div id="trigger-mobile" className="trigger-mobile">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className="list-unstyled" id="mobile-nav">
            <li className="mobile-nav-element home-link active">
              <div>
                <i className="fa fa-home"></i>
                <span>Home</span>
              </div>
            </li>
            <li className="mobile-nav-element">
              <div>
                <i className="fa fa-user"></i>
                <span>About</span>
              </div>
            </li>
            <li className="mobile-nav-element">
              <div>
                <i className="fa fa-folder-open"></i>
                <span>Portfolio</span>
              </div>
            </li>
            <li className="mobile-nav-element">
              <div>
                <i className="fa fa-envelope-open"></i>
                <span>Contact</span>
              </div>
            </li>
          </ul>
        </div>
      </nav>
      {/* Mobile Menu Ends */}
    </header>
  );
};

export default NavBar;