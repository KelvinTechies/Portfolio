import React from "react";

const Experience = () => {
  return (
    <div className="page" id="about">
      {/* Section Title Starts */}
      <div className="title-section text-left text-sm-center">
        <h2>ABOUT <span>ME</span></h2>
        <span className="title-bg">Resume</span>
      </div>
      {/* Section Title Ends */}

      <div className="about">
        <div className="main-content">
          <div className="container">
            <div className="row">
              {/* Personal Info Starts */}
              <div className="col-12 col-lg-5 col-xl-6">
                <div className="row">
                  <div className="col-12">
                    <h3 className="text-uppercase custom-title mb-0 ft-wt-600">personal infos</h3>
                  </div>
                  <div className="col-6">
                    <ul className="about-list list-unstyled open-sans-font">
                      <li>
                        <span className="title">first name :</span>
                        <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">Oviasuyi</span>
                      </li>
                      <li>
                        <span className="title">last name :</span>
                        <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">Osagioduwa</span>
                      </li>
                      <li>
                        <span className="title">Nationality :</span>
                        <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">Nigerian</span>
                      </li>
                      <li>
                        <span className="title">Freelance :</span>
                        <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">Available</span>
                      </li>
                    </ul>
                  </div>
                  <div className="col-6">
                    <ul className="about-list list-unstyled open-sans-font">
                      <li>
                        <span className="title">Email :</span>
                        <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">oviasuyiosagioduwa@gmail.com</span>
                      </li>
                      <li>
                        <span className="title">langages :</span>
                        <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">English</span>
                      </li>
                    </ul>
                  </div>
                  <div className="col-12 mt-3">
                    <a className="button" href="#contact">
                      <span className="button-text">Contact Me</span>
                      <span className="button-icon fa fa-paper-plane"></span>
                    </a>
                  </div>
                </div>
              </div>
              {/* Personal Info Ends */}

              {/* Boxes Starts */}
              <div className="col-12 col-lg-7 col-xl-6 mt-5 mt-lg-0">
                <div className="row">
                  <div className="col-6">
                    <div className="box-stats with-margin">
                      <h3 className="poppins-font position-relative">4</h3>
                      <p className="open-sans-font m-0 position-relative text-uppercase">years of <span className="d-block">experience</span></p>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="box-stats with-margin">
                      <h3 className="poppins-font position-relative">45</h3>
                      <p className="open-sans-font m-0 position-relative text-uppercase">completed <span className="d-block">projects</span></p>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="box-stats">
                      <h3 className="poppins-font position-relative">3</h3>
                      <p className="open-sans-font m-0 position-relative text-uppercase">Companies <span className="d-block">Worked</span></p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Boxes Ends */}
            </div>

            <hr className="separator" />

            {/* Skills Starts */}
            <div className="row">
              <div className="col-12">
                <h3 className="text-uppercase pb-4 pb-sm-5 mb-3 mb-sm-0 text-left text-sm-center custom-title ft-wt-600">My Skills</h3>
              </div>
              <div className="col-6 col-md-3 mb-3 mb-sm-5">
                <div className="c100 p89">
                  <span>89%</span>
                  <div className="slice">
                    <div className="bar"></div>
                    <div className="fill"></div>
                  </div>
                </div>
                <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">Javascript</h6>
              </div>
              <div className="col-6 col-md-3 mb-3 mb-sm-5">
                <div className="c100 p95">
                  <span>95%</span>
                  <div className="slice">
                    <div className="bar"></div>
                    <div className="fill"></div>
                  </div>
                </div>
                <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">React</h6>
              </div>
              <div className="col-6 col-md-3 mb-3 mb-sm-5">
                <div className="c100 p80">
                  <span>80%</span>
                  <div className="slice">
                    <div className="bar"></div>
                    <div className="fill"></div>
                  </div>
                </div>
                <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">NodeJS</h6>
              </div>
              <div className="col-6 col-md-3 mb-3 mb-sm-5">
                <div className="c100 p75">
                  <span>75%</span>
                  <div className="slice">
                    <div className="bar"></div>
                    <div className="fill"></div>
                  </div>
                </div>
                <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">CSS</h6>
              </div>
            </div>
            {/* Skills Ends */}

            <hr className="separator mt-1" />

            {/* Experience & Education Starts */}
            <div className="row">
              <div className="col-12">
                <h3 className="text-uppercase pb-5 mb-0 text-left text-sm-center custom-title ft-wt-600">Experience <span>&</span> Education</h3>
              </div>
              <div className="col-lg-6 m-15px-tb">
                <div className="resume-box">
                  <ul>
                    <li>
                      <div className="icon">
                        <i className="fa fa-briefcase"></i>
                      </div>
                      <span className="time open-sans-font text-uppercase">2021 - Present</span>
                      <h5 className="poppins-font text-uppercase">Software Developer <span className="place open-sans-font">Company 1</span></h5>
                      <p className="open-sans-font">Full Stack Developer with high level experience in web designing and development.</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 m-15px-tb">
                <div className="resume-box">
                  <ul>
                    <li>
                      <div className="icon">
                        <i className="fa fa-graduation-cap"></i>
                      </div>
                      <span className="time open-sans-font text-uppercase">2020</span>
                      <h5 className="poppins-font text-uppercase">Degree <span className="place open-sans-font">University</span></h5>
                      <p className="open-sans-font">Bachelor Degree</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Experience & Education Ends */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
