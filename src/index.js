import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import App from './components/App';
import Cadastro from './components/Cadastro';
import Login from './components/Login';
import Redefinir from './components/Redefinir';
import User from './components/User';
import UserRanking from './components/UserRanking';
import UserRankingId from './components/UserRankingId';
import {store, persistor} from './store.js';
import { PersistGate } from 'redux-persist/integration/react';
import 'bootstrap/dist/css/bootstrap.min.css';



ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route path="cadastro" element={<Cadastro />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="redefinir" element={<Redefinir />}></Route>
          <Route path="user" element={<User />}></Route>
          <Route path="user/ranking" element={<UserRanking />}></Route>
          <Route path="user/ranking/:id" element={<UserRankingId />}></Route>
          <Route path="user/jogos" element={<User />}></Route>
          <Route path="user/regras" element={<User />}></Route>
        </Routes>
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.querySelector('#root')
);


