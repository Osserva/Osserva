import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import App from './App';
import ErrorPage from './Error-Page';
//import './src/scss/App.scss';
import Login from './Login';
import Signup from './Signup';
import path from 'path';

//add logo to top of page

const Main: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<App />} /> */}
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/error' element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

const root = createRoot(document.getElementById('app'));

root.render(
  <React.StrictMode>
    
    <Main />
  </React.StrictMode>
);
