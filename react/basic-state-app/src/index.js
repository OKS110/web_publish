import React from 'react';
import ReactDOM from 'react-dom/client';
import AppBestSeller from './components/yes24/AppBestSeller';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import AppAirbnb from './components/airbnb/AppAirbnb';
// import './Airbnb.css';
// import Avatar from './components/airbnb/avatar/Avater.jsx';
// import AppBestSeller from './components/yes24/AppBestSeller.jsx';
// import AppOlive from './components/olive/AppOlive.jsx';
// import AppAladin from './components/aladin/AppAladin.jsx';
// import AppAladin2 from './components/aladin2/AppAladin2.jsx';
// import AppForm from './components/form/AppForm.jsx';
// import Signup from './components/form/Signup.jsx';
// import Signup from './components/form/Signup.jsx';
// import CgvLoginForm from './components/form/CgvLoginForm.jsx';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <AppAirbnb></AppAirbnb> */}
    {/* <Avatar></Avatar> */}
    {/* <AppCounter></AppCounter> */}
    {/* <AppOlive></AppOlive> */}
    {/* <AppAladin></AppAladin> */}
    {/* <AppAladin2></AppAladin2> */}
    {/* <AppForm></AppForm> */}
    <AppBestSeller></AppBestSeller>
  {/* <CgvLoginForm></CgvLoginForm> */}
  {/* <Signup></Signup> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
