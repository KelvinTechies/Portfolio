import React, { useEffect } from 'react'; 
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Profile from "./Components/Home/Profile";
import Experience from "./Components/Experience/Experience";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";

function App() {
  useEffect(() => {
    const scripts = [
      "/js/imagesloaded.pkgd.min.js",
      "/js/masonry.pkgd.min.js",
      "/js/classie.js",
      "/js/main.js",
      "/js/cbpGridGallery.js",
      "/js/jquery.hoverdir.js",
      "/js/popper.min.js",
      "/js/bootstrap.js",
      "/js/menu.js",
      "/js/custom.js"
    ];

    const loadScriptsSequentially = async () => {
      for (const src of scripts) {
        await new Promise((resolve, reject) => {
          // Check if already loaded
          if (document.querySelector(`script[src="${src}"]`)) {
            resolve();
            return;
          }
          const script = document.createElement("script");
          script.src = src;
          script.async = false;
          script.onload = resolve;
          script.onerror = reject;
          document.body.appendChild(script);
        });
      }
    };

    loadScriptsSequentially();
  }, []);

  return (
   <>
      {/* PRELOADER */}
      <div id="preloader">
        <div className="line"></div>
      </div>

      <NavBar />

      <div className="pages">
        <Profile />
        <Experience />
        <Portfolio />
        <Contact />
      </div>
    </>
  );
}

export default App;
