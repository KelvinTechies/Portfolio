import React from "react";

const Portfolio = () => {
  return (
    <div className="page" id="portfolio">
      <div className="portfolio">
        {/* Page Title Starts */}
        <div className="title-section text-left text-sm-center">
          <h2>my <span>portfolio</span></h2>
          <span className="title-bg">works</span>
        </div>
        {/* Page Title Ends */}
        
        <div className="main-content text-center">
          <div id="grid-gallery" className="container grid-gallery">
            {/* Portfolio Grid Starts */}
            <div className="grid-wrap">
              <ul className="row grid gridlist">
                <li>
                  <figure>
                    <div style={{ width: '100%', paddingTop: '75%', position: 'relative', overflow: 'hidden', borderRadius: '5px' }}>
                      <iframe src="https://e-crime.vercel.app/" title="E-Crime Project" scrolling="no" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', border: 'none' }}></iframe>
                    </div>
                    <div><span>E-Crime Project</span></div>
                  </figure>
                </li>
                <li>
                  <figure>
                    <div style={{ width: '100%', paddingTop: '75%', position: 'relative', overflow: 'hidden', borderRadius: '5px' }}>
                      <iframe src="https://tkstore.vercel.app/" title="TKStore" scrolling="no" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', border: 'none' }}></iframe>
                    </div>
                    <div><span>TKStore</span></div>
                  </figure>
                </li>
                <li>
                  <figure>
                    <div style={{ width: '100%', paddingTop: '75%', position: 'relative', overflow: 'hidden', borderRadius: '5px' }}>
                      <iframe src="https://mysoundsglobal.com" title="MySoundsGlobal" scrolling="no" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', border: 'none' }}></iframe>
                    </div>
                    <div><span>MySoundsGlobal</span></div>
                  </figure>
                </li>
                <li>
                  <figure>
                    <div style={{ width: '100%', paddingTop: '75%', position: 'relative', overflow: 'hidden', borderRadius: '5px' }}>
                      <iframe src="https://macwealth.org/" title="Macwealth" scrolling="no" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', border: 'none' }}></iframe>
                    </div>
                    <div><span>Macwealth</span></div>
                  </figure>
                </li>
                <li>
                  <figure>
                    <div style={{ width: '100%', paddingTop: '75%', position: 'relative', overflow: 'hidden', borderRadius: '5px' }}>
                      <iframe src="https://bendesignstudio.com" title="Ben Design Studio" scrolling="no" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', border: 'none' }}></iframe>
                    </div>
                    <div><span>Ben Design Studio</span></div>
                  </figure>
                </li>
                <li>
                  <figure>
                    <div style={{ width: '100%', paddingTop: '75%', position: 'relative', overflow: 'hidden', borderRadius: '5px' }}>
                      <iframe src="https://theallroundchild.com.com" title="TARC" scrolling="no" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', border: 'none' }}></iframe>
                    </div>
                    <div><span>TARC</span></div>
                  </figure>
                </li>
              </ul>
            </div>
            {/* Portfolio Grid Ends */}
            
            {/* Portfolio Details Starts */}
            <div className="slideshow">
              <ul>
                <li>
                  <figure>
                    <figcaption>
                      <h3>E-Crime Project</h3>
                      <div className="row open-sans-font">
                        <div className="col-12 col-sm-6 mb-2">
                          <i className="fa fa-file-text-o pr-2"></i><span className="project-label">Project</span>: <span className="ft-wt-600 uppercase">Website</span>
                        </div>
                        <div className="col-12 col-sm-6 mb-2">
                          <i className="fa fa-external-link pr-2"></i><span className="project-label">Preview</span>: <span className="ft-wt-600 uppercase"><a href="https://e-crime.vercel.app/" target="_blank" rel="noreferrer">View Site</a></span>
                        </div>
                      </div>
                    </figcaption>
                    <div style={{ width: '100%', height: '60vh', marginTop: '20px', borderRadius: '10px', overflow: 'hidden' }}>
                      <iframe src="https://e-crime.vercel.app/" title="E-Crime Project" style={{ width: '100%', height: '100%', border: 'none' }}></iframe>
                    </div>
                  </figure>
                </li>
                <li>
                  <figure>
                    <figcaption>
                      <h3>TKStore</h3>
                      <div className="row open-sans-font">
                        <div className="col-12 col-sm-6 mb-2">
                          <i className="fa fa-file-text-o pr-2"></i><span className="project-label">Project</span>: <span className="ft-wt-600 uppercase">Website</span>
                        </div>
                        <div className="col-12 col-sm-6 mb-2">
                          <i className="fa fa-external-link pr-2"></i><span className="project-label">Preview</span>: <span className="ft-wt-600 uppercase"><a href="https://tkstore.vercel.app/" target="_blank" rel="noreferrer">View Site</a></span>
                        </div>
                      </div>
                    </figcaption>
                    <div style={{ width: '100%', height: '60vh', marginTop: '20px', borderRadius: '10px', overflow: 'hidden' }}>
                      <iframe src="https://tkstore.vercel.app/" title="TKStore" style={{ width: '100%', height: '100%', border: 'none' }}></iframe>
                    </div>
                  </figure>
                </li>
                <li>
                  <figure>
                    <figcaption>
                      <h3>MySoundsGlobal</h3>
                      <div className="row open-sans-font">
                        <div className="col-12 col-sm-6 mb-2">
                          <i className="fa fa-file-text-o pr-2"></i><span className="project-label">Project</span>: <span className="ft-wt-600 uppercase">Website</span>
                        </div>
                        <div className="col-12 col-sm-6 mb-2">
                          <i className="fa fa-external-link pr-2"></i><span className="project-label">Preview</span>: <span className="ft-wt-600 uppercase"><a href="https://mysoundsglobal.com" target="_blank" rel="noreferrer">View Site</a></span>
                        </div>
                      </div>
                    </figcaption>
                    <div style={{ width: '100%', height: '60vh', marginTop: '20px', borderRadius: '10px', overflow: 'hidden' }}>
                      <iframe src="https://mysoundsglobal.com" title="MySoundsGlobal" style={{ width: '100%', height: '100%', border: 'none' }}></iframe>
                    </div>
                  </figure>
                </li>
                <li>
                  <figure>
                    <figcaption>
                      <h3>Macwealth</h3>
                      <div className="row open-sans-font">
                        <div className="col-12 col-sm-6 mb-2">
                          <i className="fa fa-file-text-o pr-2"></i><span className="project-label">Project</span>: <span className="ft-wt-600 uppercase">Website</span>
                        </div>
                        <div className="col-12 col-sm-6 mb-2">
                          <i className="fa fa-external-link pr-2"></i><span className="project-label">Preview</span>: <span className="ft-wt-600 uppercase"><a href="https://macwealth.org/" target="_blank" rel="noreferrer">View Site</a></span>
                        </div>
                      </div>
                    </figcaption>
                    <div style={{ width: '100%', height: '60vh', marginTop: '20px', borderRadius: '10px', overflow: 'hidden' }}>
                      <iframe src="https://macwealth.org/" title="Macwealth" style={{ width: '100%', height: '100%', border: 'none' }}></iframe>
                    </div>
                  </figure>
                </li>
                <li>
                  <figure>
                    <figcaption>
                      <h3>Ben Design Studio</h3>
                      <div className="row open-sans-font">
                        <div className="col-12 col-sm-6 mb-2">
                          <i className="fa fa-file-text-o pr-2"></i><span className="project-label">Project</span>: <span className="ft-wt-600 uppercase">Website</span>
                        </div>
                        <div className="col-12 col-sm-6 mb-2">
                          <i className="fa fa-external-link pr-2"></i><span className="project-label">Preview</span>: <span className="ft-wt-600 uppercase"><a href="https://bendesignstudio.com" target="_blank" rel="noreferrer">View Site</a></span>
                        </div>
                      </div>
                    </figcaption>
                    <div style={{ width: '100%', height: '60vh', marginTop: '20px', borderRadius: '10px', overflow: 'hidden' }}>
                      <iframe src="https://bendesignstudio.com" title="Ben Design Studio" style={{ width: '100%', height: '100%', border: 'none' }}></iframe>
                    </div>
                  </figure>
                </li>
                <li>
                  <figure>
                    <figcaption>
                      <h3>TARC</h3>
                      <div className="row open-sans-font">
                        <div className="col-12 col-sm-6 mb-2">
                          <i className="fa fa-file-text-o pr-2"></i><span className="project-label">Project</span>: <span className="ft-wt-600 uppercase">Website</span>
                        </div>
                        <div className="col-12 col-sm-6 mb-2">
                          <i className="fa fa-external-link pr-2"></i><span className="project-label">Preview</span>: <span className="ft-wt-600 uppercase"><a href="https://theallroundchild.com" target="_blank" rel="noreferrer">View Site</a></span>
                        </div>
                      </div>
                    </figcaption>
                    <div style={{ width: '100%', height: '60vh', marginTop: '20px', borderRadius: '10px', overflow: 'hidden' }}>
                      <iframe src="https://theallroundchild.com" title="TARC" style={{ width: '100%', height: '100%', border: 'none' }}></iframe>
                    </div>
                  </figure>
                </li>
              </ul>
              {/* Portfolio Navigation Starts */}
              <nav>
                <span className="icon nav-prev">
                  <img src="/img/projects/navigation/left-arrow.png" alt="previous" />
                </span>
                <span className="icon nav-next">
                  <img src="/img/projects/navigation/right-arrow.png" alt="next" />
                </span>
                <span className="nav-close">
                  <img src="/img/projects/navigation/close-button.png" alt="close" />
                </span>
              </nav>
              {/* Portfolio Navigation Ends */}
            </div>
            {/* Portfolio Details Ends */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;