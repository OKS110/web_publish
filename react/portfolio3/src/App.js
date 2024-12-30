

import About from './components/About.jsx';
import AppBody from './components/AppBody.jsx';
import Appheader from './components/Appheader.jsx';
import Arrow from './components/Arrow.jsx';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import Skills from './components/Skills.jsx';
import Testimonial from './components/Testimonial.jsx';
import Work from './components/Work.jsx';
import AppFooter from './components/AppFoot.jsx';
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

