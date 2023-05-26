import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
// import Redux from 'redux';
import { createStore } from 'redux';
import { Provider } from 'react-redux';



const defaultState = {
  cash: 0
}


function reducer(state = defaultState, action) {
  switch (action.type) {
    case "ADD_CASH":
      return { ...state, cash: state.cash + action.payload };

    case "MINUS_CASH":
      return { ...state, cash: 0 };
      // return { ...state, cash: state.cash - action.payload };

    default:
      return state;
  }
}

const store = createStore(reducer);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>


);

