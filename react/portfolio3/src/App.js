

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
import { useEffect, useState } from 'react';

export default function App() {
  const [home, setHome] = useState([]);
  const [about, setAbout] = useState([]);
  const [skills, setSkills] = useState([]);
  const [work, setWork] = useState([]);
  const [testimonial, setTestimonial] = useState([]);




  useEffect(() => {
    fetch('data/portfolio.json')
    .then(data => data.json())
    .then((jsonData) => {
      return       setHome(jsonData.Home),
      setAbout(jsonData.About),
      setSkills(jsonData.Skills),
      setWork(jsonData.Work),
      setTestimonial(jsonData.Testimonial)

    })
    .catch(error => console.log(error))
  }, []);


  return (
    <>
  <Appheader>
    <Header></Header>
  </Appheader>
  
  <AppBody>
    <Home home={home}></Home>
    <About about={about}></About>
    <Skills skills={skills}></Skills>
    <Work work={work}></Work>
    <Testimonial testimonial={testimonial}></Testimonial>
    <Arrow></Arrow>
  </AppBody>

  <AppFooter>
    <Footer></Footer>
  </AppFooter>


    </>

  );
}

