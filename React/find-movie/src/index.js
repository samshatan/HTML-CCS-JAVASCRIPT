import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes} from "react-router";
import LoginPage from './components/login/LoginPage';
import SignIn from './components/registration/SignIn';
import About from './components/about/About';
import CustomerSupport from './components/customerSupport/CustomerSupport';
// import blur_background from './blur_background.png';

const root = ReactDOM.createRoot(document.getElementById('root'));
//     const style = {
//     backgroundImage: `url(${blur_background})`,
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     width: '100%',
//     height: 'auto',
//   };
root.render(
  // <div style={style}>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/registration' element={<SignIn/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/customersupport' element ={<CustomerSupport/>}/>
    </Routes>
  </BrowserRouter>
  // </div>
);
