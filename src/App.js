import React from 'react';
import { Provider } from 'react-redux';

import './styles/global';
import './config/reactotron';

import Main from './pages/main';
import store from './store';

const App = () => <Provider store={store}>{<Main />}</Provider>;

export default App;
