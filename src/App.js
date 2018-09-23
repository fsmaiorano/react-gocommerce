import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import './styles/global';
import './config/reactotron';

import Routes from './routes';
import Header from './components/Header';
import Categories from './components/Categories';

import store from './store';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Header />
        <Categories />
        <Routes />
      </div>
    </BrowserRouter>
  </Provider>
);

export default App;
