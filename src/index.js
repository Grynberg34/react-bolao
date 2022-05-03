import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import App from './components/App';
import Cadastro from './components/Cadastro';
import Login from './components/Login';
import User from './components/User';
import store from './store.js';



ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="cadastro" element={<Cadastro />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="user" element={<User />}></Route>
      </Routes>
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
);


