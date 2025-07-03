import React, { useContext } from 'react'; 
import "./App.css";
import NavBar from "../src/Components/NavBar/NavBar";
import Profile from "../src/Components/Home/Profile";
import Services from "../src/Components/Services/Services";
import Experience from "../src/Components/Experience/Experience";
import Works from "../src/Components/Works/Works";
import Portfolio from "../src/Components/Portfolio/Portfolio";
import Contact from "../src/Components/Contact/Contact";
import Footer from "../src/Components/Footer/Footer";
// import { themeContext } from "./Context"; // Unused import
import { useEffect } from "react";
import { themeContext } from './Context';
// import   './assets/js/main.js'
function App() {
  // const theme = useContext(themeContext); // Unused variable
  // const darkMode = theme.state.darkMode; // Unused variable

// useEffect(() => {
//         // Load jQuery
//         const scriptJQuery = document.createElement('script');
//         scriptJQuery.src = '/assets/js/jquery.min.js';
//         scriptJQuery.async = true;

//         // Load Bootstrap Bundle after jQuery
//         const scriptBootstrap = document.createElement('script');
//         scriptBootstrap.src = '/assets/js/bootstrap.bundle.min.js'; // Adjust path as necessary
//         scriptBootstrap.async = true;

//         // Load WOW.js after jQuery
//         const scriptWOW = document.createElement('script');
//         scriptWOW.src = '/assets/js/wow.js'; // Adjust path as necessary
//         scriptWOW.async = true;

//         // Load main.js after all others
//         const scriptMain = document.createElement('script');
//         scriptMain.src = '/assets/js/main.js'; // Adjust path as necessary
//         scriptMain.async = true;

//         // Initialize WOW.js after loading
//         scriptWOW.onload = () => {
//             const wow = new window.WOW.WOW({
//                 live: false,
//             });
//             wow.init();
//         };

//         // Load scripts in order
//         scriptJQuery.onload = () => {
//             document.body.appendChild(scriptBootstrap);
//             scriptBootstrap.onload = () => {
//                 document.body.appendChild(scriptWOW);
//                 scriptWOW.onload = () => {
//                     document.body.appendChild(scriptMain);
//                 };
//             };
//         };

//         document.body.appendChild(scriptJQuery);

//         // Cleanup function
//         return () => {
//             // Function to remove script if it exists
//             const removeScript = (src) => {
//                 const script = document.querySelector(`script[src="${src}"]`);
//                 if (script) {
//                     document.body.removeChild(script);
//                 }
//             };

//             removeScript('/assets/js/jquery.min.js');
//             removeScript('/assets/js/bootstrap.bundle.min.js');
//             removeScript('/assets/js/wow.js');
//             removeScript('/assets/js/main.js');
//         };
//     }, []);
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  useEffect(() => {
    // Apply theme to document element
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
   <div className={`App ${darkMode ? 'dark' : 'light'}`}>
      <NavBar />
      <Profile />
      <Portfolio />
      {/* Uncomment as needed */}
      <Services />
      <Experience />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
