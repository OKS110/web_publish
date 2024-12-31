

import About from './components/AppBody/About.jsx';
import AppBody from './components/AppBody/AppBody.jsx';
import Appheader from './components/AppHeader/Appheader.jsx';
import Arrow from './components/AppBody/Arrow.jsx';
import Footer from './components/AppFooter/Footer.jsx';
import Header from './components/AppHeader/Header.jsx';
import Home from './components/AppBody/Home.jsx';
import Skills from './components/AppBody/Skills.jsx';
import Testimonial from './components/AppBody/Testimonial.jsx';
import Work from './components/AppBody/Work.jsx';
import AppFooter from './components/AppFooter/AppFoot.jsx';
import './css/style.css';

export default function App() {
  return (
    <>
  <Appheader>
    <Header></Header>
  </Appheader>
  
  <AppBody>
    <Home></Home>
    <About></About>
    <Skills></Skills>
    <Work></Work>
    <Testimonial></Testimonial>
    <Arrow></Arrow>
  </AppBody>

  <AppFooter>
    <Footer></Footer>
  </AppFooter>


    </>

  );
}

