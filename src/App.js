
import './App.css';
import NavBar from '../src/Components/NavBar/NavBar'
import Profile from '../src/Components/Home/Profile'
import Services from '../src/Components/Services/Services'
import Experience from '../src/Components/Experience/Experience'
import Works from '../src/Components/Works/Works'
import Portfolio from '../src/Components/Portfolio/Portfolio'
import Contact from '../src/Components/Contact/Contact'
import Footer from '../src/Components/Footer/Footer'
import {themeContext} from './Context'
import {useContext} from 'react'
function App() {

  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode
  return (
    <div className="App" style={{
      background:darkMode?'black' :'',
      color:darkMode?'white':''
    }}>
      <NavBar />
      <Profile />
      <Services />
      <Experience />
      <Works />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
