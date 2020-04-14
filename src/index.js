import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import 'bulma/css/bulma.css';
import './styles.scss';
import { carReducer } from './reducers/carReducer'
import { createStore } from 'redux';

const store = createStore(carReducer);

const rootElement = document.getElementById('root');
ReactDOM.render(<Provider store={store}><App /></Provider>, rootElement);
