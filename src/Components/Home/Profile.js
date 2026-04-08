import React from "react";

const Profile = () => {
  const me = "/assets/img/hero/osas_1.png";

  return (
    <div className="page page--current" id="home">
      <div className="home">
        <div className="container-fluid main-container container-home p-0">
          <div className="color-block d-none d-lg-block"></div>
          <div className="row home-details-container align-items-center">
            {/* Desktop profile img */}
            <div 
              className="col-lg-4 position-fixed d-none d-lg-block" 
              style={{
                backgroundImage: `url(${me})`, 
                backgroundSize: 'cover', 
                backgroundPosition: 'top', 
                height: '100vh', 
                left: 0, 
                top: 0
              }}
            ></div>
            <div className="col-12 col-lg-8 offset-lg-4 home-details text-left text-sm-center text-lg-left">
              <div>
                {/* Mobile profile img */}
                <img 
                  src={me} 
                  className="img-fluid main-img-mobile d-none d-sm-block d-lg-none" 
                  alt="my picture" 
                  style={{ borderRadius: '50%', width: '250px', height: '250px', objectFit: 'cover', margin: '0 auto 30px' }}
                />
                <h1 className="text-uppercase poppins-font">
                  I'm Oviasuyi Osagioduwa. <span>Software Developer</span>
                </h1>
                <p className="open-sans-font">
                  Full Stack Developer with high level experience in web designing and
                  development, producing quality work.
                </p>
                <a id="link-about" className="button" href="#about">
                  <span className="button-text">more about me</span>
                  <span className="button-icon fa fa-arrow-right"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;