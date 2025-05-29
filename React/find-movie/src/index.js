import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes} from "react-router";
import LoginPage from './components/login/LoginPage';
import SignIn from './components/registration/SignIn';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/' element={<App/>}/>
      <Route path='/registration' element={<SignIn/>}/>
    </Routes>
  </BrowserRouter>
);
