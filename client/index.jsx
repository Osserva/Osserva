import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import App from './App';
import ErrorPage from './Error-Page';
//import './src/scss/App.scss';
import Login from './Login';
import Signup from './Signup';
import { Provider } from 'react-redux';
import store from './src/redux/store/store';

const Main = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path='/login'
            element={<Login />}
            errorElement={<ErrorPage />}
          />
          <Route path='/' element={<App />} errorElement={<ErrorPage />} />
          <Route
            path='/signup'
            element={<Signup />}
            errorElement={<ErrorPage />}
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

const root = createRoot(document.getElementById('app'));

root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
